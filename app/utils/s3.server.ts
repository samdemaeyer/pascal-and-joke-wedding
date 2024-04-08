import type { UploadHandler } from '@remix-run/node';
import { PassThrough } from 'stream';
import { writeAsyncIterableToWritable } from '@remix-run/node';
import AWS from 'aws-sdk';

const { STORAGE_ACCESS_KEY, STORAGE_SECRET, STORAGE_REGION, STORAGE_BUCKET } = process.env;

if (!(STORAGE_ACCESS_KEY && STORAGE_SECRET && STORAGE_REGION && STORAGE_BUCKET)) {
  throw new Error(`Storage is missing required configuration.`);
}

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: STORAGE_ACCESS_KEY,
    secretAccessKey: STORAGE_SECRET,
  },
  region: STORAGE_REGION,
});

export const listObjectsInBucket = async () => {
  const bucketParams = {
    Bucket: STORAGE_BUCKET,
  };

  const data = await s3.listObjects(bucketParams).promise();

  return data;
};

const uploadStream = ({ Key }: Pick<AWS.S3.Types.PutObjectRequest, 'Key'>) => {
  const pass = new PassThrough();
  return {
    writeStream: pass,
    promise: s3.upload({ Bucket: STORAGE_BUCKET, Key, Body: pass }).promise(),
  };
};

async function uploadStreamToS3(data: AsyncIterable<Uint8Array>, filename: string) {
  const stream = uploadStream({ Key: `${Date.now()}-${filename.replace(/[^\w.]|_/g, '_')}` });
  await writeAsyncIterableToWritable(data, stream.writeStream);
  const file = await stream.promise;
  return file.Location;
}

export const s3UploadHandler: UploadHandler = async ({ name, filename, data }) => {
  if (name !== 'img') {
    return undefined;
  }
  const uploadedFileLocation = await uploadStreamToS3(data, filename!);
  return uploadedFileLocation;
};

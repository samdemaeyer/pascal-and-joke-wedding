import { useLoaderData } from '@remix-run/react';
import { ListObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import { Photo } from 'components/PhotoItem/PhotoItem';
import { Gallery } from 'pages/Gallery/Gallery';
import { ENV } from 'components/UploadButton/UploadButton';

export const loader = async () => {
  const client = new S3Client({
    credentials: {
      accessKeyId: process.env.STORAGE_ACCESS_KEY || '',
      secretAccessKey: process.env.STORAGE_SECRET || '',
    },
    region: process.env.STORAGE_REGION,
  });
  const command = new ListObjectsCommand({ Bucket: process.env.STORAGE_BUCKET });
  const data = await client.send(command);
  data.Contents?.sort((a, b) => new Date(b.LastModified || '').valueOf() - new Date(a.LastModified || '').valueOf());

  return {
    data: data.Contents?.map((c) => ({ src: `https://wedding-joke.s3.eu-west-3.amazonaws.com/${c.Key}` })),
    ENV: {
      STORAGE_ACCESS_KEY: process.env.STORAGE_ACCESS_KEY || '',
      STORAGE_SECRET: process.env.STORAGE_SECRET || '',
      STORAGE_REGION: process.env.STORAGE_REGION || '',
      STORAGE_BUCKET: process.env.STORAGE_BUCKET || '',
    },
  };
};

export default function Index() {
  const { data, ENV } = useLoaderData<{ data: Photo[]; ENV: ENV }>();
  return <Gallery data={data} env={ENV} />;
}

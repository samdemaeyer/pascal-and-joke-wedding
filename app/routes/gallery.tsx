import { useLoaderData } from '@remix-run/react';
import { ListObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import { Photo } from 'components/PhotoItem/PhotoItem';
import { Gallery } from 'pages/Gallary/Gallery';

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
  return data.Contents?.map((c) => ({ src: `https://wedding-joke.s3.eu-west-3.amazonaws.com/${c.Key}` }));
};

export default function Index() {
  const data = useLoaderData<Photo[]>();

  return <Gallery data={data} />;
}

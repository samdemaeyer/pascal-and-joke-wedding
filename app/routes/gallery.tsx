import type { MetaFunction } from '@remix-run/node';
import { Gallery } from '../../pages/Gallery';
import { useLoaderData } from '@remix-run/react';
import { listObjectsInBucket } from '~/utils/s3.server';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async () => {
  const data = await listObjectsInBucket();
  const allData = data.Contents?.map((c) => `https://wedding-joke.s3.eu-west-3.amazonaws.com/${c.Key}`);
  return allData ? Array.from({ length: Math.ceil(allData.length / 5) }, () => allData.splice(0, 5)) : null;
};

export default function Index() {
  const data = useLoaderData<string[][]>();

  return <Gallery data={data} />;
}

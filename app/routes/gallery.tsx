import type { MetaFunction } from '@remix-run/node';
import { Gallery } from '../../pages/Gallery';
import { useLoaderData } from '@remix-run/react';
import { listObjectsInBucket } from '~/utils/s3.server';
import { Photo } from 'components/PhotoItem';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = async () => {
  const data = await listObjectsInBucket();
  return data.Contents?.map((c) => ({ src: `https://wedding-joke.s3.eu-west-3.amazonaws.com/${c.Key}` }));
};

export default function Index() {
  const data = useLoaderData<Photo[]>();

  return <Gallery data={data} />;
}

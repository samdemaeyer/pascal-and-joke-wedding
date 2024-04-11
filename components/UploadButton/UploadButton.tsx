import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { useRevalidator } from '@remix-run/react';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';
import { useState } from 'react';

export type ENV = {
  STORAGE_ACCESS_KEY: string;
  STORAGE_SECRET: string;
  STORAGE_REGION: string;
  STORAGE_BUCKET: string;
};

export const UploadButton = ({ env }: { env: ENV }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const revalidator = useRevalidator();

  const client = new S3Client({
    credentials: {
      accessKeyId: env.STORAGE_ACCESS_KEY,
      secretAccessKey: env.STORAGE_SECRET,
    },
    region: env.STORAGE_REGION,
  });
  return (
    <form className="pt-2">
      <div style={{ display: isSubmitting ? 'none' : 'block' }}>
        <label htmlFor="img-field" className="btn">
          Select images to upload
        </label>
        <input
          id="img-field"
          type="file"
          name="img"
          accept="image/*"
          style={{ display: 'none' }}
          multiple
          onChange={(event) => {
            const uploadFile = async () => {
              setIsSubmitting(true);
              const commands = [...(event.target.files || [])]?.map(
                (file) =>
                  new PutObjectCommand({
                    Bucket: env.STORAGE_BUCKET,
                    Key: `${Date.now()}-${file?.name.replace(/[^\w.]|_/g, '_')}`,
                    Body: file,
                  }),
              );
              await Promise.all(commands.map((command) => client.send(command)));
              revalidator.revalidate();
              setIsSubmitting(false);
            };
            uploadFile();
          }}
        />
      </div>
      {isSubmitting && (
        <div>
          <button className="btn">
            <div className="uploading-btn">
              <LoadingSpinner />
              Uploading
              <LoadingSpinner />
            </div>
          </button>
        </div>
      )}
    </form>
  );
};

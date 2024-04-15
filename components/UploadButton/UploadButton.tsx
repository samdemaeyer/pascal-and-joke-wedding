import { CSSProperties, ChangeEvent, useState } from 'react';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { useRevalidator } from '@remix-run/react';
import './UploadButton.css';

export type ENV = {
  STORAGE_ACCESS_KEY: string;
  STORAGE_SECRET: string;
  STORAGE_REGION: string;
  STORAGE_BUCKET: string;
};

export const UploadButton = ({ env }: { env: ENV }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const revalidator = useRevalidator();

  const client = new S3Client({
    credentials: {
      accessKeyId: env.STORAGE_ACCESS_KEY,
      secretAccessKey: env.STORAGE_SECRET,
    },
    region: env.STORAGE_REGION,
  });

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true);
    const commands = [...(event.target.files || [])]?.map(
      (file) =>
        new PutObjectCommand({
          Bucket: env.STORAGE_BUCKET,
          Key: `${Date.now()}-${file?.name.replace(/[^\w.]|_/g, '_')}`,
          Body: file,
        }),
    );
    await Promise.all(
      commands.map((command) =>
        client.send(command).then(() => setProgressPercentage((prev) => Math.round(prev + 100 / commands.length))),
      ),
    );
    setProgressPercentage(100);
    revalidator.revalidate();
    setIsUploaded(true);
    setTimeout(() => {
      setIsUploaded(false);
      setIsUploading(false);
      setProgressPercentage(0);
    }, 3000);
  };

  return (
    <form className="pt-2">
      <div style={{ display: isUploading ? 'none' : 'block' }}>
        <label htmlFor="img-field" className="btn">
          <i className="icon-cloud-upload" /> Selecteer you foto&apos;s
        </label>
        <input
          id="img-field"
          type="file"
          name="img"
          accept="image/*"
          style={{ display: 'none' }}
          multiple
          onChange={uploadFile}
        />
      </div>
      {isUploading && (
        <div>
          <button
            className="btn uploading-percentage"
            style={{ '--uploading-percentage': `${progressPercentage}%` } as CSSProperties}
          >
            <div className="uploading-btn">
              {isUploaded ? (
                <>
                  <i className="icon-check" /> Upload compleet
                </>
              ) : (
                <>
                  <i className="icon-cloud-upload" />
                  Uploading... {progressPercentage}%
                </>
              )}
            </div>
          </button>
        </div>
      )}
    </form>
  );
};

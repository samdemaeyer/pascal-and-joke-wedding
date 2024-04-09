import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';
import { useState } from 'react';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { json, useLoaderData, useNavigate } from '@remix-run/react';

export const loader = async () => {
  return json({
    ENV: {
      STORAGE_ACCESS_KEY: process.env.STORAGE_ACCESS_KEY || '',
      STORAGE_SECRET: process.env.STORAGE_SECRET || '',
      STORAGE_REGION: process.env.STORAGE_REGION || '',
      STORAGE_BUCKET: process.env.STORAGE_BUCKET || '',
    },
  });
};

export default function Index() {
  const { ENV } = useLoaderData<typeof loader>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const client = new S3Client({
    credentials: {
      accessKeyId: ENV.STORAGE_ACCESS_KEY,
      secretAccessKey: ENV.STORAGE_SECRET,
    },
    region: ENV.STORAGE_REGION,
  });

  return (
    <header
      id="fh5co-header"
      className="fh5co-cover fh5co-cover-sm"
      role="banner"
      style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}
    >
      <div className="overlay"></div>
      <div className="fh5co-container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t">
              <div className="display-tc animate-box" data-animate-effect="fadeIn">
                <h1>Upload</h1>
                <form className="pt-2">
                  <div style={{ display: isSubmitting ? 'none' : 'block' }}>
                    <label htmlFor="img-field" className="btn">
                      Select images to upload
                    </label>
                    <input
                      id="img-field"
                      type="file"
                      name="img"
                      accept="image/*,video/*"
                      style={{ display: 'none' }}
                      multiple
                      onChange={(event) => {
                        const uploadFile = async () => {
                          setIsSubmitting(true);
                          const commands = [...(event.target.files || [])]?.map(
                            (file) =>
                              new PutObjectCommand({
                                Bucket: ENV.STORAGE_BUCKET,
                                Key: `${Date.now()}-${file?.name.replace(/[^\w.]|_/g, '_')}`,
                                Body: file,
                              }),
                          );
                          await Promise.all(commands.map((command) => client.send(command)));
                          navigate('/gallery');
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import type { ActionFunctionArgs, UploadHandler } from '@remix-run/node';
import {
  redirect,
  json,
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from '@remix-run/node';
import { useFetcher } from '@remix-run/react';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';
import { useState } from 'react';
import { s3UploadHandler } from '~/utils/s3.server';

type ActionData = {
  errorMsg?: string;
  imgSrc?: string;
  imgDesc?: string;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const uploadHandler: UploadHandler = composeUploadHandlers(s3UploadHandler, createMemoryUploadHandler());
  const formData = await parseMultipartFormData(request, uploadHandler);
  const imgSrc = formData.get('img');
  if (!imgSrc) {
    return json({
      errorMsg: 'Something went wrong while uploading',
    });
  }
  return redirect('/gallery');
};

export default function Index() {
  const fetcher = useFetcher<ActionData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
                <fetcher.Form method="post" encType="multipart/form-data" className="pt-2">
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
                        setIsSubmitting(true);
                        event.target.form?.submit();
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
                </fetcher.Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

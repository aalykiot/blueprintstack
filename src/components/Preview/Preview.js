import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import { BlueprintsContext } from 'src/context/blueprints';
import { FillSpinner } from 'react-spinners-kit';

import PreviewFrame from 'src/components/PreviewFrame';
import PreviewDownloadButton from 'src/components/PreviewDownloadButton';

const CSS = {
  default: 'empty-preview flex h-full',
  loading: 'empty-preview h-full flex flex-col items-center justify-center',
  error: 'h-full bg-red-600 text-white p-2 font-semibold',
};

const API_ENDPOINT =
  process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:8080';

const fetcher = blueprint => {
  return fetch(`${API_ENDPOINT}/api/preview`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      blueprint: blueprint?.code,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => data?.html)
    .catch(err => {
      console.log('ERROR => ', err);
      throw err;
    });
};

const Preview = ({ customClassName }) => {
  const { blueprint } = useContext(BlueprintsContext);
  const { isLoading, error, data, refetch } = useQuery(
    blueprint?.id,
    () => fetcher(blueprint),
    { enabled: !!blueprint }
  );

  useEffect(() => {
    if (blueprint) {
      refetch();
    }
  }, [blueprint]);

  return (
    <div className={customClassName}>
      {!blueprint ? (
        <div className={CSS.default} />
      ) : (
        <>
          {error && (
            <div className={CSS.error}>
              <p>{error.message}</p>
            </div>
          )}
          {!error && isLoading && (
            <div className={CSS.loading}>
              <FillSpinner size={50} color="#333642" />
            </div>
          )}
          {!error && data && (
            <>
              <PreviewFrame html={data} />
              <PreviewDownloadButton html={data} name={blueprint?.name} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Preview;

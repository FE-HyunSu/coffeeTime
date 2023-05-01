import React, { useState, useEffect } from 'react';
import Loading from '@views/@common/Loading';

const Intro = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div>intro</div>
        </>
      )}
    </>
  );
};

export default Intro;

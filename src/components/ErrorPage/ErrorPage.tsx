import React from 'react';

import DefaultJpeg from './defaultImg.jpeg';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center absolute inset-0">
      <h1 className="mb-5 font-bold">Something go wrong, reload please...</h1>
      <img
        src={DefaultJpeg}
        alt="error"
        className="w-96 md:w-[500px] rounded-md"
      />
    </div>
  );
};

export default ErrorPage;

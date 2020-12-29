import React from 'react';

type props_errorBoundary = {
  error: boolean
}

const ErrorBoundary: React.FC<props_errorBoundary> = ({ error, children }) => {
  if (!error) {
    return <>{ children }</>
  }

  return <></>;
}

export { ErrorBoundary }
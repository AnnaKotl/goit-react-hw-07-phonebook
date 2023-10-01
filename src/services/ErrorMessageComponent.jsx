import React from 'react';

export const ErrorMessageComponent = ({ error }) => {
  if (!error) {
    return null;
  }

  return <div className="error">{error}</div>;
};
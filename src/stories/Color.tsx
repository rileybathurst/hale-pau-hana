// this is the Name.tsx file
import React from 'react';

interface ColorProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Color = ({
  primary = false
}: ColorProps) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <>
      label
    </>
  );
};

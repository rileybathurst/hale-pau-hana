// this is the Name.tsx file
import React from 'react';

interface ColorCardTypes {
  color: string;
  variables: number[];
}

function ColorCard({ color, variables }: ColorCardTypes) {
  // console.log('variables', variables);

  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '1rem',
      }}
    >
      {variables.map((variable) => (
        <div
          key={variable}
          className={`color-card ${color}-${variable}`} >
          {color}-{variable}
          <div
            style={{
              height: '100px',
              width: '100px',
              backgroundColor: `var(--${color}-${variable})`,
            }}
          >
            {/* stay gold */}
          </div>

        </div>
      ))}
    </section>
  );
}

interface ColorProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Color = ({
  primary = false,
  ...props
}: ColorProps) => {

  return (
    <main
      {...props}
    >
      <ColorCard color="mango" variables={[100, 200, 300, 400]} />
      <ColorCard color="palm" variables={[100, 200, 300, 400]} />
    </main>
  );
};

import React from 'react';

type PokeballProps = {
  primaryFill: string;
  secondaryFill: string;
  height?: string;
  width?: string;
  className?: string;
};

const Pokeball = ({
  primaryFill,
  secondaryFill,
  height = '200px',
  width = '200px',
  className = '',
}: PokeballProps) => {
  return (
    <div style={{ height: height, width: width }} className={className}>
      <svg
        // id='eWqtvFPMihO1'
        // xmlns='http://www.w3.org/2000/svg'
        // xmlns:xlink='http://www.w3.org/1999/xlink'
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <ellipse
          rx="81.414341"
          ry="77.260549"
          transform="matrix(1.581628 0 0 1.548401 150 158.844449)"
          fill={primaryFill}
          strokeWidth="0"
        />
        <ellipse
          rx="40.707171"
          ry="39.876412"
          transform="matrix(1.581628 0 0 1.548401 150 158.844449)"
          fill={secondaryFill}
          strokeWidth="0"
        />
        <ellipse
          rx="24.091999"
          ry="24.507378"
          transform="matrix(1.581628 0 0 1.548401 150 158.844449)"
          fill={primaryFill}
          strokeWidth="0"
        />
        <rect
          width="235.10468"
          height="29.907309"
          rx="0"
          ry="0"
          transform="matrix(.297291 0 0 0.946233 20.290955 144.694808)"
          fill={secondaryFill}
          strokeWidth="0"
        />
        <rect
          width="235.10468"
          height="29.907309"
          rx="0"
          ry="0"
          transform="matrix(.297291 0 0 0.946233 209.81454 144.694808)"
          fill={secondaryFill}
          strokeWidth="0"
        />
      </svg>
    </div>
  );
};

export default Pokeball;

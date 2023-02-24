import React from 'react';

type ProgressBarProps = {
  progress: number;
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="flex flex-row items-center">
      <p className="text-md font-semibold text-white pr-2">{progress}</p>
      <div className="w-full rounded-full h-1.5 bg-default-secondary">
        <div
          className="bg-grass-secondary h-1.5 rounded-full m-0"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

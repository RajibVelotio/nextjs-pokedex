import React from 'react';
import Image from 'next/image';

type TypeChipProps = {
  type: string;
};

const TypeChip = ({ type }: TypeChipProps) => {
  return (
    <div className="flex flex-row px-3 rounded-3xl border bg-white gap-3 items-center">
      <Image
        className="h-5 w-5"
        src={`/images/${type}.webp`}
        alt={type}
        width={20}
        height={20}
      />
      <span className="text-lg text-default-primary">{type.capitalize()}</span>
    </div>
  );
};

export default TypeChip;

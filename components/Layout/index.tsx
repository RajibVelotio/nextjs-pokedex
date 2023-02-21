import React from 'react';

type LayoutProps = {
  title?: string;
  children?: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <header className="pt-4">
        <h1 className="text-center 3xl">{title || 'Pokedex'}</h1>
      </header>
      <main>{children}</main>
    </>
  );
}

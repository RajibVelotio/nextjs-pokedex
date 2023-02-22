import React from 'react';

type LayoutProps = {
  title?: string;
  children?: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="bg-default-primary">
      <header className="pt-4">
        <h1 className="text-center 3xl text-white">{title || 'Pokedex'}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

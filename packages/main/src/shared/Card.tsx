import React from 'react';

interface CardProps {
  icon: string;
  title: string;
  colour: string;
}

export default function Card({
  icon,
  title,
  colour,
  children,
}: React.PropsWithChildren<CardProps>) {
  return <div className="bg-white">
    <div className="border-b-4 p-2" style={{ borderColor: colour }}><span
      className="w-6 h-6 mr-1 bg-contain bg-center inline-block"
      style={{ backgroundImage: `url(${icon})` }}
    ></span><h1 className="text-2xl inline">{title}</h1></div>
    <div className="p-2">
      {children}
    </div>
  </div>
}

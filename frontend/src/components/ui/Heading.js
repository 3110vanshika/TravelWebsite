import React from 'react';

export default function Heading({ title, level, className }) {
  const Tag = `h${level || 1}`;
  return (
    <Tag className={className}>{title}</Tag>
  );
}
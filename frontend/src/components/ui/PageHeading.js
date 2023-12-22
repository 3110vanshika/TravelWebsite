import React from 'react'

export default function PageHeading({title, className, level}) {
  const Tag = `h${level || 1}`;
  return (
    <Tag className={className}>
       {title}
    </Tag>
  )
}

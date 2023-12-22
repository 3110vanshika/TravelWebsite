import React from 'react'
import { Button } from '@mui/material'

export default function ActionButton({ label, className }) {
  return (
    <Button className={className}>
      {label}
    </Button>
  )
}

import React from 'react'
import { Typography } from '@mui/joy'

export default function MyText({ text }: { text: string }) {
  const white = '#F2F1F7'

  return (
    <Typography
      className='fontJosefin'
      textColor={white}
      fontSize='10px'
      textAlign='center'
    >
      {text}
    </Typography>
  )
}

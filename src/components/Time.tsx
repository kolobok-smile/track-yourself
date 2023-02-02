import React from 'react'
import { zeroBefore } from '../utils/utils'
import { TimeObject } from '../models/common'
import { Typography } from '@mui/material';

type Props = {
  time: TimeObject;
}

function Time({ time }: Props) {
  return (
    // think to use <time></time> element
    <Typography variant="h1" component="div">
      {time.h ? zeroBefore(time.h) + ':' : null}
      {time.m ? zeroBefore(time.m) + ':' : null}
      {zeroBefore(time.s)}
    </Typography>
  )
}

export default Time
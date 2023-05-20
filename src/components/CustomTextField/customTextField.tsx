import { Box, TextField } from '@mui/material';
import React from 'react';

export const CustomTextField = (props: any) => {
  return (
    <Box>
      <TextField
        {...props}
      />
    </Box>
  )
};
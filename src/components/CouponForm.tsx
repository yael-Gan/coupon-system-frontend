// src/components/CouponForm.tsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Box } from '@mui/material';

interface Props {
  initialData?: { name: string; code: string; expiry: string };
  onSubmit: (data: { name: string; code: string; expiry: string }) => void;
}

const CouponForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [expiry, setExpiry] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setCode(initialData.code);
      setExpiry(initialData.expiry);
    }
  }, [initialData]);

  return (
    <Paper sx={{ p: 3 }}>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="שם הקופון" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="קוד" value={code} onChange={e => setCode(e.target.value)} />
        <TextField type="date" label="תוקף" value={expiry} onChange={e => setExpiry(e.target.value)} InputLabelProps={{ shrink: true }} />
        <Button variant="contained" color="primary" onClick={() => onSubmit({ name, code, expiry })}>
          שמור קופון
        </Button>
      </Box>
    </Paper>
  );
};

export default CouponForm;

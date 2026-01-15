// src/components/CouponTable.tsx
import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, TextField, TablePagination
} from '@mui/material';

interface Coupon {
  id: number;
  name: string;
  code: string;
  expiry: string;
}

interface Props {
  coupons: Coupon[];
  onEdit: (coupon: Coupon) => void;
  onDelete: (id: number) => void;
}

const CouponTable: React.FC<Props> = ({ coupons, onEdit, onDelete }) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const filtered = coupons.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        label="חיפוש קופונים"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>שם הקופון</TableCell>
              <TableCell>קוד</TableCell>
              <TableCell>תוקף</TableCell>
              <TableCell>פעולות</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(coupon => (
              <TableRow key={coupon.id}>
                <TableCell>{coupon.name}</TableCell>
                <TableCell>{coupon.code}</TableCell>
                <TableCell>{coupon.expiry}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" sx={{ mr: 1 }} onClick={() => onEdit(coupon)}>עריכה</Button>
                  <Button variant="outlined" color="error" onClick={() => onDelete(coupon.id)}>מחק</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filtered.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
      />
    </Paper>
  );
};

export default CouponTable;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/CouponTable.tsx
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, TablePagination } from '@mui/material';
var CouponTable = function (_a) {
    var coupons = _a.coupons, onEdit = _a.onEdit, onDelete = _a.onDelete;
    var _b = useState(''), search = _b[0], setSearch = _b[1];
    var _c = useState(0), page = _c[0], setPage = _c[1];
    var rowsPerPage = 5;
    var filtered = coupons.filter(function (c) {
        return c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.code.toLowerCase().includes(search.toLowerCase());
    });
    return (_jsxs(Paper, { sx: { p: 2 }, children: [_jsx(TextField, { label: "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E7\u05D5\u05E4\u05D5\u05E0\u05D9\u05DD", variant: "outlined", fullWidth: true, sx: { mb: 2 }, value: search, onChange: function (e) { return setSearch(e.target.value); } }), _jsx(TableContainer, { children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "\u05E9\u05DD \u05D4\u05E7\u05D5\u05E4\u05D5\u05DF" }), _jsx(TableCell, { children: "\u05E7\u05D5\u05D3" }), _jsx(TableCell, { children: "\u05EA\u05D5\u05E7\u05E3" }), _jsx(TableCell, { children: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA" })] }) }), _jsx(TableBody, { children: filtered.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(function (coupon) { return (_jsxs(TableRow, { children: [_jsx(TableCell, { children: coupon.name }), _jsx(TableCell, { children: coupon.code }), _jsx(TableCell, { children: coupon.expiry }), _jsxs(TableCell, { children: [_jsx(Button, { variant: "contained", color: "secondary", sx: { mr: 1 }, onClick: function () { return onEdit(coupon); }, children: "\u05E2\u05E8\u05D9\u05DB\u05D4" }), _jsx(Button, { variant: "outlined", color: "error", onClick: function () { return onDelete(coupon.id); }, children: "\u05DE\u05D7\u05E7" })] })] }, coupon.id)); }) })] }) }), _jsx(TablePagination, { component: "div", count: filtered.length, page: page, onPageChange: function (_, newPage) { return setPage(newPage); }, rowsPerPage: rowsPerPage, rowsPerPageOptions: [rowsPerPage] })] }));
};
export default CouponTable;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/CouponForm.tsx
import { useState, useEffect } from 'react';
import { TextField, Button, Paper, Box } from '@mui/material';
var CouponForm = function (_a) {
    var initialData = _a.initialData, onSubmit = _a.onSubmit;
    var _b = useState(''), name = _b[0], setName = _b[1];
    var _c = useState(''), code = _c[0], setCode = _c[1];
    var _d = useState(''), expiry = _d[0], setExpiry = _d[1];
    useEffect(function () {
        if (initialData) {
            setName(initialData.name);
            setCode(initialData.code);
            setExpiry(initialData.expiry);
        }
    }, [initialData]);
    return (_jsx(Paper, { sx: { p: 3 }, children: _jsxs(Box, { component: "form", sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [_jsx(TextField, { label: "\u05E9\u05DD \u05D4\u05E7\u05D5\u05E4\u05D5\u05DF", value: name, onChange: function (e) { return setName(e.target.value); } }), _jsx(TextField, { label: "\u05E7\u05D5\u05D3", value: code, onChange: function (e) { return setCode(e.target.value); } }), _jsx(TextField, { type: "date", label: "\u05EA\u05D5\u05E7\u05E3", value: expiry, onChange: function (e) { return setExpiry(e.target.value); }, InputLabelProps: { shrink: true } }), _jsx(Button, { variant: "contained", color: "primary", onClick: function () { return onSubmit({ name: name, code: code, expiry: expiry }); }, children: "\u05E9\u05DE\u05D5\u05E8 \u05E7\u05D5\u05E4\u05D5\u05DF" })] }) }));
};
export default CouponForm;

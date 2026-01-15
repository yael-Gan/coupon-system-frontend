var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { deleteCustomer, getAllCustomers } from "../api/customerApi";
export var Users = function () {
    var _a = useState([]), customers = _a[0], setCustomers = _a[1];
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    useEffect(function () {
        fetchCustomers();
    }, []);
    var fetchCustomers = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAllCustomers()];
                case 1:
                    data = _a.sent();
                    setCustomers(data);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!window.confirm("בטוחה שאת רוצה למחוק?")) return [3 /*break*/, 2];
                    return [4 /*yield*/, deleteCustomer(id)];
                case 1:
                    _a.sent();
                    setCustomers(customers.filter(function (c) { return c.id !== id; }));
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    if (loading)
        return _jsx("div", { className: "text-center mt-10", children: "\u05D8\u05D5\u05E2\u05DF..." });
    return (_jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA" }), _jsxs("table", { className: "min-w-full bg-white rounded-lg shadow-lg", children: [_jsx("thead", { className: "bg-green-400 text-white", children: _jsxs("tr", { children: [_jsx("th", { className: "py-2 px-4", children: "\u05E9\u05DD" }), _jsx("th", { className: "py-2 px-4", children: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }), _jsx("th", { className: "py-2 px-4", children: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA" })] }) }), _jsx("tbody", { children: customers.map(function (c) { return (_jsxs("tr", { className: "border-b hover:bg-green-50 transition-all", children: [_jsx("td", { className: "py-2 px-4", children: c.name }), _jsx("td", { className: "py-2 px-4", children: c.email }), _jsxs("td", { className: "py-2 px-4 space-x-2", children: [_jsx("button", { className: "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition", children: "\u05E2\u05E8\u05D5\u05DA" }), _jsx("button", { className: "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition", onClick: function () { return handleDelete(c.id); }, children: "\u05DE\u05D7\u05E7" })] })] }, c.id)); }) })] })] }));
};

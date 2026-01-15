import { jsx as _jsx } from "react/jsx-runtime";
var LoadingSpinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'md' : _b, _c = _a.color, color = _c === void 0 ? 'yellow-500' : _c;
    var sizeClasses = {
        sm: 'h-6 w-6',
        md: 'h-12 w-12',
        lg: 'h-16 w-16',
    };
    return (_jsx("div", { className: "flex justify-center items-center min-h-screen", children: _jsx("div", { className: "animate-spin rounded-full border-t-2 border-b-2 border-".concat(color, " ").concat(sizeClasses[size]), role: "status", children: _jsx("span", { className: "sr-only", children: "\u05D8\u05D5\u05E2\u05DF..." }) }) }));
};
export default LoadingSpinner;

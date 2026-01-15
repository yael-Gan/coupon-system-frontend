import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Coupons from "./pages/Coupons";
import AddCoupon from "./pages/AddCoupon";
import Help from "./pages/Help";
import MyCoupons from "./pages/MyCoupons";
import Home from "./pages/Home";
// Protected Route Component
var ProtectedRoute = function (_a) {
    var children = _a.children;
    var _b = useAuth(), isAuthenticated = _b.isAuthenticated, loading = _b.loading;
    var location = useLocation();
    if (loading) {
        return _jsx(LoadingSpinner, { size: "lg" });
    }
    if (!isAuthenticated) {
        // Redirect them to the /login page, but save the current location they were trying to go to
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    return children;
};
// Layout component for pages with header and footer
var Layout = function (_a) {
    var children = _a.children;
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("main", { className: "flex-grow", children: children }), _jsx(Footer, {})] }));
};
function AppContent() {
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-white", children: [_jsx(Toaster, { position: "top-center", reverseOrder: false }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Layout, { children: _jsx(Home, {}) }) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/help", element: _jsx(Layout, { children: _jsx(Help, {}) }) }), _jsx(Route, { path: "/coupons", element: _jsx(Layout, { children: _jsx(Coupons, {}) }) }), _jsx(Route, { path: "/add-coupon", element: _jsx(ProtectedRoute, { children: _jsx(Layout, { children: _jsx(AddCoupon, {}) }) }) }), _jsx(Route, { path: "/my-coupons", element: _jsx(ProtectedRoute, { children: _jsx(Layout, { children: _jsx(MyCoupons, {}) }) }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] })] }));
}
function App() {
    return (_jsx(Router, { children: _jsx(AuthProvider, { children: _jsx(AppContent, {}) }) }));
}
export default App;

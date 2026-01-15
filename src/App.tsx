// App.tsx
import React, { ReactNode } from "react";
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
const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner size="lg" />;
  }

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were trying to go to
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// Layout component for pages with header and footer
const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </>
);

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/help" element={<Layout><Help /></Layout>} />
        <Route path="/coupons" element={<Layout><Coupons /></Layout>} />
        
        {/* Protected routes */}
        <Route path="/add-coupon" element={
          <ProtectedRoute>
            <Layout><AddCoupon /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/my-coupons" element={
          <ProtectedRoute>
            <Layout><MyCoupons /></Layout>
          </ProtectedRoute>
        } />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;

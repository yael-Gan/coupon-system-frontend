import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'yellow-500' 
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div 
        className={`animate-spin rounded-full border-t-2 border-b-2 border-${color} ${sizeClasses[size]}`}
        role="status"
      >
        <span className="sr-only">טוען...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;

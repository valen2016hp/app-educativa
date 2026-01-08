import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show on home page
  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6 animate-in fade-in slide-in-from-left-4 duration-500">
      <ol className="flex flex-wrap items-center gap-2 text-lg md:text-xl font-bold text-gray-500">
        <li className="flex items-center hover:text-dyslexia-blue hover:scale-105 transition-transform">
          <Link to="/" className="flex items-center gap-1 p-2 rounded-lg hover:bg-white/50">
            <Home size={20} />
            <span>Inicio</span>
          </Link>
        </li>
        
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const formattedName = value.charAt(0).toUpperCase() + value.slice(1);

          return (
            <li key={to} className="flex items-center">
              <ChevronRight size={20} className="mx-1 text-gray-400" />
              {isLast ? (
                <span className="px-2 py-1 bg-dyslexia-blue text-white rounded-lg shadow-sm" aria-current="page">
                  {formattedName}
                </span>
              ) : (
                <Link 
                  to={to} 
                  className="px-2 py-1 rounded-lg hover:bg-white/50 hover:text-dyslexia-blue hover:scale-105 transition-all"
                >
                  {formattedName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
import React from 'react';
import { 
  User, 
  ChefHat, 
  Home, 
  Briefcase,
  Star
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const userProfile = {
    name: "John Smith",
    email: "john.smith@email.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 4.8,
    completedJobs: 42
  };

  const navigationItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Briefcase, label: "My Work", path: "/my-works" },
    { icon: User, label: "Profile", path: "/profile" }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  CaterKart
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Catering Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.slice(0, 2).map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              ))}
              <Link
                to="/profile"
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  isActive('/profile')
                    ? 'bg-orange-100'
                    : 'hover:bg-gray-50'
                }`}
              >
                <img
                  src={userProfile.avatar}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-orange-200"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-800">{userProfile.name}</p>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-500 ml-1">{userProfile.rating}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center h-14 md:hidden">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex flex-col items-center justify-center text-xs ${
              isActive(item.path)
                ? 'text-orange-600'
                : 'text-gray-500 hover:text-orange-600'
            }`}
          >
            <item.icon className="w-5 h-5 mb-1" />
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;

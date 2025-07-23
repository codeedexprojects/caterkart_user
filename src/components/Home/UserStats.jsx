import React from 'react';
import { Award, ChefHat, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserStatsSection = ({ userProfile }) => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-b-3xl mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {userProfile.name}! 👋</h1>
            <p className="text-orange-100">Ready to serve amazing experiences today?</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Link
            to="/my-works"
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition"
          >
            <div className="flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-yellow-300" />
            </div>
            <div className="text-2xl font-bold">{userProfile.completedJobs}</div>
            <div className="text-orange-100 text-sm">Accepted Requests</div>
          </Link>

          <Link
            to="/my-works"
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition"
          >
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-green-300" />
            </div>
            <div className="text-2xl font-bold">{userProfile.activeRequests}</div>
            <div className="text-orange-100 text-sm">Pending Requests</div>
          </Link>

          <Link
            to="/my-works"
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition"
          >
            <div className="flex items-center justify-center mb-2">
              <ChefHat className="w-6 h-6 text-blue-300" />
            </div>
            <div className="text-2xl font-bold">{userProfile.totalJobs}</div>
            <div className="text-orange-100 text-sm">Published Works</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserStatsSection;

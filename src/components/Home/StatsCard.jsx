import { Award, TrendingUp, ChefHat } from 'lucide-react';

const UserStatsCard = ({ icon: Icon, value, label, iconColor }) => {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
      <div className="flex items-center justify-center mb-2">
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-orange-100 text-sm">{label}</div>
    </div>
  );
};

export default UserStatsCard;
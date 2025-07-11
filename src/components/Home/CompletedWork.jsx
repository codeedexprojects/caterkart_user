import { Calendar } from 'lucide-react';
import RatingStars from './RatingStars';

const CompletedWorkCard = ({ work }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-800 text-lg">{work.title}</h3>
        <div className="flex items-center gap-1">
          <RatingStars rating={work.rating} />
          <span className="text-sm font-medium text-gray-600 ml-1">{work.rating}</span>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-3">"{work.feedback}"</p>
      <div className="flex items-center gap-2 text-gray-500">
        <Calendar className="w-4 h-4" />
        <span className="text-sm">{work.date}</span>
      </div>
    </div>
  );
};

export default CompletedWorkCard;
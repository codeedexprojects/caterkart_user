import { MapPin, Clock, Users, Calendar } from 'lucide-react';
import RatingStars from './RatingStars';

const WorkCard = ({ 
  work, 
  onRequest, 
  showStatus = true, 
  showRequirements = true, 
  showAction = true 
}) => {
  const getTypeColor = (type) => {
    const colors = {
      'Corporate Event': 'bg-blue-100 text-blue-800',
      'Wedding': 'bg-pink-100 text-pink-800',
      'Private Party': 'bg-purple-100 text-purple-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-gray-800">{work.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(work.type)}`}>
                {work.type}
              </span>
            </div>
            <p className="text-gray-600 font-medium mb-1">{work.company}</p>
            <p className="text-gray-500 text-sm mb-3">{work.description}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-orange-600">{work.budget}</div>
            <div className="text-gray-500 text-sm">Budget</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="text-sm">{work.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4 text-orange-500" />
            <span className="text-sm">{work.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4 text-orange-500" />
            <span className="text-sm">{work.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-sm">{work.guests} guests</span>
          </div>
        </div>

        {showRequirements && work.requirements && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Requirements:</h4>
            <div className="flex flex-wrap gap-2">
              {work.requirements.map((req, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          {showStatus && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-600 font-medium">Available Now</span>
            </div>
          )}
          {showAction && onRequest && (
            <button
              onClick={() => onRequest(work.id)}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Request Work
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
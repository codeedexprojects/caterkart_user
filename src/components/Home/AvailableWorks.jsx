import React from 'react';
import { MapPin, Clock, Users, Calendar, ChefHat } from 'lucide-react';

const AvailableWorkSection = ({ availableWork, handleRequestWork, handleCardClick }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
          <ChefHat className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Available Catering Work</h2>
        <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
          {availableWork.length} New
        </div>
      </div>

      <div className="grid gap-6">
        {availableWork.map((work) => (
          <div
            key={work.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            onClick={() => handleCardClick(work.id)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                     {work.work_type}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <MapPin className="inline-block w-4 h-4 text-orange-500 mr-1" />
                    {work.place}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
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
                  <span className="text-sm">
                    Boys Needed: {work.no_of_boys_needed}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">
                    Attendees: {work.attendees}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 ${work.is_published ? 'bg-green-500' : 'bg-gray-400'} rounded-full`}></div>
                  <span className={`text-sm ${work.is_published ? 'text-green-600' : 'text-gray-500'} font-medium`}>
                    {work.is_published ? 'Published' : 'Unpublished'}
                  </span>
                </div>
                <button
                  onClick={(e) => handleRequestWork(work.id, e)}
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Request Work
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableWorkSection;

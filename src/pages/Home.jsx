import React, { useState } from 'react';
import { Star, MapPin, Clock, Users, Calendar, ChefHat, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const CaterKartHomePage = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const navigate = useNavigate();

  // Sample data - replace with your actual data
  const userProfile = {
    name: "John Smith",
    totalJobs: 47,
    rating: 4.8,
    completedJobs: 42,
    activeRequests: 3
  };

  const availableWork = [
    {
      id: 1,
      title: "Corporate Conference Catering",
      company: "Tech Solutions Inc.",
      location: "Downtown Business Center",
      date: "2025-07-15",
      time: "09:00 AM - 05:00 PM",
      guests: 150,
      type: "Corporate Event",
      budget: "$2,500",
      description: "Full day corporate conference with breakfast, lunch, and coffee breaks",
      requirements: ["Vegetarian options", "Dietary restrictions friendly", "Professional setup"],
      status: "available"
    },
    {
      id: 2,
      title: "Wedding Reception Catering",
      company: "The Grand Ballroom",
      location: "Heritage Hotel",
      date: "2025-07-20",
      time: "06:00 PM - 11:00 PM",
      guests: 200,
      type: "Wedding",
      budget: "$4,000",
      description: "Elegant wedding reception with multi-course dinner and dessert service",
      requirements: ["Premium service", "Decoration assistance", "Late night service"],
      status: "available"
    },
    {
      id: 3,
      title: "Birthday Party Catering",
      company: "Private Client",
      location: "Residential Area",
      date: "2025-07-18",
      time: "02:00 PM - 08:00 PM",
      guests: 75,
      type: "Private Party",
      budget: "$1,200",
      description: "Fun birthday celebration with buffet style service and cake",
      requirements: ["Kid-friendly menu", "Outdoor setup", "Entertainment support"],
      status: "available"
    }
  ];

  const recentCompletedWork = [
    {
      id: 1,
      title: "Office Launch Event",
      rating: 5,
      date: "2025-07-05",
      feedback: "Exceptional service and delicious food!"
    },
    {
      id: 2,
      title: "Anniversary Celebration",
      rating: 4.5,
      date: "2025-07-02",
      feedback: "Great presentation and timely service"
    },
    {
      id: 3,
      title: "Product Launch",
      rating: 4.8,
      date: "2025-06-28",
      feedback: "Professional team, highly recommended"
    }
  ];

  const handleRequestWork = (workId, e) => {
    e.stopPropagation(); // Prevent the card click from triggering
    alert(`Request sent for work ID: ${workId}`);
    // Add your request logic here
  };

  const handleCardClick = (workId) => {
    navigate(`/work-details`);
  };

  const getTypeColor = (type) => {
    const colors = {
      'Corporate Event': 'bg-blue-100 text-blue-800',
      'Wedding': 'bg-pink-100 text-pink-800',
      'Private Party': 'bg-purple-100 text-purple-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div>
        <Header></Header>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
          {/* Hero Section with User Stats */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-b-3xl mb-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, {userProfile.name}! 👋</h1>
                  <p className="text-orange-100">Ready to serve amazing experiences today?</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xl font-bold">{userProfile.rating}</span>
                  </div>
                  <p className="text-orange-100 text-sm">Your Rating</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div className="text-2xl font-bold">{userProfile.completedJobs}</div>
                  <div className="text-orange-100 text-sm">Completed Jobs</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-green-300" />
                  </div>
                  <div className="text-2xl font-bold">{userProfile.activeRequests}</div>
                  <div className="text-orange-100 text-sm">Active Requests</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <ChefHat className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="text-2xl font-bold">{userProfile.totalJobs}</div>
                  <div className="text-orange-100 text-sm">Total Jobs</div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="max-w-6xl mx-auto px-6">
            {/* Available Work Section */}
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
    
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-600 font-medium">Available Now</span>
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
    
            {/* Recent Completed Work Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Recent Completed Work</h2>
              </div>
    
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentCompletedWork.map((work) => (
                  <div
                    key={work.id}
                    className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-800 text-lg">{work.title}</h3>
                      <div className="flex items-center gap-1">
                        {renderStars(work.rating)}
                        <span className="text-sm font-medium text-gray-600 ml-1">{work.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">"{work.feedback}"</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{work.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default CaterKartHomePage;
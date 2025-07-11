import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  TrendingUp, 
  ChefHat, 
  Phone, 
  Mail, 
  Edit3,
  Camera,
  BadgeCheck,
  Trophy,
  Target,
  Heart,
  MessageSquare,
  Filter,
  Download,
  Briefcase
} from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const userProfile = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    location: "Downtown, Kerala",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    joinDate: "March 2023",
    bio: "Passionate catering professional with 8+ years of experience in delivering exceptional dining experiences. Specialized in corporate events, weddings, and private parties.",
    rating: 4.8,
    totalJobs: 147,
    completedJobs: 142,
    activeJobs: 3,
    cancelledJobs: 2,
    totalEarnings: "$45,250",
    averageRating: 4.8,
    responseRate: 95,
    onTimeDelivery: 98
  };

  const achievements = [
    { id: 1, title: "Top Performer", description: "Highest rated caterer this month", icon: Trophy, color: "text-yellow-600", bgColor: "bg-yellow-100" },
    { id: 2, title: "Quick Responder", description: "95% response rate", icon: Target, color: "text-blue-600", bgColor: "bg-blue-100" },
    { id: 3, title: "Customer Favorite", description: "100+ 5-star reviews", icon: Heart, color: "text-red-600", bgColor: "bg-red-100" },
    { id: 4, title: "Reliable Service", description: "98% on-time delivery", icon: BadgeCheck, color: "text-green-600", bgColor: "bg-green-100" }
  ];

  const completedWork = [
    {
      id: 1,
      title: "Corporate Annual Meeting",
      company: "Tech Solutions Inc.",
      date: "2025-07-05",
      guests: 150,
      amount: "$2,500",
      rating: 5,
      feedback: "Exceptional service! The food was delicious and the presentation was perfect. John and his team went above and beyond to ensure everything was seamless.",
      type: "Corporate Event"
    },
    {
      id: 2,
      title: "Wedding Reception",
      company: "Private Client",
      date: "2025-06-28",
      guests: 200,
      amount: "$4,200",
      rating: 4.5,
      feedback: "Beautiful setup and amazing food. The guests couldn't stop complimenting the catering. Highly professional team!",
      type: "Wedding"
    },
    {
      id: 3,
      title: "Birthday Celebration",
      company: "Johnson Family",
      date: "2025-06-20",
      guests: 75,
      amount: "$1,800",
      rating: 5,
      feedback: "Perfect for our family celebration. Great variety of food and excellent service. Will definitely book again!",
      type: "Private Party"
    },
    {
      id: 4,
      title: "Product Launch Event",
      company: "StartUp Hub",
      date: "2025-06-15",
      guests: 120,
      amount: "$2,100",
      rating: 4.8,
      feedback: "Professional service and delicious food. The team was very accommodating to our specific requirements.",
      type: "Corporate Event"
    },
    {
      id: 5,
      title: "Office Party",
      company: "Design Agency",
      date: "2025-06-08",
      guests: 80,
      amount: "$1,500",
      rating: 4.7,
      feedback: "Great food and timely service. The team was very professional and handled everything smoothly.",
      type: "Corporate Event"
    }
  ];

  const monthlyStats = [
    { month: "Jan", jobs: 8, earnings: 3200 },
    { month: "Feb", jobs: 12, earnings: 4800 },
    { month: "Mar", jobs: 15, earnings: 6200 },
    { month: "Apr", jobs: 18, earnings: 7500 },
    { month: "May", jobs: 20, earnings: 8100 },
    { month: "Jun", jobs: 22, earnings: 9200 },
    { month: "Jul", jobs: 25, earnings: 10500 }
  ];

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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: ChefHat },
    { id: 'work-history', label: 'Work History', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  return (
    <div>
        <Header></Header>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 h-32 relative">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="relative px-6 pb-6">
                <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 relative z-10">
                  <div className="relative">
                    <img
                      src={userProfile.avatar}
                      alt="Profile"
                      className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg"
                    />
                    <button className="absolute bottom-2 right-2 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors shadow-lg">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-1">{userProfile.name}</h1>
                        <p className="text-gray-600 mb-2">{userProfile.bio}</p>
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {userProfile.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Joined {userProfile.joinDate}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            {renderStars(userProfile.rating)}
                          </div>
                          <div className="text-2xl font-bold text-gray-800">{userProfile.rating}</div>
                          <div className="text-sm text-gray-500">Rating</div>
                        </div>
                        
                        <button
                          onClick={() => setIsEditing(!isEditing)}
                          className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center"
                        >
                          <Edit3 className="w-4 h-4 mr-2" />
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Jobs</p>
                    <p className="text-2xl font-bold text-gray-800">{userProfile.totalJobs}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-green-600">{userProfile.completedJobs}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Earnings</p>
                    <p className="text-2xl font-bold text-orange-600">{userProfile.totalEarnings}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Response Rate</p>
                    <p className="text-2xl font-bold text-purple-600">{userProfile.responseRate}%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
    
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-lg mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-orange-600 text-orange-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <tab.icon className="w-5 h-5 mr-2" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
    
              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Mail className="w-5 h-5 text-gray-400 mr-3" />
                            <span className="text-gray-700">{userProfile.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-5 h-5 text-gray-400 mr-3" />
                            <span className="text-gray-700">{userProfile.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                            <span className="text-gray-700">{userProfile.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Metrics</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Average Rating</span>
                            <span className="font-medium">{userProfile.averageRating}/5.0</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Response Rate</span>
                            <span className="font-medium">{userProfile.responseRate}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">On-Time Delivery</span>
                            <span className="font-medium">{userProfile.onTimeDelivery}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Achievements</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {achievements.map((achievement) => (
                          <div key={achievement.id} className="border border-gray-200 rounded-lg p-4">
                            <div className={`w-10 h-10 ${achievement.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                              <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                            </div>
                            <h4 className="font-medium text-gray-800 mb-1">{achievement.title}</h4>
                            <p className="text-sm text-gray-600">{achievement.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
    
                {/* Work History Tab */}
                {activeTab === 'work-history' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-800">Work History</h3>
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Filter className="w-4 h-4 mr-2" />
                          Filter
                        </button>
                        <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {completedWork.map((work) => (
                        <div key={work.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-lg font-semibold text-gray-800">{work.title}</h4>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(work.type)}`}>
                                  {work.type}
                                </span>
                              </div>
                              <p className="text-gray-600 mb-2">{work.company}</p>
                              <div className="flex items-center text-sm text-gray-500 space-x-4">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {work.date}
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-1" />
                                  {work.guests} guests
                                </div>
                              </div>
                            </div>
                            <div className="text-right mt-4 md:mt-0">
                              <div className="text-xl font-bold text-gray-800">{work.amount}</div>
                              <div className="flex items-center justify-end mt-1">
                                {renderStars(work.rating)}
                                <span className="text-sm text-gray-600 ml-1">{work.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-700 text-sm italic">"{work.feedback}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
    
                {/* Achievements Tab */}
                {activeTab === 'achievements' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Your Achievements</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {achievements.map((achievement) => (
                        <div key={achievement.id} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <div className={`w-16 h-16 ${achievement.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                            <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                          </div>
                          <h4 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h4>
                          <p className="text-gray-600">{achievement.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
    
                {/* Analytics Tab */}
                {activeTab === 'analytics' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800">Performance Analytics</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-800 mb-4">Monthly Jobs</h4>
                        <div className="space-y-2">
                          {monthlyStats.map((stat, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">{stat.month}</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${(stat.jobs / 25) * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium">{stat.jobs}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-800 mb-4">Monthly Earnings</h4>
                        <div className="space-y-2">
                          {monthlyStats.map((stat, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">{stat.month}</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-green-600 h-2 rounded-full"
                                    style={{ width: `${(stat.earnings / 10500) * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium">${stat.earnings}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Profile;
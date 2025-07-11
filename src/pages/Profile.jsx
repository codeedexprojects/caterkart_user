import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Edit3,
  Camera,
  User,
  Briefcase,
  Scale,
  Ruler,
  LogOut
} from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userProfile = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Downtown, Kerala, India",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    experience: "8 years",
    height: "5'10\"",
    weight: "75 kg"
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
    // For example: redirect to login page, clear session, etc.
  };

  return (
    <div>
        <Header></Header>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 h-32 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
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
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{userProfile.name}</h1>
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {userProfile.experience} of experience
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center mt-4 md:mt-0"
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Profile Information */}
            <div className="bg-white rounded-2xl shadow-xl mt-8 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-orange-600" />
                    Contact Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="text-gray-800 font-medium">{userProfile.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="text-gray-800 font-medium">{userProfile.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Address</p>
                        <p className="text-gray-800 font-medium">{userProfile.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-orange-600" />
                    Personal Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Briefcase className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Experience</p>
                        <p className="text-gray-800 font-medium">{userProfile.experience}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Ruler className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Height</p>
                        <p className="text-gray-800 font-medium">{userProfile.height}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Scale className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Weight</p>
                        <p className="text-gray-800 font-medium">{userProfile.weight}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Edit Profile Form (shown when editing) */}
            {isEditing && (
              <div className="bg-white rounded-2xl shadow-xl mt-8 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        defaultValue={userProfile.name}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={userProfile.email}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue={userProfile.phone}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                      <input
                        type="text"
                        defaultValue={userProfile.experience}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                      <input
                        type="text"
                        defaultValue={userProfile.height}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                      <input
                        type="text"
                        defaultValue={userProfile.weight}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea
                      defaultValue={userProfile.address}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        // Add save logic here
                        setIsEditing(false);
                      }}
                      className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Profile;
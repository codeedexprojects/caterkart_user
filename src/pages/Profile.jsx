import React, { useState, useEffect } from 'react';
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
  LogOut,
  Smartphone,
  Home,
  Map,
  Award
} from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { getProfile, updateProfile } from '../services/allApi';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    mobile_number: '',
    alternate_mobile_number: '',
    address: '',
    district: '',
    place: '',
    weight: '',
    height: '',
    experienced: false
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        if (response && response.data) {
          setProfileData(response.data.user);
          // Initialize form data
          const user = response.data.user;
          setFormData({
            user_name: user.user_name || '',
            email: user.email || '',
            mobile_number: user.mobile_number || '',
            alternate_mobile_number: user.user_data?.alternate_mobile_number || '',
            address: user.user_data?.address || '',
            district: user.user_data?.district || '',
            place: user.user_data?.place || '',
            weight: user.user_data?.weight || '',
            height: user.user_data?.height || '',
            experienced: user.user_data?.experienced || false
          });
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile({
        alternate_mobile_number: formData.alternate_mobile_number,
        address: formData.address,
        district: formData.district,
        place: formData.place,
        weight: parseFloat(formData.weight),
        height: parseFloat(formData.height),
        experienced: formData.experienced
      });
      
      if (response && response.data) {
        // Update local profile data
        setProfileData(prev => ({
          ...prev,
          user_data: {
            ...prev.user_data,
            ...response.data
          }
        }));
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!profileData) {
    return (
      <div>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 h-32 relative">
              <div className="absolute inset-0 bg-black/20"></div>
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
                    src={profileData.user_data?.profile_image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"}
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
                      <h1 className="text-3xl font-bold text-gray-800 mb-2">{profileData.user_name}</h1>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {profileData.user_data?.experienced ? "Experienced" : "Beginner"}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center mt-4 md:mt-0"
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-8">
            {/* Profile Information */}
            <div className={`bg-white rounded-2xl shadow-xl p-6 flex-1 ${isEditing ? 'md:w-1/2' : 'w-full'}`}>
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
                        <p className="text-gray-800 font-medium">{profileData.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Smartphone className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Mobile</p>
                        <p className="text-gray-800 font-medium">{profileData.mobile_number}</p>
                      </div>
                    </div>
                    
                    {profileData.user_data?.alternate_mobile_number && (
                      <div className="flex items-start">
                        <Phone className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Alternate Mobile</p>
                          <p className="text-gray-800 font-medium">{profileData.user_data.alternate_mobile_number}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Home className="w-5 h-5 mr-2 text-orange-600" />
                    Address Details
                  </h3>
                  
                  <div className="space-y-4">
                    {profileData.user_data?.address && (
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Address</p>
                          <p className="text-gray-800 font-medium">{profileData.user_data.address}</p>
                        </div>
                      </div>
                    )}
                    
                    {profileData.user_data?.district && (
                      <div className="flex items-start">
                        <Map className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">District</p>
                          <p className="text-gray-800 font-medium">{profileData.user_data.district}</p>
                        </div>
                      </div>
                    )}
                    
                    {profileData.user_data?.place && (
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Place</p>
                          <p className="text-gray-800 font-medium">{profileData.user_data.place}</p>
                        </div>
                      </div>
                    )}
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
                      <Award className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Experience</p>
                        <p className="text-gray-800 font-medium">
                          {profileData.user_data?.experienced ? "Experienced" : "Beginner"}
                        </p>
                      </div>
                    </div>
                    
                    {profileData.user_data?.height && (
                      <div className="flex items-start">
                        <Ruler className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Height (cm)</p>
                          <p className="text-gray-800 font-medium">{profileData.user_data.height}</p>
                        </div>
                      </div>
                    )}
                    
                    {profileData.user_data?.weight && (
                      <div className="flex items-start">
                        <Scale className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600">Weight (kg)</p>
                          <p className="text-gray-800 font-medium">{profileData.user_data.weight}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Profile Form (shown when editing) */}
            {isEditing && (
              <div className="bg-white rounded-2xl shadow-xl p-6 flex-1 md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        disabled
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        disabled
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobile</label>
                      <input
                        type="tel"
                        name="mobile_number"
                        value={formData.mobile_number}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        disabled
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Alternate Mobile</label>
                      <input
                        type="tel"
                        name="alternate_mobile_number"
                        value={formData.alternate_mobile_number}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Place</label>
                      <input
                        type="text"
                        name="place"
                        value={formData.place}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                      <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="experienced"
                        checked={formData.experienced}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">
                        Experienced
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Calendar, 
  ChefHat, 
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Heart,
  Share2,
  User,
  Shirt
} from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const CateringStaffJobDetails = () => {
  const [isApplied, setIsApplied] = useState(false);

  // Sample job data for catering staff
  const jobDetails = {
    id: 1,
    title: "Catering Staff Required",
    company: "Elite Catering Services",
    location: "Downtown Business Center, 123 Innovation Drive",
    date: "2025-07-15",
    time: "07:00 AM - 06:00 PM",
    position: "Catering Staff",
    salary: "₹1,500/day",
    description: "We are looking for professional catering staff for a corporate event. Must be well-groomed and follow our dress code standards.",
    requirements: [
      "Clean shave (for male staff)",
      "Black formal shoes",
      "White shirt and black pants",
      "Neat and tidy appearance",
      "Previous catering experience preferred",
      "Good communication skills",
      "Punctual and reliable"
    ],
    status: "hiring",
    postedDate: "2025-07-10",
    urgency: "Medium",
    contact: {
      name: "Rajesh Kumar",
      role: " Catering Manager",
      phone: "+91 98765 43210",
      email: "test@elitecatering.com"
    },
    venue: {
      name: "Downtown Business Center",
      address: "123 Innovation Drive, Suite 400",
      parking: "Free parking available"
    },
    responsibilities: [
      "Set up dining areas and buffet stations",
      "Serve food and beverages to guests",
      "Maintain cleanliness throughout the event",
      "Assist with cleanup after the event",
      "Follow all food safety protocols"
    ]
  };

 

  const getUrgencyColor = (urgency) => {
    const colors = {
      'High': 'bg-red-100 text-red-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-green-100 text-green-800'
    };
    return colors[urgency] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
        <Header></Header>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold">Job Details</h1>
                  <p className="text-orange-100">Apply for this catering position</p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Job Overview */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h2 className="text-2xl font-bold text-gray-800">{jobDetails.title}</h2>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                          {jobDetails.position}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(jobDetails.urgency)}`}>
                          {jobDetails.urgency} Priority
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium mb-2">{jobDetails.company}</p>
                      <p className="text-gray-600 leading-relaxed">{jobDetails.description}</p>
                    </div>
                    
                  </div>
    
                  {/* Key Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-orange-600" />
                      <div>
                        <div className="text-sm text-gray-600">Date</div>
                        <div className="font-semibold text-gray-800">{jobDetails.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-600">Time</div>
                        <div className="font-semibold text-gray-800">{jobDetails.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-sm text-gray-600">Location</div>
                        <div className="font-semibold text-gray-800">Downtown</div>
                      </div>
                    </div>
                   
                  </div>
    
                  {/* Location */}
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800">{jobDetails.venue.name}</div>
                      <div className="text-gray-600">{jobDetails.location}</div>
                    </div>
                  </div>
                </div>
    
                {/* Requirements */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Shirt className="w-5 h-5 text-orange-600" />
                    Staff Requirements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {jobDetails.requirements.map((req, index) => (
                      <div key={index} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
    
    
              </div>
    
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-orange-600" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-800">{jobDetails.contact.name}</div>
                      <div className="text-sm text-gray-600">{jobDetails.contact.role}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{jobDetails.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{jobDetails.contact.email}</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Call Now
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Send Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default CateringStaffJobDetails;
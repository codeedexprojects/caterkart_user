import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Calendar, 
  MapPin, 
  Users, 
  Star,
  Phone,
  Mail,
  MessageSquare,
  Filter,
  Search,
  Download,
  Eye,
  ChefHat,
  DollarSign,
  TrendingUp,
  FileText,
  PlayCircle,
  PauseCircle,
  MoreHorizontal
} from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useNavigate } from 'react-router-dom';

const MyWorksPage = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [selectedWork, setSelectedWork] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const navigte=useNavigate()

  const handleViewDetails = () => {
    navigte('/work-details');
  }
  // Sample data - replace with your actual data
  const workData = {
    pending: [
      {
        id: 1,
        title: "Corporate Annual Meeting",
        company: "Tech Solutions Inc.",
        location: "Downtown Business Center",
        date: "2025-07-20",
        time: "09:00 AM - 05:00 PM",
        guests: 150,
        budget: "$2,500",
        status: "pending",
        requestDate: "2025-07-10",
        description: "Full day corporate conference with breakfast, lunch, and coffee breaks",
        requirements: ["Vegetarian options", "Dietary restrictions friendly", "Professional setup"],
        contact: {
          name: "Sarah Johnson",
          email: "sarah@techsolutions.com",
          phone: "+1 (555) 123-4567"
        }
      },
      {
        id: 2,
        title: "Birthday Party Catering",
        company: "Private Client",
        location: "Residential Area",
        date: "2025-07-25",
        time: "02:00 PM - 08:00 PM",
        guests: 75,
        budget: "$1,200",
        status: "pending",
        requestDate: "2025-07-11",
        description: "Fun birthday celebration with buffet style service",
        requirements: ["Kid-friendly menu", "Outdoor setup"],
        contact: {
          name: "Mike Wilson",
          email: "mike.wilson@email.com",
          phone: "+1 (555) 987-6543"
        }
      }
    ],
    approved: [
      {
        id: 3,
        title: "Wedding Reception",
        company: "The Grand Ballroom",
        location: "Heritage Hotel",
        date: "2025-07-18",
        time: "06:00 PM - 11:00 PM",
        guests: 200,
        budget: "$4,000",
        status: "approved",
        approvalDate: "2025-07-12",
        description: "Elegant wedding reception with multi-course dinner",
        requirements: ["Premium service", "Decoration assistance", "Late night service"],
        contact: {
          name: "Emily Davis",
          email: "emily@grandballroom.com",
          phone: "+1 (555) 456-7890"
        },
        clientNotes: "Please ensure vegetarian options are clearly marked. The couple prefers Italian cuisine."
      }
    ],
    inProgress: [
      {
        id: 4,
        title: "Office Launch Event",
        company: "StartUp Hub",
        location: "Tech Park",
        date: "2025-07-15",
        time: "10:00 AM - 04:00 PM",
        guests: 100,
        budget: "$1,800",
        status: "in-progress",
        startDate: "2025-07-15",
        description: "Office launch event with networking lunch",
        requirements: ["Professional setup", "Networking style service"],
        contact: {
          name: "David Chen",
          email: "david@startuphub.com",
          phone: "+1 (555) 321-9876"
        },
        progress: 75
      }
    ],
    completed: [
      {
        id: 5,
        title: "Corporate Training Session",
        company: "Business Academy",
        location: "Training Center",
        date: "2025-07-08",
        time: "09:00 AM - 03:00 PM",
        guests: 80,
        budget: "$1,500",
        status: "completed",
        completedDate: "2025-07-08",
        description: "Training session with lunch and coffee breaks",
        requirements: ["Healthy options", "Quick service"],
        contact: {
          name: "Lisa Brown",
          email: "lisa@businessacademy.com",
          phone: "+1 (555) 654-3210"
        },
        rating: 4.8,
        feedback: "Excellent service and delicious food. The team was very professional.",
        earnings: "$1,500"
      },
      {
        id: 6,
        title: "Anniversary Celebration",
        company: "Private Client",
        location: "Community Hall",
        date: "2025-07-05",
        time: "07:00 PM - 11:00 PM",
        guests: 120,
        budget: "$2,200",
        status: "completed",
        completedDate: "2025-07-05",
        description: "25th anniversary celebration dinner",
        requirements: ["Elegant presentation", "Family-friendly"],
        contact: {
          name: "Robert Taylor",
          email: "robert.taylor@email.com",
          phone: "+1 (555) 789-0123"
        },
        rating: 5,
        feedback: "Outstanding service! Everything was perfect. Highly recommend!",
        earnings: "$2,200"
      }
    ]
  };

  const allWorks = [...workData.pending, ...workData.approved, ...workData.inProgress, ...workData.completed];

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      approved: 'bg-green-100 text-green-800 border-green-200',
      'in-progress': 'bg-blue-100 text-blue-800 border-blue-200',
      completed: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getStatusIcon = (status) => {
    const icons = {
      pending: AlertCircle,
      approved: CheckCircle,
      'in-progress': PlayCircle,
      completed: CheckCircle
    };
    return icons[status] || AlertCircle;
  };

  const tabs = [
    { id: 'active', label: 'Active', count: workData.pending.length + workData.approved.length + workData.inProgress.length },
    { id: 'pending', label: 'Pending', count: workData.pending.length },
    { id: 'approved', label: 'Approved', count: workData.approved.length },
    { id: 'in-progress', label: 'In Progress', count: workData.inProgress.length },
    { id: 'completed', label: 'Completed', count: workData.completed.length }
  ];

  const getWorksForTab = (tabId) => {
    switch(tabId) {
      case 'active':
        return [...workData.pending, ...workData.approved, ...workData.inProgress];
      case 'pending':
        return workData.pending;
      case 'approved':
        return workData.approved;
      case 'in-progress':
        return workData.inProgress;
      case 'completed':
        return workData.completed;
      default:
        return allWorks;
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const WorkCard = ({ work }) => {
    const StatusIcon = getStatusIcon(work.status);
    
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-bold text-gray-800">{work.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(work.status)}`}>
                <StatusIcon className="w-3 h-3 inline mr-1" />
                {work.status.replace('-', ' ').toUpperCase()}
              </span>
            </div>
            <p className="text-gray-600 font-medium">{work.company}</p>
            <p className="text-gray-500 text-sm mt-1">{work.description}</p>
          </div>
          <div className="text-right">
           
            {work.earnings && (
              <div className="text-sm text-green-600 font-medium">Earned: {work.earnings}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
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

        
        {work.rating && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-gray-700">Rating:</span>
              <div className="flex items-center gap-1">
                {renderStars(work.rating)}
                <span className="text-sm text-gray-600 ml-1">{work.rating}/5</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-700 italic">"{work.feedback}"</p>
            </div>
          </div>
        )}

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-gray-700">Contact:</span>
            <span className="text-sm text-gray-600">{work.contact.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${work.contact.email}`} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a href={`tel:${work.contact.phone}`} className="flex items-center gap-1 text-sm text-green-600 hover:text-green-800">
              <Phone className="w-4 h-4" />
              Call
            </a>
            
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${work.status === 'completed' ? 'bg-green-500' : work.status === 'in-progress' ? 'bg-blue-500' : work.status === 'approved' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <span className="text-sm text-gray-600">
              {work.status === 'pending' && `Requested ${work.requestDate}`}
              {work.status === 'approved' && `Approved ${work.approvalDate}`}
              {work.status === 'in-progress' && `Started ${work.startDate}`}
              {work.status === 'completed' && `Completed ${work.completedDate}`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleViewDetails}
              className="flex items-center gap-1 px-3 py-1 text-sm text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4" />
              View Details
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const currentWorks = getWorksForTab(activeTab);
  const filteredWorks = currentWorks.filter(work => 
    work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    work.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Header></Header>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">My Works</h1>
                  <p className="text-gray-600">Manage your catering assignments and track progress</p>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search works..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  
                </div>
              </div>
            </div>
    
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Works</p>
                    <p className="text-2xl font-bold text-gray-800">{allWorks.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-yellow-600">{workData.pending.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">In Progress</p>
                    <p className="text-2xl font-bold text-blue-600">{workData.inProgress.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-green-600">{workData.completed.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
    
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-lg mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'border-orange-600 text-orange-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                        activeTab === tab.id
                          ? 'bg-orange-100 text-orange-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
    
            {/* Works Grid */}
            <div className="grid gap-6">
              {filteredWorks.length > 0 ? (
                filteredWorks.map((work) => (
                  <WorkCard key={work.id} work={work} />
                ))
              ) : (
                <div className="text-center py-12">
                  <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">No works found</h3>
                  <p className="text-gray-500">
                    {searchTerm ? 'Try adjusting your search terms' : 'No works available in this category'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default MyWorksPage;
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Users, Calendar, ChefHat, ArrowLeft, Phone, CheckCircle, User, Shirt } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { getWorkById, requestWork } from '../services/allApi';
import ConfirmationModal from '../components/common/ConfirnationModal';

const CateringStaffJobDetails = () => {
  const [isApplied, setIsApplied] = useState(false);
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);  
  }

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await getWorkById(id);
        setJobDetails(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch job details');
        setLoading(false);
        toast.error('Failed to load job details. Please try again.');
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleRequestWork = () => {
    setIsModalOpen(true);
  };

  const handleConfirmRequest = async () => {
    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending work request...');
    
    try {
      const requestBody = {
        work: parseInt(id)
      };
      
      const response = await requestWork(requestBody);
      
      if (response) {
        setIsApplied(true);
        setIsModalOpen(false);
        toast.success('Work request sent successfully!', {
          id: loadingToast,
          duration: 4000,
        });
      }
    } catch (error) {
      console.error('Error requesting work:', error);
      toast.error('Failed to send work request. Please try again.', {
        id: loadingToast,
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getUrgencyColor = (attendees) => {
    if (attendees > 200) return 'bg-red-100 text-red-800';
    if (attendees > 100) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const getUrgencyText = (attendees) => {
    if (attendees > 200) return 'High Priority';
    if (attendees > 100) return 'Medium Priority';
    return 'Low Priority';
  };

  const formatInstructions = (instructions) => {
    const lines = instructions.split('\n').filter(item => item.trim() !== '');
    return lines.map(line => ({
      text: line.replace('*', '').trim(),
      isBullet: line.startsWith('*')
    }));
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  if (!jobDetails) return <div className="min-h-screen flex items-center justify-center">No job details found</div>;

  return (
    <div>
      <Header></Header>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <button onClick={handleBackClick} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold">{jobDetails.Auditorium_name} - {jobDetails.date}</h1>
                <p className="text-orange-100">{jobDetails.work_type.replace(/_/g, ' ')} Event</p>
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
                      <h2 className="text-2xl font-bold text-gray-800">{jobDetails.date} - {jobDetails.Auditorium_name}</h2>
                     
                    </div>
                    <p className="text-gray-600 font-medium mb-2">{jobDetails.Catering_company}</p>
                   
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
                      <div className="text-sm text-gray-600">Reporting Time</div>
                      <div className="font-semibold text-gray-800">{jobDetails.reporting_time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Users className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-600">Staff Needed</div>
                      <div className="font-semibold text-gray-800">{jobDetails.no_of_boys_needed}</div>
                    </div>
                  </div>
                 
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-800">{jobDetails.Auditorium_name}</div>
                    <div className="text-gray-600">{jobDetails.place}</div>
                    <a 
                      href={jobDetails.location_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm mt-1 inline-block hover:underline"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Shirt className="w-5 h-5 text-orange-600" />
                  Staff Requirements & Instructions
                </h3>
                <div className="space-y-3">
                  {formatInstructions(jobDetails.instructions).map((instruction, index) => (
                    <div key={index} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${instruction.isBullet ? 'text-green-500' : 'text-orange-500'}`} />
                      <span>{instruction.text}</span>
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
                    <div className="font-semibold text-gray-800">Captain In Charge</div>
                    <div className="text-sm text-gray-600">Contact for any doubts or emergencies</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">Contact number will be shared after confirmation</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <button 
                      className={`w-full py-2 rounded-lg font-semibold transition-colors mb-2 ${
                        isApplied 
                          ? 'bg-green-600 text-white cursor-not-allowed' 
                          : 'bg-orange-600 text-white hover:bg-orange-700'
                      }`}
                      onClick={handleRequestWork}
                      disabled={isApplied || isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : (isApplied ? 'Request Sent' : 'Send Work Request')}
                    </button>
                    {isApplied && (
                      <div className="text-green-600 text-sm flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Your request has been submitted. You'll receive confirmation details soon.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      
      {/* Toast Container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            style: {
              background: '#10b981',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
      
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmRequest}
        title="Confirm Work Request"
        message={`Are you sure you want to send a work request for ${jobDetails.Auditorium_name} on ${jobDetails.date}?`}
        confirmText="Send Request"
        cancelText="Cancel"
      />
    </div>
  );
};

export default CateringStaffJobDetails;
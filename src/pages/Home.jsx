import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import UserStatsSection from '../components/Home/UserStats';
import AvailableWorkSection from '../components/Home/AvailableWorks';
import CompletedWorkSection from '../components/Home/CompletedWork';
import { getWorkList, requestWork, userCounts } from '../services/allApi';
import ConfirmationModal from '../components/common/ConfirnationModal';

const CaterKartHomePage = () => {
  const navigate = useNavigate();
  const [availableWork, setAvailableWork] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(true);

  const recentCompletedWork = [
    {
      id: 1,
      title: "Office Launch Event",
      rating: 5,
      date: "2025-07-05",
      feedback: "Exceptional service and delicious food!",
    },
    {
      id: 2,
      title: "Anniversary Celebration",
      rating: 4.5,
      date: "2025-07-02",
      feedback: "Great presentation and timely service",
    },
    {
      id: 3,
      title: "Product Launch",
      rating: 4.8,
      date: "2025-06-28",
      feedback: "Professional team, highly recommended",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile data
        const profileResponse = await userCounts();
        if (profileResponse && profileResponse.data) {
          setUserProfile({
            name: profileResponse.data.user_name,
            totalJobs: profileResponse.data.published_work_count,
            completedJobs: profileResponse.data.accepted_requests,
            activeRequests: profileResponse.data.pending_requests,
            
          });
        } else {
          toast.error("Failed to load profile data");
        }

        // Fetch available work
        const workResponse = await getWorkList();
        if (workResponse && workResponse.data) {
          setAvailableWork(workResponse.data);
        } else {
          toast.error("Failed to load available work");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error loading data");
      } finally {
        setLoading(false);
        setProfileLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRequestWork = () => {
    // Your request work logic
  };

  const handleCardClick = (workId) => {
    navigate(`/work-details/${workId}`);
  };

  return (
    <div>
      <Header />
      <Toaster position="top-center" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        {profileLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Loading profile...</p>
          </div>
        ) : (
          <UserStatsSection userProfile={userProfile} />
        )}

        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600">Loading available work...</p>
            </div>
          ) : (
            <AvailableWorkSection
              availableWork={availableWork}
              handleRequestWork={handleRequestWork}
              handleCardClick={handleCardClick}
            />
          )}

         
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaterKartHomePage;
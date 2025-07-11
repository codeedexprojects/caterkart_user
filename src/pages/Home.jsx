import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import UserStatsSection from '../components/Home/UserStats';
import AvailableWorkSection from '../components/Home/AvailableWorks';
import CompletedWorkSection from '../components/Home/CompletedWork';
import { getWorkList } from '../services/allApi';

const CaterKartHomePage = () => {
  const navigate = useNavigate();

  const [availableWork, setAvailableWork] = useState([]);
  const [loading, setLoading] = useState(true);

  const userProfile = {
    name: "John Smith",
    totalJobs: 47,
    rating: 4.8,
    completedJobs: 42,
    activeRequests: 3,
  };

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
    const fetchAvailableWork = async () => {
      try {
        const response = await getWorkList();
        if (response && response.data) {
          setAvailableWork(response.data);
        } else {
          console.error("No data returned");
        }
      } catch (error) {
        console.error("Error fetching work list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableWork();
  }, []);

  const handleRequestWork = (workId, e) => {
    e.stopPropagation();
    alert(`Request sent for work ID: ${workId}`);
  };

  const handleCardClick = (workId) => {
    navigate(`/work-details/${workId}`);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        <UserStatsSection userProfile={userProfile} />

        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <p className="text-center text-gray-600">Loading available work...</p>
          ) : (
            <AvailableWorkSection
              availableWork={availableWork}
              handleRequestWork={handleRequestWork}
              handleCardClick={handleCardClick}
            />
          )}

          <CompletedWorkSection recentCompletedWork={recentCompletedWork} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaterKartHomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import UserStatsSection from '../components/Home/UserStats';
import AvailableWorkSection from '../components/Home/AvailableWorks';
import CompletedWorkSection from '../components/Home/CompletedWork';

const CaterKartHomePage = () => {
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
            id: 3,
            place: "dfsgdfsg",
            date: "2025-07-11",
            time: "11:28:00",
            no_of_boys_needed: 3,
            attendees: 3,
            is_published: true
        },
        {
            id: 3,
            place: "dfsgdfsg",
            date: "2025-07-11",
            time: "11:28:00",
            no_of_boys_needed: 3,
            attendees: 3,
            is_published: true
        },
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
        e.stopPropagation();
        alert(`Request sent for work ID: ${workId}`);
    };

    const handleCardClick = (workId) => {
        navigate(`/work-details`);
    };

    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
                <UserStatsSection userProfile={userProfile} />

                <div className="max-w-6xl mx-auto px-6">
                    <AvailableWorkSection
                        availableWork={availableWork}
                        handleRequestWork={handleRequestWork}
                        handleCardClick={handleCardClick}
                    />

                    <CompletedWorkSection recentCompletedWork={recentCompletedWork} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CaterKartHomePage;
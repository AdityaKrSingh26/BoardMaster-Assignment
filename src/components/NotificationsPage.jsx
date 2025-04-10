import React from 'react'
import {
    FaArrowLeft,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import notifications from '../data/notifications.js';

// const notifications = [
//     {
//         id: 1,
//         title: "NCLEX Practice Test Tomorrow",
//         description: "Scheduled for 9:00 AM PST",
//         icon: "📝",
//         type: "exam"
//     },
//     {
//         id: 2,
//         title: "CE Hours Update",
//         description: "15 hours remaining for this period",
//         icon: "⏰",
//         type: "update"
//     },
//     {
//         id: 3,
//         title: "Achievement Unlocked",
//         description: "Completed 100 Critical Care Flashcards",
//         icon: "🏆",
//         type: "achievement"
//     }
// ];

function NotificationsPage() {
    const navigate = useNavigate();
    return (
        <div className="bg-white min-h-screen">
            <header className="bg-white p-4 flex items-center gap-4 border-b border-gray-200">
                <button
                    className="bg-transparent border-none text-gray-700 text-xl cursor-pointer p-2 focus:outline-none"
                    onClick={() => navigate('/')}
                >
                    <FaArrowLeft />
                </button>
                <h2 className="text-xl font-semibold m-0">Notifications</h2>
            </header>
            <div className="p-4">
                {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-4 p-4 border-b border-gray-200">
                        <div className="text-2xl min-w-[2rem] h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                            {notification.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="m-0 text-base font-medium text-gray-800">{notification.title}</h3>
                            <p className="mt-1 mb-0 text-sm text-gray-600">{notification.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotificationsPage
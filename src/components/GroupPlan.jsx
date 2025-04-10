import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaArrowLeft,
    FaChevronRight,
    FaUsers,
    FaUserPlus,
    FaChartBar,
    FaHeartbeat,
    FaCreditCard,
    FaCog,
    FaQuestionCircle
} from 'react-icons/fa';


function GroupPlan() {
    const navigate = useNavigate();
    
    const menuItems = [
        { 
            icon: <FaUsers size={18} />, 
            label: "Admins", 
            action: () => { } 
        },
        { 
            icon: <FaUsers size={18} />, 
            label: "Seats", 
            action: () => navigate('/seat') 
        },
        { 
            icon: <FaUserPlus size={18} />, 
            label: "Add User", 
            action: () => { } 
        },
        { 
            icon: <FaChartBar size={18} />, 
            label: "Group Statistics", 
            action: () => { } 
        },
        { 
            icon: <FaHeartbeat size={18} />, 
            label: "Usage", 
            action: () => { } 
        },
        { 
            icon: <FaCreditCard size={18} />, 
            label: "Subscription", 
            action: () => { } 
        },
    ]

    const moreItems = [
        { icon: <FaCog size={18} />, label: "Settings", action: () => { } },
        { icon: <FaQuestionCircle size={18} />, label: "Contact Us", action: () => { } },
    ]

    return (
        <div className="min-h-screen bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
            {/* Header */}
            <div className="p-4 border-b flex items-center">
                <button
                    className="mr-3"
                    onClick={() => navigate('/')}
                >
                    <FaArrowLeft size={20} />
                </button>
                <h2 className="text-lg font-medium">Group Plan</h2>
            </div>

            {/* School Info */}
            <div className="bg-purple-600 p-4 text-white">
                <div className="flex items-center">
                    <div className="h-12 w-12 mr-3 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold">
                        AB
                    </div>
                    <div>
                        <h3 className="font-bold">AB Med School</h3>
                        <p className="text-sm text-purple-200">university@abgrad.com</p>
                        <div className="mt-1 bg-green-500 text-white text-xs py-0.5 px-2 rounded-full inline-flex items-center">
                            <span className="mr-1 text-xs">●</span> Group Comprehensive Plan
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                    <h4 className="font-medium mb-2">Team</h4>
                    <div className="space-y-1">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                                onClick={item.action}
                            >
                                <div className="flex items-center">
                                    <span className="mr-3 text-gray-500">
                                        {item.icon}
                                    </span>
                                    <span>
                                        {item.label}
                                    </span>
                                </div>
                                <FaChevronRight size={16} className="text-gray-400" />
                            </div>
                        ))}
                    </div>

                    <h4 className="font-medium mt-6 mb-2">More</h4>
                    <div className="space-y-1 pb-24">
                        {moreItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                                onClick={item.action}
                            >
                                <div className="flex items-center">
                                    <span className="mr-3 text-gray-500">
                                        {item.icon}
                                    </span>
                                    <span>
                                        {item.label}
                                    </span>
                                </div>
                                <FaChevronRight
                                    size={16}
                                    className="text-gray-400"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupPlan;
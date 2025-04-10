import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaArrowLeft,
    FaSearch,
    FaChevronDown,
    FaChevronUp,
    FaPlus
} from "react-icons/fa";

function SeatsManagement() {
    const navigate = useNavigate();
    const [expandedUsers, setExpandedUsers] = useState([1, 2, 3, 4]);

    const users = [
        {
            id: 1,
            name: "Andrew Bojangles",
            email: "andrew_bojangles@gmail.com",
            status: "Active",
            certification: "NCLEX",
            lastSeen: "2 days ago",
            avatar: "https://robohash.org/user1.png?size=40x40",
        },
        {
            id: 2,
            name: "Andrew Bojangles",
            email: "andrew_bojangles@gmail.com",
            status: "Active",
            certification: "NCLEX",
            lastSeen: "3 days ago",
            avatar: "https://robohash.org/user2.png?size=40x40",
        },
        {
            id: 3,
            name: "Sarah Johnson",
            email: "sarah.johnson@example.com",
            status: "Active",
            certification: "NCLEX",
            lastSeen: "1 day ago",
            avatar: "https://robohash.org/user3.png?size=40x40",
        },
        {
            id: 4,
            name: "Michael Davis",
            email: "michael.davis@example.com",
            status: "Active",
            certification: "NCLEX",
            lastSeen: "5 days ago",
            avatar: "https://robohash.org/user4.png?size=40x40",
        },
    ];

    const toggleUserExpand = (userId) => {
        if (expandedUsers.includes(userId)) {
            setExpandedUsers(expandedUsers.filter((id) => id !== userId));
        } else {
            setExpandedUsers([...expandedUsers, userId]);
        }
    };

    return (
        <div className="min-h-screen bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
            {/* Header */}
            <div className="p-4 border-b flex items-center">
                <button
                    className="mr-3 text-gray-700"
                    onClick={() => navigate("/group")}
                >
                    <FaArrowLeft size={20} />
                </button>
                <h2 className="text-lg font-medium">Seats</h2>
                <div className="ml-auto relative">
                    <div className="w-5 h-5 bg-primary rounded-full text-white flex items-center justify-center text-xs">
                        1
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full cursor-pointer"></div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="p-4">
                <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        placeholder="Search"
                        className="pl-9 pr-9 py-2 w-full border rounded-md"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 8H12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M4 4H12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M4 12H12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto pb-24">
                <div className="p-4">
                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-500">Seats</h3>
                        <div className="flex items-baseline">
                            <span className="text-3xl font-bold">100</span>
                            <span className="ml-2 bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                                Active
                            </span>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                            <span className="text-gray-500">Cost Per User</span>
                            <span className="font-medium">$19.99</span>
                        </div>
                    </div>

                    <div className="flex items-center text-primary mb-4">
                        <FaPlus className="mr-2" size={14} />
                        <span className="text-sm">Copy Invite Link</span>
                    </div>

                    <div className="h-1 bg-gray-200 rounded-full mb-4">
                        <div className="h-1 bg-yellow-400 rounded-full w-1/4"></div>
                    </div>

                    {users.map((user) => (
                        <div key={user.id} className="mb-3 p-3 bg-white rounded-lg shadow">
                            <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 mr-3 rounded-full overflow-hidden">
                                        <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                                    </div>
                                    <span className="font-medium">{user.name}</span>
                                </div>
                                <button
                                    onClick={() => toggleUserExpand(user.id)}
                                >
                                    {expandedUsers.includes(user.id) ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                                </button>
                            </div>

                            {/* Always show the expanded content by default */}
                            {expandedUsers.includes(user.id) && (
                                <div className="pt-3 border-t">
                                    <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                                        <div>
                                            <span className="text-gray-500 block">Status:</span>
                                            <span>{user.status}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block">E-mail:</span>
                                            <span className="break-all">{user.email}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block">Certification:</span>
                                            <span>{user.certification}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block">Last used:</span>
                                            <span>{user.lastSeen}</span>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2">
                                        <button
                                            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50"
                                            onClick={() => navigate("/user")}
                                        >
                                            View Details
                                        </button>
                                        <button className="flex-1 border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50">
                                            Remove User
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Action Button */}
            <div className="p-4 border-t">
                <button
                    className="w-full bg-primary hover:bg-purple-700 text-white py-2 rounded-md"
                >
                    Add User
                </button>
            </div>
        </div>
    )
}

export default SeatsManagement
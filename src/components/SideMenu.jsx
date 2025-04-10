import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
    FaBook,
    FaQuestion,
    FaClipboardList,
    FaRegClipboard,
    FaTimes,
    FaChartLine,
    FaRegStickyNote,
} from 'react-icons/fa';
import { MdGroup } from "react-icons/md";

const menuItems = [
    { id: 1, title: 'Question Bank', icon: <FaQuestion />, path: '/' },
    { id: 2, title: 'Flashcard', icon: <FaBook />, path: '/' },
    { id: 3, title: 'Exams', icon: <FaClipboardList />, path: '/' },
    { id: 4, title: 'Study Plan', icon: <FaRegClipboard />, path: '/' },
    { id: 5, title: 'Analytics', icon: <FaChartLine />, path: '/' },
    { id: 6, title: 'Notes', icon: <FaRegStickyNote />, path: '/' },
    { id: 7, title: 'Group Plan', icon: <MdGroup />, path: '/group' }
];

function SideMenu({ isOpen, onClose }) {
    const navigate = useNavigate();

    const handleItemClick = (path) => {
        navigate(path);
        onClose(); // Close the menu after navigation
    };

    return (
        <div className={`fixed top-0 left-0 h-full w-full max-w-xs bg-white shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 flex flex-col`}>
            <div className="p-4 flex justify-end border-b border-gray-100">
                <button
                    className="text-2xl text-gray-500 focus:outline-none"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>
            </div>
            <div className="flex-1 py-4 overflow-y-auto">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        className="flex items-center gap-4 px-6 py-3 w-full text-left hover:bg-gray-100 focus:outline-none"
                        onClick={() => handleItemClick(item.path)}
                    >
                        <span className="text-primary text-xl">
                            {item.icon}
                        </span>
                        <span>
                            {item.title}
                        </span>
                    </button>
                ))}
            </div>
            <div className="p-4 border-t border-gray-100">
                <button 
                    className="flex items-center gap-4 px-4 py-3 w-full text-left focus:outline-none"
                    onClick={() => handleItemClick('/account')}
                >
                    <img
                        src="https://robohash.org/user123.png?size=40x40"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <span>Account</span>
                </button>
            </div>
        </div>
    )
}

export default SideMenu
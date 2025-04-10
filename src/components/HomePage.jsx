import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
    FaBook,
    FaQuestion,
    FaClipboardList,
    FaChartBar,
    FaNotesMedical,
    FaBell,
} from 'react-icons/fa';
import SideMenu from './SideMenu';
import { useNavigate } from 'react-router-dom';
import studyItems from '../data/studyItems';


function HomePage() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen">
            {/* Overlay when menu is open */}
            {isSideMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsSideMenuOpen(false)}
                />
            )}

            <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />

            {/* Header */}
            <header className="bg-primary p-4 flex justify-between items-center text-white shadow-lg">
                <button
                    className="text-xl focus:outline-none"
                    onClick={() => setIsSideMenuOpen(true)}
                >
                    <span>☰</span>
                </button>
                <div className="flex items-center gap-2">
                    <img
                        src="https://robohash.org/user123.png?size=40x40"
                        alt="Profile"
                        className="w-10 h-10 rounded-full bg-white"
                    />
                    <span>Hi, Sarah!</span>
                </div>
                <button
                    className="text-xl focus:outline-none"
                    onClick={() => navigate('/notifications')}
                >
                    <FaBell />
                </button>
            </header>

            {/* Main Content */}
            <main className="p-4 max-w-lg mx-auto">
                {/* Certification Card */}
                <div className="bg-primary text-white p-6 rounded-2xl mb-4 shadow-lg">
                    <h2 className="text-2xl font-bold m-0">NCLEX Certification</h2>
                </div>

                {/* Study Progress */}
                <div className="bg-white p-4 rounded-2xl mb-4 shadow-lg">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold m-0">Flashcard Review</h3>
                        <p className="text-gray-800 m-0">Mental Health</p>
                        <div className="flex justify-between items-center">
                            <span>Study time: 1 hour</span>
                            <button className="text-primary focus:outline-none">
                                Resume Session →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Study Tools Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-2xl flex flex-col gap-2 shadow-md">
                        <FaBook className="text-2xl text-primary" />
                        <span className="font-medium">Study Plan</span>
                        <p className="text-gray-700 text-sm">Follow Daily Tasks</p>
                        <span className="text-amber-500 text-sm">3 Tasks due</span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex flex-col gap-2 shadow-md">
                        <FaClipboardList className="text-2xl text-primary" />
                        <span className="font-medium">Flashcards</span>
                        <p className="text-gray-700 text-sm">Memorize Key Concepts</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex flex-col gap-2 shadow-md">
                        <FaQuestion className="text-2xl text-primary" />
                        <span className="font-medium">Question Bank</span>
                        <p className="text-gray-700 text-sm">Practice Key Concepts</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex flex-col gap-2 shadow-md">
                        <FaChartBar className="text-2xl text-primary" />
                        <span className="font-medium">Exams</span>
                        <p className="text-gray-700 text-sm">Test your Knowledge</p>
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-between mb-4">
                    <div className="w-20 text-center">
                        <div className="w-16 h-16 mx-auto">
                            <CircularProgressbar value={72} text="72%" />
                        </div>
                        <span className="block mt-2 text-sm">Daily Goals</span>
                    </div>
                    <div className="w-20 text-center">
                        <div className="w-16 h-16 mx-auto">
                            <CircularProgressbar value={45} text="45%" />
                        </div>
                        <span className="block mt-2 text-sm">CE Hours</span>
                    </div>
                    <div className="w-20 text-center">
                        <div className="w-16 h-16 mx-auto">
                            <CircularProgressbar value={24} text="24%" />
                        </div>
                        <span className="block mt-2 text-sm">Course Progress</span>
                    </div>
                </div>

                {/* Study Items List */}
                <div className="flex flex-col gap-4 mb-20">
                    {studyItems.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-md">
                            <div className="text-2xl text-primary">
                                {item.title.includes('Flashcards') ? <FaBook /> :
                                    item.title.includes('Medical') ? <FaNotesMedical /> :
                                        <FaQuestion />}
                            </div>
                            <div className="flex-1">
                                <h4 className="m-0 text-base font-medium">{item.title}</h4>
                                <p className="m-0 text-sm text-gray-500">{item.questions}</p>
                            </div>
                            <div className="text-right text-sm text-gray-500">
                                <span>{item.duration}</span>
                                {item.completed && <span className="text-green-500 ml-2">✓</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default HomePage
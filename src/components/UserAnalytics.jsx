import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaArrowLeft,
    FaCheck,
    FaChartLine
} from 'react-icons/fa';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function UserAnalytics() {
    const [activeTab, setActiveTab] = useState("exam");
    const navigate = useNavigate();

    // User data
    const userData = {
        name: "Andrew Bojangles",
        avatar: "https://robohash.org/user456.png?size=80x80",
        eligible: true,
        metrics: [
            { label: "Study Hours", value: "127" },
            { label: "CE Hours", value: "48" },
            { label: "Accuracy", value: "82%" },
            { label: "Avg. Pace", value: "1.2 hrs/wk" },
        ],
        subjects: [
            { name: "Mental Health", trend: 4, accuracy: "88%" },
            { name: "Pediatrics", trend: 3, accuracy: "72%" },
            { name: "OB/GYN", trend: 2, accuracy: "92%" },
            { name: "Critical Care", trend: 3, accuracy: "64%" },
            { name: "Pharmacology", trend: 5, accuracy: "80%" },
        ],
        performance: {
            exam: [
                { month: "May", score: 78, avgScore: 72 },
                { month: "Jun", score: 82, avgScore: 74 },
                { month: "Jul", score: 76, avgScore: 75 },
                { month: "Aug", score: 85, avgScore: 76 },
                { month: "Sep", score: 88, avgScore: 78 },
                { month: "Oct", score: 90, avgScore: 80 },
            ],
        },
        peerComparison: {
            yourScore: 85,
            medianScore: 70
        }
    }

    // Improved bell curve options
    const bellCurveOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    boxHeight: 8,
                    padding: 10,
                    font: {
                        size: 11
                    }
                }
            },
            tooltip: {
                callbacks: {
                    title: function (context) {
                        // Only show title for distribution points
                        if (context[0].datasetIndex === 0) {
                            return `Percentile: ${context[0].parsed.x}%`;
                        }
                        return '';
                    },
                    label: function (context) {
                        if (context.datasetIndex === 0) {
                            return `Students: ${(context.parsed.y * 100).toFixed(0)}`;
                        } else if (context.datasetIndex === 1) {
                            return `Your Score: ${userData.peerComparison.yourScore}%`;
                        } else if (context.datasetIndex === 2) {
                            return `Median Score: ${userData.peerComparison.medianScore}%`;
                        }
                        return '';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    text: 'Number of Students',
                    font: {
                        size: 12
                    }
                },
                ticks: {
                    font: {
                        size: 10
                    },
                    stepSize: 5,
                    callback: function (value) {
                        return value + '%';
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Score Percentile',
                    font: {
                        size: 12
                    }
                },
                ticks: {
                    font: {
                        size: 10
                    },
                    callback: function (value) {
                        if (value % 20 === 0) return value + '%';
                        return '';
                    }
                }
            }
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 5
            },
            line: {
                tension: 0.4
            }
        }
    };

    // Generate more realistic bell curve data points
    const generateBellCurve = () => {
        const points = [];
        for (let i = 0; i <= 100; i++) {
            // More realistic bell curve formula
            const x = i;
            const mean = 70; // Centered at 70% (median score)
            const stdDev = 12; // Standard deviation
            // Normal distribution formula
            const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
                Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
            // Scale y for better visualization (0-25 range)
            points.push({ x, y: y * 300 });
        }
        return points;
    };

    const bellCurveData = {
        labels: Array.from({ length: 101 }, (_, i) => i + '%'),
        datasets: [
            {
                label: 'Student Distribution',
                data: generateBellCurve(),
                borderColor: 'rgba(124, 58, 237, 1)', // Primary color
                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                fill: true,
                parsing: {
                    xAxisKey: 'x',
                    yAxisKey: 'y'
                },
                pointRadius: 0
            },
            {
                label: 'Your Score',
                data: [
                    { x: userData.peerComparison.yourScore, y: 0 },
                    { x: userData.peerComparison.yourScore, y: 25 }
                ],
                borderColor: '#EC4899', // Pink color
                borderWidth: 2,
                borderDash: [5, 5],
                pointRadius: 0,
                pointHoverRadius: 0
            },
            {
                label: 'Median Score',
                data: [
                    { x: userData.peerComparison.medianScore, y: 0 },
                    { x: userData.peerComparison.medianScore, y: 25 }
                ],
                borderColor: 'rgba(124, 58, 237, 1)', // Primary color
                borderWidth: 2,
                borderDash: [5, 5],
                pointRadius: 0,
                pointHoverRadius: 0
            }
        ]
    };

    // Performance data for exam tab
    const examPerformanceOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    boxHeight: 8,
                    padding: 10,
                    font: {
                        size: 11
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.parsed.y}%`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Score (%)',
                    font: {
                        size: 12
                    }
                },
                ticks: {
                    font: {
                        size: 10
                    },
                    callback: function (value) {
                        return value + '%';
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 10
                    }
                }
            }
        }
    };

    const examPerformanceData = {
        labels: userData.performance.exam.map(item => item.month),
        datasets: [
            {
                label: 'Your Score',
                data: userData.performance.exam.map(item => item.score),
                backgroundColor: 'rgba(124, 58, 237, 0.8)', // Primary color
                borderRadius: 4
            },
            {
                label: 'Class Average',
                data: userData.performance.exam.map(item => item.avgScore),
                backgroundColor: 'rgba(236, 72, 153, 0.8)', // Pink color
                borderRadius: 4
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
            {/* Header */}
            <div className="p-4 border-b flex items-center">
                <button
                    onClick={() => navigate('/seats')}
                    className="mr-3 text-gray-700"
                >
                    <FaArrowLeft size={20} />
                </button>
                <h2 className="text-lg font-medium">{userData.name}</h2>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto pb-24">
                <div className="p-4 space-y-6">
                    {/* User Info and Metrics */}
                    <div className="flex flex-col items-center">
                        <div className="h-16 w-16 mb-2 rounded-full overflow-hidden">
                            <img
                                src={userData.avatar}
                                alt={userData.name}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {userData.eligible && (
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs flex items-center mb-4">
                                <span className="text-green-500 mr-1 text-sm">●</span>
                                Eligible for Certification
                            </div>
                        )}

                        <div className="grid grid-cols-4 w-full text-center">
                            {userData.metrics.map((metric, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="text-xl font-bold">{metric.value}</span>
                                    <span className="text-xs text-gray-500">{metric.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Peer Comparison - Using Improved Chart.js */}
                    <div>
                        <h3 className="font-medium mb-3">Peer Comparison</h3>
                        <div className="h-56 w-full">
                            <Line options={bellCurveOptions} data={bellCurveData} />
                        </div>
                        <div className="mt-2 text-xs text-center text-gray-500">
                            You scored higher than {userData.peerComparison.yourScore > userData.peerComparison.medianScore ?
                                Math.round((userData.peerComparison.yourScore - 50) * 2) :
                                Math.round((100 - (userData.peerComparison.yourScore - 50) * 2))
                            }% of your peers
                        </div>
                    </div>

                    {/* Subject Trend */}
                    <div>
                        <h3 className="font-medium mb-3">Subject Trend</h3>
                        <div className="grid grid-cols-3 text-sm font-medium text-gray-500 mb-2">
                            <span>Topic</span>
                            <span>Trend</span>
                            <span>Accuracy</span>
                        </div>

                        {userData.subjects.map((subject, index) => (
                            <div key={index} className="grid grid-cols-3 items-center py-2 border-t text-sm">
                                <span>{subject.name}</span>
                                <div className="flex items-center">
                                    {Array.from({ length: subject.trend }).map((_, i) => (
                                        <div key={i} className="w-1 h-4 bg-primary mr-0.5"></div>
                                    ))}
                                </div>
                                <span>{subject.accuracy}</span>
                            </div>
                        ))}
                    </div>

                    {/* Performance - Using Chart.js */}
                    <div>
                        <h3 className="font-medium mb-3">Performance</h3>
                        <div className="w-full">
                            {/* Custom tabs */}
                            <div className="grid grid-cols-2 mb-4 bg-gray-100 p-1 rounded-md">
                                <button
                                    className={`py-2 rounded-md text-sm font-medium ${activeTab === "exam" ? "bg-white shadow-sm" : "text-gray-600"}`}
                                    onClick={() => setActiveTab("exam")}
                                >
                                    Exam
                                </button>
                                <button
                                    className={`py-2 rounded-md text-sm font-medium ${activeTab === "question-bank" ? "bg-white shadow-sm" : "text-gray-600"}`}
                                    onClick={() => setActiveTab("question-bank")}
                                >
                                    Question Bank
                                </button>
                            </div>

                            {/* Exam content with Chart.js */}
                            {activeTab === "exam" && (
                                <div className="h-64">
                                    <Bar options={examPerformanceOptions} data={examPerformanceData} />
                                </div>
                            )}

                            {/* Question Bank content */}
                            {activeTab === "question-bank" && (
                                <div className="h-48 flex items-center justify-center text-gray-500">
                                    <div className="flex flex-col items-center">
                                        <FaChartLine className="text-gray-300 text-4xl mb-3" />
                                        <p>Question Bank data not available</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAnalytics;
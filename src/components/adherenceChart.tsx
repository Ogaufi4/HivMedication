'use client';
import React, { useEffect, useRef, useState } from 'react';

const adherenceData = [
    { study: 'Nachega et al. (2014)', adherent: 78, nonAdherent: 22, location: 'Sub-Saharan Africa', regimen: 'First-line ART' },
    { study: 'Mills et al. (2006)', adherent: 55, nonAdherent: 45, location: 'North America', regimen: 'HAART' },
    { study: 'Ortego et al. (2012)', adherent: 62, nonAdherent: 38, location: 'Europe', regimen: 'Combination ART' },
    { study: 'Bangsberg et al. (2000)', adherent: 70, nonAdherent: 30, location: 'USA', regimen: 'Protease Inhibitor-based' },
    { study: 'Gill et al. (2010)', adherent: 65, nonAdherent: 35, location: 'Asia', regimen: 'First-line ART' },
    { study: 'Mannheimer et al. (2002)', adherent: 58, nonAdherent: 42, location: 'USA', regimen: 'NNRTI-based' },
    { study: 'Oyugi et al. (2007)', adherent: 72, nonAdherent: 28, location: 'Africa', regimen: 'First-line ART' }
];

interface CircularProgressProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, size = 120, strokeWidth = 8 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90" width={size} height={size}>
                <circle
                    className="text-gray-200"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className="text-indigo-600 transition-all duration-1000 ease-out"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">{percentage}%</span>
            </div>
        </div>
    );
};

export default function AdherenceChart() {
    const [isVisible, setIsVisible] = useState(false);
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => {
            if (chartRef.current) {
                observer.unobserve(chartRef.current);
            }
        };
    }, []);

    return (
        <section className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
                        HIV Medication Adherence Rates
                    </h2>
                    <p className="text-gray-600">
                        Comparative analysis of ART adherence rates across different studies and regions
                    </p>
                </div>

                <div 
                    ref={chartRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {adherenceData.map((item, idx) => (
                        <div 
                            key={idx}
                            className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            <div className="flex flex-col items-center">
                                <CircularProgress 
                                    percentage={item.adherent} 
                                    size={120}
                                    strokeWidth={8}
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.study}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {item.location}
                                    </p>
                                    <p className="text-sm text-indigo-600 font-medium mt-1">
                                        {item.regimen}
                                    </p>
                                </div>
                                <div className="mt-4 flex justify-between w-full text-sm">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></div>
                                        <span className="text-gray-600">Adherent</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
                                        <span className="text-gray-600">Non-adherent</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl transform transition-all duration-1000 delay-1000">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Key Findings on HIV Medication Adherence
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                                <span className="text-gray-600">Highest adherence rate: {Math.max(...adherenceData.map(d => d.adherent))}% ({adherenceData.find(d => d.adherent === Math.max(...adherenceData.map(d => d.adherent)))?.study})</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                                <span className="text-gray-600">Lowest adherence rate: {Math.min(...adherenceData.map(d => d.adherent))}% ({adherenceData.find(d => d.adherent === Math.min(...adherenceData.map(d => d.adherent)))?.study})</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                                <span className="text-gray-600">Average adherence rate: {Math.round(adherenceData.reduce((acc, curr) => acc + curr.adherent, 0) / adherenceData.length)}%</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                                <span className="text-gray-600">Adherence rates vary significantly by region and treatment regimen</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                                <span className="text-gray-600">First-line ART regimens generally show higher adherence rates</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                                <span className="text-gray-600">Regional differences highlight the importance of context-specific adherence strategies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
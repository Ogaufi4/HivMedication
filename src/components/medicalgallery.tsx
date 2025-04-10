'use client';
import React, { useEffect, useRef, useState } from 'react';

const medicationImages = [
    {
        url: "https://images.pexels.com/photos/8385316/pexels-photo-8385316.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "HIV Treatment Planning",
        description: "Organizing daily antiretroviral therapy (ART) medications for optimal adherence",
        span: "col-span-2"
    },
    {
        url: "https://images.pexels.com/photos/5207367/pexels-photo-5207367.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "ART Medication Routine",
        description: "Taking prescribed antiretroviral medications consistently to maintain viral suppression",
        span: "row-span-2"
    },
    {
        url: "https://images.pexels.com/photos/8395812/pexels-photo-8395812.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "HIV Treatment Support",
        description: "Managing multiple medications and supplements for comprehensive HIV care",
        span: "col-span-2"
    },
    {
        url: "https://images.pexels.com/photos/7195041/pexels-photo-7195041.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "HIV Care Team",
        description: "Working with healthcare providers to monitor treatment effectiveness and manage side effects",
        span: "row-span-2 col-span-2"
    }
];

export default function MedicationGallery() {
    const [isVisible, setIsVisible] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }
        };
    }, []);

    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
                        <span className="text-red-600">HIV</span> & <span className="text-blue-600">AIDS</span> Care
                    </h2>
                    <p className="text-gray-600">
                        Visual guide to proper medication management and adherence techniques
                    </p>
                </div>
                
                <div 
                    ref={galleryRef}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8"
                >
                    {medicationImages.map((image, idx) => (
                        <div 
                            key={idx}
                            className={`relative group overflow-hidden rounded-xl shadow-lg ${image.span} 
                                transform transition-all duration-500 hover:shadow-2xl
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}
                            style={{ 
                                animationDelay: `${idx * 200}ms`,
                                height: image.span.includes('row-span-2') ? '500px' : '250px'
                            }}
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                                    <p className="text-sm opacity-90">{image.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <p className="text-sm text-gray-500">
                        Images showcase various aspects of medication management and adherence practices.
                        Always follow your healthcare provider's specific instructions.
                    </p>
                </div>
            </div>
        </section>
    );
} 
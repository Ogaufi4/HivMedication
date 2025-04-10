'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Faqs() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeaderVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    const toggleFaq = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const faqsList = [
        {
            q: "What is HIV?",
            a: "HIV (Human Immunodeficiency Virus) is a virus that attacks the body's immune system, specifically the CD4 cells (T cells), which help the immune system fight off infections. If left untreated, HIV can lead to AIDS (Acquired Immunodeficiency Syndrome).",
            href: "https://www.who.int/news-room/fact-sheets/detail/hiv-aids",
        },
        {
            q: "What are the symptoms of HIV?",
            a: "HIV symptoms vary depending on the stage of infection. <br/><b>Acute HIV infection:</b> Fever, fatigue, swollen lymph nodes, sore throat, rash, muscle and joint pain. <br/><b>Chronic HIV infection:</b> May be asymptomatic for years. <br/><b>AIDS:</b> Rapid weight loss, recurring fever, extreme tiredness, prolonged swelling of lymph glands, and opportunistic infections.",
            href: "https://www.cdc.gov/hiv/basics/whatishiv.html",
        },
        {
            q: "How is HIV transmitted?",
            a: "HIV is transmitted through: <br/><b>Unprotected sexual contact</b> with an infected person <br/><b>Sharing needles</b> or syringes with someone who has HIV <br/><b>Mother-to-child transmission</b> during pregnancy, childbirth, or breastfeeding <br/><b>Blood transfusions</b> (rare in countries with proper screening)",
            href: "https://www.cdc.gov/hiv/basics/transmission.html",
        },
        {
            q: "Why is medication adherence important for HIV?",
            a: "Adhering to HIV medication (ART - Antiretroviral Therapy) is crucial for: <br/>- Maintaining an undetectable viral load <br/>- Preventing the development of drug resistance <br/>- Preserving immune system function <br/>- Reducing the risk of transmission to others <br/>- Improving overall health and quality of life",
            href: "https://www.cdc.gov/hiv/basics/livingwithhiv/treatment.html",
        },
        {
            q: "How can medication adherence be improved?",
            a: "Strategies to improve HIV medication adherence include: <br/>- Setting daily reminders or alarms <br/>- Using pill organizers <br/>- Keeping medications in a visible place <br/>- Establishing a routine <br/>- Using mobile apps for tracking <br/>- Regular follow-ups with healthcare providers",
            href: "https://www.cdc.gov/hiv/basics/livingwithhiv/treatment.html",
        }
    ];

    return (
        <section className='py-14 animate-fade-in-up'>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div
                    ref={headerRef}
                    className={`space-y-5 sm:text-center sm:max-w-md sm:mx-auto transition-opacity duration-1000 ${
                        isHeaderVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h3 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
                        HIV FAQs
                    </h3>
                    <p className="text-gray-600">
                        Everything you need to know about HIV and AIDS. Can't find the answer you're looking for? Feel free to {" "}
                        <a
                            className='text-indigo-600 font-semibold whitespace-nowrap'
                            href='#'>
                            contact us
                        </a>.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="mx-auto sm:max-w-xs">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search for answers"
                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                    </form>
                </div>
                <div className='mt-12'>
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <summary
                                    onClick={() => toggleFaq(idx)}
                                    className="flex items-center justify-between font-semibold text-gray-700 cursor-pointer hover:text-indigo-600 transition-colors"
                                >
                                    {item.q}
                                    <span className="ml-2 text-indigo-600">
                                        {expandedIndex === idx ? '-' : '+'}
                                    </span>
                                </summary>
                                {expandedIndex === idx && (
                                    <p
                                        dangerouslySetInnerHTML={{ __html: item.a }}
                                        className='text-gray-600 leading-relaxed mt-2'
                                    ></p>
                                )}
                                <a
                                    href={item.href}
                                    className="flex items-center gap-x-1 text-sm text-indigo-600 hover:text-indigo-400 duration-150 font-medium"
                                >
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
'use client';
import React, { useState } from 'react';

export default function Faqs() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
                <div className='flex-1'>
                    <div className="max-w-lg">
                        <h3 className='font-semibold text-indigo-600'>
                            Frequently asked questions
                        </h3>
                        <p className='mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl'>
                            All information you need to know
                        </p>
                    </div>
                </div>
                <div className='flex-1 mt-12 md:mt-0'>
                    <ul className='space-y-4 divide-y'>
                        {faqsList.map((item, idx) => (
                            <li
                                className="py-5"
                                key={idx}>
                                <summary
                                    onClick={() => toggleFaq(idx)}
                                    className="flex items-center justify-between font-semibold text-gray-700 cursor-pointer hover:text-indigo-600 transition-colors">
                                    {item.q}
                                    <span className="ml-2 text-indigo-600">
                                        {expandedIndex === idx ? '-' : '+'}
                                    </span>
                                </summary>
                                {expandedIndex === idx && (
                                    <>
                                        <p
                                            dangerouslySetInnerHTML={{ __html: item.a }}
                                            className='mt-3 text-gray-600 leading-relaxed'>
                                        </p>
                                        <a
                                            href={item.href}
                                            className="flex items-center gap-x-1 text-sm text-indigo-600 hover:text-indigo-400 duration-150 font-medium mt-2"
                                        >
                                            Read more
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
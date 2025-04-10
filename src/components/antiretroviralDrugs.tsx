'use client';
import React from 'react';

const drugCategories = [
    {
        category: 'Nucleoside Reverse Transcriptase Inhibitors (NRTIs)',
        description: 'Based on human nucleoside structural counterparts utilized by HIV for crafting its cytidines, NRTIs get incorporated into the viral DNA chain during reverse transcription. They lack a 3\' hydroxyl group which prevents further elongation of the viral DNA.',
        examples: ['Zidovudine (AZT)', 'Didanosine', 'Zalcitabine', 'Tenofovir', 'Lamivudine', 'Emtricitabine']
    },
    {
        category: 'Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs)',
        description: 'NNRTIs bind to a lipophobic cavity near the functional region of the reverse transcriptase enzyme, causing structural changes that prevent the addition of nucleotides to the growing DNA chain.',
        examples: ['Nevirapine', 'Delavirdine', 'Efavirenz']
    },
    {
        category: 'Protease Inhibitors (PIs)',
        description: 'PIs bind to the HIV protease enzyme, preventing the cleavage of viral proteins that is critical for the development of new HIV particles.',
        examples: ['Ritonavir', 'Lopinavir', 'Nelfinavir']
    },
    {
        category: 'Integrase Strand Transfer Inhibitors (INSTIs)',
        description: 'These agents inhibit the integrase enzyme responsible for integrating viral DNA into the host cell genome, preventing viral replication.',
        examples: ['Dolutegravir', 'Bictegravir', 'Raltegravir']
    },
    {
        category: 'Co-receptor Antagonists',
        description: 'These drugs block the co-receptors that HIV uses to enter cells.',
        examples: ['Maraviroc']
    }
];

const treatmentRegimens = {
    firstLine: [
        {
            name: 'Tenofovir Disoproxil Fumarate (TDF) + Lamivudine (3TC) + Dolutegravir (DTG)',
            description: 'Widely recommended regimen, especially in regions with limited resources'
        },
        {
            name: 'Tenofovir Alafenamide (TAF) + Emtricitabine (FTC) + Dolutegravir (DTG)',
            description: 'Favored for its better renal safety profile compared to TDF'
        },
        {
            name: 'Dolutegravir (DTG) + Lamivudine (3TC)',
            description: 'A two-drug regimen that is non-inferior to three-drug regimens in certain cases'
        }
    ],
    secondLine: [
        {
            name: 'Protease Inhibitors (PIs) based regimens',
            description: 'Such as Lopinavir/ritonavir (LPV/r) + 2 NRTIs, used when first-line therapy fails due to resistance or intolerability'
        }
    ]
};

export default function AntiretroviralDrugs() {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">
                        HIV Antiretroviral Drugs
                    </h2>
                    <p className="text-gray-600">
                        Understanding the different types of antiretroviral drugs and their mechanisms of action
                    </p>
                </div>

                <div className="space-y-8">
                    {drugCategories.map((category, idx) => (
                        <div 
                            key={idx}
                            className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-500 hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                                {category.category}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {category.description}
                            </p>
                            <div className="mt-4">
                                <h4 className="text-sm font-medium text-gray-700 mb-2">Examples:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.examples.map((example, i) => (
                                        <span 
                                            key={i}
                                            className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                                        >
                                            {example}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Treatment Regimens
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-indigo-50 rounded-lg p-6">
                            <h4 className="text-xl font-semibold text-indigo-600 mb-4">
                                First-Line Regimens
                            </h4>
                            <ul className="space-y-4">
                                {treatmentRegimens.firstLine.map((regimen, idx) => (
                                    <li key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                                        <h5 className="font-medium text-gray-800">{regimen.name}</h5>
                                        <p className="text-sm text-gray-600 mt-1">{regimen.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-indigo-50 rounded-lg p-6">
                            <h4 className="text-xl font-semibold text-indigo-600 mb-4">
                                Second-Line Regimens
                            </h4>
                            <ul className="space-y-4">
                                {treatmentRegimens.secondLine.map((regimen, idx) => (
                                    <li key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                                        <h5 className="font-medium text-gray-800">{regimen.name}</h5>
                                        <p className="text-sm text-gray-600 mt-1">{regimen.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
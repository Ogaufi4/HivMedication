'use client';
import React, { useState } from 'react';
import { Bell, Calendar, Clock, FileText, Pill, Plus, Settings, Trash2, Heart, Stethoscope, Users } from 'lucide-react';

export default function AdherenceTools() {
    const [medications, setMedications] = useState([
        { id: 1, name: 'Dolutegravir', time: '08:00', dose: '50mg' },
        { id: 2, name: 'Lamivudine', time: '08:00', dose: '300mg' },
        { id: 3, name: 'Tenofovir', time: '08:00', dose: '300mg' }
    ]);

    const [newMedication, setNewMedication] = useState({
        name: '',
        time: '',
        dose: ''
    });

    const handleAddMedication = () => {
        if (newMedication.name && newMedication.time && newMedication.dose) {
            setMedications([...medications, { ...newMedication, id: medications.length + 1 }]);
            setNewMedication({ name: '', time: '', dose: '' });
        }
    };

    const handleDeleteMedication = (id: number) => {
        setMedications(medications.filter(med => med.id !== id));
    };

    return (
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-6">
                        <Heart className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
                        HIV Medication Management
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Stay on track with your treatment regimen and maintain optimal health with our comprehensive management tools.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Medication Tracker */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100">
                                <Pill className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">ART Medication Tracker</h3>
                        </div>
                        <div className="mt-8 space-y-6">
                            {medications.map((med) => (
                                <div key={med.id} className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                                    <div>
                                        <h4 className="font-medium text-gray-800">{med.name}</h4>
                                        <p className="text-sm text-indigo-600">{med.dose}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-indigo-600">{med.time}</span>
                                        <button 
                                            onClick={() => handleDeleteMedication(med.id)}
                                            className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Medication Name"
                                    value={newMedication.name}
                                    onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                />
                                <div className="flex gap-4">
                                    <input
                                        type="time"
                                        value={newMedication.time}
                                        onChange={(e) => setNewMedication({ ...newMedication, time: e.target.value })}
                                        className="w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Dose"
                                        value={newMedication.dose}
                                        onChange={(e) => setNewMedication({ ...newMedication, dose: e.target.value })}
                                        className="w-1/2 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                    />
                                </div>
                                <button
                                    onClick={handleAddMedication}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors duration-200 font-medium"
                                >
                                    <Plus className="w-5 h-5" />
                                    Add Medication
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Reminder Settings */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100">
                                <Bell className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">Treatment Reminders</h3>
                        </div>
                        <div className="mt-8 space-y-6">
                            <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                                <h4 className="font-medium text-gray-800 mb-4">Adherence Alerts</h4>
                                <div className="space-y-4">
                                    <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors duration-200">
                                        <input type="checkbox" className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-600" />
                                        <span className="text-gray-700">Daily Medication Reminders</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors duration-200">
                                        <input type="checkbox" className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-600" />
                                        <span className="text-gray-700">Refill Reminders</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors duration-200">
                                        <input type="checkbox" className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-600" />
                                        <span className="text-gray-700">Clinic Appointment Alerts</span>
                                    </label>
                                </div>
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors duration-200 font-medium">
                                <Settings className="w-5 h-5" />
                                Save Settings
                            </button>
                        </div>
                    </div>

                    {/* Health Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100">
                                <Stethoscope className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">Health Management Plan</h3>
                        </div>
                        <div className="mt-8 space-y-6">
                            <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-5 h-5 text-indigo-600" />
                                    <h4 className="font-medium text-gray-800">Healthcare Team Contacts</h4>
                                </div>
                                <p className="text-gray-600">
                                    Keep track of your healthcare providers, case managers, and support team contacts.
                                </p>
                            </div>
                            <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <Calendar className="w-5 h-5 text-indigo-600" />
                                    <h4 className="font-medium text-gray-800">Treatment Plan</h4>
                                </div>
                                <p className="text-gray-600">
                                    Document your medication schedule, lab test dates, and important health milestones.
                                </p>
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors duration-200 font-medium">
                                <FileText className="w-5 h-5" />
                                Download Health Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
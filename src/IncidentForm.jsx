import React, { useState } from 'react';

const IncidentForm = ({ setIncidents, setFormVisible }) => {
    const [formData, setFormData] = useState({ title: "", description: "", severity: "Medium" });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.title.trim()) errors.title = "Title is required";
        if (!formData.description.trim()) errors.description = "Description is required";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        const newIncident = {
            id: Date.now(),
            title: formData.title,
            description: formData.description,
            severity: formData.severity,
            reported_at: new Date().toISOString(),
        };
        setIncidents(prev => [...prev, newIncident]);
        setFormData({ title: "", description: "", severity: "Medium" });
        setFormVisible(false);
    };

    return (
        <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Report New Incident</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${formErrors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {formErrors.title && <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-2 border ${formErrors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    />
                    {formErrors.description && <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
                    <div className="flex gap-4">
                        {["Low", "Medium", "High"].map(level => (
                            <label key={level} className="inline-flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="severity"
                                    value={level}
                                    checked={formData.severity === level}
                                    onChange={handleChange}
                                    className="form-radio h-4 w-4 text-blue-600"
                                />
                                <span className="ml-2">{level}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                        Submit Report
                    </button>
                </div>
            </form>
        </div>
    );
};

export default IncidentForm;
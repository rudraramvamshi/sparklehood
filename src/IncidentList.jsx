import React from 'react';
import IncidentCard from './IncidentCard';

const IncidentList = ({ incidents }) => (
    <>
        <div className="mb-2 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Incident List</h2>
            <span className="text-sm text-gray-500">{incidents.length} incidents found</span>
        </div>
        {incidents.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
                <i className="fas fa-search text-gray-400 text-4xl mb-3"></i>
                <p className="text-gray-600">No incidents match your current filters</p>
            </div>
        ) : (
            <div className="space-y-4">
                {incidents.map(incident => (
                    <IncidentCard key={incident.id} incident={incident} />
                ))}
            </div>
        )}
    </>
);

export default IncidentList;
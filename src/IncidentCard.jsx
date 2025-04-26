import React, { useState } from 'react';

const IncidentCard = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  const formatDate = (date) => new Date(date).toLocaleString();

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{incident.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            incident.severity === 'High' ? 'bg-red-100 text-red-800' :
            incident.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            {incident.severity}
          </span>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          Reported: {formatDate(incident.reported_at)}
        </div>
        {expanded && <p className="text-gray-700 mb-4">{incident.description}</p>}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          {expanded ? (
            <>
              <i className="fas fa-chevron-up mr-1"></i> Hide Details
            </>
          ) : (
            <>
              <i className="fas fa-chevron-down mr-1"></i> View Details
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default IncidentCard;
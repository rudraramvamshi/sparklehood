import React, { useState } from 'react';
import { IoChevronUpOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

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

        {expanded && (
          <p className="text-gray-700 mb-4">{incident.description}</p>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-2"
        >
          {expanded ? (
            <>
              <IoIosArrowDown className="w-4 h-4" />
              <span>Hide Details</span>
            </>
          ) : (
            <>
              <IoChevronUpOutline className="w-4 h-4" />
              <span>View Details</span>
            </>
          )}
        </button>

      </div>
    </div>
  );
};

export default IncidentCard;

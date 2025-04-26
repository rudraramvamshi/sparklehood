import React from 'react';
import { FaPlus } from "react-icons/fa6";

const IncidentFilters = ({
  dropdownRef,
  severityFilter,
  setSeverityFilter,
  isOpen,
  setIsOpen,
  sortOrder,
  setSortOrder,
  formVisible,
  setFormVisible
}) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
      {/* Severity Filter */}
      <div className="relative w-full sm:w-60" ref={dropdownRef}>
        <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Severity</label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 flex justify-between items-center"
        >
          <span>{severityFilter}</span>
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} ml-2`}></i>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            {['All', 'Low', 'Medium', 'High'].map(option => (
              <button
                key={option}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                  severityFilter === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => {
                  setSeverityFilter(option);
                  setIsOpen(false);
                }}
              >
                {option === 'All' ? 'All Severities' : option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sort Filter */}
      <div className="w-full sm:w-60">
        <label className="block text-sm font-medium text-gray-700 mb-1">Sort by Date</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>

    {/* Report New Incident Button */}
    <button
  onClick={() => setFormVisible(!formVisible)}
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center mt-4 md:mt-0"
>
  <FaPlus className="mr-2" />
  {formVisible ? 'Cancel' : 'Report New Incident'}
</button>

  </div>
);

export default IncidentFilters;

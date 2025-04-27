import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const IncidentFilters = ({
  dropdownRef,
  severityFilter,
  setSeverityFilter,
  isOpen,
  setIsOpen,
  sortOrder,
  setSortOrder,
  formVisible,
  setFormVisible,
  searchQuery,
  setSearchQuery
}) => (
  <div className="flex flex-col gap-6 mb-6">

    {/* Search Bar Full Width */}
    <div className="relative w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search incidents..."
        className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
      />
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
      </div>
    </div>

    {/* Filters Row */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

      {/* Severity Dropdown */}
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
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${severityFilter === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
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

      {/* Sort Dropdown */}
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

      {/* Report New Incident Button */}
      <button
        onClick={() => setFormVisible(!formVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center mt-4 md:mt-0"
      >
        {formVisible ? <FaMinus className="mr-2" /> : <FaPlus className="mr-2" />}
        {formVisible ? 'Cancel' : 'Report New Incident'}
      </button>

    </div>

  </div>
);

export default IncidentFilters;

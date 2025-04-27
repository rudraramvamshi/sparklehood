import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import IncidentForm from './IncidentForm';
import IncidentFilters from './IncidentFilters';
import IncidentList from './IncidentList';
import Footer from './Footer';



const App = () => {
  const dropdownRef = useRef(null);
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: "Biased Recommendation Algorithm",
      description: "Algorithm consistently favored certain demographics in job recommendations, leading to unequal opportunity distribution. The issue was traced to training data imbalances and has been addressed by retraining with a more diverse dataset and implementing fairness metrics.",
      severity: "Medium",
      reported_at: "2025-03-15T10:00:00Z"
    },
    {
      id: 2,
      title: "LLM Hallucination in Critical Info",
      description: "LLM provided incorrect safety procedure information when asked about emergency protocols in a chemical plant. This could have led to dangerous situations if followed. The model has been fine-tuned with additional safety data and now includes disclaimers for safety-critical information.",
      severity: "High",
      reported_at: "2025-04-01T14:30:00Z"
    },
    {
      id: 3,
      title: "Minor Data Leak via Chatbot",
      description: "Chatbot inadvertently exposed non-sensitive user metadata in its responses. While no personal identifying information was revealed, this represented a deviation from expected behavior. The issue has been patched and all logs have been reviewed for similar occurrences.",
      severity: "Low",
      reported_at: "2025-03-20T09:15:00Z"
    },
    {
      id: 4,
      title: "Facial Recognition False Positive",
      description: "Security system incorrectly identified an employee as an unauthorized person, triggering unnecessary security protocols. Investigation revealed issues with lighting conditions affecting the algorithm's accuracy. System has been updated with improved lighting normalization.",
      severity: "Medium",
      reported_at: "2025-04-10T11:45:00Z"
    },
    {
      id: 5,
      title: "AI Assistant Unauthorized Purchase",
      description: "Voice assistant processed a purchase without explicit confirmation from the user due to misinterpreted background conversation. The incident highlighted the need for stronger confirmation protocols. Multi-factor authentication has now been implemented for all purchase actions.",
      severity: "High",
      reported_at: "2025-04-18T16:20:00Z"
    }
  ]);

  const [filteredIncidents, setFilteredIncidents] = useState(incidents);
  const [severityFilter, setSeverityFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("newest");
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    let result = [...incidents];
    if (severityFilter !== "All") {
      result = result.filter(i => i.severity === severityFilter);
    }
    result.sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.reported_at) - new Date(a.reported_at)
        : new Date(a.reported_at) - new Date(b.reported_at)
    );
    setFilteredIncidents(result);
  }, [incidents, severityFilter, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-8">
          <IncidentFilters
            dropdownRef={dropdownRef}
            severityFilter={severityFilter}
            setSeverityFilter={setSeverityFilter}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            formVisible={formVisible}
            setFormVisible={setFormVisible}
          />
          {formVisible && (
            <IncidentForm setIncidents={setIncidents} setFormVisible={setFormVisible} />
          )}
          <IncidentList incidents={filteredIncidents} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
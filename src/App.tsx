import React, { useState } from 'react';
import Header from './components/Header';
import DataList from './components/DataList';
import AddDataButton from './components/AddDataButton';
import DataModal from './components/DataModal';
import { Report } from './types';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reports, setReports] = useState<Report[]>([
    {
      id: '1',
      title: 'Quarterly Social Performance',
      addedBy: 'Jane Doe',
      details: 'Metrics and insights for Q1.',
      reportLink: 'https://example.com/q1-report',
      dateAdded: new Date().toISOString(),
    },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddReport = (report: Omit<Report, 'id' | 'dateAdded'>) => {
    const newReport = {
      ...report,
      id: Date.now().toString(),
      dateAdded: new Date().toISOString(),
    };
    
    setReports([newReport, ...reports]);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="w-full md:w-auto"></div>
          <AddDataButton onClick={handleOpenModal} />
        </div>
        <DataList reports={reports} />
      </div>
      {isModalOpen && (
        <DataModal 
          onClose={handleCloseModal} 
          onSave={handleAddReport}
        />
      )}
    </div>
  );
}

export default App;
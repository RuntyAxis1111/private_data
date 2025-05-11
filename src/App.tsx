import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import Header from './components/Header';
import DataList from './components/DataList';
import AddDataButton from './components/AddDataButton';
import DataModal from './components/DataModal';
import { supabase } from './lib/supabase';
import type { DataRow } from './types/supabase';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reports, setReports] = useState<DataRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReports = async () => {
    try {
      const { data, error } = await supabase
        .from('Data_HBL_All')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;

      setReports(data || []);

      // If no data exists, create initial seed
      if (!data || data.length === 0) {
        const seedData = {
          Tittle: 'Cómo usar la plataforma',
          Autor: 'System',
          Details: 'Guía rápida',
          Link: 'https://example.com'
        };

        const { error: seedError } = await supabase
          .from('Data_HBL_All')
          .insert([seedData]);

        if (seedError) throw seedError;

        // Fetch again to get the seeded data
        const { data: updatedData } = await supabase
          .from('Data_HBL_All')
          .select('*')
          .order('created_at', { ascending: true });

        setReports(updatedData || []);
      }
    } catch (error) {
      toast.error('Error loading reports');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddReport = async (report: { title: string; addedBy: string; details: string; reportLink: string }) => {
    try {
      const newReport = {
        Tittle: report.title,
        Autor: report.addedBy,
        Details: report.details,
        Link: report.reportLink
      };

      const { error } = await supabase
        .from('Data_HBL_All')
        .insert([newReport]);

      if (error) throw error;

      toast.success('Report added successfully');
      await fetchReports();
      handleCloseModal();
    } catch (error) {
      toast.error('Error adding report');
      console.error('Error:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Toaster position="top-right" />
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
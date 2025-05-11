import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import Header from './components/Header';
import DataList from './components/DataList';
import AddDataButton from './components/AddDataButton';
import DataModal from './components/DataModal';
import { supabase } from './lib/supabase';
import type { DataRow } from './types/supabase';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reports, setReports] = useState<DataRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDesc, setIsDesc] = useState(true);

  const fetchReports = async (descending: boolean) => {
    try {
      const { data, error } = await supabase
        .from('Data_HBL_All')
        .select('*')
        .order('created_at', { ascending: !descending });

      if (error) throw error;

      setReports(data || []);

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

        const { data: updatedData } = await supabase
          .from('Data_HBL_All')
          .select('*')
          .order('created_at', { ascending: !descending });

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
    fetchReports(isDesc);
  }, [isDesc]);

  const toggleOrder = () => setIsDesc(!isDesc);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
      await fetchReports(isDesc);
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
    <>
      <video
        src="/public/bg-cipher.mp4"
        poster="/public/bg-cipher.jpg"
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover opacity-40 blur-sm pointer-events-none"
      />
      <div className="fixed inset-0 bg-black/70" />
      <div className="relative min-h-screen flex flex-col font-inter">
        <Toaster position="top-right" />
        <Header />
        <div className="container mx-auto max-w-[1280px] px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={toggleOrder}
              className="text-sm backdrop-blur px-4 py-1 border border-white/20 rounded-full hover:bg-white/10 transition-colors md:static fixed bottom-6 right-6 z-10"
              aria-label="Cambiar orden de fechas"
            >
              {isDesc ? 'Más reciente primero' : 'Más antiguo primero'}
            </button>
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
    </>
  );
}

export default App;
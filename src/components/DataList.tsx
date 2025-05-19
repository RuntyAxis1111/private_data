import React from 'react';
import DataCard from './DataCard';
import DataTable from './DataTable'; // Import the new DataTable component
import type { DataRow } from '../types/supabase';

interface DataListProps {
  reports: DataRow[];
  viewMode: 'card' | 'table'; // Add viewMode prop
}

const DataList: React.FC<DataListProps> = ({ reports, viewMode }) => {
  if (viewMode === 'table') {
    return <DataTable reports={reports} />;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {reports.map(report => (
        <DataCard key={report.id} report={report} />
      ))}
    </div>
  );
};

export default DataList;

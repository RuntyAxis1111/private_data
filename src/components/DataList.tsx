import React from 'react';
import DataCard from './DataCard';
import type { DataRow } from '../types/supabase';

interface DataListProps {
  reports: DataRow[];
}

const DataList: React.FC<DataListProps> = ({ reports }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {reports.map(report => (
        <DataCard key={report.id} report={report} />
      ))}
    </div>
  );
};

export default DataList;
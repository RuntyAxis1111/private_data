import React from 'react';
import DataCard from './DataCard';
import { Report } from '../types';

interface DataListProps {
  reports: Report[];
}

const DataList: React.FC<DataListProps> = ({ reports }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reports.map(report => (
        <DataCard key={report.id} report={report} />
      ))}
    </div>
  );
};

export default DataList;
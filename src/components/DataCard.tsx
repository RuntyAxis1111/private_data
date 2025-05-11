import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { DataRow } from '../types/supabase';

interface DataCardProps {
  report: DataRow;
}

const DataCard: React.FC<DataCardProps> = ({ report }) => {
  return (
    <div className="border-2 border-yellow-400 bg-black mb-6 p-5 transition-all duration-200 hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]">
      <h3 className="text-yellow-400 text-xl font-bold mb-2">{report.Tittle}</h3>
      <div className="mb-2 text-gray-300">
        <span className="text-white font-semibold">Added by:</span> {report.Autor}
      </div>
      <div className="mb-4 text-gray-300">
        <span className="text-white font-semibold">Details:</span> {report.Details}
      </div>
      <a 
        href={report.Link || '#'} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
      >
        <ExternalLink size={16} className="mr-1" />
        Open report
      </a>
    </div>
  );
};

export default DataCard;
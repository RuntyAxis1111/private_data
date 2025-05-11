import React from 'react';
import { ExternalLink } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import type { DataRow } from '../types/supabase';

interface DataCardProps {
  report: DataRow;
}

const DataCard: React.FC<DataCardProps> = ({ report }) => {
  return (
    <div className="border border-[#FFD700] bg-black rounded p-5 transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,.6)] relative max-w-[380px] mx-auto">
      <div className="absolute right-4 top-3 text-[12px] font-normal text-[#E0E0E0]">
        {format(parseISO(report.created_at), 'dd MMM yyyy', { locale: es })}
      </div>
      <h3 className="text-[#FFD700] text-xl font-medium mb-2 pr-24">{report.Tittle}</h3>
      <div className="mb-2 text-gray-300">
        <span className="text-white font-medium">Added by:</span> {report.Autor}
      </div>
      <div className="mb-4 text-gray-300">
        <span className="text-white font-medium">Details:</span> {report.Details}
      </div>
      <a 
        href={report.Link || '#'} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-[#FFD700] hover:text-[#FFD700]/85 transition-colors"
      >
        <ExternalLink size={16} className="mr-1" />
        Open report
      </a>
    </div>
  );
};

export default DataCard;
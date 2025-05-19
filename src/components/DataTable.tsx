import React from 'react';
import { ExternalLink } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import type { DataRow } from '../types/supabase';

interface DataTableProps {
  reports: DataRow[];
}

const DataTable: React.FC<DataTableProps> = ({ reports }) => {
  return (
    <div className="overflow-x-auto bg-black text-white rounded border border-[#FFD700]">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-900">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Added By
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Details
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Date Added
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Link
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {reports.map(report => (
            <tr key={report.id} className="hover:bg-gray-800 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                {report.Tittle}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {report.Autor}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {report.Details}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {format(parseISO(report.created_at), 'dd MMM yyyy', { locale: es })}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#FFD700]">
                <a
                  href={report.Link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-[#FFD700]/85 transition-colors"
                >
                  <ExternalLink size={14} className="mr-1" />
                  Open
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

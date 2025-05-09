import React, { useState } from 'react';
import { Report } from '../types';
import { X } from 'lucide-react';

interface DataModalProps {
  onClose: () => void;
  onSave: (report: Omit<Report, 'id' | 'dateAdded'>) => void;
}

const DataModal: React.FC<DataModalProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    addedBy: '',
    details: '',
    reportLink: '',
  });

  const [errors, setErrors] = useState({
    title: false,
    addedBy: false,
    details: false,
    reportLink: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    if (value.trim() !== '') {
      setErrors(prev => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      title: formData.title.trim() === '',
      addedBy: formData.addedBy.trim() === '',
      details: formData.details.trim() === '',
      reportLink: formData.reportLink.trim() === '',
    };
    
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error)) {
      return;
    }
    
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border-2 border-yellow-400 w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-xl text-yellow-400 font-bold mb-6">Add New Data</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="title">
              Report title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full bg-black border ${errors.title ? 'border-red-500' : 'border-gray-700'} p-2 text-white focus:border-yellow-400 focus:outline-none`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">Report title is required</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="addedBy">
              Added by
            </label>
            <input
              type="text"
              id="addedBy"
              name="addedBy"
              value={formData.addedBy}
              onChange={handleChange}
              className={`w-full bg-black border ${errors.addedBy ? 'border-red-500' : 'border-gray-700'} p-2 text-white focus:border-yellow-400 focus:outline-none`}
            />
            {errors.addedBy && <p className="text-red-500 text-sm mt-1">Added by is required</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-white mb-1" htmlFor="details">
              Details
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={3}
              className={`w-full bg-black border ${errors.details ? 'border-red-500' : 'border-gray-700'} p-2 text-white focus:border-yellow-400 focus:outline-none`}
            />
            {errors.details && <p className="text-red-500 text-sm mt-1">Details are required</p>}
          </div>
          
          <div className="mb-6">
            <label className="block text-white mb-1" htmlFor="reportLink">
              Report link (URL)
            </label>
            <input
              type="url"
              id="reportLink"
              name="reportLink"
              value={formData.reportLink}
              onChange={handleChange}
              placeholder="https://"
              className={`w-full bg-black border ${errors.reportLink ? 'border-red-500' : 'border-gray-700'} p-2 text-white focus:border-yellow-400 focus:outline-none`}
            />
            {errors.reportLink && <p className="text-red-500 text-sm mt-1">Report link is required</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 px-4 hover:bg-yellow-300 transition-colors"
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataModal;
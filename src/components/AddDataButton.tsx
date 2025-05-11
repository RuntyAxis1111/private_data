import React from 'react';

interface AddDataButtonProps {
  onClick: () => void;
}

const AddDataButton: React.FC<AddDataButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#FFD700] text-black font-medium py-2 px-6 hover:opacity-85 transition-all duration-200"
    >
      ADD DATA
    </button>
  );
};

export default AddDataButton;
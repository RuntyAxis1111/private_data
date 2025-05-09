import React from 'react';

interface AddDataButtonProps {
  onClick: () => void;
}

const AddDataButton: React.FC<AddDataButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-400 text-black font-bold py-2 px-6 hover:bg-yellow-300 transition-colors duration-200 transform hover:scale-105"
    >
      ADD DATA
    </button>
  );
};

export default AddDataButton;
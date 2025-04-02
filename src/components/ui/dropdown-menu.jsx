import React, { useState } from "react";

const DropdownMenu = ({ children }) => {
  return <div className="relative">{children}</div>;
};

const DropdownMenuTrigger = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-gray-300 rounded-md">
      {children}
    </button>
  );
};

const DropdownMenuContent = ({ children, isOpen }) => {
  return (
    isOpen && (
      <div className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-md rounded-md">
        {children}
      </div>
    )
  );
};

const DropdownMenuItem = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="block w-full px-4 py-2 text-left hover:bg-gray-200">
      {children}
    </button>
  );
};

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };
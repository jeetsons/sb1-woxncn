import React from 'react';
import classNames from 'classnames';
import { IoMdClose } from 'react-icons/io';

interface WalletInputProps {
  value: string;
  onChange: (value: string) => void;
  onRemove: () => void;
  error?: string;
  showRemove: boolean;
}

export const WalletInput: React.FC<WalletInputProps> = ({
  value,
  onChange,
  onRemove,
  error,
  showRemove
}) => {
  return (
    <div className="group relative transition-all duration-200 ease-in-out">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="0x..."
        className={classNames(
          "w-full px-4 py-2 border rounded-lg transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          "placeholder:text-gray-400",
          {
            'border-red-500 focus:ring-red-500': error,
            'border-gray-300': !error,
            'pr-10': showRemove
          }
        )}
      />
      {showRemove && (
        <button
          onClick={onRemove}
          className={classNames(
            "absolute right-3 top-1/2 -translate-y-1/2",
            "text-gray-400 hover:text-red-500 transition-colors",
            "p-1 rounded-full hover:bg-gray-100",
            "focus:outline-none focus:ring-2 focus:ring-red-500"
          )}
        >
          <IoMdClose className="text-lg" />
        </button>
      )}
      {error && (
        <p className="text-red-500 text-sm mt-1 transition-all duration-200">
          {error}
        </p>
      )}
    </div>
  );
};
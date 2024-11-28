import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { WalletInput } from './WalletInput';
import { WalletAddress } from '../types';
import { validateAddress } from '../utils/validation';

interface AddressFormProps {
  addresses: WalletAddress[];
  onAddAddress: () => void;
  onUpdateAddress: (id: string, value: string) => void;
  onRemoveAddress: (id: string) => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  addresses,
  onAddAddress,
  onUpdateAddress,
  onRemoveAddress,
}) => {
  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <WalletInput
          key={address.id}
          value={address.value}
          onChange={(value) => onUpdateAddress(address.id, value)}
          onRemove={() => onRemoveAddress(address.id)}
          error={address.value ? validateAddress(address.value) : undefined}
          showRemove={addresses.length > 1}
        />
      ))}
      
      <button
        onClick={onAddAddress}
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <IoMdAdd className="text-xl" />
        Add Another Address
      </button>
    </div>
  );
};
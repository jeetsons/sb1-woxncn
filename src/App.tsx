import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { AddressForm } from './components/AddressForm';
import { WalletAddress } from './types';

function App() {
  const [addresses, setAddresses] = useState<WalletAddress[]>([
    { id: '1', value: '' }
  ]);

  const addNewAddress = () => {
    setAddresses(prev => [
      ...prev,
      { id: crypto.randomUUID(), value: '' }
    ]);
  };

  const updateAddress = (id: string, value: string) => {
    setAddresses(prev => prev.map(addr =>
      addr.id === id ? { ...addr, value } : addr
    ));
  };

  const removeAddress = (id: string) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Wallet Addresses
      </h1>
      
      <AddressForm
        addresses={addresses}
        onAddAddress={addNewAddress}
        onUpdateAddress={updateAddress}
        onRemoveAddress={removeAddress}
      />
    </Layout>
  );
}

export default App;
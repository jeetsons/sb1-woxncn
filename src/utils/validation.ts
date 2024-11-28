export const isValidEthereumAddress = (address: string): boolean => {
  const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;
  return ethereumAddressRegex.test(address);
};

export const validateAddress = (address: string): string | undefined => {
  if (!address) return 'Address is required';
  if (!address.startsWith('0x')) return 'Address must start with 0x';
  if (!isValidEthereumAddress(address)) return 'Invalid Ethereum address';
  return undefined;
};
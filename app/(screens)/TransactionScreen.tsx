import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function TransactionScreen() {
  const router = useRouter();

  // Placeholder for blockchain transaction (e.g., using Web3.js with Polygon)
  const handleRecordTransaction = () => {
    // Add blockchain logic here (e.g., interact with smart contract)
    alert('Transaction recorded (placeholder)');
  };

  return (
    <View className="flex-1 p-5 bg-white">
      <Text className="text-2xl font-bold mb-6 text-center text-gray-800">Record Transaction</Text>
      <Button title="Record Transaction" onPress={handleRecordTransaction} color="#4CAF50" />
      <Button title="Back" onPress={() => router.back()} color="#4CAF50" className="mt-4" />
    </View>
  );
}

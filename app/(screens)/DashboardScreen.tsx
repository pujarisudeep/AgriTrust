import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function DashboardScreen() {
  const { role, walletAddress } = useLocalSearchParams<{ role: string; walletAddress: string }>();
  const router = useRouter();

  return (
    <View className="flex-1 p-5 bg-white">
      <Text className="text-2xl font-bold mb-6 text-center text-gray-800">
        AgriTrust Dashboard - Role: {role} | Wallet: {walletAddress?.slice(0, 6)}...
      </Text>
      <Button title="Record Transaction" onPress={() => router.push('/(screens)/TransactionScreen')} color="#4CAF50" />
      <Button title="View Traceability" onPress={() => router.push('/(screens)/TraceabilityScreen')} color="#4CAF50" className="mt-4" />
      <Button title="Back" onPress={() => router.back()} color="#4CAF50" className="mt-4" />
    </View>
  );
}

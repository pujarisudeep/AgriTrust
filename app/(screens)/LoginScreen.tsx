import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [role, setRole] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('');
  const router = useRouter();

  const handleLogin = () => {
    if (role && walletAddress) {
      router.push({
        pathname: '/(screens)/DashboardScreen',
        params: { role, walletAddress },
      });
    }
  };

  return (
    <View className="flex-1 justify-center p-5 bg-white">
      <Text className="text-2xl font-bold mb-6 text-center text-gray-800">AgriTrust Login</Text>
      <TextInput
        className="border border-gray-300 p-3 mb-4 rounded-lg"
        placeholder="Select Role (Farmer/Trader/Retailer/Consumer)"
        value={role}
        onChangeText={setRole}
      />
      <TextInput
        className="border border-gray-300 p-3 mb-4 rounded-lg"
        placeholder="Wallet Address"
        value={walletAddress}
        onChangeText={setWalletAddress}
      />
      <Button title="Login" onPress={handleLogin} color="#4CAF50" />
      <Text className="mt-4 text-center text-gray-600">Or use SMS/IVR for farmers (integrated separately)</Text>
    </View>
  );
}

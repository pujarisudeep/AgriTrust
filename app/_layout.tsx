import { Stack } from 'expo-router';
import React from 'react';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide headers for immersive UI
      }}
    >
      <Stack.Screen name="(screens)/LoginScreen" options={{ title: 'Login' }} />
      <Stack.Screen name="(screens)/DashboardScreen" options={{ title: 'Dashboard' }} />
      <Stack.Screen name="(screens)/TransactionScreen" options={{ title: 'Record Transaction' }} />
      <Stack.Screen name="(screens)/TraceabilityScreen" options={{ title: 'Traceability' }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}

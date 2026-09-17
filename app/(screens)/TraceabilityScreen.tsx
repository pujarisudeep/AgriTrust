// app/(screens)/TraceabilityScreen.tsx
import { Camera, CameraType } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function TraceabilityScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [traceData, setTraceData] = useState<string>('');
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const cameraPermission = await requestPermission();
      setHasPermission(cameraPermission?.granted);
      if (!cameraPermission?.granted) {
        alert('Camera permission denied! Please enable it in settings.');
      }
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    try {
      const response = await fetch(`YOUR_BACKEND_URL/trace/${data}`); // Replace with actual URL
      const result = await response.json();
      setTraceData(JSON.stringify(result, null, 2));
    } catch (error) {
      setTraceData('Error fetching traceability data');
    }
  };

  if (hasPermission === null) {
    return <Text className="text-center text-gray-600 mt-10">Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text className="text-center text-gray-600 mt-10">No camera access. Please enable it in settings.</Text>;
  }

  return (
    <View className="flex-1 bg-white">
      <Camera
        style={StyleSheet.absoluteFillObject}
        type={CameraType.back}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: [Camera.Constants.BarCodeType.qr], // QR code type
        }}
      />
      {scanned && (
        <View className="absolute bottom-10 left-0 right-0 p-5">
          <Button title="Scan Again" onPress={() => setScanned(false)} color="#4CAF50" />
        </View>
      )}
      <Text className="absolute top-5 left-5 text-white text-lg font-bold">Scan QR for Traceability</Text>
      {traceData && (
        <View className="absolute bottom-20 left-5 right-5 p-3 bg-white rounded-lg">
          <Text className="text-gray-800">Traceability Data: {traceData}</Text>
        </View>
      )}
      <Button title="Back" onPress={() => router.back()} color="#4CAF50" className="absolute bottom-5 left-5" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

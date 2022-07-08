import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, Platform } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">Modal</Text>
      <View
        className="w-10/12 h-px my-8"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />
      <Button title="Right button" onPress={() => Alert.alert('Right button pressed')} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
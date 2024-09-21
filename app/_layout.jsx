import React from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

const RootLayout = () => {
  SplashScreen.preventAutoHideAsync();
  const [fonts, error] = useFonts({});
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

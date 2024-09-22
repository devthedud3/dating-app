import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

const RootLayout = () => {
  SplashScreen.preventAutoHideAsync();
  const [loaded, error] = useFonts({
    pblack: require("../assets/fonts/Poppins-Black.ttf"),
    pblacki: require("../assets/fonts/Poppins-BlackItalic.ttf"),
    pbold: require("../assets/fonts/Poppins-Bold.ttf"),
    pboldi: require("../assets/fonts/Poppins-BoldItalic.ttf"),
    pxbold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    pxboldi: require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    pregular: require("../assets/fonts/Poppins-Regular.ttf"),
    psemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    plight: require("../assets/fonts/Poppins-Light.ttf"),
    pthin: require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { Redirect } from "expo-router";

const Alerts = () => {
  const { isLoggedIn, setIsLoggedIn, setUser } = useGlobalContext();
  useEffect(() => {
    setIsLoggedIn(false);
    setUser(null);
  }, []);

  if (!isLoggedIn) return <Redirect href="/" />;

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Alerts</Text>
    </View>
  );
};

export default Alerts;

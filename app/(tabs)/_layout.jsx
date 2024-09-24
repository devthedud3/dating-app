import React from "react";
import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#2D5DEC",
        }}
      >
        <Tabs.Screen
          name="feed"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="connectdevelop" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="connections"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="wifi" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <AntDesign name="message1" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="alerts"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome6 name="bell" size={20} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

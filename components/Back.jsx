import { Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Back = () => {
  return (
    <Pressable
      className="w-8 h-8 justify-center items-center  rounded-full"
      onPress={() => {
        router.back();
      }}
    >
      <Ionicons name="arrow-back" size={24} color="black" />
    </Pressable>
  );
};

export default Back;

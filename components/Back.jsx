import { View, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Back = () => {
  return (
    <View className="w-full px-4 h-16 justify-center">
      <TouchableOpacity
        className="w-8 h-8 justify-center items-center"
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Back;

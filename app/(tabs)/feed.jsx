import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Feed = () => {
  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="w-full p-4">
        <Text className="text-xs font-pbold text-gray-500">EVENTS</Text>
      </View>
    </SafeAreaView>
  );
};

export default Feed;

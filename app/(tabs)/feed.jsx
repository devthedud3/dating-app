import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Back from "../../components/Back";

const Feed = () => {
  return (
    <SafeAreaView className="flex-1 items-center">
      <Back />
      <View className="w-full p-4">
        <Text className="text-xs font-pbold text-gray-500">EVENTS</Text>
      </View>
    </SafeAreaView>
  );
};

export default Feed;

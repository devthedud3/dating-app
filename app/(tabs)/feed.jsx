import { View, Text, SafeAreaView, StatusBar, Pressable } from "react-native";
import React, { useState } from "react";
import Back from "../../components/Back";
import OnboardingModal from "../../components/modals/onboarding";

const Feed = () => {
  const [showModal, setShowModal] = useState(true);
  if (showModal)
    return (
      <SafeAreaView className="absolute h-full bg-white">
        <OnboardingModal isVisible={showModal} setIsVisible={setShowModal} />
        {/* <StatusBar hidden /> */}
      </SafeAreaView>
    );
  return (
    <>
      <SafeAreaView className="flex-1 items-center bg-white">
        <View className="p-4 w-full">
          <View className="flex w-full justify-between flex-row py-2">
            <Back />
          </View>
          <View className="w-full ">
            <Text className="text-xs font-pbold text-gray-500">EVENTS</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Feed;

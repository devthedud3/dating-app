import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Back from "../../components/Back";

const SignUp = () => {
  return (
    <SafeAreaView className="h-full items-center">
      <Back />
      <View className="flex-1 h-full w-full px-4">
        <Text>SignUp</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

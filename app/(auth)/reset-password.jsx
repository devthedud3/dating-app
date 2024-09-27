import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, Alert } from "react-native";

import FormField from "../../components/FormField";
import Btn from "../../components/Btn";
import Back from "../../components/Back";

import { icons } from "../../assets";
import { reset } from "../../lib/authFunctions";

const Reset = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendResetMessage = async () => {
    try {
      const { success, error } = await reset(form);
      if (error) return Alert.alert("Error", error);
    } catch (e) {
      return Alert.alert("System Error", e);
    }
  };

  return (
    <SafeAreaView className="h-full flex items-center ">
      <Back />

      <View className=" w-full px-4 min-h-[85vh] items-center">
        <Image
          source={icons.logo_small}
          resizeMode="contain"
          className="h-12 w-12 mb-5"
        />
        <Text className="text-2xl font-pbold">Reset password</Text>
        <Text className="font-pregular text-center px-6 mt-4 text-zinc-600">
          Enter the email address associated with your account and we'll send
          instructions on how to reset your password.
        </Text>
        <FormField
          name="Email Address"
          value={form.email}
          formStyles="mt-5 w-full"
          keyboardType="email-address"
          onChange={(text) => setForm({ email: text })}
        />
        <Btn
          title="Send Instructions"
          containerStyles="w-full mt-5"
          primary
          isLoading={isSubmitting}
          handlePress={sendResetMessage}
        />
      </View>
    </SafeAreaView>
  );
};

export default Reset;

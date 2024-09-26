import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, Alert } from "react-native";
import { Link, router } from "expo-router";

import FormField from "../../components/FormField";
import Btn from "../../components/Btn";
import Back from "../../components/Back";

import { icons } from "../../assets";
import { login } from "../../lib/authFunctions";
import { isValidEmail } from "../../lib/helper";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const authenticate = async () => {
    let inputError = isValidEmail(form.email);
    if (inputError) return Alert.alert("Error", inputError);

    setIsSubmitting(true);

    try {
      const data = await login(form);

      if (data.error) {
        throw new Error(data.error);
      }
      setForm({
        email: "",
        password: "",
      });
      router.push("/feed");
    } catch (error) {
      Alert.alert("Error", error.message || "An unknown error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h-full flex items-center ">
      <Back />

      <View className=" w-full px-4 items-center">
        <Image
          source={icons.logo_small}
          resizeMode="contain"
          className="h-12 w-12 mb-5"
        />
        <Text className="text-2xl font-pbold">Log in</Text>
        <Text className="font-pregular text-center px-6 text-zinc-600">
          Your next opportunity could be right next door, just waiting for you.
        </Text>
        <FormField
          name="Email"
          value={form.email}
          formStyles="mt-5 w-full"
          keyboardType="email-address"
          onChange={(text) => setForm({ ...form, email: text })}
        />
        <FormField
          name="Password"
          value={form.password}
          formStyles="mt-5 w-full"
          keyboardType="password"
          onChange={(text) => setForm({ ...form, password: text })}
        />
        <Btn
          title="Log In"
          containerStyles="w-full mt-5"
          primary
          isLoading={isSubmitting}
          handlePress={authenticate}
        />
        <Text className="font-pregular text-center mt-5">
          Don't have an account?{" "}
          <Link className="font-pregular text-primary" href="/sign-up">
            Create Account
          </Link>
        </Text>
        <Link href="/feed">Feed</Link>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

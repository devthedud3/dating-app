import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";

import FormField from "../../components/FormField";
import Btn from "../../components/Btn";
import { icons } from "../../assets";
import Back from "../../components/Back";
import { register } from "../../lib/authFunctions";
import {
  isValidUsername,
  isValidEmail,
  isValidPassword,
} from "../../lib/helper";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const createAccount = async () => {
    let inputError =
      isValidUsername(form.username) ||
      isValidEmail(form.email) ||
      isValidPassword(form.password);

    if (inputError) return Alert.alert("Error", inputError);

    setIsSubmitting(true);

    try {
      const data = await register(form);

      if (data.error) {
        throw new Error(data.error);
      }

      setForm({
        username: "",
        email: "",
        password: "",
      });
      router.replace("/sign-in");
    } catch (error) {
      Alert.alert("Error", error.message || "An unknown error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h-full flex items-center justify-center">
      <Back />
      <View className="px-4 w-full min-h-[83vh] items-center">
        <Image
          source={icons.logo_small}
          resizeMode="contain"
          className="h-12 w-12 mb-5"
        />
        <Text className="text-2xl font-pbold">Create a new account</Text>
        <Text className="font-pregular text-center px-6 text-zinc-600">
          Small distance, big results—start networking locally today.
        </Text>
        <FormField
          name="Username"
          value={form.username}
          formStyles="mt-5 w-full"
          keyboardType="text"
          onChange={(e) => setForm({ ...form, username: e })}
        />
        <FormField
          name="Email"
          value={form.email}
          formStyles="mt-5 w-full"
          keyboardType="email-address"
          onChange={(e) => setForm({ ...form, email: e })}
        />
        <FormField
          name="Password"
          value={form.password}
          formStyles="mt-5 w-full"
          keyboardType="password"
          onChange={(e) => setForm({ ...form, password: e })}
        />
        <Btn
          title="Create Account"
          containerStyles="w-full mt-5"
          primary
          handlePress={createAccount}
          isLoading={isSubmitting}
        />
        <Text className="font-pregular text-center mt-5">
          Already have an account?{" "}
          <Link className="font-pregular text-primary" href="/sign-in">
            Log in here
          </Link>
        </Text>
        <Link href="/feed">Feed</Link>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

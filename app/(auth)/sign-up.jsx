import {
  View,
  Text,
  SafeAreaView,
  Image,
  Platform,
  Alert,
  KeyboardAvoidingView,
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
    firstName: "",
    lastName: "",
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "center",
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <View behavior="position" className="p-4 w-full h-auto items-center">
          <Image
            source={icons.logo_small}
            resizeMode="contain"
            className="h-24 w-24 mb-5"
          />
          <Text className="text-2xl font-pbold">Create a new account</Text>
          <Text className="font-pregular text-center px-6 text-zinc-600">
            Small distance, big results—start networking locally today.
          </Text>
          {/* <View className="flex flex-row mt-10">
            <FormField
              name="First Name"
              value={form.username}
              formStyles="flex-1 mr-1"
              keyboardType="default"
              placeholder="Chicken"
              onChange={(e) => setForm({ ...form, firstName: e })}
            />
            <FormField
              name="Last Name"
              value={form.username}
              formStyles="flex-1 ml-1"
              keyboardType="default"
              placeholder="Smith"
              onChange={(e) => setForm({ ...form, lastName: e })}
            />
          </View> */}
          <FormField
            name="Email"
            value={form.email}
            formStyles="mt-5 w-full"
            keyboardType="email-address"
            placeholder="email@example.com"
            onChange={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            name="Mobile Number"
            value={form.password}
            formStyles="mt-5 w-full"
            keyboardType="password"
            secureTextEntry
            placeholder="1 (212) 234-5678"
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

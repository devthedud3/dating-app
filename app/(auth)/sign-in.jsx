import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Link, router } from "expo-router";

import FormField from "../../components/FormField";
import Btn from "../../components/Btn";
import Back from "../../components/Back";

import { icons } from "../../assets";
import { login } from "../../lib/authFunctions";
import { isValidEmail } from "../../lib/helper";
import { useGlobalContext } from "../../context/GlobalContext";

const SignIn = () => {
  const { setUser, setIsLoading, setIsLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [remember, setRemember] = useState(false);

  const authenticate = async () => {
    let inputError = isValidEmail(form.email);
    if (inputError) return Alert.alert("Error", inputError);

    setIsSubmitting(true);

    try {
      const { user, error } = await login(form);

      if (error) {
        throw new Error(error);
      }

      setForm({
        email: "",
        password: "",
      });

      setUser(user);
      setIsLoggedIn(true);
      setIsLoading(false);

      router.replace("/");
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
        <View className="p-4 w-full">
          <View className=" w-full items-center">
            <Image
              source={icons.logo_small}
              resizeMode="contain"
              className="h-24 w-24 mb-5"
            />
            <Text className="text-2xl font-pbold">Log in</Text>
            <Text className="font-pregular text-center px-6 text-zinc-600">
              Your next opportunity could be right next door, just waiting for
              you.
            </Text>
            <FormField
              name="Email"
              value={form.email}
              formStyles="mt-5 w-full"
              keyboardType="email-address"
              placeholder="email@example.com"
              onChange={(text) => setForm({ ...form, email: text })}
            />
            <FormField
              name="Password"
              value={form.password}
              formStyles="mt-5 w-full"
              keyboardType="password"
              placeholder="•••••••••••"
              onChange={(text) => setForm({ ...form, password: text })}
            />
            <View className="flex flex-row w-full items-center justify-between">
              <View className="py-4 flex flex-row gap-2 items-center justify-center">
                <View
                  className="p-[2px] border rounded-full"
                  onPress={() => setRemember(!remember)}
                >
                  <TouchableOpacity
                    onPress={() => setRemember(!remember)}
                    className={`h-3 w-3 rounded-full ${remember && "bg-black"}`}
                  />
                </View>
                <Text className="font-pregular text-sm">Remember me</Text>
              </View>
              <View className="py-2 flex flex-row gap-2 items-center justify-center">
                <Link className="font-pregular text-sm" href="/reset-password">
                  Forgot password?
                </Link>
              </View>
            </View>
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
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;

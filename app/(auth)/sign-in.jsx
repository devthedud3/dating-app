import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";

import FormField from "../../components/FormField";
import Btn from "../../components/Btn";
import Ionicons from "@expo/vector-icons/Ionicons";
import { icons } from "../../assets";
import { TouchableOpacity } from "react-native";
import Back from "../../components/Back";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="h-full flex items-center ">
      <Back />

      <View className=" w-full px-4 items-center">
        <Image
          source={icons.logo_small}
          resizeMode="contain"
          className="h-12 w-12 mb-5"
        />
        <Text className="text-xl font-pbold">Log in</Text>
        <Text className="font-pregular text-center px-6 text-zinc-600">
          Your next opportunity could be right next door, just waiting for you.
        </Text>
        <FormField
          name="Email"
          value={form.email}
          formStyles="mt-5 w-full"
          keyboardType="email"
          onChange={(e) => setForm({ ...form, email: e })}
        />
        <FormField
          name="Password"
          value={form.password}
          formStyles="mt-5 w-full"
          keyboardType="password"
          onChange={(e) => setForm({ ...form, password: e })}
        />
        <Btn title="Log In" containerStyles="w-full mt-5" primary />
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

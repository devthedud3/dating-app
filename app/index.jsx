import { Link, Redirect, router } from "expo-router";
import { SafeAreaView, Text, View, Image } from "react-native";

import i2 from "../assets/signup_1.png";
import Btn from "../components/Btn";
import { icons } from "../assets";
import { useGlobalContext } from "../context/GlobalContext";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/feed" />;

  return (
    <SafeAreaView className="h-full items-center bg-white">
      <View className="items-center w-full h-full justify-between px-8">
        <View className="py-10 items-center">
          <Image
            source={icons.logo_full}
            className="h-12 mb-5"
            resizeMode="contain"
          />
          <Image
            source={i2}
            className="max-w-[380px] h-[280px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-2xl font-pbold text-center">
              Your Local{" "}
              <Text className="text-primary font-pblack">Bridge</Text> to New
              Connections Right Around the Corner
            </Text>
            <Text className="text-sm mt-2 font-plight text-center">
              Build powerful connections starting in your neighborhood.
            </Text>
          </View>
        </View>
        <View className="w-full items-center">
          <Btn
            containerStyles={"mt-10 w-full"}
            title={"Log In"}
            primary
            handlePress={() => router.push("/sign-in")}
          />
          <Btn
            containerStyles={" mt-2 w-full"}
            title={"Sign Up"}
            handlePress={() => router.push("/sign-up")}
          />
          <Text className="text-xs mt-2 text-center">
            By signing in you agree to Bridge's Terms and Conditions and our
            Privacy Policy.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

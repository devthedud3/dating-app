import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Back from "../../components/Back";

const Connections = () => {
  const [connections, setConnections] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://retoolapi.dev/s1oFnF/data");
      const data = await response.json();
      setConnections(data);
    })();
  }, []);
  return (
    <SafeAreaView className="flex-1 items-center">
      <Back />
      <View className="w-full p-4 h-full">
        <Text className="text-xs font-pbold text-gray-500">
          NEW CONNECTIONS
        </Text>
        <ScrollView>
          <View className="h-full flex-row flex-wrap gap-5 mt-5 items-center ">
            {connections.map((value) => (
              <View key={value.username} className="h-fit justify-center">
                <Image
                  source={{ uri: value.avatar }}
                  className="h-16 w-16 border border-zinc-200 rounded-full"
                  resizeMode="contain"
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Connections;

import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";

const FormField = ({ name, value, onChange, keyboardType, formStyles }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View className={`space-y-2 ${formStyles}`}>
      <Text className="text-sm font-pregular">{name}</Text>
      <View className="w-full h-12 px-4 flex flex-row items-center bg-gray-200 rounded-lg border-2 border-gray-300  focus:border-primary">
        <TextInput
          className="flex-1 font-psemibolds"
          value={value}
          onChange={onChange}
          secureTextEntry={keyboardType === "password" && !isVisible}
        />
        <TouchableOpacity className="" onPress={() => setIsVisible(!isVisible)}>
          {keyboardType === "password" &&
            (!isVisible ? (
              <Feather name="eye" size={18} color="black" />
            ) : (
              <Feather name="eye-off" size={18} color="black" />
            ))}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormField;

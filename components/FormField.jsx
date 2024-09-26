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
          onChangeText={onChange}
          keyboardType={keyboardType}
          autoCapitalize={false}
          secureTextEntry={keyboardType === "password" && !isVisible}
        />
        {keyboardType === "password" && (
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <Feather
              name={!isVisible ? "eye" : "eye-off"}
              size={18}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

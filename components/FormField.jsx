import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";

const FormField = ({
  name,
  value,
  onChange,
  keyboardType,
  formStyles,
  placeholder,
  secureTextEntry,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View className={`${formStyles}`}>
      <Text className="text-sm font-pregular">{name}</Text>
      <View className="w-full h-12 px-4 flex flex-row items-center mt-2 bg-slate-100 rounded-sm border border-gray-300  focus:border-primary">
        <TextInput
          className="flex-1 font-psemibolds"
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          autoCapitalize={false}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !isVisible}
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

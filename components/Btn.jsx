import { TouchableOpacity, Text } from "react-native";
import React from "react";

const Btn = ({
  title,
  containerStyles,
  isLoading,
  handlePress,
  textStyles,
  primary,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      onPress={handlePress}
      className={`${
        primary ? "bg-primary" : "border border-gray-300"
      } justify-center min-h-[48px] items-center rounded-sm ${containerStyles} ${
        isLoading && "opacity-50"
      }`}
    >
      <Text
        className={`${
          primary && "text-white"
        } font-pregular text-sm px-10 ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

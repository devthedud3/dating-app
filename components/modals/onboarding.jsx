import { View, Text, Modal, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Btn from "../Btn";
import FormField from "../FormField";

import { formatNumber } from "../../lib/helper";

const OnboardingModal = ({ isVisible, setIsVisible }) => {
  const [userProfile, setUserProfile] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
  });

  function handleMobileFormat(e) {
    console.log(formatNumber(e));
    setUserProfile({ ...userProfile, mobile: e });
  }

  function handleSubmitProfile() {
    console.log(userProfile);
    setIsVisible(!isVisible);
  }

  return (
    <Modal animationType="slide" visible={isVisible}>
      <SafeAreaView>
        <View className="h-full w-full bg-white p-4 pt-10">
          <View className="h-full flex">
            <View className="w-full ">
              <Text className="text-3xl  font-pbold">
                Let's finish setting up your profile
              </Text>
              <Text className="mt-2 font-pregular">
                Your answers will help us better customize your experience.
              </Text>
            </View>
            <View className="">
              <Text className="mb-2 mt-10">Upload a photo</Text>
              <View className="border border-dashed rounded-md mb-10">
                <View className="h-24 w-24 my-10 self-center items-center justify-center rounded-full bg-primary">
                  <Text className="text-6xl pt-2 text-white font-pregularLii">
                    +
                  </Text>
                </View>
              </View>

              <View className="flex w-full">
                <FormField
                  name="Full Name"
                  value={userProfile.first_name}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, first_name: e })
                  }
                />
                <FormField
                  name="Mobile"
                  keyboardType="phone-pad"
                  formStyles="mt-5"
                  value={userProfile.mobile}
                  onChange={handleMobileFormat}
                />
              </View>
            </View>

            <Btn
              title="Submit"
              primary
              containerStyles="mt-auto"
              handlePress={handleSubmitProfile}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default OnboardingModal;

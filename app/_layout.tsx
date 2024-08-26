import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, View, Text } from "react-native";

export const getColor = (theme: string | undefined) => {
  let lightness;
  if (theme === "dark") {
    lightness = Math.random() * 20 + 5;
  } else {
    lightness = Math.random() * 20 + 75;
  }
  return `hsl(${Math.random() * 360}, 100%, ${lightness}%)`;
};

const RootLayout = () => {
  const [bgColor, setBgColor] = useState(getColor("light"));
  return (
    <View
      className={`flex-1 items-center justify-center gap-2`}
      style={{backgroundColor: bgColor}}
    >
      <Text className="text-2xl text-black">Home</Text>
      <Pressable
        onPress={() => setBgColor(getColor("light"))}
        className="py-2 px-4 bg-black rounded-lg active:bg-black"
      >
        <Text className="text-white text-2xl">Button</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};

export default RootLayout;

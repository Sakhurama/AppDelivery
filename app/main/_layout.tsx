import React from 'react';
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import  Header  from "../../components/Header/Index";
import  Footer  from "../../components/Footer/Index";

export default function Layout() {

return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <Stack 
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FFBC0D",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: "",
          // headerLeft: () => <Image source={LogoIcon} style={{ width: 40, height: 40 }}/>,
          headerShown: false,
        }}
      />
      <Footer />
    </SafeAreaView>
  );
}

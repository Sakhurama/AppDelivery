import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";

const Header: React.FC = () => {
    return (
    <View className="flex-row items-center justify-between bg-white h-26 px-4 py-5">
        <Link href="/main/home" asChild>
            <Pressable>
            <Image 
                source={require("../../assets/logoIcon.png")}
                style={{ width: 65, height: 50 }}
                />
            </Pressable>
        </Link>

        <View className="flex-row items-center gap-4">
            <View className="flex-col">
            <Text className="text-gray-400 text-center">¡Bienvenido!</Text>
            <Text className="text-center">Daniel Romero</Text>
            </View>
            <Image 
                source={require("../../assets/users/user-01.png")} 
                style={{ width: 65, height: 65 }} 
            />
        </View>
    </View>
    );
};

export default Header;
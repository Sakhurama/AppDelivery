import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import LogoIcon from "../../assets/logoIcon.png";
import UserPhoto from "../../assets/users/user-01.png";



export default function Header() {

return (
    <View className="flex-row items-center justify-between bg-white h-26 px-4 py-5">
        <Link asChild href={"/main/home"}>
            <Pressable>
                <Image source={LogoIcon} style={{ width: 65, height: 50 }} />
            </Pressable>
        </Link>

        <View className="flex-row items-center gap-4">
            <View className="flex-col">
            <Text className="text-gray-400 text-center">¡Bienvenido!</Text>
            <Text className="text-center">Daniel Romero</Text>
            </View>
            <Image source={UserPhoto} style={{ width: 65, height: 65 }} />
        </View>

    </View>
);
}

export { Header };

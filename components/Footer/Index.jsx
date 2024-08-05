import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { ListIcon, MapIcon, ClockIcon } from "../Icons/Index";



export default function Footer() {

return (
    <View className="flex-row items-center justify-between bg-white h-26 px-10 py-3">

        <Link asChild href={"/main/pedidos"}>
            <TouchableOpacity>
                <ListIcon/>
            </TouchableOpacity>
        </Link>

        <Link asChild href={"https://www.google.com/maps"}>
            <TouchableOpacity>
                <MapIcon/>
            </TouchableOpacity>
        </Link>

        <Link asChild href={"/main/entregados"}>
            <TouchableOpacity>
                <ClockIcon/>
            </TouchableOpacity>
        </Link>

    </View>
);
}

export { Footer };

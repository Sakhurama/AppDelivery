import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { ListIcon, MapIcon, ClockIcon } from "../Icons/Index";

const Footer: React.FC = () => {
  return (
    <View className="flex-row items-center justify-between bg-white h-26 px-10 py-3">
        <Link href="/main/pedidos" asChild>
            <TouchableOpacity>
                <ListIcon />
            </TouchableOpacity>
        </Link>

        <Link href="https://www.google.com/maps" asChild>
            <TouchableOpacity>
                <MapIcon />
            </TouchableOpacity>
        </Link>

        <Link href="/main/entregados" asChild>
            <TouchableOpacity>
                <ClockIcon />
            </TouchableOpacity>
        </Link>
    </View>
  );
};

export default Footer;
import React from 'react';
import { View, Text, Pressable } from "react-native";
import { Stack } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);


export default function Pedidos() {
    return (
        <View className="flex-1 justify-center items-center">
            <Stack.Screen options={{
                headerShown: false,
                headerTitle: "Pedidos Asignados",
                }}/>
            <View>
                <Text className="font-bold text-2xl mb-4">Pedidos Asignados</Text>
            </View>
        </View>
);
}
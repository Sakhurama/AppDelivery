import React from 'react';
import { View, Text } from "react-native";
import { Stack } from "expo-router";


export default function Entregados() {
    return (
        <View className="flex-1 justify-center items-center">
            <Stack.Screen options={{
                headerShown: true,
                headerTitle: "Historial de Entregas",
                }}/>
            <View>
                <Text className="font-bold text-2xl mb-4">Entregados</Text>
            </View>
        </View>
    );
}
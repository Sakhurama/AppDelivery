import React from 'react';
import { Pressable, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { LoginIcon } from "../../components/Icons/Index";
import { styled } from 'nativewind'; // Para estilizar los pressables

const StyledPressable = styled(Pressable); // Para empezar a usar StyledPressable como un componente y pasarle estilos de Tailwind xD

export default function Main() {
    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                paddingHorizontal: 10,
                }}
        >

            <Link asChild={true} href={"/main/pedidos"}>
                <StyledPressable className= "active:opacity-70 border border-white active:border-[#DA291C] bg-gray-200 active:bg-yellow-400 rounded-lg mt-10 p-5">
                        <Text className="text-lg font-bold">
                            Pedidos asignados
                        </Text>
                        <Text>Consulta tus pedidos pendientes por entregar</Text>
                </StyledPressable>
            </Link>

            <Link asChild={true} href={"https://www.google.com/maps"}>
                <StyledPressable className= "active:opacity-70 border border-white active:border-[#DA291C] bg-gray-200 active:bg-yellow-400 rounded-lg mt-10 p-5">
                    <Text className="text-lg font-bold">
                        Abrir mapa
                    </Text>
                    <Text>Mira una ruta a tu destino</Text>
                </StyledPressable>
            </Link>

            <Link asChild={true} href={"/main/entregados"}>
                <StyledPressable className= "active:opacity-70 border border-white active:border-[#DA291C] bg-gray-200 active:bg-yellow-400 rounded-lg mt-10 p-5">
                    <Text className="text-lg font-bold">
                        Entregados
                    </Text>
                    <Text>Consulta tu historial de entregas</Text>
                </StyledPressable>
            </Link>

            <View className="bg-yellow-400 p-4 rounded-md mt-20">
                <Link asChild={true} href={"/"}>
                    <Pressable className="flex-row items-center justify-center gap-3">
                    <LoginIcon name="login" size={24} color="black"/>
                    <Text className="text-black font-bold">Cerrar sesión</Text>
                    </Pressable>
                </Link>
            </View>

        </ScrollView>
);
}
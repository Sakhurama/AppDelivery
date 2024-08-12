import React from 'react';
import LoginComponent from "../components/Login/Index";
import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';

export default function Index() {
    return (
    <>
    <PaperProvider>
        <Stack.Screen
            options={{headerShown: false}}
        />
        <LoginComponent />
    </PaperProvider>
    </>
);
}
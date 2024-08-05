import React from 'react';
import LoginComponent from "../components/Login/Index";
import { Stack } from "expo-router";

export default function Index() {
    return (
    <>
        <Stack.Screen
            options={{headerShown: false}}
        />
        <LoginComponent />
    </>
);
}
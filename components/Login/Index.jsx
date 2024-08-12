import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

// Iconos e Imágenes
import LogoCompleto from "../../assets/logoCompleto.png";



export default function LoginComponent() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = () => {
        console.log("Correo electrónico:", email);
        console.log("Contraseña:", password);
        Keyboard.dismiss();
        navigation.navigate('main');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

return (
    
    <KeyboardAwareScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === "ios"}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={20}
    >
        <View className="flex-1 p-10 justify-center">
            <Image source={LogoCompleto} className="w-[200px] h-[200px] self-center mb-5" style={{ resizeMode: 'contain' }} />

            <View className="gap-6 items-center">
                <View>
                    <Text className="text-center text-xl mb-2 font-bold">Gestión de Pedidos</Text>
                    <Text className="text-center text-base mb-2 font-regular">Inicia sesión para acceder a tus pedidos</Text>
                </View>

                <View className="w-full">
                    <TextInput
                        label="Correo electrónico"
                        right={<TextInput.Icon icon="email" />}
                        mode="outlined"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View className="w-full">
                    <TextInput
                        label="Contraseña"
                        mode="outlined"
                        secureTextEntry= {!showPassword}
                        right={
                            <TextInput.Icon 
                                icon={showPassword ? "eye-off" : "eye"}
                                onPress={togglePasswordVisibility}
                        />}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity
                    className="w-full h-[50px] mt-5 bg-[#FFBC0D] p-2 rounded-md items-center justify-center" 
                    onPress={handleSubmit}
                    >
                    <Text className="text-black text-lg">Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
        <StatusBar style="auto" />
    </KeyboardAwareScrollView>
    );
}

export { LoginComponent };

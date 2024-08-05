import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from '@react-navigation/native';

// Iconos e Imágenes
import LogoCompleto from "../../assets/logoCompleto.png";
import { EmailIcon, EyeIcon } from "../Icons/Index";



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

            <View className="gap-5 items-center">

                <View className="w-full">
                    <Text className="text-lg mb-2 font-medium">Correo electrónico:</Text>
                    <View className="flex-row items-center border border-gray-500 rounded-md bg-white">
                        <TextInput
                            className="h-[50px] flex-1 p-3 text-base"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Ingrese su correo"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <EmailIcon style={{ marginRight: 15 }}/>
                    </View>
                </View>

                <View className="w-full">
                    <Text className="text-lg mb-2 font-medium">Contraseña:</Text>
                    <View className="flex-row items-center border border-gray-500 rounded-md bg-white">
                        <TextInput
                            className="h-[50px] flex-1 p-3 text-base"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Ingrese su contraseña"
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <EyeIcon 
                                name={showPassword ? "eye-off" : "eye"}
                                size={24}
                                color="green"
                                style={{ marginRight: 15 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    className="w-full h-[50px] mt-5 bg-[#FFBC0D] p-2 rounded-md items-center justify-center" 
                    onPress={handleSubmit}
                    >
                    <Text className="text-black text-lg">Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
        <StatusBar style="auto" />
    </KeyboardAwareScrollView>
    );
}

export { LoginComponent };

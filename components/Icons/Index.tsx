import React from 'react';
import { ViewStyle } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

interface IconProps {
    name?: string;
    size?: number;
    color?: string;
    style?: ViewStyle;
}


export const EmailIcon: React.FC<IconProps> = (props) => (
    <MaterialCommunityIcons 
    name={(props.name || "email-outline") as keyof typeof MaterialCommunityIcons.glyphMap}
    size={props.size || 24}
    color={props.color || "gray"}
    style={props.style}
/>
);

export const EyeIcon: React.FC<IconProps> = (props) => (
    <Feather 
        name={(props.name || "eye") as keyof typeof Feather.glyphMap}
        size={props.size || 24}
        color={props.color || "black"}
        style={props.style}
    />
);

export const LoginIcon: React.FC<IconProps> = (props) => (
    <SimpleLineIcons 
        name={(props.name || "login") as keyof typeof SimpleLineIcons.glyphMap}
        size={props.size || 24}
        color={props.color || "black"}
        style={props.style}
    />
);

export const ListIcon: React.FC<IconProps> = (props) => (
    <Feather 
        name={( props.name || "list" ) as keyof typeof Feather.glyphMap}
        size={ props.size || 24 }
        color={ props.color || "black" }
        style={props.style}
    />
);

export const MapIcon: React.FC<IconProps> = (props) => (
    <Feather
        name={(props.name || "map") as keyof typeof Feather.glyphMap}
        size={props.size || 24}
        color={props.color || "black"}
        style={props.style}
    />
);

export const ClockIcon: React.FC<IconProps> = (props) => (
    <Feather
        name={(props.name || "clock") as keyof typeof Feather.glyphMap}
        size={props.size || 24}
        color={props.color || "black"}
        style={props.style}
    />
);


import { View } from "react-native";

// Este componente es un para envolver otros y darle estilo a todos los componentes que lo utilizan, por ejemplo un padding y tales pero por ahora no lo uso.

export function Screen({ children }) {
  return (
    <View className="flex-1 bg-white">
      {children}
    </View>
  );
}
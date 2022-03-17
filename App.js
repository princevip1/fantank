import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Navigation/Index";
import { NativeBaseProvider, extendTheme  } from "native-base";
import {theme} from "./src/Ulitilies/Theme"
export default function App() {
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

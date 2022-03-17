import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { Button } from "native-base";
import { HW } from "../../../Ulitilies/Helper";

const AwesomeMessage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
           
                <Image source={require('../../../assets/ilu-thumbs-up.png')} />
                <Text style={styles.title}>Awesome!</Text>
                <Text style={styles.title2}>Password Reset Successful  </Text>
            <Button
                onPress={() => navigation.navigate('signin')}
                width="100%"
                style={{ backgroundColor: "#378EF0", marginVertical: 30, height: 54 }}
                size="lg">
                Go back to Sign in
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,

    },
    title: {
        color: "white",
        fontSize: 34,
        marginVertical:20
    },
    title2: {
        color: "white",
        fontSize: 17
    }
});

export default AwesomeMessage
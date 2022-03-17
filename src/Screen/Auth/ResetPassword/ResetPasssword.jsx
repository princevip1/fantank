import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input } from "native-base";

const ResetPasssword = ({navigation}) => {
    return (
        <View style={styles.container}>

            <StatusBar style="light" />


            <Text style={styles.title}>Reset Password </Text>
            <Text style={styles.details}>Your new password must be different  </Text>
            <Text style={styles.details}>from previously used passwords. </Text>

            <View>
                <Input size="xl" placeholder="Password" w="100%" mt={9} placeholderTextColor="white" _focus={{ borderColor: "white", color: "white" }} />
                <Text style={{ color: "white", textAlign: "left" }}>Must be at least 8 characters.</Text>

                <Input size="xl" placeholder="Confirm Password" w="100%" mt={5} placeholderTextColor="white" _focus={{ borderColor: "white", color: "white" }} />
                <Text style={{ color: "white", textAlign: "left" }}>Both password must match.</Text>

            </View>

            <Button
                onPress={() => navigation.navigate('awesomeMessage')}
                width="100%"
                style={{ backgroundColor: "#378EF0", marginVertical: 30, height: 54 }}
                size="lg">
                Reset Password
            </Button>
            <Text style={styles.signIn}>
                Back to Sign In
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        paddingHorizontal: 15,

    },

    title: {
        color: "white",
        fontSize: 28,
        marginVertical: 20

    },
    details: {
        color: "white",
        fontSize: 17,
        marginVertical: 4

    },
    signIn: {
        textAlign: "center",
        color: "#378EF0",
        fontSize: 16,
    }


});

export default ResetPasssword
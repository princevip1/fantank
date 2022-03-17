import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { Button } from "native-base";
import { HW } from "../../../Ulitilies/Helper";



const CheckEmail = ({navigation}) => {
    return (

        <View style={styles.container}>

            <StatusBar style="light" />
            
            <View style={styles.emailIcon}>
                <Image source={require('../../../assets/ilu-email.png')} />
                <Text style={styles.emailText}>Check your email for </Text>
                <Text style={styles.emailText}>password recovery  </Text>
                <Text style={styles.emailText}>instructions </Text>
            </View>

            <Button
                onPress={() => navigation.navigate('resetPassword')}
                width="100%"
                style={{ backgroundColor: "#378EF0", marginVertical: 30,height:54 }}
                size="lg">
                Open Email App
            </Button>
            <Text style={styles.skipText}>
                Skip, I’ll confirm later
            </Text>


            <Text style={styles.footerText}>
               <Text> Did not receive the email? Check your spam folder</Text> or
                <Text style={styles.footerText2}> try another email address</Text>
            </Text>



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
    
    emailIcon: {
        alignItems: "center",
    },
    emailText: {
        color: "white",
        fontSize: 22
    },
    skipText: {
        color: "#378EF0", textAlign: "center", fontSize: 16
    },
    footerText: {
        color: "white",
        textAlign: "center",
        position: "absolute",
        bottom: 70

    },
    footerText2: {
        color: "#378EF0",
        
        

    }
});

export default CheckEmail
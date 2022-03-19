import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import Appber from '../../Components/Appber/Appber'
import { FontAwesome5 } from '@expo/vector-icons';

const ArtistPage = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground source={require('../../assets/artist-user-img.png')} style={styles.bgImage}>
                <Appber />
                <View>
                    <Text style={styles.nameTitle}>Niken Dewanil <Text ><FontAwesome5  name="dollar-sign" size={20} color="white" /></Text></Text>
                    <Text style={styles.sortDetails}>Lihat profil Niken Dian Rahma Dewani LinkedIn, komunitas profesional... </Text>
                    <Text style={styles.location}>Los Angeles, CA </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingTop: 30

    },
    bgImage: {

        paddingHorizontal: 15,

    },
    nameTitle: {
        color: "white",
        fontSize:28
    },
   
    sortDetails: {
        color: "white",
        fontSize:12
    },
    location: {
        fontSize: 14,
        color:"white"
        
    }

});


export default ArtistPage
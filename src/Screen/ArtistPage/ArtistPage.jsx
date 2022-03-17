import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import Appber from '../../Components/Appber/Appber'

const ArtistPage = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground source={require('../../assets/artist-user-img.png')}  style={styles.image}>
                <Appber/>
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
    image: {
       
       
    }


});


export default ArtistPage
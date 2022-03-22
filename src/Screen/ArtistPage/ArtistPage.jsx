import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Appber from "../../Components/Appber/Appber";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button, Divider, HStack, Icon, VStack } from "native-base";
import { Entypo, AntDesign } from '@expo/vector-icons';
import MediaView from './MediaView'
import GhraphTabs from "./GhraphTabs";
import { HW } from "../../Ulitilies/Helper";


const ArtistPage = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground
                source={require("../../assets/artist-user-img.png")}
                style={styles.bgImage}
            >
                <Appber />
                <View>
                    <Text style={styles.nameTitle}>
                        Niken Dewanil{" "}
                        <Text>
                            <FontAwesome5 name="dollar-sign" size={20} color="white" />
                        </Text>
                    </Text>
                    <Text style={styles.sortDetails}>
                        Lihat profil Niken Dian Rahma Dewani LinkedIn, komunitas
                        profesional...{" "}
                    </Text>
                    <Text style={styles.location}>Los Angeles, CA . <Image source={require('../../assets/artist/usa-flag.png')} /> </Text>
                </View>
                <HStack alignItems="center" space={4}>
                    <Text style={styles.activeCatItem}>#Music</Text>
                    <Text style={styles.catItem}>#Pop</Text>
                    <Text style={styles.catItem}>#Vocalist</Text>

                </HStack>

                <View >
                    <GhraphTabs />
                </View>

                <VStack space={5} style={{ backgroundColor: "rgba(69, 66, 67, 0.78)", paddingHorizontal: 35, paddingVertical: 15, borderRadius: 4 }} >
                    <HStack justifyContent="center" alignItems="center" space={4}>
                        <Text style={{ fontSize: 16, color: "white" }}> <Image source={require("../../assets/fitbit-token.png")} /> 25,000</Text>
                        <Text style={{ fontSize: 12, color: "#35C112" }} > <AntDesign name="arrowup" size={15} color="#35C112" />25% {"\n"} <Text style={{ color: "white" }}>30 Days</Text></Text>
                        <Button style={{ borderRadius: 30, backgroundColor: "#378EF0" }} px={8} size="sm" >
                            <Text style={{ color: "white", fontWeight: "bold" }}>Send FanBit</Text>
                        </Button>

                    </HStack>
                    <HStack justifyContent="center" alignItems="center" space={2}>
                        <Button style={{ borderRadius: 30, borderColor: "white", borderWidth: 1, backgroundColor: "transparent" }} px={5} size="sm" >
                            Track
                        </Button>
                        <Button style={{ borderRadius: 30, borderColor: "white", borderWidth: 1, backgroundColor: "transparent" }} px={7} size="sm">
                            Wallet
                        </Button>
                        <Button style={{ borderRadius: 30, borderColor: "white", borderWidth: 1, backgroundColor: "transparent", }} px={7} size="sm">
                            Message
                        </Button>
                        <Icon as={Entypo} name={"dots-three-horizontal"}
                            size="6"
                            color="white" />
                    </HStack>
                </VStack>

            </ImageBackground>

            <View style={{ flex: 1, width: "105%", marginTop: 20 }} >
                <MediaView />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingTop: 30,
    },
    bgImage: {
        paddingHorizontal: 15,
    },
    nameTitle: {
        color: "white",
        fontSize: 28,
    },

    sortDetails: {
        color: "white",
        fontSize: 12,
    },
    location: {
        fontSize: 14,
        color: "white",
        marginVertical: 5
    },
    catItem: {
        color: "white",
        marginVertical: 10
    },
    activeCatItem: {
        color: "#378EF0"
    }
});

export default ArtistPage;

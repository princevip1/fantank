import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { Input, Button } from "native-base";
import { HW } from "../../../Ulitilies/Helper";

const Forgate = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <Text style={{ color: "white", fontSize: 28 , marginTop:50}}>Forgate Your </Text>
        <Text style={{ color: "white", fontSize: 28, marginBottom: 50 }}>
          password?
        </Text>

        <View style={styles.forgateInstrac}>
          <Text style={{ color: "white" }}>
            <Feather name="check-circle" size={24} color="white" />
          </Text>
          <Text style={{ color: "white", fontSize: 17 }}> Don't Worry</Text>
        </View>
        <View style={styles.forgateInstrac}>
          <Text style={{ color: "white" }}>
            <Feather name="check-circle" size={24} color="white" />
          </Text>
          <Text style={{ color: "white", fontSize: 17 }}>
            {" "}
            Enter email from account
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: 10,
            marginBottom: 50,
          }}
        >
          <Text style={{ color: "white" }}>
            <Feather name="check-circle" size={24} color="white" />
          </Text>
          <Text style={{ color: "white", fontSize: 17 }}>
            {" "}
            Go to email for password reset instructions.{" "}
          </Text>
        </View>
        <Input
          placeholder="Email Address"
          size="lg"
          _focus={{ borderColor: "white", color: "white" }}
        />
        <Button
          style={{ backgroundColor: "#378EF0", marginVertical: 30,height:54 }}
          size="lg"
          onPress={() => navigation.navigate('emailCheck')}
        >
          Send Instructions
        </Button>
        <Text style={{ color: "#378EF0", textAlign: "center",fontSize:18 }}>
          Back to Sign In
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 15,
    height: HW.h,
  },
  topLogo: {
    alignItems: "center",
    marginTop: 50,
  },
  forgateInstrac: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 10,
    fontWeight:'100'
  },
});

export default Forgate;

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import "./SignInStyle";
import { StatusBar } from "expo-status-bar";
import { HW } from "../../Ulitilies/Helper";
import { Ionicons } from "@expo/vector-icons";
import SocialBtn from "../../Components/SocialBtn";
import { Input,  Icon } from "native-base";

const SignIn = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const handleForgate = () => {
    navigation.navigate("forgate")
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        imageStyle={{ height: "60%" }}
        source={require("../../assets/signinBg.png")}
        style={styles.image}
      >
      <Ionicons style={styles.backWindow} name="chevron-back" size={24} color="black" />
        <View style={styles.logoImage}>
          <Image source={require("../../assets/logo2.png")} />
          <Text style={styles.title}>Welcome back! </Text>
          <Text style={styles.title}>Enter email and password to sign in.</Text>
        </View>
        <View>
          <Input
            placeholder="Email Address"
            size="lg"
            _focus={{ borderColor: "white", color: "white" }}
          />
          <Input
            _focus={{ borderColor: "white", color: "white" }}
            size="lg"
            mt={4}
            type={show ? "text" : "password"}
            InputRightElement={
              <Icon
                as={<Ionicons name={!show ? "eye-off" : "eye"} />}
                size={5}
                mr="2"
                color="white"
                onPress={() => setShow(!show)}
              />
            }
            placeholder="Password"
          />
         <TouchableWithoutFeedback onPress={handleForgate}>
         <Text style={{ color: "#378EF0", textAlign: "right",marginTop:10 }}>
            Forgate Password ?
          </Text>
         </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback onPress={() => alert("hello")}>
          <Text style={styles.signInBtn}>Sign In</Text>
        </TouchableWithoutFeedback>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center", color: "white" }}>
              Or
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
        </View>
        <SocialBtn
          iconName="facebook-f"
          backGrounColor="#378EF0"
          iconColor="white"
          name="Facebook"
        />
        <SocialBtn
          iconName="logo-google"
          backGrounColor="#378EF0"
          iconColor="white"
          name="Google"
        />
        <SocialBtn
          iconName="logo-apple"
          backGrounColor="white"
          iconColor="black"
          name="Apple"
        />
        <Text style={styles.trams}>I accept Terms of Use and Privacy Policy</Text>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  backWindow:{
    color:"white",
    position:"absolute",
    top:50,
    left:10

  },
  image: {
    height: HW.h,
    width: HW.w,
    paddingHorizontal: 15,
  },
  logoImage: {
    marginVertical: 35,
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 60,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "100"
  },
  signInBtn: {
    color: "white",
    marginBottom: 30,
    backgroundColor: "#378EF0",
    textAlign: "center",
    padding: 15,
    borderRadius: 4,
    fontSize: 16,
    marginTop: 20,
  },
  horizontalText: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
    color: "white",
  },
  trams:{
    color:"white",
    textAlign:"center"
  }
});

export default SignIn;

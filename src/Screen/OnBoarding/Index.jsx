import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { HW } from "../../Ulitilies/Helper";
// import TextCarousel from "../../Ulitilies/TextSlider"
import Carousel, { Pagination } from "../../Ulitilies/Slider";

const OnBoarding = ({ navigation }) => {
  const [data, setData] = React.useState([
    {
      title: "Arts & Entertainment Ecosystem",
      separator: "+",
      subtitle: "Talent Scouting Crowd Intelligence",
    },
    {
      title: "Blockchain Architecture",
      separator: "+",
      subtitle: "DAO and Transparency",
    },
    {
      title: "ARTREPRENEURSHIP",
      separator: "IS",
      subtitle: "NOW!",
    },
  ]);


  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{item.separator}</Text>
        <Text style={styles.title}>{item.subtitle}</Text>
      </View>
    );
  };
  const pagination = () => {
    // const { entries, activeSlide } = this.state;


    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={0}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          //   marginHorizontal: 4,
          // color:"#378EF0",
          backgroundColor: "#378EF0",
        }}
        inactiveDotStyle={
          {
            backgroundColor: "rgba(255, 255, 255, 0.92)",
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  console.log(HW);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../../assets/onboardinBg.png")}
        style={styles.image}
      >
        <View style={styles.logoImage}>
          <Image source={require("../../assets/logo.png")} />
        </View>
      </ImageBackground>
      <View style={styles.carouselContainer}>
        <Carousel
          data={data}
          renderItem={_renderItem}
          sliderWidth={HW.w}
          itemWidth={HW.w}
          loop={true}
        />
        {pagination()}
      </View>
      <View>
        <TouchableOpacity

          onPress={() => navigation.navigate('artistPage')}
        >
          <Text style={styles.joinUsBtn}>Join Us</Text>
        </TouchableOpacity>
        <TouchableOpacity

          onPress={() => navigation.navigate('signin')}
        >
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    height: HW.h / 2,
    width: HW.w,
    // position:"relative"
  },
  logoImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // height:20
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "100",
  },
  slide: {
    alignItems: "center",
    // marginTop:-20
  },
  joinUsBtn: {
    color: "white",
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#378EF0",
    textAlign: "center",
    padding: 20,
    borderRadius: 4,
    fontSize: 16
  },
  loginBtn: {
    color: "white",
    marginBottom: 50,
    borderWidth: 1,
    borderColor: "#378EF0",
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
    padding: 20,
    borderRadius: 4,
    fontSize: 16
  },
});

export default OnBoarding;

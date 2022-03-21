import { Entypo } from "@expo/vector-icons";
import { HStack, Icon, VStack, ScrollView } from "native-base";
import * as React from "react";
import { useWindowDimensions, Text, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const music = [
  { seria: 2, title: "Prisoner", duration: 2.14 },
  { seria: 3, title: "Prisoner", duration: 2.14 },
  { seria: 4, title: "Prisoner", duration: 2.14 },
  { seria: 5, title: "Prisoner", duration: 2.14 },
  { seria: 6, title: "Prisoner", duration: 2.14 },
  { seria: 7, title: "Prisoner", duration: 2.14 }
];





const MediaView = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Picture" },
    { key: "second", title: "Videos" },
    { key: "third", title: "Music" },
  ]);

  const FirstRoute = () => (
    <ScrollView>
      <VStack space={1}>
        <HStack justifyContent="space-between" space={1}>
          <Image source={require("../../assets/artist/artist1.png")} />
          <Image source={require("../../assets/artist/artist2.png")} />
          <Image source={require("../../assets/artist/artist3.png")} />
        </HStack>
        <HStack justifyContent="space-between" space={1}>
          <Image source={require("../../assets/artist/artist4.png")} />
          <Image source={require("../../assets/artist/artist5.png")} />
          <Image source={require("../../assets/artist/artist6.png")} />
        </HStack>
        <HStack justifyContent="space-between" space={1}>
          <Image source={require("../../assets/artist/artist7.png")} />
          <Image source={require("../../assets/artist/artist8.png")} />
          <Image source={require("../../assets/artist/artist9.png")} />
        </HStack>
      </VStack>
    </ScrollView>
  );

  const SecondRoute = () => (
    <ScrollView>
      <VStack space={3}>
        <Image source={require("../../assets/artist/video1.png")} />
        <HStack justifyContent="center" alignItems="center" space={5}>
          <Image
            style={{ height: 36.44, width: 36.44, borderRadius: 50 }}
            source={require("../../assets/artist/userimg.png")}
          />
          <Text style={{ color: "white", fontSize: 14.17 }}>
            Heart Touching Nasheed #Shorts {"\n"}
            <Text style={{ fontSize: 12.15 }}>
              19,210,251 views Jul • 1, 2016
            </Text>
          </Text>
          <Icon
            style={{ justifyContent: "space-between" }}
            as={Entypo}
            name={"dots-three-vertical"}
            size="6"
            color="white"
          />
        </HStack>

        <Image source={require("../../assets/artist/video2.png")} />
        <HStack justifyContent="center" alignItems="center" space={5}>
          <Image
            style={{ height: 36.44, width: 36.44, borderRadius: 50 }}
            source={require("../../assets/artist/userimg.png")}
          />
          <Text style={{ color: "white", fontSize: 14.17 }}>
            Heart Touching Nasheed #Shorts {"\n"}
            <Text style={{ fontSize: 12.15 }}>
              19,210,251 views Jul • 1, 2016
            </Text>
          </Text>
          <Icon
            style={{ justifyContent: "space-between" }}
            as={Entypo}
            name={"dots-three-vertical"}
            size="6"
            color="white"
          />
        </HStack>
      </VStack>
    </ScrollView>
  );
  const ThirdRoute = () => (
    <ScrollView>
      <VStack >
        <TouchableNativeFeedback onPress={() => console.log('first')} >
          <HStack style={styles.activeMusictab} px={6} py={2} my={1} justifyContent="space-between" alignItems="center" >
            <HStack justifyContent="flex-start" alignItems="center" space={4}>
              <Text style={{ color: "#999999", fontSize: 12 }}> 1 </Text>
              <Text style={{ color: "white", fontSize: 12 }}>Prisoner</Text>
            </HStack>
            <HStack >
              <Text style={{ color: "#999999", fontSize: 10 }}>2.14 </Text>
            </HStack>
          </HStack>
        </TouchableNativeFeedback>

        {
          music.map((i) =>
            <TouchableNativeFeedback onPress={() => console.log('first')} >
              <HStack px={6} py={2} my={1} justifyContent="space-between" alignItems="center" >
                <HStack justifyContent="flex-start" alignItems="center" space={4}>
                  <Text style={{ color: "#999999", fontSize: 12 }}> {i.seria} </Text>
                  <Text style={{ color: "white", fontSize: 12 }}>{i.title}</Text>
                </HStack>
                <HStack >
                  <Text style={{ color: "#999999", fontSize: 10 }}>{i.duration} </Text>
                </HStack>
              </HStack>
            </TouchableNativeFeedback>
          )
        }
      </VStack>
    </ScrollView>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "transparent" }}
      style={{ backgroundColor: "transparent", marginHorizontal: -30 }}
    />
  );
  return (
    <TabView
      indicatorContainerStyle={{ backgroundColor: "red" }}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({
  activeMusictab: {
    backgroundColor: "#333333"
  }

});

export default MediaView;
import { Entypo } from "@expo/vector-icons";
import { HStack, Icon, VStack, ScrollView, Stack, Center, Heading, View } from "native-base";
import * as React from "react";
import { useWindowDimensions, Text, StyleSheet, TouchableNativeFeedback, Image } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const music = [
  { seria: 2, title: "Prisoner", duration: 2.14 },
  { seria: 3, title: "Prisoner", duration: 2.14 },
  { seria: 4, title: "Prisoner", duration: 2.14 },
  { seria: 5, title: "Prisoner", duration: 2.14 },
  { seria: 6, title: "Prisoner", duration: 2.14 },
  { seria: 7, title: "Prisoner", duration: 2.14 }
];





const GhraphTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "1mo" },
    { key: "second", title: "3mo" },
    { key: "third", title: "6mo" },
    { key: "third", title: "6mo" },
    { key: "third", title: "6mo" },
  ]);

  const FirstRoute = () => (
    
    <View>
      <Image source={require('../../assets/artist/Graph.png')} />
    </View>
  );

  const SecondRoute = () => (
    <View>
      <Image source={require('../../assets/artist/Graph.png')} />
    </View>
  );
  const ThirdRoute = () => (
    <View>
    <Image source={require('../../assets/artist/Graph.png')} />
  </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      labelStyle={{ fontSize: 10 }}
      indicatorContainerStyle={{}}
      contentContainerStyle={{ marginTop:-50 }}
      indicatorStyle={{ backgroundColor: "transparent", borderColor: "#378EF0", borderWidth: 1.5  }}
      style={{ backgroundColor: "transparent" }}
    />
  );
  return (
    <VStack space="2.5" mt="4" px="8">
      <Stack justifyContent="space-between" direction="row" mb="2.5" mt="1.5" space={1}>

        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
        <Image style={{ height: 80, width: 70,marginRight:-20 }} source={require("../../assets/artist/badge.png")} />

      </Stack>
    </VStack>
    // <VStack space={3}  >
    //   <HStack justifyContent="space-between" >
    //     <TabView
    //       renderTabBar={renderTabBar}
    //       navigationState={{ index, routes }}
    //       renderScene={renderScene}
    //       onIndexChange={setIndex}
    //       initialLayout={{ width: layout.width }}
    //     />
    //   </HStack>
    //   <HStack justifyContent="space-between" >
    //     {/* <Image style={{ width: 70, height: 80 }} source={require("../../assets/artist/badge.png")} /> */}
    //     <Text>Hello</Text>
    //   </HStack>
    // </VStack>

  );
}

const styles = StyleSheet.create({
  activeMusictab: {
    backgroundColor: "#333333"
  }

});

export default GhraphTabs;
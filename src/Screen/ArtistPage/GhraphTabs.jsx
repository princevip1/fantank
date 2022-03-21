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





const GhraphTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "1mo" },
    { key: "second", title: "3mo" },
    { key: "third", title: "6mo" },
  ]);

  const FirstRoute = () => (
    <ScrollView>
      <Text style={{ color: "white" }} >Hello</Text>
    </ScrollView>
  );

  const SecondRoute = () => (
    <ScrollView>
      <Text style={{ color: "white" }} >Hello</Text>
    </ScrollView>
  );
  const ThirdRoute = () => (
    <ScrollView>
      <Text style={{ color: "white" }} >Hello</Text>
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
      indicatorStyle={{ backgroundColor: "transparent", borderColor: "white", borderWidth: 2 }}
      style={{ backgroundColor: "transparent" }}
    />
  );
  return (
    <VStack space={3}  >
      <HStack justifyContent="space-between" w="70%">
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </HStack>
      <HStack justifyContent="space-between">
        <Image style={{ width:70,height:80 }} source={require("../../assets/artist/badge preta_final-02 3.png")} />
      </HStack>
    </VStack>

  );
}

const styles = StyleSheet.create({
  activeMusictab: {
    backgroundColor: "#333333"
  }

});

export default GhraphTabs;
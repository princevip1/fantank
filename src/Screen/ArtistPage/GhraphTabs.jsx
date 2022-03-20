import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={{ backgroundColor: "#ff4081" }}>
    <Text>Hello</Text>
  </View>
);

const SecondRoute = () => <View style={{ backgroundColor: "#673ab7" }} />;
const ThirdRoute = () => <View style={{ backgroundColor: "#673ab7" }} />;
const FourthRoute = () => <View style={{ backgroundColor: "#673ab7" }} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third:ThirdRoute,
  fourth:FourthRoute
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "1mo." },
    { key: "second", title: "3mo." },
    { key: "third", title: "6mo." },
    { key: "fourth", title: "All" },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      style={{ backgroundColor: "transparent" }}
    />
  );
  return (
    <TabView
      style={{ color: "red" }}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

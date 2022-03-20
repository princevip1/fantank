import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={{ backgroundColor: "#ff4081" }}>
    <Text style={{ color:"white" }} >Hello</Text>
  </View>
);
const SecondRoute = () => (
  <View style={{ backgroundColor: "#ff4081" }}>
    <Text style={{ color:"white" }} >Hello1</Text>
  </View>
);
const ThirdRoute = () => (
  <View style={{ backgroundColor: "#ff4081" }}>
    <Text style={{ color:"white" }} >Hello2</Text>
  </View>
);



const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third:ThirdRoute
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Picture" },
    { key: "second", title: "Videos" },
    { key: "third", title: "Music" },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "transparent",justifyContent:"space-between" }}
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

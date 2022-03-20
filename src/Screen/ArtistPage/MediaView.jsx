import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Divider, HStack, Icon, VStack } from 'native-base';
import * as React from 'react';
import { View, useWindowDimensions, Text ,Image} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
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
);

const SecondRoute = () => (
  <View>
    <Text style={{ color: "white" }} >Hello1</Text>
  </View>
);
const ThirdRoute = () => (
  <View >
    <Text style={{ color: "white" }} >Hello2</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute
});

export default function MediaView() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Picture' },
    { key: 'second', title: 'Music' },
    { key: 'third', title: 'Videos' },
  ]);
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
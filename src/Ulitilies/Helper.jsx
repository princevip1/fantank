import { View, Text, Dimensions, StatusBar } from "react-native";
import React from "react";

// export default function ScreenHW() {
//   // const windowWidth = Dimensions.get('window').width;
//   // const windowHeight = Dimensions.get('window').height;
//   // const StatusBer =
//   const HW = {
//     h: Dimensions.get("window").height - StatusBar.height,
//     w: Dimensions.get("window").width,
//   };
//   return HW;
// }

export const HW = {
  h:( Dimensions.get("window").height - StatusBar.currentHeight),
  w: Dimensions.get("window").width,
};

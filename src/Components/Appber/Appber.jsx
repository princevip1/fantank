import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Box, HStack, Icon, IconButton, Image, Button } from "native-base";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const Appber = () => {
  const [isUser, setIsUser] = React.useState(false);
  return (
    <>
      <HStack
        bg="transparent"
        py={2}
        px={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack>
          <IconButton icon={<Feather name="menu" size={24} color="white" />} />
        </HStack>
        <HStack justifyContent="center">
          <Image source={require("../../assets/Logo-icon.png")} />
        </HStack>
        <HStack>
          {!isUser ? (
            <>
              <Button px={2} size="sm">Login</Button>
              <Button style={{ color:"white" }}  variant="ghost"> SignUp</Button>
            </>
          ) : (
            <>
              <IconButton
                icon={<FontAwesome5 name="user" size={24} color="white" />}
              />
              <IconButton
                icon={<FontAwesome5 name="bell" size={24} color="white" />}
              />
            </>
          )}
        </HStack>
      </HStack>
    </>
  );
};

export default Appber;

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
          <IconButton icon={<Feather name="menu" size={24} color="transparent" />} />
        </HStack>
        <HStack justifyContent="center">
          <Image source={require("../../assets/Logo-icon.png")} />
        </HStack>
        <HStack>
          {isUser ? (
            <>
              <Button
                key={1}
                size="sm"
                onPress={() => setIsUser(false)}>
                Login
              </Button>
              <Button
                onPress={() => setIsUser(false)}
                variant="Unstyled"
                size="sm"
                colorScheme="secondary">
               <Text style={{ color:"white" }} > Sign Up</Text>
              </Button>

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

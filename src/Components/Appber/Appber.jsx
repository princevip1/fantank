import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Box, HStack, Icon, IconButton, Image } from 'native-base'
import { Feather, FontAwesome5 } from '@expo/vector-icons';

const Appber = () => {
    return (
        <>
            <HStack bg="transparent"  py="3" justifyContent="space-between" alignItems="center" w="100%" >
                <HStack>
                    <IconButton icon={<Feather name="menu" size={24} color="white" />} />
                </HStack>
                <HStack >
                    <Image source={require('../../assets/Logo-icon.png')} />
                </HStack>
                <HStack >
                    <IconButton icon={<FontAwesome5 name="user" size={24} color="white" />} />
                    <IconButton icon={<FontAwesome5 name="bell" size={24} color="white" />} />
                </HStack>
            </HStack>
        </>
    )
}

export default Appber
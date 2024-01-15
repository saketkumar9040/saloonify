import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './style';
import saloonIcon from "../../../assets/images/saloon.png"

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"space-between", backgroundColor: "#4c4c4c", height: "60%", padding: 20, }}>
        <Image
          source={saloonIcon}
          style={{ width: 200, height: 200 }}
        />
      <TouchableOpacity style={{marginRight:10,backgroundColor:"#ffffff",padding:5,paddingHorizontal:20,}}>
        <Text>Book Now</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
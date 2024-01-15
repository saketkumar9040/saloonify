import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import styles from './style';
import saloonIcon from "../../../assets/images/saloon.png"

const HomeScreen = ({navigation,route}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={saloonIcon}
          style={styles.saloonImage}
        />
      <TouchableOpacity style={styles.bookNowButtonContainer}>
        <Text style={styles.bookNowText}>Book Now</Text>
        <AntDesign name="arrowright" size={16} color="black" />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
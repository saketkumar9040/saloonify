import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import styles from './style';
import saloonIcon from "../../../assets/images/saloon.png"

const grommingList = [
  {
    serviceType: "Hair Cut",
    image: require("../../../assets/images/hairdresser.png")
  },
  {
    serviceType: "Shave",
    image: require("../../../assets/images/man.png")
  },
  {
    serviceType: "Hair Color",
    image: require("../../../assets/images/color.png")
  },
  {
    serviceType: "Hair Straightening",
    image: require("../../../assets/images/straightener.png")
  },
  {
    serviceType: "Massage",
    image: require("../../../assets/images/massage.png")
  },
]

const HomeScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={saloonIcon}
          style={styles.saloonImage}
        />
        <TouchableOpacity style={styles.bookNowButtonContainer} onPress={() => navigation.navigate("Services")}>
          <Text style={styles.bookNowText}>Book Now</Text>
          <AntDesign name="arrowright" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={grommingList}
          contentContainerStyle={{flexDirection : "row", flexWrap : "wrap"}} 
          renderItem={({item, index}) => {
            console.log(item)
            return (
              <TouchableOpacity style={{alignItems:"center", backgroundColor: "#4c4c4c", height: 100, width: 100, margin: 100, }}>
                <Image
                 source={item.image}
                 style={{width:50,height:50,resizeMode:"contain"}}
                />
                <Text>{item.serviceType}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen;
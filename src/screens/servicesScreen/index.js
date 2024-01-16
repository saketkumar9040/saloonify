import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from "./style.js";

const services = [
  {
    type: "Hair Cut",
    time: "20 min",
    slot: "available"
  },
  {
    type: "Shaving",
    time: "12 min",
    slot: "available"
  },
  {
    type: "Hair coloring",
    time: "50 min",
    slot: "available"
  },
  {
    type: "Hair Cut",
    time: "30 min",
    slot: "available"
  },
  {
    type: "Hair Cut",
    time: "40 min",
    slot: "available"
  },
  {
    type: "Hair Cut",
    time: "35 min",
    slot: "available"
  },
]

const ServicesScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={services}
        style={{ flexDirection: "column" }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#4c4c4c", margin: 10,borderRadius:10, }}>
              <Image
                source={item.image}
                style={{ width: 80, height: 80, resizeMode: "contain" }}
              />
              <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, }}>{item.type}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default ServicesScreen;
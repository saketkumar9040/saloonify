import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Alert } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import styles from "./style.js";
import data from "../../../assets/data.json"

const ServicesScreen = ({navigation,route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedTimeSlots, setSelectedTimeSlots] = useState("");

  const bookingHandler = async () => {
    try {
     if(name ===""){
      return Alert.alert("Oops🙁","Name cannot be empty")
     }
     if(email===""){
      return Alert.alert("Oops🙁","Email cannot be empty")
     }
     if(selectedTimeSlots===""){
      return Alert.alert("Oops🙁","Please select a time slot")
     };
      const changeStatus = data.services[`${selectedService.id}`].timeSlots;
      console.log(changeStatus)
   

     Alert.alert("Hurray😊","your booking has been confirmed");
    } catch (error) {
      console.log(error)
    }
    //  finally {
    //   setName("");
    //   setEmail("");
    //   setSelectedTimeSlots("");
    //   setModalVisible(false);
    //   navigation.navigate("Bookings")
    // }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <AntDesign name="closecircle" size={30} color="red" style={{ alignSelf: "center", marginVertical: 20, }} onPress={() => setModalVisible(false)} />
        <Text style={{ fontSize: 17, fontWeight: "800", margin: 10, }}>Name</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: "#4c4c4c", marginHorizontal: 10, paddingHorizontal: 15, padding: 5, }}
          value={name}
          placeholder='Enter your name'
          onChangeText={(e) => {
            setName(e)
          }}
        />
        <Text style={{ fontSize: 17, fontWeight: "800", margin: 10, }}>Email</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: "#4c4c4c", marginHorizontal: 10, paddingHorizontal: 15, padding: 5, }}
          value={email}
          placeholder='Enter your Email'
          onChangeText={(e) => {
            setEmail(e)
          }}
        />
        <Text style={{ fontSize: 17, fontWeight: "800", margin: 10, }}>Available slot</Text>
        <Picker
            
          selectedValue={selectedTimeSlots}
          itemStyle={{color:"#000000",fontSize:15,}}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedTimeSlots(itemValue)
          }>
            <Picker.Item label="Pick a time slot" value=""  style={{fontSize:17}}/>
            {
            selectedService &&  selectedService.timeSlots.map((item,index)=>{
              return(
                <Picker.Item label={`${item.timing}`} value={item} key={index}  style={{fontSize:17}}/>
              )
              })
            }  
        </Picker>
        <Text style={{borderTopWidth:1,borderColor:"#4c4c4c",marginHorizontal:10,marginTop:-10}}></Text>
        <TouchableOpacity style={{ alignSelf: "center", backgroundColor: "green", paddingHorizontal: 50, padding: 2, elevation: 10, marginTop: 40, borderRadius: 50, }}
          onPress={() => {
             bookingHandler()
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "700", color: "#ffffff" }}>Book</Text>
        </TouchableOpacity>
      </Modal>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, }}
        data={data.services}
        renderItem={({ item, index }) => {
          return (
            <>
              <View style={{ flex: 1, borderWidth: 1, borderColor: "#4c4c4c", margin: 10, borderRadius: 10, padding: 15, }}>
                <Text style={{ fontSize: 23, fontWeight: "700", marginTop: 10, }}>{item.type}</Text>
                <Text style={{ fontSize: 13, fontWeight: "700", marginTop: 10, alignSelf: "center" }}>{item.description}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                  <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "green" }}>{item.price}</Text>
                  <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "#D4AC0D" }}>{item.time}</Text>
                  {item.status === "available" ? (

                    <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "green" }}>{item.status}</Text>
                  ) : (
                    <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 10, color: "red" }}>{item.status}</Text>
                  )}
                </View>
              </View>
              {
                item.status === "available" && (
                  <TouchableOpacity style={{ alignSelf: "center", backgroundColor: "#0096ff", paddingHorizontal: 30, padding: 2, elevation: 10, marginVertical: 10, }}
                    onPress={() => {
                      setModalVisible(true)
                      setSelectedService(item)
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "700", color: "#ffffff" }}>Book</Text>
                  </TouchableOpacity>
                )
              }
            </>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default ServicesScreen;
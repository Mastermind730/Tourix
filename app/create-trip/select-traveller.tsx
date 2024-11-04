import { View, Text, FlatList, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { SelectTravellersList } from "@/constants/Options";
import { CreateTripContext } from "@/context/CreateTripContext";

type Props = {};

const SelectTraveller = (props: Props) => {
  const [selectedTraveller, setSelectedTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  });
  useEffect(() => {
    console.log(selectedTraveller);
    setTripData({ ...tripData, travellerCount: SelectTraveller });
  }, [selectedTraveller]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Who's Travelling
      </Text>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          Choose your travellers
        </Text>
        <FlatList
          data={SelectTravellersList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setSelectedTraveller(item);
                // console.log(selectedTraveller)
              }}
              style={{
                padding: 15,
                marginVertical: 5,
                backgroundColor:
                  selectedTraveller?.id === item.id ? "#cce5ff" : "#f9f9f9", // Change background color if selected
                borderRadius: 8,
                borderWidth: 1,
                borderColor:
                  selectedTraveller?.id === item.id ? "#007bff" : "#e0e0e0", // Change border color if selected
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.icon} {item.title}
              </Text>
              <Text style={{ color: "#555" }}>{item.desc}</Text>
              <Text style={{ color: "#888" }}>People: {item.people}</Text>
            </Pressable>
          )}
        />
      </View>
      <Pressable
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Continue
        </Text>
      </Pressable>
    </View>
  );
};

export default SelectTraveller;

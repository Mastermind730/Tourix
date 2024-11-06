import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { CreateTripContext } from "@/context/CreateTripContext";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {};

const reviewTrip = (props: Props) => {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  });

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
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop:20
        }}
      >
        Review your Trip
      </Text>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily: "outfit-medium",
            fontSize:20
        }}>
            Before generating your trip,Please review your trip once!!
        </Text>

        <View>
        <Ionicons name="location-sharp" size={30} color="black" />
        </View>
      </View>
    </View>
  );
};

export default reviewTrip;

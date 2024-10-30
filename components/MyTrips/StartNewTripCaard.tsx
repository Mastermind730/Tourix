import { View, Text, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
// import { Pressable } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

type Props = {};

const StartNewTripCaard = (props: Props) => {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      {/* <Text>StartNewTripCaard</Text> */}
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
        {" "}
        No trips planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-medium",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        {" "}
        Life is short, and the world is wide. Start planning your dream getaway
        today!
      </Text>

      <Pressable
        onPress={() => router.push("/create-trip/search-place")}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Start a new trip
        </Text>
      </Pressable>
    </View>
  );
};

export default StartNewTripCaard;

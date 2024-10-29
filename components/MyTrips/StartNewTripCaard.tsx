import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {};

const StartNewTripCaard = (props: Props) => {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 20,
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
        }}
      >
        {" "}
        Life is short, and the world is wide. Start planning your dream getaway
        today!
      </Text>
    </View>
  );
};

export default StartNewTripCaard;

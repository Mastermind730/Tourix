import { View, Text, Pressable, FlatList, ToastAndroid, Platform, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { CreateTripContext } from "@/context/CreateTripContext";
import { SelectBudgetOptions } from "@/constants/Options";
import { Colors } from "@/constants/Colors";

type Props = {};

const SelectBudget = (props: Props) => {
  const [selectedBudget, setSelectedBudget] = useState();

  const { tripData, setTripData } = useContext(CreateTripContext);
  const router=useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  });

  useEffect(()=>{
    selectedBudget&&setTripData({
      ...tripData,
      budget: selectedBudget?.title,
    })
    // console.log(tripData)
  },[selectedBudget,tripData])



  const onClickContinue = () => {
    if (!selectedBudget) {
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "Please select Start and End Date",
          ToastAndroid.LONG
        );
      } else {
        Alert.alert("Date Selection", "Please select Start and End Date");
      }
    } else {
      
      router.push("/create-trip/select-budget");
    }
  };

  return (
    <View
      style={{
        paddingTop: 75,
        padding: 25,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        SelectBudget
      </Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:"outfit-bold",
          fontSize: 20,
        }}>Choose spending habits for you trip</Text>

<FlatList
          data={SelectBudgetOptions}
          keyExtractor={(item:any) => item.id.toString()}
          renderItem={({ item }:any) => (
            <Pressable
              onPress={() => {
                setSelectedBudget(item);
                // console.log(selectedTraveller)
              }}
              style={{
                padding: 15,
                marginVertical: 5,
                backgroundColor:
                  selectedBudget?.id === item.id ? "#cce5ff" : "#f9f9f9", // Change background color if selected
                borderRadius: 8,
                borderWidth: 1,
                borderColor:
                selectedBudget?.id === item.id ? "#007bff" : "#e0e0e0", // Change border color if selected
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
      onPress={()=>onClickContinue()}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 15,
        }}
      >
              {/* <Link href={"/create-trip/select-dates"} style={{width:"100%",textAlign:"center"}}> */}

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
        {/* </Link> */}

      </Pressable>
    </View>
  );
};

export default SelectBudget;

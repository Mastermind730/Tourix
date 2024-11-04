import {
  View,
  Text,
  Pressable,
  Platform,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { CreateTripContext } from "@/context/CreateTripContext";

type Props = {};

const SelectDates = (props: Props) => {
  const navigation = useNavigation();
  const [selectedStartDate, setSelectedStartDate] = useState<any>();
  const [selectedEndDate, setSelectedEndDate] = useState<any>();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  });
  const OnSelectionDateContinue = () => {
    if (!selectedStartDate && !selectedEndDate) {
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "Please select Start and End Date",
          ToastAndroid.LONG
        );
      } else {
        Alert.alert("Date Selection", "Please select Start and End Date");
      }
    } else {
      const totalNoOfDays = selectedEndDate.diff(selectedStartDate, "days");
      setTripData({
        ...tripData,
        startDate: selectedStartDate,
        endDate: selectedEndDate,
        totalNoOfDays: totalNoOfDays + 1,
      });
    }
  };
  const onDateChange = (date: any, type: any) => {
    if (type == "START_DATE") setSelectedStartDate(moment(date));
    else setSelectedEndDate(moment(date));
  };
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
        Travel Dates
      </Text>
      <View style={{ marginTop: 30 }}>
        <CalendarPicker
          allowRangeSelection={true}
          onDateChange={onDateChange}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextColor={Colors.WHITE}
        />
      </View>

      <Pressable
        onPress={OnSelectionDateContinue}
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

export default SelectDates;

import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
// import {TOMTOM_API_KEY} from 'react-native-dotenv';
// import { TOMTOM_API_KEY } from '@env';

type Props = {};

const SearchPlace = (props: Props) => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();
  const TOMTOM_API_KEY = process.env.TOMTOM_API_KEY
  // const TOMTOM_API_KEY = '3VgEugYT6LBgBKn9WvyprAxlYlqaZeGA';

  console.log("key is:",TOMTOM_API_KEY)
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
    });
  }, [navigation]);

  const handleSearch = async (text: string) => {
    setQuery(text);
    if (text.length > 0) {
      try {
        // Call TomTom API to get suggestions
        const response = await axios.get(
          `https://api.tomtom.com/search/2/search/${text}.json`,
          {
            params: {
              key: TOMTOM_API_KEY,
              language: 'en-US',
              typeahead: true,
              limit: 5,
            },
          }
        );
        console.log(response)
        // Map the response to get suggestion labels
        const places = response.data.results.map((result: any) => result.address.freeformAddress);
        setSuggestions(places);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <TextInput
        placeholder="Search"
        value={query}
        onChangeText={handleSearch}
        style={{
          borderColor: Colors.GRAY,
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(item);
              setQuery(item);
              setSuggestions([]);
              router.push("/create-trip/select-traveller");
            }}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: Colors.GRAY,
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchPlace;

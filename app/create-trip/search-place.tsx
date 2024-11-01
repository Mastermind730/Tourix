import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from '@/context/CreateTripContext';

type Props = {};

const SearchPlace = (props: Props) => {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const router = useRouter();
  const TOMTOM_API_KEY = process.env.TOMTOM_API_KEY;

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
        const getMapImageUrl = (lat: number, lon: number) => {
          return `https://api.tomtom.com/map/1/staticimage?key=${TOMTOM_API_KEY}&center=${lon},${lat}&zoom=12&format=png&layer=basic&style=main&width=500&height=300`;
        };
        console.log(response.data.results[0]);
        const places = response.data.results.map((result: any) => ({

          name: result.poi?.name || result.address?.freeformAddress,
          coordinates: result.position,
          photoRef: result.poi?.categorySet?.[0]?.id, // Update based on API's response if photo reference exists
          url: getMapImageUrl(result.position.lat, result.position.lon) // Assuming URL might be part of the POI data or freeform address for fallback
        }));

        
        setSuggestions(places);
        console.log(places);
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setQuery(item.name);
              setSuggestions([]);
              setTripData({
                locationInfo: {
                  name: item.name,
                  coordinates: item.coordinates,
                  photoRef: item.photoRef,
                  url: item.url,
                },
              });
              router.push("/create-trip/select-traveller");
            }}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: Colors.GRAY,
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchPlace;

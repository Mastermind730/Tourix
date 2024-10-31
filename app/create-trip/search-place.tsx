import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

type Props = {};

const SearchPlace = (props: Props) => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router=useRouter();
  // Dummy data to simulate suggestions
  const dummyData = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
    });
  }, [navigation]);

  const handleSearch = (text: string) => {
    setQuery(text);
    // Filter the dummy data to simulate suggestions
    if (text.length > 0) {
      setSuggestions(dummyData.filter((item) => item.toLowerCase().includes(text.toLowerCase())));
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
              router.push("/create-trip/select-traveller")
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

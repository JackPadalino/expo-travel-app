import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

type Props = {
  filteredDestinations: any[];
};

type DestinationType = {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  duration: string;
  location: string;
  category: string;
};

const Listings = ({ filteredDestinations }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const renderItems: ListRenderItem<DestinationType> = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.destination}>
          <Image source={{ uri: item.image }} style={styles.destinationImg} />
          <View style={styles.bookmark}>
            <Ionicons name="bookmark-outline" size={20} color={Colors.white} />
          </View>
          <Text
            style={styles.destinationName}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.name}
          </Text>
          <View style={styles.locationTxtContainer}>
            <View style={styles.locationTxtContainerLeft}>
              <FontAwesome5
                name="map-marker-alt"
                size={18}
                color={Colors.primaryColor}
              />
              <Text style={styles.locationTxt}>{item.location}</Text>
            </View>
            <Text style={styles.priceTxt}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [filteredDestinations]);

  return (
    <View>
      <FlatList
        data={loading ? [] : filteredDestinations}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;
const styles = StyleSheet.create({
  destination: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  destinationImg: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 20,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  destinationName: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  locationTxtContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationTxtContainerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationTxt: {
    fontSize: 12,
    marginLeft: 5,
    color: Colors.black,
  },
  priceTxt: {
    fontSize: 12,
    color: Colors.primaryColor,
  },
});

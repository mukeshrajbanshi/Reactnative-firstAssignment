import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import {data} from "./data.json";

export default function FlatListDemo() {
  return (
    <View style={styles.container}>
      <FlatList
        // data={[
        //   { key: "Murthy" , city : "hyderbad"},
        //   { key: "Kavitha" , city : "mumbai"},
        //   { key: "Raju" , city : "banglore" },
        //   { key: "Lalitha" , city : "delhi" },
        //   { key: "Janvi", city : "patna" },
        //   { key: "Goel" , city : "kolkata"},
        //   { key: "John" , city : "singapure"},
        //   { key: "Laxmi" , city : "nagpur"},
        //   { key: "Karthik" , city : "delhi"},
        // ]}
        data = {data}
        renderItem={({ item }) => <Text style={styles.item}>{item.key} {item.city}</Text>}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

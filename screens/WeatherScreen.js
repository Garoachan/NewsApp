import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import WeatherItem from "../components/WeatherItem";

export default function WeatherScreen() {
  return (
    <View>
      <WeatherItem
        description="ccc"
        icon="https://picsum.photos/id/237/200/300"
        name="bbb"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

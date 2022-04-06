// AAAA
// BBBB
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.mozibox}>
          <Text style={styles.Text}>これは可愛い犬の画像です。</Text>
          <Text style={styles.subText}>テム</Text>
        </View>
        <View style={styles.gazobox}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: "https://picsum.photos/id/237/200/300",
            }}
          />
        </View>
      </View>
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

  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    flexDirection: "row",
  },

  mozibox: {
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
    justifyContent: "space-between",
  },

  gazobox: {
    width: 100,
    backgroundColor: "powderblue",
  },

  Text: {
    fontSize: 16,
  },

  subText: {
    fontSize: 12,
    color: "red",
  },
});

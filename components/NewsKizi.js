import { StyleSheet, Text, View, Image } from "react-native";

const NewsKizi = ({ imageuri, title, subtext }) => {
  return (
    <View style={styles.box}>
      <View style={styles.mozibox}>
        <Text style={styles.Text}>{title}</Text>
        <Text style={styles.subText}>{subtext}</Text>
      </View>
      <View style={styles.gazobox}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: imageuri,
          }}
        />
      </View>
    </View>
  );
};

export default NewsKizi;

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

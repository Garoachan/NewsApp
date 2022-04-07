import { StyleSheet, Text, View, Image } from "react-native";

const NewsKizi = ({ imageuri, title, subtext }) => {
  var date = new Date(subtext);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var koukaihiduke = year + "年" + month + "月" + day + "日";

  return (
    <View style={styles.box}>
      <View style={styles.mozibox}>
        <Text style={styles.Text}>{title}</Text>
        <Text style={styles.subText}>{koukaihiduke}</Text>
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
    padding: 16,
    justifyContent: "space-between",
  },

  gazobox: {
    width: 100,
  },

  Text: {
    fontSize: 16,
  },

  subText: {
    fontSize: 12,
    color: "red",
  },
});

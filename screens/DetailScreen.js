import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function DetailScreen(props) {
  const { route } = props;
  const { article } = route.params;
  console.log(props);
  console.log("ここから-------");
  console.log(article);

  return <WebView style={style.container} source={{ uri: article.url }} />;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

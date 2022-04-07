import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, FlatList, SafeAreaView } from "react-native";
import NewsKizi from "../components/NewsKizi";
import Constants from "expo-constants";
import Axios from "axios";

const URI = `https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default function NewsScreen() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await Axios.get(URI);
    console.log(response);
    setNews(response.data.articles);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <NewsKizi
            imageuri={item.urlToImage}
            title={item.title}
            subtext={item.publishedAt}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

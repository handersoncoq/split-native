import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import AppBar from "./app/components/AppBar";
import Card from "./app/components/Card";
import Disclaimer from "./app/components/Disclaimer";
// import { processYoutubeUrl } from "./app/services/ProcessService";

export default function App() {
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleProgress = (progressValue) => {
    setProgress(progressValue);
  };

  const processUrl = () => {
    setProgress(0);
    processYoutubeUrl(url, handleProgress);
    setUrl("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.appWrapper}>
        <AppBar />
        <View style={styles.frontPageHeader}>
          <Text style={styles.frontPageTitle}>Split/</Text>
          <Text style={styles.frontPageSubtitle}>Free & Simple. Always!</Text>
        </View>
        <Card
          content="Paste your YouTube URL here"
          sup="*"
          url={url}
          setUrl={setUrl}
          showTextarea={true}
          placeholder="https://www.youtube.com/watch?v=example"
          onButtonClick={processUrl}
          buttonText="Split"
          progress={progress}
        />
        <Disclaimer
          text={`This application is provided "as is" without any guarantees or warranty. In association with the product, Split makes no warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, of title, or of non-infringement of third-party rights. Use of the product by a user is at the user's risk.`}
          sup="*"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  appWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  frontPageHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    marginTop: "50%",
    width: "100%",
  },
  frontPageTitle: {
    fontSize: 48,
    paddingBottom: 0,
  },
  frontPageSubtitle: {
    fontSize: 16,
    color: "#1DA1F2",
  },
});

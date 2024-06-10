import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

function ProgressBar({ progress }) {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={[styles.container, { opacity: progress > 0 ? 1 : 0 }]}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: animatedWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          },
        ]}
      />
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    marginVertical: 8,
    borderRadius: 16,
    position: "relative",
    height: 12,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 16,
    backgroundColor: "cyan",
  },
  progressText: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    color: "black",
    fontSize: 10,
    lineHeight: 12,
  },
});

export default ProgressBar;

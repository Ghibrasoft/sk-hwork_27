import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Feather,
  Fontisto,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>WhatsApp</Text>

        <View style={styles.iconsContainer}>
          <Feather name="camera" size={20} color="#fff" style={styles.icon} />
          <Fontisto name="search" size={20} color="#fff" style={styles.icon} />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={21}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e806a",
    paddingTop: 80,
    paddingBottom: 8,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 20,
  },
});

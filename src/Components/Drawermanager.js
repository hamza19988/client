import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const DrawerItem = ({ label, iconName, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
    <Ionicons name={iconName} size={20} color="#71839B" />
    <Text style={styles.drawerItemText}>{label}</Text>
  </TouchableOpacity>
);

const Drawermanager = ({ navigation }) => {
  return (
    <View style={styles.drawerContent}>
      <DrawerItem
        label="Home"
        iconName="ios-home"
        onPress={() => navigation.navigate("news")}
      />
      <DrawerItem
        label="Staff Dashboard"
        iconName="bar-chart"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <DrawerItem
        label="ABS Dashboard"
        iconName="bar-chart"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <DrawerItem
        label="Working Hours"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="Upper Staff"
        iconName="people"
        onPress={() => navigation.navigate("StaffDashboard")}
      />
      <DrawerItem
        label="SI"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="SI"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="SI"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="SI"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="SI"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="SI"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="SI"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="SI"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="SI"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
      <DrawerItem
        label="SI"
        iconName="time"
        onPress={() => navigation.navigate("AbsenceGlobal")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    padding: 10,
    flex: 1,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 10,
  },
  drawerItemText: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "500",
    color: "#324054",
    display: "flex",
    alignItems: "flex-end",
  },
});

export default Drawermanager;

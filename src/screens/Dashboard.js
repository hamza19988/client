import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ChartPie from "../Components/ChartPie";

const data = [
  { title: "Bytedance" },
  { title: "Asus" },
  { title: "C-Discount" },
  { title: "HP",},
  { title: "HP Canada" },
  { title: "Hub Telecom" },
  { title: "KIWI" },
  { title: "Orange Pro",},
  { title: "Sirus",},
  { title: "Xerox",},
];

const dataTableData = [
  {
    month: "January",
    revenue: "$1,000",
    orders: "10",
    customers: "5",
    products: "2",
  },
  {
    month: "February",
    revenue: "$2,000",
    orders: "20",
    customers: "10",
    products: "4",
  },
  {
    month: "March",
    revenue: "$3,000",
    orders: "30",
    customers: "15",
    products: "6",
  },
];

const Dashboard = () => {
  const [filter, setFilter] = useState("revenue");

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.title}
      style={styles.gridItem}
      onPress={() => setFilter(item.title.toLowerCase())}
    >
      <Text style={styles.gridTitle}>{item.title}</Text>
      <Text style={styles.gridValue}>{item.value}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      
      <Text style={styles.headerText}>Operations</Text>
      <Text style={styles.headerText}>
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </Text>
    </View>
  );

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.month}</Text>
      <Text style={styles.cell}>{item[filter]}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>All Operations</Text>
      <ChartPie />
      <View style={styles.gridContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.gridItem}
            onPress={() => setFilter(item.title.toLowerCase())}
          >
            <Text style={styles.gridTitle}>{item.title}</Text>
            <Text style={styles.gridValue}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.tableContainer}>
        {renderHeader()}
        {dataTableData.map((item) => (
          <View key={item.month} style={styles.row}>
            <Text style={styles.cell}>{item.month}</Text>
            <Text style={styles.cell}>{item[filter]}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  
  gridContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
  gridItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  gridValue: {
    fontSize: 4,
    fontWeight: "bold",
  },
  tableContainer: {
    marginTop: 20,
    marginBottom: 60,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
});

export default Dashboard;

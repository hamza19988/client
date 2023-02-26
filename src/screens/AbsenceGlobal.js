import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

const AbsenceGlobal = () => {
  const totalEmployees = 10;
  const totalAbsences = [0.3, 0.2, 0.1, 0.4, 0.5].map((value) => (value * 100 / totalEmployees).toFixed(2));

  const absenceData = {
    labels: ["January", "February", "March", "April", "May" ],
    datasets: [
      {
        data: totalAbsences,
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // red
        strokeWidth: 2, // optional
      },
    ],
  };

  const tableData = [
    { employee: "Asus", absences: "8%" },
    { employee: "C-Discount", absences: "6%" },
    { employee: "HP", absences: "4%" },
    { employee: "Asus", absences: "3%" },
    { employee: "Sirus", absences: "11%" },
    { employee: "HP Canada", absences: "13%" },
    { employee: "Hub Telecom", absences: "18%" },
    { employee: "Orange Pro", absences: "9%" },
    { employee: "KIWI", absences: "8%" },
    { employee: "Xerox", absences: "13%"},
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.column}>{item.employee}</Text>
      <Text style={[styles.column, styles.rightAlign]}>{item.absences}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global View CNX-TUN Absence</Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={absenceData}
          width={350}
          height={200}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </View>
      <Text style={styles.tableTitle}>Absences Per Operation</Text>
      <View style={styles.tableContainer}>
      
        <View style={styles.row}>
          <Text style={[styles.column, styles.header]}>Operations</Text>
          <Text style={[styles.column, styles.header, styles.rightAlign]}>
            Absences
          </Text>
        </View>
        <FlatList
          data={tableData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
       
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  tableContainer: {
    marginTop: 15,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  column: {
    flex: 1,
  },
  rightAlign: {
    textAlign: "right",
  },
  header: {
    fontWeight: "bold",
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 29,
    textAlign: "center",
  },
  list: {
    marginTop: 8,
  },
});

export default AbsenceGlobal;

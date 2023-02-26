import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";

const ChartPie = () => {
  const values = [
    {
      name: "Bytedance",
      population: 500,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Asus",
      population: 80,
      color: "#FF0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "c-Discount",
      population: 40,
      color: "#50E2F2",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "HP",
      population: 100,
      color: "#262118",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "HP Canada",
      population: 50,
      color: "#A349FA",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Hub Telecom",
      population: 6,
      color: "#4AFF87",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Kiwi",
      population: 12,
      color: "#FA8C00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Orange pro",
      population: 280,
      color: "#DE408B",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Sirus",
      population: 35,
      color: "#08E000",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Xerox",
      population: 30,
      color: "#2C6340",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <View>
      <PieChart
        data={values}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="8"
        absolute
        useShadowColorFromDataset
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default ChartPie;

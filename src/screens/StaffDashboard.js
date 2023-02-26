import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const StaffDashboard = () => {
  const [employees, setEmployees] = useState([
    { id: "1", name: "John Doe", apartment: "101", role: "Manager" },
    {
      id: "2",
      name: "Jane Smith",
      apartment: "102",
      role: "Assistant Manager",
    },
    { id: "3", name: "Bob Johnson", apartment: "103", role: "Janitor" },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEmployeeName, setNewEmployeeName] = useState("");
  const [newEmployeeApartment, setNewEmployeeApartment] = useState("");
  const [newEmployeeRole, setNewEmployeeRole] = useState("");

  const handleAddEmployee = () => {
    setIsModalVisible(true);
  };

  const handleCreateEmployee = () => {
    const newEmployee = {
      id: `${employees.length + 1}`,
      name: newEmployeeName,
      apartment: newEmployeeApartment,
      role: newEmployeeRole,
    };
    setEmployees([...employees, newEmployee]);
    setIsModalVisible(false);
    setNewEmployeeName("");
    setNewEmployeeApartment("");
    setNewEmployeeRole("");
  };

  const handleEditEmployee = (id) => {
    // code to edit the employee with the specified id
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const renderHeader = () => (
    <View style={styles.row}>
      <Text style={[styles.name, styles.headerText]}>Name</Text>
      <Text style={[styles.apartment, styles.headerText]}>Apartment</Text>
      <Text style={[styles.role, styles.headerText]}>Role</Text>
      {/* <View style={styles.buttonsContainer}>
        <Text style={styles.headerText}>Actions</Text>
      </View> */}
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.apartment}>{item.apartment}</Text>
      <Text style={styles.role}>{item.role}</Text>
      {/* <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => handleEditEmployee(item.id)}
          style={styles.editButton}
        >
          <Text style={styles.buttonText}>
            <Ionicons name="create-outline" size={20} color="#71839B" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDeleteEmployee(item.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.buttonText}>
            <Ionicons name="trash" size={20} color="#71839B" />
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Staff Dashboard</Text>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={employees}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Modal
        animationType="slide"
        visible={isModalVisible}
        onRequest
        Close={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Create New Employee</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={newEmployeeName}
            onChangeText={(text) => setNewEmployeeName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Apartment"
            value={newEmployeeApartment}
            onChangeText={(text) => setNewEmployeeApartment(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Role"
            value={newEmployeeRole}
            onChangeText={(text) => setNewEmployeeRole(text)}
          />
          <TouchableOpacity
            onPress={handleCreateEmployee}
            style={styles.addButton}
          >
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsModalVisible(false)}
            style={styles.cancelButton}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  name: {
    flex: 1,
  },
  apartment: {
    flex: 1,
  },
  role: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  editButton: {
    backgroundColor: "#add8e6",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: "#ff7f50",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#7CFC00",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: "#FFA07A",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  headerText: {
    fontWeight: "bold",
    color: "#333",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: "#FFA07A",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default StaffDashboard;

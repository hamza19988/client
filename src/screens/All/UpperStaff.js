import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function StaffScreen() {
  const [bytedance, setBytedance] = useState(false);
  const [hp, setHp] = useState(false);

  const staffData = [
    { id: '1', name: 'Manager', department: 'Sales' },
    { id: '2', name: 'Staff 1', department: 'Sales' },
    { id: '3', name: 'Intern 1', department: 'Sales' },
    { id: '4', name: 'Intern 2', department: 'Sales' },
    { id: '5', name: 'Staff 2', department: 'Marketing' },
    { id: '6', name: 'Staff 3', department: 'Marketing' },
    { id: '7', name: 'Staff 4', department: 'Marketing' },
    { id: '8', name: 'Staff 5', department: 'IT' },
    { id: '9', name: 'Staff 6', department: 'IT' },
  ];

  const handleBytedancePress = () => {
    setBytedance(!bytedance);
  };

  const handleHpPress = () => {
    setHp(!hp);
  };

  const renderStaffItem = ({ item }) => {
    return (
      <View style={styles.staffItem}>
        <Text style={styles.staffName}>{item.name}</Text>
        <Text style={styles.staffDepartment}>{item.department}</Text>
      </View>
    );
  };

  const renderStaffList = (data) => {
    return (
      <FlatList
        style={styles.staffList}
        data={data}
        renderItem={renderStaffItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CNX-TUN Management</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.showStaffListButton}
          onPress={handleBytedancePress}
        >
          <Text style={styles.showStaffListButtonText}>
            {bytedance ? 'Hide Bytedance Staff' : 'Show Bytedance Staff'}
          </Text>
        </TouchableOpacity>
        {bytedance && renderStaffList(staffData)}
        <TouchableOpacity
          style={styles.showSalesStaffListButton}
          onPress={handleHpPress}
        >
          <Text style={styles.showSalesStaffListButtonText}>
            {hp ? 'Hide HP Staff' : 'Show HP Staff'}
          </Text>
        </TouchableOpacity>
        {hp && renderStaffList(staffData.filter((item) => item.department === 'Sales'))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 80,
    backgroundColor: '#4b9cd3',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  showSalesStaffListButton: {
    height: 70,
    alignSelf: 'stretch',
    backgroundColor: '#4b9cd3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  showSalesStaffListButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },


  showStaffListButton: {
    height: 70,
    alignSelf: 'stretch',
    backgroundColor: '#4b9cd3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  showStaffListButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  staffList: {
    alignSelf: 'stretch',
  },
  staffItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  staffName: {
    flex: 1,
    fontSize: 16,
  },
  staffDepartment: {
    fontSize: 14,
    color: '#999',
  },
  closeStaffListButton: {
    height: 70,
    alignSelf: 'stretch',
    backgroundColor: '#4b9cd3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeStaffListButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

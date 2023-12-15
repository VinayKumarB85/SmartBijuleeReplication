import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const LogOut = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate("DashBoard")
  };

  useEffect(() => {
    openModal();
  }, []);

  const backgroundColor = route.params?.backgroundColor && 'transparent';

  return (
    <View style={styles.container}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={[styles.modalContainer, { backgroundColor }]}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is a modal</Text>

            {/* Button to close the modal */}
            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
              <Text style={styles.buttonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Modal will be displayed from the bottom
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default LogOut;

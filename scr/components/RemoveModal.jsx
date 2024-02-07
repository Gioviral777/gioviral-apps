import { Text, View, StyleSheet, Pressable, Modal } from "react-native";

const RemoveModal = ({
  modalVisible,
  cartItems,
  setCartItems,
  setModalVisible,
  itemSelected,
}) => {
  const removeItem = () => {
    const filteredArray = cartItems.filter((item) => item.id !== itemSelected);
    setCartItems(filteredArray);
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text>¿Estás seguro/a de eliminar el servicio?</Text>
        <Pressable onPress={() => setModalVisible(false)}>
          <Text>No</Text>
        </Pressable>
        <Pressable onPress={removeItem}>
          <Text>Sí</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default RemoveModal;

const styles = StyleSheet.create({
  modalContainer: {
    height: 200,
    backgroundColor: "#CFF500",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    fontWeight: "bold",
  },
});
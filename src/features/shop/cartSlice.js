import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      user: "userLogged",
      updatedAt: new Date().toLocaleString(),
      total: null,
      items: [],
    },
  },
  reducers: {
    addItem: (state, action) => {
      const productRepeated = state.value.items.find(
        (item) => item.id === action.payload.id
      );
      if (productRepeated) {
        const itemsUpdated = state.value.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
        const total = itemsUpdated.reduce(
          (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
          0
        );
        state.value = {
          ...state.value,
          items: itemsUpdated,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      } else {
        state.value.items.push(action.payload);
        const total = state.value.items.reduce(
          (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
          0
        );
        state.value = {
          ...state.value,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      }
    },
    removeItem: (state, action) => {
      //Logica para remover el producto
      //Encontrar el índice del item que queremos eliminar
      const indexToRemove = state.value.items.findIndex(
        (item) => item.id === action.payload.id
      );

      //Verificar si el índice es válido
      if (indexToRemove !== -1) {
        //Crear un nuevo array de items excluyendo el item a eliminar
        const updatedItems = state.value.items.filter(
          (item, index) => index !== indexToRemove
        );

        //Calcular el nuevo total
        const total = updatedItems.reduce(
          (acum, currentItem) => (acum += currentItem.quantity * currentItem.price),
          0
        );

        //Actualizamos el estado del carrito
        state.value = {
          ...state.value,
          items: updatedItems,
          total,
          updatedAt: new Date().toLocaleDateString(),
        };
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
import { create } from "zustand";

const useStore = create((set, get) => ({
  products: [],
  cart: [],
  product: {},
  modalVisible: false,
  fullName: "",
  email: "",
  subject: "",
  message: "",
  setEmail: (email) => set({ email }),
  setSubject: (subject) => set({ subject }),
  setMessage: (message) => set({ message }),
  setFullName: (fullName) => set({ fullName }),
  setModalVisible: () => set({ modalVisible: true }),
  setModalVisibleFalse: () => set({ modalVisible: false }),
  addProducts: (productsStripe) =>
    set((state) => ({ products: [...state.products, ...productsStripe] })),
  setProduct: (newProduct) => {
    set((state) => ({
      ...state,
      product: newProduct,
    }));
  },
  addItemToCart: (item) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex !== -1) {
        const updatedCartItems = state.cart.map((cartItem, index) => {
          if (index === existingItemIndex) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        return { cart: updatedCartItems };
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    });
  },
  decreaseCartItemQuantity: (item) => {
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          const updatedCartItems = state.cart.map((cartItem) => {
            if (cartItem.id === item.id) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
          });
          return { cart: updatedCartItems };
        } else {
          const updatedCartItems = state.cart.filter(
            (cartItem) => cartItem.id !== item.id
          );
          return { cart: updatedCartItems };
        }
      }
      return state;
    });
  },
  increaseCartItemQuantity: (item) => {
    set((state) => {
      const updatedCartItems = state.cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      return { cart: updatedCartItems };
    });
  },
  removeItemFromCart: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== itemIndex;
      });
      return {
        ...state,
        cart: newCart,
      };
    });
  },
  getTotalItems: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useStore;

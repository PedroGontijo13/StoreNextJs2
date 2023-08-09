import { create } from "zustand";

const useStore = create((set) => ({
    products: [],
    cart: [],
    modalVisible: false,
    setModalVisible: () => set({ modalVisible: true }),
    setModalVisibleFalse: () => set({ modalVisible: false }),
    addProducts: (productsStripe) => set((state) => ({ products: [...state.products, ...productsStripe] })),
    addItemToCart: (item) => {
        set((state) => {
            const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                const updatedCartItems = state.cart.map((cartItem) => {
                    if (cartItem.id === item.id) {
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
}));

export default useStore;

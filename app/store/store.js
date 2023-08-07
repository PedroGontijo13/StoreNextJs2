import { create } from "zustand";

const useStore = create((set) => ({
    products: [],
    cart: [],
    modalVisible: false,
    setModalVisible: () => set({ modalVisible: true }),
    setModalVisibleFalse: () => set({ modalVisible: false }),
    addProducts: (productsStripe) => set((state) => ({ products: [...state.products, ...productsStripe] })),
    addItemToCart: (params) => {
        const { newItem } = params
        set((state) => {
            const newCart = [...state.cart, newItem]
            return {
                ...state,
                cart: newCart,
            }
        })
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

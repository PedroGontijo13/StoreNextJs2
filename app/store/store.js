import { create } from "zustand";

const useStore = create((set) => ({
    products: [],
    modalVisible: false,
    setModalVisible: () => set({ modalVisible: true }),
    setModalVisibleFalse: () => set({ modalVisible: false }),
    addProducts: (productsStripe) => set((state) => ({ products: [...state.products, ...productsStripe] })),
}));

export default useStore;

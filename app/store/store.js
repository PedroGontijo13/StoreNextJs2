import { create } from "zustand"

const useStore = create((set) => ({
    modalVisible: false,
    setModalVisible: () => set((state) => ({ modalVisible: true })),
    setModalVisibleFalse: () => set((state) => ({ modalVisible: false }))
}))

export default useStore
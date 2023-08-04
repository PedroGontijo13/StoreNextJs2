'use client'
import Image from 'next/image'
import Modal from './components/Modal'
import { useState } from 'react'
import useStore from './store/store'

export default function Home() {
  const modalVisible = useStore((state) => state.modalVisible)

  return (
    <main className="flex">
      <p>Hello</p>

      {modalVisible && (
        <Modal isVisible={modalVisible} />
      )}
    </main>
  )
}

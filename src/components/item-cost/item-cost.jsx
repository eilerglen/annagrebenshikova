import styles from './item-cost.module.css'
import { Button } from '../button/button'
import React, {useState} from "react";
import Modal from "../modal/modal";

export const CostItem= ({price, description }) => {
  const [isOpenModal, setOpenModal] = useState(false)

  const handleOpenModal = (e) => {
    setOpenModal(true)
  }

  const handleCloseModal = (e) => {
    setOpenModal(false)
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.price}> {price}
        <span className={styles.span}> руб.</span>
      </h3>
      <p className={styles.description}> {description}</p>
      <Button handleClick = {handleOpenModal} text ="Записаться" ></Button>
      {isOpenModal && (
        <Modal title = 'Записаться' onClose = {handleCloseModal}>
        </Modal>
        )
      }
    </div>
  )
}
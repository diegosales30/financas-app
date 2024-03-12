import React from 'react'
import styles from './main.module.scss'
import { FormComponent } from '../FormComponent'
import { ListData } from '../ListData'

export const MainComponent = () => {
  return (
    <main className={styles.container}>
      <h1>conteudo principal</h1>
      <FormComponent />
      <ListData />
    </main>
  )
}

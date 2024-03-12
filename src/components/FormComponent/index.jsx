import React from 'react'
import { useInputData } from '../../context/InputContext'

export const FormComponent = () => {
  const {description, setDescription, valor, setValor, tipo, setTipo, list, setList } = useInputData()
  console.log(description, valor, tipo);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { description, valor, tipo }]);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label >
        <p>Descrição</p>
        <input type="text" 
        placeholder='Ex: Salário do mês' 
        required 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}  />
      </label>
      <label >
        <p>Valor</p>
        <input type="number" 
        placeholder='Ex: R$: 1,00' 
        required
        value={valor}
        onChange={(e) => setValor(e.target.value)}
          />
      </label>
      <select 
      required 
      value={tipo}
      onChange={(e) => setTipo(e.target.value)}>
        <option value="Entrada">Entrada</option>
        <option value="Saida">Saída</option>
      </select>
      <button type='submit'>Adicionar</button>
    </form>
  )
}

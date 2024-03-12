import React from 'react'
import { useInputData } from '../../context/InputContext'

export const ListData = () => {
  const {list} = useInputData();
  console.log(list);
  return (
    <div>
      <h1>hello</h1>
     {list.map((data, i) => (
      <ul key={i}>
        <li>{data.description}</li>
        <li>{data.valor}</li>
        <li>{data.tipo}</li>
      </ul>
     ))}
    </div>
  )
}

import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from "../form/SubmitButton"

import styles from '../project/ProjectForm.module.css'

export default function ServiceForm({ txtBtn, handleSubmit, projectData }) {

   const [ service, setService ] = useState({})

   function submit(e) {
      e.preventDefault()   
      projectData.services.push(service)
      handleSubmit(projectData)
   }

   function handleChange(e) {
      setService({ ...service, [ e.target.name ] : e.target.value })
   }

    return (
      <form 
       onSubmit={ submit }
       className={ styles.form }
      > 
         <Input 
          type='text'
          text='Serviço'
          name='name'
          placeholder='Insira o nome do serviço'
          handleOnChange={ handleChange }
         />
         <Input 
          type='number'
          text='Custo'
          name='cost'
          placeholder='Informe o custo do serviço'
          handleOnChange={ handleChange }
         />
         <Input 
          type='text'
          text='Descrição'
          name='description'
          placeholder='Descreva o serviço'
          handleOnChange={ handleChange }
         />
         <SubmitButton textBtn={ txtBtn } />
      </form>   
    )
}
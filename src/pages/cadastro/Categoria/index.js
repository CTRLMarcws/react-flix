import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const initialValues = {
    name: '',
    description: '',
    color: ''
  }
  
  const [categories, setCategories] = useState([])
  const [values, setValues] = useState(initialValues);

  function setValue(indexValues, value) {
    //indexValues: name, description, color
    setValues({
      ...values,
      [indexValues]: value,
    })
  }

  function handleChange(event) {
    //const { getAttribute, value } = event.target;
    setValue(
      event.target.getAttribute('name'),
      event.target.value
      //getAttribute('name'),
      //value
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria: {values.name}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategories([
          ...categories,
          values
        ]);

        setValues(initialValues);
      }}>

      <FormField
        label="Nome da Categoria"
        type="text"
        name="name"
        value = {values.name}
        onChange={handleChange}
      />


      <FormField
        label="Descrição"
        type="text"
        name="description"
        value = {values.description}
        onChange={handleChange}
      />

      <FormField
        label="Cor"
        type="color"
        name="color"
        value = {values.color}
        onChange={handleChange}
      />

      <button>
        Cadastrar
      </button>

      </form>

      <ul>
        {categories.map((categorie, index) => {
          return (
            <li key={`${categorie}${index}`}>
              {categorie.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para a home
        </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
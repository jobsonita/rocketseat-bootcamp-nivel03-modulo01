import React from 'react'

import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Form, Repositories, Title } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/1463583?s=460&v=4"
            alt="Jobson Gilberto"
          />
          <div>
            <strong>jobsonita/rocketseat-bootcamp-nivel03-modulo01</strong>
            <p>Primeiro projeto com React</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/1463583?s=460&v=4"
            alt="Jobson Gilberto"
          />
          <div>
            <strong>jobsonita/rocketseat-bootcamp-nivel03-modulo01</strong>
            <p>Primeiro projeto com React</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/1463583?s=460&v=4"
            alt="Jobson Gilberto"
          />
          <div>
            <strong>jobsonita/rocketseat-bootcamp-nivel03-modulo01</strong>
            <p>Primeiro projeto com React</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard

import React, { useState, FormEvent } from 'react'

import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

import { Error, Form, Repositories, Title } from './styles'

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const repoFormat = /^[^/]+\/[^/]+$/

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()

    if (!repoFormat.test(newRepo)) {
      setInputError('Digite o repositório no formato autor/nome')
      return
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`)

      const newRepository = response.data

      setRepositories((oldRepositories) => [...oldRepositories, newRepository])
      setNewRepo('')
      setInputError('')
    } catch (error) {
      setInputError('Erro na busca pelo repositório informado')
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository, index) => (
          <a key={index} href="#teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard

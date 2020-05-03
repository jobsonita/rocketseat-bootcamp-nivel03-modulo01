import React, { FormEvent, useEffect, useState } from 'react'

import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

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

const searchFormat = /^[^/]+\/[^/]+$/

const repoStorage = '@GithubExplorer:repositories'

const saveRepositories = (repositories: Repository[]): void => {
  localStorage.setItem(repoStorage, JSON.stringify(repositories))
}

const loadRepositories = (): Repository[] => {
  const storedRepositories = localStorage.getItem(repoStorage)

  if (!storedRepositories) return []

  try {
    return JSON.parse(storedRepositories)
  } catch (error) {
    return []
  }
}

const Dashboard: React.FC = () => {
  const [repoSearch, setRepoSearch] = useState('')
  const [inputError, setInputError] = useState('')

  const [repositories, setRepositories] = useState<Repository[]>(
    loadRepositories()
  )

  useEffect(() => saveRepositories(repositories), [repositories])

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    if (!searchFormat.test(repoSearch)) {
      setInputError('Digite o repositório no formato autor/nome')
      return
    }

    try {
      const response = await api.get<Repository>(`repos/${repoSearch}`)

      const newRepository = response.data

      setRepositories((oldRepositories) => [...oldRepositories, newRepository])
      setRepoSearch('')
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
          value={repoSearch}
          onChange={(e) => setRepoSearch(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository, index) => (
          <Link key={index} to={`/repositories/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard

import React, { useCallback, useEffect, useState } from 'react'
import { DataUser } from '../../../services/data-type'
import { getDataUser, getRepoUser, getUsers } from '../../../services/user'
import ContentMain from '../../oraganism/main/ContentMain'
import HeadMain from '../../oraganism/main/HeadMain'

export default function MainPage(this: any) {
  const [data, setData] = useState<DataUser>({
    avatar_url: '',
    name: '',
    login: '',
  })
  const [users, setUsers] = useState([])
  const [repos, setRepos] = useState([])
  const [username, setUsername] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [lang, setLang] = useState('')
  const [reponame, setReponame] = useState('')
  const [repoSuggestions, setRepoSuggestions] = useState<any>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setpostPerPage] = useState(5)
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentSuggestPosts = repoSuggestions.length > 0 && repoSuggestions.slice(indexOfFirstPost, indexOfLastPost)
  const currentPosts = repos.length > 0 && repos.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber)

  const getAllUser = useCallback(async () => {
    const res = await getUsers()
    setUsers(res)
  }, [getUsers])

  const getUserData = useCallback(async (value) => {
    const data = await getDataUser(value)
    setData(data)
  }, [getDataUser])

  const getUserRepo = useCallback(async (value) => {
    const repo = await getRepoUser(value)
    setRepos(repo)
  }, [getRepoUser])

  const userChangeHandler = (text: any) => {
    let matches: never[] = []

    if (text.length > 0) {
      matches = users.filter((usr: { login: string }) => {
        const regex = new RegExp(`${text}`, 'gi');
        return usr.login.match(regex)
      })
    }

    setSuggestions(matches)
    setUsername(text)
  }

  const userSuggestionHandler = (text: string) => {
    setUsername(text)
    setSuggestions([])
  }

  const repoChangeHandler = (text: any) => {
    let matches: never[] = []

    if (text.length > 0) {
      matches = repos.filter((rep: { name: string }) => {
        if (text.match(/[a-z]/g)) {
          const regex = new RegExp(text, 'gi');
          return rep.name.match(regex)
        } else if (text.match(/[0-9]/g)) {
          return Object.values(rep)
            .join(' ')
            .toLowerCase()
            .includes(text.toLowerCase())
        }
      })
    }

    setRepoSuggestions(matches)
    setReponame(text)
  }

  const numberShowChange = (value: any) => {
    setpostPerPage(value)
  }

  const handleLanguage = (text: string) => {
    let matches: never[] = []

    if (text == 'all') {
      matches = repos
    } else {
      matches = repos.filter((rep: { language: string }) => {
        if (rep.language) {
          const regex = new RegExp(`${text}`, 'i');
          return rep.language.match(regex)
        }
      })
    }

    if (matches.length > 0) {
      setRepoSuggestions(matches)
      setReponame(text)
    } else {
      alert('no match found')
    }
  }

  useEffect(() => {
    getAllUser()
  }, [])

  useEffect(() => {
    getUserData(username)
    getUserRepo(username)
  }, [username])

  useEffect(() => {
    if (username == '') {
      const repSuggest: never[] = []
      setRepoSuggestions(repSuggest)
    } else if (username.length > 0) {
      getUserData(username)
      getUserRepo(username)
    }
  }, [username])

  return (
    <main className="main-wrapper">
      <div className="row">
        <HeadMain
          username={username}
          suggestions={suggestions}
          userChangeHandler={userChangeHandler}
          userSuggestionHandler={userSuggestionHandler}
        />
        <ContentMain
          username={username}
          data={data}
          reponame={reponame}
          repoSuggestions={repoSuggestions}
          currentPosts={currentPosts}
          currentSuggestPosts={currentSuggestPosts}
          paginate={paginate}
          repos={repos}
          postPerPage={postPerPage}
          repoChangeHandler={repoChangeHandler}
          handleLanguage={handleLanguage}
          numberShowChange={numberShowChange}
        />
      </div>
    </main>
  )
}

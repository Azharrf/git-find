import { useCallback, useState } from 'react';
import { getRepoDataUser, getRepoUserLanguage } from '../../../services/user';
import Input from '../../atoms/input';
import DropdownLanguage from '../../molecules/DropdownLanguage';
import NumberShowPage from '../../molecules/NumberShowPage';
import ModalDetail from '../modalDetail';
import Pagination from '../pagination';
import ItemRepo from './ItemRepo';

interface ContentMainProps {
    username: string;
    data: any;
    reponame: string;
    repoSuggestions: any;
    currentPosts: any;
    currentSuggestPosts: any;
    paginate: any;
    repos: any;
    postPerPage: number;
    repoChangeHandler: (value: any) => void;
    handleLanguage: (value: string) => void;
    numberShowChange: (value: string) => void;
}

export default function ContentMain(props: ContentMainProps) {
  const {
    username, data, reponame, repoSuggestions, currentPosts, currentSuggestPosts, paginate, repos, postPerPage, repoChangeHandler, handleLanguage, numberShowChange,
  } = props
  const [nameRepo, setNameRepo] = useState('')
  const [repoDetail, setRepoDetail] = useState({})
  const [repoLang, setRepoLang] = useState<any>([])

  const getUserDataRepo = useCallback(async (owner, repo) => {
    const res = await getRepoDataUser(owner, repo)
    setRepoDetail(res)
  }, [getRepoDataUser])

  const getRepoLanguage = useCallback(async (user, reponame) => {
    const res = await getRepoUserLanguage(user, reponame)
    const lang = Object.keys(res)
    setRepoLang(lang)
  }, [getRepoUserLanguage])

  const handleClickModal = (text: any) => {
    setNameRepo(text)
    getUserDataRepo(data.login, text)
    getRepoLanguage(data.login, text)
  }

  return (
    <>
      <div className="col-12 main-content">
        <div className="container-lg">
          <div className="row">
            <div className={username.length > 0 ? 'col-md-4 profile active' : 'col-md-4 profile'}>
              <div className="photo-profile">
                {username.length > 0 && (
                  <img alt="Photo Profile" srcSet={data.avatar_url} />
                )}
              </div>
              <h3>{data.login}</h3>
              <p>{data.name}</p>
            </div>
            <div className="col-md-8 repo">
              <div className="head-list-repo">
                <h3>Repositories</h3>
                {username ? (
                  <div className="input-group">
                    <Input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search repo..."
                      onChange={(e) => repoChangeHandler(e.target.value)}
                    />
                    <DropdownLanguage handleLanguage={handleLanguage} />
                  </div>
                ) : (
                  <div className="input-group">
                    <Input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search repo..."
                      onChange={(e) => repoChangeHandler(e.target.value)}
                      disabled
                    />
                    <DropdownLanguage handleLanguage={handleLanguage} disable />
                  </div>
                )}
              </div>
              <hr />
              {repos.length >= 0 && (
              <div className="list-repo">
                {reponame && repoSuggestions.length > 0 ? (
                  (
                    currentSuggestPosts.map((repo: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; id: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; language: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }, i: React.Key | null | undefined) => (
                      <>
                        <ItemRepo user={data.login} name={`${repo.name}`} id={`${repo.id}`} description={`${repo.description}`} language={`${repo.language}`} handleClick={handleClickModal} />
                      </>
                    ))
                  )
                ) : (
                  currentPosts && currentPosts.map((repositories: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; id: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; language: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }, i: React.Key | null | undefined) => (
                    <>
                      <ItemRepo user={data.login} name={`${repositories.name}`} id={`${repositories.id}`} description={`${repositories.description}`} language={`${repositories.language}`} handleClick={handleClickModal} />
                    </>
                  ))
                )}
                {(currentPosts || currentSuggestPosts) && (
                <div className="navigate">
                  <NumberShowPage showHandler={numberShowChange} />
                  {reponame ? (
                    <Pagination postPerPage={postPerPage} totalPost={repoSuggestions.length} paginate={paginate} />
                  ) : (
                    <Pagination postPerPage={postPerPage} totalPost={repos.length} paginate={paginate} />
                  )}
                </div>
                )}
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalDetail data={repoDetail} lang={repoLang} />
    </>
  )
}

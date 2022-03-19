import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API

export async function getUsers() {
  const url = `${ROOT_API}/users`;

  return callAPI({
    url,
    method: 'GET',
  })
}

export async function getDataUser(params: string) {
  const url = `${ROOT_API}/users/${params}`;

  return callAPI({
    url,
    method: 'GET',
  })
}

export async function getRepoUser(params: string) {
  const url = `${ROOT_API}/users/${params}/repos`;

  return callAPI({
    url,
    method: 'GET',
  })
}

export async function getRepoDataUser(user: string, name: string) {
  const url = `${ROOT_API}/repos/${user}/${name}`;

  return callAPI({
    url,
    method: 'GET',
  })
}

export async function getRepoUserLanguage(user: string, repo: string) {
  const url = `${ROOT_API}/repos/${user}/${repo}/languages`;

  return callAPI({
    url,
    method: 'GET',
  })
}

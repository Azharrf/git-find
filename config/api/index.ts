import axios from 'axios'

export default async function callAPI({
  url, method,
} : any) {
  const headers = {
    authorization: 'token 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',
  };

  const response = await axios({
    url,
    method,
    headers,
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    }
    return res
  }

  const res = {
    error: false,
    message: 'Success',
    data: response.data,
  }

  return res.data
}

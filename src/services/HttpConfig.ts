type Headers = {
  Accept: string
}

export type Config = {
  headers: Headers,
  method: string
}

const constructConfig = () => ({
  headers: { Accept: "application/json" },
  method: "GET"
})

const HttpConfig = () => {
  const construct = (): Config => ({
    headers: { Accept: "application/json" },
    method: "GET"
  })
  return {
    construct
  }
}


export default HttpConfig
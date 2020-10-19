import { Config } from "./HttpConfig";

const HttpRequests = () => {
  const get = async (url: string, config: Config) => {
    const res = await fetch(url, config);
    if (res.status >= 400) {
      throw new Error("Error when findTrendingUsers");
    }

    return await res.json();
  }

  return {
    get
  }
}


export default HttpRequests
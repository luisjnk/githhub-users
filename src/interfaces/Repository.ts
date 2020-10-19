export interface IStarestRepositoriesResponse {
  total_count: number;
  items: Array<IStarestRepository>
}

export interface IStarestRepository {
  id: string,
  name: string,
  description: string,
  url: string,
  stargazers_count: number
}
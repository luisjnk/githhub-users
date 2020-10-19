import faker from 'faker';
import { IStarestRepositoriesResponse, IStarestRepository } from '../../interfaces/Repository';
import { IUsers, IUser, IUserDetails } from '../../interfaces/Users';

export const items: Array<IStarestRepository> = [
  {
    id: faker.random.uuid(),
    description: faker.random.word(),
    name: faker.random.word(),
    stargazers_count: faker.random.number(),
    url: faker.random.word()
  },
  {
    id: faker.random.uuid(),
    description: faker.random.word(),
    name: faker.random.word(),
    stargazers_count: faker.random.number(),
    url: faker.random.word()
  }
]

export const REPOSITORIES: IStarestRepositoriesResponse = { total_count: 2, items }


const AVATAR_URL = faker.internet.avatar()

export const USERS: IUsers = {
  total_count: 1,
  items: [
    {
      avatar_url: AVATAR_URL,
      url: faker.internet.url(),
      id: faker.random.number(),
      login: faker.name.firstName(),
      html_url: faker.internet.url(),
      followers_url: faker.internet.url(),
      repos_url: faker.internet.url()
    }
  ]
}

export const USERS_DETAILS: IUserDetails = {
  followers: 25,
  avatar_url: AVATAR_URL,
  url: faker.internet.url(),
  id: faker.random.number(),
  login: faker.name.firstName(),
  html_url: faker.internet.url(),
  followers_url: faker.internet.url(),
  repos_url: faker.internet.url()
}


export const USERS_EMPTY: IUsers = {
  total_count: 0,
  items: []
}
import { IUser } from "./Users";
import { IStarestRepository } from "./Repository";

export interface ITable {
  total_count: number
  items?: Array<IUser | IStarestRepository>
}

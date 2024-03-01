export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export interface IUserInitialState {
  user: IUser | null;
  isLodaing: boolean;
  error: string;
}

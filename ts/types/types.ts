import {AnyAction} from 'redux';

export type RoutesType = {
  login: string;
  info: string;
};

export type PersonalDetails = {
  avatar: string;
  joinedAt: string;
  Team: string;
  name: string;
};

export type Project = {
  name: string;
  score: number;
  durationInDays: number;
  bugsCount: number;
  madeDadeline: boolean;
};

export type LocalStorage = {
  value: PersonalDetails;
  expiry: number;
};

export type Token = {
  value: string;
  expiry: number;
};

export interface SetIsAuthAction extends AnyAction {
  type: string;
}

export interface IsAuthState {
  isAuth: boolean;
}

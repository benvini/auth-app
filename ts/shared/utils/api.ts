import axios from 'axios';
import {LOGIN, PROJECTS} from '../../../bin/config';

export const login = async (userCredentials: object) => {
  try {
    const response = await axios.post(LOGIN, {
      ...userCredentials,
    });
    return response.data[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getProjects = async (token: string) => {
  try {
    const res = await axios.get(PROJECTS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

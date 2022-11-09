import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { QUERY_KEY } from '../../utils/queryKey'


import backendUrl from '../../backendUrl';

export let token = null;

const setToken = (newToken) => {
  token = newToken;
};

const login = async (credentials) => {
  const response = await axios.post(`${backendUrl}/api/login`, credentials);
  return response.data;
};

const SignUpAPI = async (data) => {
  const response = await axios.post(`${backendUrl}/api/signup`, data);
  return response.data;
}


export const useSignUp = () => {
  return useMutation(SignUpAPI, {
    onSuccess: () => {
      return 'onSuccess()';
    },
    onError: (error) => {
      console.log(error?.response.data);
    },
  });
};


const LoginAPI = async (data) => {
  const response = await axios.post(`${backendUrl}/api/login`, data);
  return response.data;
}
export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(LoginAPI, {
    onSuccess: () => {
      return queryClient.invalidateQueries([QUERY_KEY.USER]);
    },
    onError: (error) => {
      console.log(error?.response.data);
    },
  });
};

const authService = { setToken, login, useSignUp };

export default authService;

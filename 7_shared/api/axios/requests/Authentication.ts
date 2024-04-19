import axios from 'axios';
import {
  SignInPayload,
  SignInResponse,
  SignUpPayload,
  SignUpResponse,
} from '../types/responseTypes';

export const signUpRequest = async (values: SignUpPayload) => {
  const {data} = await axios.post<SignUpResponse>(
    'https://prayer-internship.purrweb.site/auth/sign-up',
    values,
  );
  return data;
};

export const signInRequest = async (values: SignInPayload) => {
  const {data} = await axios.post<SignInResponse>(
    'https://prayer-internship.purrweb.site/auth/sign-in',
    values,
  );
  return data;
};

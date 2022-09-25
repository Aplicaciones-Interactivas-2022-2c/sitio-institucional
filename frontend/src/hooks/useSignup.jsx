import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (email, name, surname, rol, password) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch('http://localhost:3030/users?email=' + email);
    const json = await response.json();
    console.log('json length = ' + json.length);
    if (!response.ok) {
      console.log('json length = ' + json.length);
      setIsLoading(false);
      setError('fail to fetch resource');
    } else if (json.length != 0) {
      setIsLoading(false);
      setError('Email allready used');
    } else {
      const response = await fetch('http://localhost:3030/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, surname, rol, password }),
      });
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      } else {
        //save the user to local storage
        localStorage.setItem('user', JSON.stringify(json));

        //update the auth context
        dispatch({ type: 'LOGIN', payload: json });

        setIsLoading(false);

        navigate('/home');
      }
    }
  };
  return { signup, isLoading, error };
};

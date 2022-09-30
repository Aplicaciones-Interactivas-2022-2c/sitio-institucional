import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch('http://localhost:3030/users?email=' + email);
    var json = await response.json();
    json = json[0];
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else if (!json) {
      setIsLoading(false);
      setError(
        'Se ha producido un problema al iniciar sesión.' +
          'Comprueba el correo electrónico y la contraseña o crea una cuenta.'
      );
    } else if (password !== json.password) {
      setIsLoading(false);
      setError(
        'Se ha producido un problema al iniciar sesión.' +
          'Comprueba el correo electrónico y la contraseña o crea una cuenta.'
      );
    } else {
      //save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      //update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      setIsLoading(false);

      navigate('/home');
    }
  };
  return { login, isLoading, error };
};

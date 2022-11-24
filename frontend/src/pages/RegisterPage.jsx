import {FormRegistro} from 'components/FormRegistro';
import React from 'react';
import { useParams } from 'react-router';

export const RegisterPage = () => {
    const { id } = useParams();
  return <FormRegistro id = id></FormRegistro>;
};

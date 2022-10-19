import { useState } from 'react';

export const useCreateCourse = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const createCourse = async materia => {
    setIsLoading(true);
    setError(null);
    const response = await fetch('http://localhost:3030/materias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(materia),
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
    }
  };
  return { createCourse, isLoading, error };
};

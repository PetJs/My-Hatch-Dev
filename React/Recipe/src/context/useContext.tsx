import { useContext } from 'react';
import { DogContext } from './contextProvider';

function useDogContext() {
  const context = useContext(DogContext);
  if (!context) {
    throw new Error('useDogContext must be used within a ContextProvider');
  }
  return context;
}

export default useDogContext;

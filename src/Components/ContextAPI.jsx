import React, { useContext } from 'react';
import { ColorContext, UserContext } from '../main';

function ContextAPI() {
  const name = useContext(UserContext);
  const color = useContext(ColorContext);

  return (
    <>
      <h1>ContextAPI: {name}-{color}</h1>
    </>
  )
  }

export default ContextAPI
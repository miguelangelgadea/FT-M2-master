import { Button } from 'bootstrap';
import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input placeholder='Ciudad...'/>
    <button onClick={props.onSearch}> x </button>
    </div>
};
import React from 'react';
import SearchBar from './SearchBar';
import './styles/Nav.css';

export const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar 
        onSearch={onSearch}
      />  
    </div>
  );
};
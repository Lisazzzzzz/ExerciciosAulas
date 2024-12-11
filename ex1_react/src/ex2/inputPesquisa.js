import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputPesquisa = ({ searchQuery, onSearchChange }) => {
  return (
    <SearchGroup>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Pesquisar tarefas..."
      />
    </SearchGroup>
  );
};

InputPesquisa.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

const SearchGroup = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default InputPesquisa;

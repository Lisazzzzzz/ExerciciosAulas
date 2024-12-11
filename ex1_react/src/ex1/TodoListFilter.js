import React from 'react';
import styled from 'styled-components';

const TodoListFilter = ({ filter, onFilterChange }) => {
  return (
    <FilterGroup>
      <Button onClick={() => onFilterChange('all')} className="filter-btn">
        Todos
      </Button>
      <Button onClick={() => onFilterChange('active')} className="filter-btn">
        Ativos
      </Button>
      <Button onClick={() => onFilterChange('completed')} className="filter-btn">
        Feitos
      </Button>
    </FilterGroup>
  );
};

const FilterGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;
  background-color: black;
`;

export default TodoListFilter;

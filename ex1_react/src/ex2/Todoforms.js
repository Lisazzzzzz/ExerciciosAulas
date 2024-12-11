import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodoForms = ({ inputValue, onInputChange, onAddTask }) => {
  return (
    <InputGroup>
      <TaskInput
        type="text"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Coloca uma nova tarefa..."
      />
      <Button onClick={onAddTask} className="add-btn">
        Adicionar
      </Button>
    </InputGroup>
  );
};

TodoForms.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
};

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TaskInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;
  

  &.add-btn {
    background-color: #333;
  }

  &.add-btn:hover {
    background-color: #555;
  }
`;

export default TodoForms;

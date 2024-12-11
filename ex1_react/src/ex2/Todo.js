import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Todo = ({ task, onToggleTask, onDeleteTask, onToggleEdit, onEditTask }) => {
  return (
    <TaskItem>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      {task.isEditing ? (
        <TaskEditInput
          type="text"
          value={task.text}
          onChange={(e) => onEditTask(task.id, e.target.value)}
          autoFocus
        />
      ) : (
        <TaskText className={task.completed ? 'completed' : ''}>
          {task.text}
        </TaskText>
      )}

      <Button onClick={() => onToggleEdit(task.id)}>
        {task.isEditing ? 'Salvar' : 'Editar'}
      </Button>
      <Button2 onClick={() => onDeleteTask(task.id)} className="delete-btn">
        Excluir
      </Button2>
    </TaskItem>
  );
};

Todo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
};

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const TaskText = styled.span`
  flex-grow: 1;
  text-align: left;
  &.completed {
    text-decoration: line-through;
    color: #888;
  }
`;

const TaskEditInput = styled.input`
  flex-grow: 1;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;
  background-color: black;
  margin: 5px;
`;

const Button2 = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
  background-color: red;
  margin: 5px;
`;
export default Todo;

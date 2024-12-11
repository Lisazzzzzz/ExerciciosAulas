import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputPesquisa from './inputPesquisa';
import Todo from './Todo';
import TodoForms from './Todoforms';
import TodoListFilter from './TodoListFilter';

function App_2() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks);
        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        }
      } catch (error) {
        console.error('Erro ao carregar tarefas do localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (inputValue.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false, isEditing: false }]);
    setInputValue('');
  };

  const handleToggleEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const handleEditTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText, isEditing: true } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'active') return !task.completed;
      if (filter === 'completed') return task.completed;
      return true;
    })
    .filter((task) => task.text.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Container>
      <TodoContainer>
        <Title>Todo Matic - Celina Cruz</Title>
        <TodoForms
          inputValue={inputValue}
          onInputChange={setInputValue}
          onAddTask={handleAddTask}
        />
        <TodoListFilter filter={filter} onFilterChange={setFilter} />
        <InputPesquisa searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <TaskList>
          {filteredTasks.map((task) => (
            <Todo
              key={task.id}
              task={task}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
              onToggleEdit={handleToggleEdit}
              onEditTask={handleEditTask}
            />
          ))}
        </TaskList>
      </TodoContainer>
    </Container>
  );
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f5f5f5;
`;

const TodoContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export default App_2;

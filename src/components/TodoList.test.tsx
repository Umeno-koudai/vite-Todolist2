/*// src/components/TodoList.test.tsx
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import TodoList from '../main'; // あなたのTodoリストコンポーネントのパスに合わせてください

describe('TodoList', () => {
  it('should render an empty list when no todos are provided', () => {
    render(<TodoList todos={[]} />);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    expect(screen.getByText('No todos yet!')).toBeInTheDocument(); // 例: 空リストの表示
  });

  it('should render a list of todos', () => {
    const todos = [
      { id: '1', text: 'Learn Vitest', completed: false },
      { id: '2', text: 'Build a CI/CD pipeline', completed: true },
    ];
    render(<TodoList todos={todos} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('Learn Vitest')).toBeInTheDocument();
    expect(screen.getByText('Build a CI/CD pipeline')).toBeInTheDocument();
  });
});*/
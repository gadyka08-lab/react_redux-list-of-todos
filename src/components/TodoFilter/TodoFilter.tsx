/* eslint-disable */
import React from 'react';
// Імпортуємо кастомні хуки для роботи з Redux
import { useAppDispatch, useAppSelector } from '../../app/hooks';
// Імпортуємо наші екшни зі слайсу фільтрів
import { updateStatus, updateQuery } from '../../features/filter'; // Перевір шлях до файлу слайсу, якщо відрізняється

export const TodoFilter: React.FC = () => {
  // Отримуємо функцію dispatch для відправки екшнів у Redux
  const dispatch = useAppDispatch();

  // Отримуємо поточні значення query та status із глобального стейту
  const { query, status } = useAppSelector(state => state.filter);

  return (
    <form
      className="field has-addons"
      onSubmit={event => event.preventDefault()}
    >
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={status}
            onChange={e => dispatch(updateStatus(e.target.value))}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={e => dispatch(updateQuery(e.target.value))}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => dispatch(updateQuery(''))}
            />
          </span>
        )}
      </p>
    </form>
  );
};

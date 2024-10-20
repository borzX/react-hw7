import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../store/userReduser';
import ShowDetails from "./ShowDetails";

export const UsersList = () => {

    const { users, loading, error } = useSelector((state) => state.users);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className='App'>
      <h1>Пользователи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {users.length ? <ul>{
        users.map(user => (
          <div>
            
            <li key={user.id}>{user.name}</li>
            <ShowDetails />
          </div>
          
        ))
      }
      </ul> : null}
      
    </div>
  );
};
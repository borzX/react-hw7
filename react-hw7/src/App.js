import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchUsers } from './store/userReduser';
import ShowDetails from './components/ShowDetails';
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { UsersList } from './components/UsersList';


const App=() => {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(3))
  }, [dispatch])

  return (
    <BrowserRouter>
      <UsersList/>
    </BrowserRouter>
    
  );

}





export default App;

import './App.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import  { ROUTES } from './routes/routes';

import { Home,StudentDetails, Students } from './pages';

import Root from './layouts/Root';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path={ROUTES.home.path} element={<Home />} />
    <Route path={ROUTES.students.path} element={<Students />} />
    <Route path={ROUTES.studentDetails.path} element={<StudentDetails />} /> 
  </Route>

));

function App() {
  return <RouterProvider router={router} />;
}

export default App;

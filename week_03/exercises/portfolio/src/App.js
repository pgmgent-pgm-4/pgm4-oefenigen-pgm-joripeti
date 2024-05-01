
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Home, About, Contact, Projects, Project, Resume } from './pages';

import Root from './layouts/Root';

import { ROUTES } from './routes/routes';

const router = createBrowserRouter (createRoutesFromElements (
  <Route path="/" element={<Root />}>
    <Route path={ROUTES.home.path} element={<Home />} />
    <Route path={ROUTES.about.path} element={<About />} />
    <Route path={ROUTES.contact.path} element={<Contact />} />
    <Route path={ROUTES.projects.path} element={<Projects />} />
    <Route path={ROUTES.project.path} element={<Project />} />
    <Route path={ROUTES.resume.path} element={<Resume />} />
  </Route>
))

function App() {
    return <RouterProvider router={router} />
}

export default App;

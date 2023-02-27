import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'

export const routes = [
  {
    path: '/',
    element: <Home />,
    label: 'Home'
  },
  {
    path: '/about',
    element: <About />,
    label: 'About'
  },
  {
    path: '/contact',
    element: <Contact />,
    label: 'Contact'
  }
];
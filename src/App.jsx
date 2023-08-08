import styles from './App.module.css';
import Sorting from './Pages/Sorting'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './Components/RootLayout'
import Search from './Pages/Search'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        { path: '/', element: <Sorting></Sorting> },
        { path: '/search', element: <Search></Search> },
      ]
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

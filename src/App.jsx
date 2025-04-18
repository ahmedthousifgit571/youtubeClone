import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import { RouterProvider } from 'react-router-dom'
import appRouter from './router'
import store from './utils/store'
import { Provider } from 'react-redux'


function App() {


  return (
    <>
    <Provider store={store}>

      <Head/>
      <RouterProvider router={appRouter}/>
     
    </Provider>

    </>
  )
}

export default App

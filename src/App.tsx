import { RouterProvider } from 'react-router-dom'
import { createHashRouter } from 'react-router-dom'

import Home from './pages/Home'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import Layout from './components/Layout'


const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Home />,
  },

])

function App() {
  return (
    <TonConnectUIProvider manifestUrl='https://spokystan.space/tonconnect-manifest.json'>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </TonConnectUIProvider>
  )
}

export default App

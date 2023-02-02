import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

function App() {

  return (
    <main className=''>
      <header>
        <Nav />
      </header>
      <section >
        <Container>
          <Outlet />
        </Container>
      </section>
    </main>
  )
}

export default App


import { AppBar, Box, Button, Container, List, ListItem, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const navItems = [
  {name: 'Pomodora', href: '/'},
  {name: 'Timer', href: 'timer'},
  {name: 'Until Time', href: 'untiltime'},
  {name: 'Statiscs', href: 'statistics'},
  {name: 'Setting', href: 'settings'},
]

function Nav() {
  return (
    <AppBar component="nav" sx={{display: 'flex'}} position="static">
      <Container>
        <Toolbar>
          <Typography variant='h5' component="a" href='/' sx={{ 
            flexGrow: 1, 
            color: '#fff',
            textDecoration: 'none'
            }}>Track Your Time</Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(navItem => (
              <Button key={navItem.href}>
                <Link  to={navItem.href}>
                  <Typography sx={{ color: '#fff' }}>{navItem.name}</Typography>
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
  )
}

export default Nav
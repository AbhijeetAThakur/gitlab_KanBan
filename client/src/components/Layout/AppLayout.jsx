import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../../utils/authUtils'
import Loading from '../common/Loading'
import Header from '../Header/Header'
//import { setUser } from '../../redux/features/userSlice'

const AppLayout = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated()
      if (!user) {
        navigate('/login')
      } else {
        // save user
       // dispatch(setUser(user))
        setLoading(false)
      }
    }
    checkAuth()
  }, [navigate])

  return (
    loading ? (
      <Loading fullHeight />
    ) : (
      <Box sx={{
        display: 'flex'
      }}>
        <Box sx={{
          flexGrow: 1,
          p: 1,
          width: 'max-content'
        }}>
          <Header />
          <Outlet />
        </Box>
      </Box>
    )
  )
}

export default AppLayout
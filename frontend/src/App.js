import React, { useEffect } from 'react'
import {BrowserRouter as Router ,Route,Routes,Navigate} from 'react-router-dom'
import { selectUser } from './features/userSlice'
import {useDispatch,useSelector} from 'react-redux'
import { login,logout } from './features/userSlice'
import { auth } from './Firebase/Firebase'
import Navbar from './Header/Navbar'
import Main from './Main/Main'
import Question from './AskQuestions/Question'
import ViewQuestions from './Viewquestions/ViewQustion'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

function App() {
  // const [loggedIn,setLoggedIn] = useState(false);
  // user and dispatch for redux
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          photo:authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }))
      }else {
        dispatch(logout())
      }
    })
  },[dispatch])
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/AskQuestion' element={user ? <Question /> : <Navigate to="/login"/>} />
        <Route path='/ViewQuestion' element={user ?<ViewQuestions /> : <Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
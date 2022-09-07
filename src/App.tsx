import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Routes, } from "react-router-dom"
import AudioPlayer from "./components/AudioPlayer"
import Login from "./components/login"
import SignUp from "./components/registration"
import { RootState } from "./redux/store"
import tracks from "./tracks"


const App = () => {
  const islogin = useSelector((state: RootState) => (state.fetchReducer.isLoggedIn))


  return(
    <>
    <Routes>
      <Route path='/' element={<AudioPlayer tracks={tracks}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  )




  if (islogin) {
    return (
      <AudioPlayer tracks={tracks}/>
    )
  }
  else {
    return <Login />
  }
}

export default App


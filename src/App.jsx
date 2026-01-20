
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/componats/pages/Home'
import Courses from './assets/componats/pages/Courses'
import Detail from './assets/componats/pages/Detail'
import Login from './assets/componats/pages/Login'
import Register from './assets/componats/pages/Register'
import MyCoures from './assets/componats/account/MyCoures'
import MyLerning from './assets/componats/account/MyLerning'
function App() {
 
  return (
   <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/courses' element={<Courses></Courses>}></Route>
            <Route path= '/detail' element={<Detail></Detail>}></Route>
            <Route path='/account/login' element={<Login></Login>}></Route>
            <Route path='/account/register' element={<Register></Register>}></Route>
            <Route path='/account/my-courses' element={<MyCoures></MyCoures>}></Route>
            <Route path='/account/my-learning' element={<MyLerning></MyLerning>}/>
            {/* <Route path='/account/my-courses/view' element={<View/>}/>
            <Route path='/account/my-courses/create' element={<CreateCourse/>}/>
            <Route path='/account/watch-course' element={<WatchCourse/>}/> */}

          </Routes>
      </BrowserRouter>
   </>
  )
}

export default App

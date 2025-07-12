import SignUpForm from "./components/SignUpForm"
import LoginForm from "./components/LoginForm"
import ProfilePage from "./components/ProfilePage"
import AddQuestion from "./components/AddQuestion"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
  <Router>
         <Routes>
           <Route path="/signup" element={<SignUpForm />} />
           <Route path="/login" element={<LoginForm />} />
           <Route path="/profile" element={<ProfilePage />} />
           <Route path="/add-question" element={<AddQuestion/>} />
          
         </Routes>

   </Router>
  )
}

export default App;

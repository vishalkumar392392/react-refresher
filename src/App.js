import { Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './componenets/Header/header';
import Sidebar from './componenets/Sidebar/sidebar';
import Course from './containers/Course/course';
import AddStudent from './containers/Student/AddStudent/AddStudent';
import Student from './containers/Student/student';

function App(props) {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>

      <Routes>
        <Route path="/students" element={<Student/>} />
        <Route path="/courses/:id" element={<Course/>}/>
        <Route path="/courses" element={<Course/>}/>
        <Route path="/addstudent" element={<AddStudent/>} />
        <Route path="/" element={<Student/>} />
      </Routes>

    </div>
  );
}

export default App;

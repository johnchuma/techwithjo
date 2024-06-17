
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStory from './pages/addStory';
import Layout from './layouts/layout';
import HomePage from './pages/homePage';
import AboutMe from './pages/aboutMe';
import StoriesPage from './pages/storiesPage';
import ReadStory from './pages/readStory';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Layout/>}>
    <Route path='/addStory' element={<AddStory/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/aboutMe' element={<AboutMe/>}/>
    <Route path='/stories' element={<StoriesPage/>}/>
    <Route path='/story/:uuid' element={<ReadStory/>}/>


    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchBox from './components/SearchBox/SearchBox';
import Tvshows from './components/tvshows/Tvshows';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Footer from './components/Footer/Footer';
import BookTicket from './components/BookTicket/BookTicket';

function App() {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then(res => res.json())
      .then(data => {
        setShows(data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [search]); 

  return (
    <div className='bg-slate-50 dark:bg-slate-900'>
      <Navbar />
      <SearchBox searchShow={(show)=> setSearch(show)}/>
      <Router>
        <Routes>
          <Route path="/:showid" element={
            <ShowDetails fullshow={``}/>} />

          <Route path="/" element={
            <div className='container mx-auto'>
              {isLoading ? (
                <div>
                  <h1 className='text-6xl text-center mx-auto mt-32 text-white'>Shows are Loading....</h1>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-4">
                  {shows.map(show => (
                    <>
                      <Tvshows id={show.show.id} show={show}/>
                    </>
                    ))}
                </div>
              )}
            </div>
          }>
          </Route>
          <Route path='/contact' element={<BookTicket />} />
        </Routes>
      </Router>
    
      {/* {!isLoading && images.length === 0 && <div><h1 className='text-6xl text-center mx-auto mt-32'>No Images Found</h1></div>} */}
      
      <Footer />
    </div>
  );
}

export default App;

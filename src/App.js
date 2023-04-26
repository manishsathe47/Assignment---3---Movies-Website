import React, {useEffect,useState} from 'react';
import Search from './components/search';
import Movie from './components/movies';
import './App.css';

function App() {
  const[movielist , getdata] = useState([])
  const[filterkey , setFilter] = useState('')
  const [filteredmovies , setfilteredmovies]= useState(movielist)

  useEffect(() =>{
   fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(res=>res.json())
    .then(list=>{getdata(list.Search)})
  },[]);


  useEffect(() => {
    const newfiltermovies = movielist.filter((movie)=>{
      return(
        movie.Title.toLocaleLowerCase().includes(filterkey)
      )
    })
    setfilteredmovies(newfiltermovies)
  }, [filterkey,movielist]);

  const onSearch=(event)=>{
    const sval = document.getElementById('searchbar').value.toLocaleLowerCase()
    setFilter(sval)
  }


  return(
    <>
    <Search onsearch={onSearch} className='SearchBar' placeHolder="Search movie"/>
    <div className='movies-container'>
    <Movie movielist={filteredmovies}/>
    </div>
    </>
  )
}

export default App;

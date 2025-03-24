import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search.jsx'
import MovieCard from './components/MovieCard.jsx'
import { useDebounce } from 'react-use';
function App() {
  const [errorMessage, seterrorMessage] = useState('');
  const API_BASE_URL = "https://api.themoviedb.org/3"
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [movieList, setmovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, SetsearchTerm] = useState("");
  const [searchDebounse,setSearchDebounce]=useState("");
  
  const API_OPTIONS = {
    Method: 'GET',
    Headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }

  }
 
 
  const fetchMovies = async (query) => {
    setIsLoading(true);
    try {
      const endPoint = query==="" ? `${API_BASE_URL}/discover/movie?api_key=${API_KEY}`
      :`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      const response = await fetch(endPoint, API_OPTIONS);
      const data = await response.json();
      setmovieList(data.results);
      if (!response.ok) {
        throw new Error("Error occured while fetching the data");
      }
    }
    catch (error) {
      console.error('error occured at fetching the movies.');
      seterrorMessage('Error occured while fetching the movies.');
    }
    finally {
      setIsLoading(false);
    }
  }
useDebounce(()=>setSearchDebounce(searchTerm),500,[searchTerm]);

  useEffect(() => {
    fetchMovies(searchDebounse);
  }, [searchDebounse]);


  console.log(movieList);
  return (
    <>
      <div className='m-20 p-0'>
        <div>
          <img src="/logo.svg" className='mx-auto' />
          <img src="/hero-img.png" className='mx-auto' />
          <h1 className='text-[56px] w-[750px] text-center mx-auto text-white font-bold' >Find <span className=" bg-gradient-to-r from-[#D6C7FF] to-[#AB8BFF] text-transparent bg-clip-text">Movies</span> You’ll Love Without the Hassle</h1>
        </div>

        <Search searchTerm={searchTerm} SetsearchTerm={SetsearchTerm} />
        <section>
          {isLoading ?
            (
              // Loading Spinner
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) :
            (
              <div>
                
                <MovieCard movieList={movieList}/>
                <div className="text-center text-red-500">
                  
                  <p>{errorMessage}</p>
                </div>

              </div>


            )}
        </section>

      </div>
    </>

  )
}

export default App

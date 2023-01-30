import './App.css';
import Header from './components/Header';
import Movie from './Movie';
import movie from './movies.json';
function App() {
  return (
    <div className="App">
     <Header/>
     <div className="main">
     {
      movie.map((ele)=>{
        return(
        <Movie 
          title={ele.Title}
          year={ele.Year} 
          img={ele.Poster}
        />
        )
      })
      }
     </div>
    </div>
  );
}

export default App;

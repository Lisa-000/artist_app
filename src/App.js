import './App.css'
import Artist from './components/Artist'
import Genre from './components/Genre'
import artistArray from './data.json'
import genres from './data.json'
const App = () => {
  return (
    <div>
      <h1>
        <center>Artist Directory</center>
      </h1>
      <div className="moviestyle">
        {artistArray.map((Artist) => (
          <div className="moviestyletwo">
            <Artist
              name={Artist.artist_name}
              location={Artist.location}
              image={Artist.image}
            />
            <div className="genrecont">
              {Artist.genres.map((genre, index) => (
                <Genre genre={genre.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

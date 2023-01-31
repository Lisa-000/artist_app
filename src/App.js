import './App.css'
import Artist from './components/Artist'
import Genre from './components/Genre'

const App = () => {
  return (
    <div>
      <h1>
        <center>Artist Directory</center>
      </h1>
      <div className="moviestyle">
        {artist.map((artist) => (
          <div className="moviestyletwo">
            <Artist
              name={artist.artist_name}
              location={artist.location}
              image={artist.image}
            />
            <div className="genrecont">
              {artist.genres.map((genre, index) => (
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

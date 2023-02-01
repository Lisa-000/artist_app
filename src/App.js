import './App.css'
import Artist from './components/Artist'
import Genre from './components/Genre'
import artistsArray from './info.json'
import genres from './info.json'

const App = () => {
  console.log(artistsArray)
  return (
    <div>
      <h1>
        <center>Artist Directory</center>
      </h1>
      <div>
        {artistsArray.map((artist) => (
          <div className="moviestyletwo">
            <Artist
              name={artist.artist_name}
              location={artist.location}
              image={artist.image}
            />
            <div>
              <Genre genre={artist.genres} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

import './App.css'
import Artist from './components/Artist'
import Genre from './components/Genre'
import artistsArray from './info.json'
import genres from './info.json'
import Boxinfo from './components/Boxinfo'

const App = () => {
  console.log(artistsArray)
  return (
    <div>
      <h1>
        <center>Artist Directory</center>
      </h1>
      <div className="rows">
        {artistsArray.map((artist) => (
          <div className="cards">
            <Artist image={artist.art_photos} />
            <div className="genrecont">
              <Genre genre={artist.genres} />
            </div>
            <Boxinfo
              name={artist.artist_name}
              city={artist.city.location}
              image={artist.art_photos}
              socials={artist.websites.social}
              website={artist.websites.website}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default App

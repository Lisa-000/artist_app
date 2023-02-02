import './App.css'
import Artist from './components/Artist'
import Genre from './components/Genre'
import artistsArray from './info.json'
import genres from './info.json'
import Boxinfo from './components/Boxinfo'
import Navbar from './components/Navbar'

const App = () => {
  console.log(artistsArray)
  return (
    <div>
      <Navbar />
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
      <h1>
        <center>A r t i s t &nbsp;&nbsp;&nbsp;D i r e c t o r y</center>
      </h1>

      <div className="rows">
        {artistsArray.map((artist) => (
          <div className="cards">
            <Artist image={artist.art_photos} />
            <div className="genrecont">
              <Genre genre={artist.genres} />
            </div>
            <div className="cardcont">
              <Boxinfo
                name={artist.artist_name}
                city={artist.city.location}
                image={artist.art_photos}
                socials={artist.websites.social}
                website={artist.websites.website}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App

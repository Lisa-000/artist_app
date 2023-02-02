const Genre = (props) => {
  let colorVariable = ''

  switch (props.genre) {
    case 'Sculptor':
      colorVariable = 'Lavender'
      break
    case 'Fine Artist':
      colorVariable = 'LavenderBlush'
      break
    case 'Manga Artist':
      colorVariable = 'LemonChiffon'
      break
    case '3D Artist':
      colorVariable = 'LightBlue'
      break
    case 'Comic Book Artist':
      colorVariable = 'LightSteelBlue'
      break
    case 'Surrealist Painter':
      colorVariable = 'MistyRose'
      break
    case 'Illustrators':
      colorVariable = 'Plum'
      break
    case 'Painter':
      colorVariable = 'RosyBrown'
      break
    case 'Contemporary Artist':
      colorVariable = 'CadetBlue'
      break
    case 'Graphic Artist':
      colorVariable = 'DarkSlateBlue'
      break
    case 'Oil Painting Artist':
      colorVariable = 'DarkSeaGreen'
      break
    case 'Street Artist':
      colorVariable = 'AliceBlue'
      break
    case 'Visual Artist':
      colorVariable = 'HoneyDew'
      break
    default:
      colorVariable = 'white'
  }

  return (
    <div
      style={{ backgroundColor: colorVariable, color: '#000000' }}
      className="genre"
    >
      <span>{props.genre}</span>
    </div>
  )
}

export default Genre

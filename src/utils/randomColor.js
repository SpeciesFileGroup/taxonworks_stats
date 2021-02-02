const rand = (min, max) => {
  return min + Math.random() * (max - min)
}

const randomColor = () => {
  var h = rand(1, 360)
  var s = rand(0, 80)
  var l = rand(30, 70)
  return 'hsl(' + h + ',' + s + '%,' + l + '%)'
}

export default randomColor

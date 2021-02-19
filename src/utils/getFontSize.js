const getTextWidth = (text, font) => {
  const element = document.createElement('canvas')
  var ctx = element.getContext('2d')
  ctx.font = font
  return ctx.measureText(text).width
}

const getFontSize = (text, width, size = 1) => {
  let textWidth
  let fontSize = 0
  do {
    fontSize++
    textWidth = getTextWidth(text, `${fontSize}px Arial`)
  } while (textWidth < width * size)

  return fontSize
}

export default getFontSize

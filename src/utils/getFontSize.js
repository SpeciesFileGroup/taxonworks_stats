const getTextWidth = (text, font) => {
  const element = document.createElement('canvas')
  var ctx = element.getContext('2d')
  ctx.font = font
  return ctx.measureText(text).width
}

const getFontSize = (text, width) => {
  let textWidth
  let fontSize = 0
  do {
    fontSize++
    textWidth = getTextWidth(text, `${fontSize}px Arial`)
  } while (textWidth < width)

  return fontSize
}

export default getFontSize

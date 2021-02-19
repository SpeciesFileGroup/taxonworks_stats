export default (param, value = undefined) => {
  const urlParams = new URLSearchParams(window.location.search)
  const url = new URL(window.location.origin)

  urlParams.set(param, value)
  const paramsString = urlParams.toString()

  history.pushState(null, null, `${url}?${paramsString.toString()}`)
}

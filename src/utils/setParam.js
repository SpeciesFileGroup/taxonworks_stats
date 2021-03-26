export default (param, value = undefined) => {
  const urlParams = new URLSearchParams(window.location.search)
  const url = new URL(window.location.origin)

  if (value) {
    urlParams.set(param, value)
  } else {
    urlParams.delete(param)
  }

  history.pushState(null, null, `${url}?${urlParams.toString()}`)
}

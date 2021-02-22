const convertJSONToString = json => Object.entries(json).map(([key, value]) => `${key},${value}`).join('\r\n')

export default (header, json) => `${header.join(',')}\r\n${convertJSONToString(json)}`

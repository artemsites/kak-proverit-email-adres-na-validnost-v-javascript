export function checkEmailValid(str) {
  if (str.search(/^[\w-.]*[@]{1}[\w-.]*\.[a-z]{2,}$/gi) === 0) return true
  return false
}
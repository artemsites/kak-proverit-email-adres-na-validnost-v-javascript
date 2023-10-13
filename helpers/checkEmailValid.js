/**
 * Как проверить все input type email на валидность в JavaScript     
 * @author artemsites.ru     
 * @version 1.1 - 13.10.2023
 * @source https://gist.github.com/artemsites/b3a56ab32a3ba74eef9fbe540a693120#file-checkemailvalid-js
 * 
 * @returns {Boolean} Строка с email валидна или невалидна 
 */
export function checkEmailValid(str) {
  if (str.search(/^[\w-.]*[@]{1}[\w-.]*\.[a-z]{2,}$/gi) === 0) return true
  return false
}
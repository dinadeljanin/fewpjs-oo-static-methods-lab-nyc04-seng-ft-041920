

class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-\s']+/g, '')
  }

  static titleize(str) {
    let arr = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let strCap = str.charAt(0).toUpperCase() + str.slice(1)
    let strArr = strCap.split(' ')

    return strArr.map(word => {
      if (!arr.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      } else {
        return word
      }
    }).join(' ')
  }
}

module.exports = function() {
  source = 'abcdefghijklmnopqrstuvwxyz1234567890'
  result = []
    for(let i = 0; i < 8; i++){
      let x = Math.floor(Math.random()*36);
      
      result.push(source.charAt(x))

    }
  return result.join('')
}

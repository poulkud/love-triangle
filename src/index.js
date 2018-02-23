/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0
      preferences.unshift(3)
        for (i = 1;  i < preferences.length; i++){
            if (i == preferences[preferences[preferences[i]]])
            counter++
    }      counter = Math.floor(counter/3)
    return counter
};

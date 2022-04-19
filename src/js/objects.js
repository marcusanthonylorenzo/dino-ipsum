export default class Marvel {  
  static getChar() {
    return fetch(`http://gateway.marvel.com/v1/public/characters?ts=1000&limit=100&apikey=cade37070cc22bfb00be1d9bb94a7285&hash=949d80b9f2d7c30efb76fc6cd033ee6c`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }

  static getChar2() {
    return fetch(`http://gateway.marvel.com/v1/public/characters?ts=1000&limit=100&offset=100&apikey=cade37070cc22bfb00be1d9bb94a7285&hash=949d80b9f2d7c30efb76fc6cd033ee6c`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}

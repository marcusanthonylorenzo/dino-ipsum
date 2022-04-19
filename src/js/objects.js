export class Marvel {  
  static getChar(character) {
    return fetch(`http://gateway.marvel.com/v1/public/characters?name=${character}&ts=1000&limit=100&apikey=cade37070cc22bfb00be1d9bb94a7285&hash=949d80b9f2d7c30efb76fc6cd033ee6c`)
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

export class Soundcloud {  
  static play() {
    return fetch("https://w.soundcloud.com/player/api.js")
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
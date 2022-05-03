//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class Netflixshow {
  constructor(title, episodes, ratings, popularity) {
    this.title = title;
    this.episodes = episodes;
    this.ratings = ratings;
    this.popularity = popularity;
  }
  play() {
    console.log("now playing");
  }
  release() {
    console.log("Released");
  }
}

let suits = new Netflixshow("suits", 12, 5, "95%");

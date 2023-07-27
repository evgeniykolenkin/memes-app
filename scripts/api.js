class API {
  constructor() {
    this.BASE_URL = "https://api.imgflip.com/get_memes";
  }
  fetchMemes() {
    return fetch(this.BASE_URL).then((data) => data.json());
  }
}

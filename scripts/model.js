class Model {
  constructor() {
    this.memes = [];
  }

  getMemeId(memes, imgId) {
    this.findId = "";
    for (let i = 0; i < memes.length; i++) {
      if (memes[i].id === imgId) {
        this.findId = i;
      }
    }
    return this.findId;
  }
}

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View(this);
    this.api = new API();
    this.view.imageSelectorNode.addEventListener("input", () => {
      this.handleImg();
    });
  }

  init() {
    this.api.fetchMemes().then((res) => {
      if (res.success === true) {
        this.model.memes = res.data.memes;
        this.view.renderOptions(this.model.memes);
        this.view.displayImg(this.view.DEFAULT_IMG);
      } else {
        alert("Мем не был найден");
        return;
      }
    });
  }

  handleImg() {
    const memeId = this.model.getMemeId(
      this.model.memes,
      this.view.imageSelectorNode.value
    );
    this.renderImg(this.model.memes, memeId);
  }

  renderImg(memes, id) {
    this.view.cleanImg();
    const imageUrl = memes[id].url;
    this.loadImage(imageUrl)
      .then((image) => this.view.displayImg(image))
      .catch(() => {
        this.view.displayImg(this.view.DEFAULT_IMG);
      });
    this.view.displayImg(memes[id].url);
  }

  loadImage(url) {
    const TIMEOUT_DURATION = 5000;

    return new Promise((resolve, reject) => {
      const img = new Image();
      let loaded = false;

      img.onload = () => {
        if (!loaded) {
          loaded = true;
          resolve(url);
        }
      };

      img.onerror = () => {
        if (!loaded) {
          loaded = true;
          reject();
        }
      };

      img.src = url;

      setTimeout(() => {
        if (!loaded) {
          loaded = true;
          reject();
        }
      }, TIMEOUT_DURATION);
    }).catch(() => {
      return this.view.DEFAULT_IMG;
    });
  }
}

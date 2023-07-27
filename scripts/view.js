class View {
  constructor() {
    this.DEFAULT_IMG = "resources/default-img.png";

    this.imageSelectorNode = document.getElementById("selector__img");
    this.inputTextTopNode = document.getElementById("input__text-top");
    this.inputTextBottomNode = document.getElementById("input__text-bottom");
    this.memeImgNode = document.getElementById("meme__img");
    this.textTopNode = document.getElementById("text__top");
    this.textBottomNode = document.getElementById("text__bottom");
    this.inputTextTopNode.addEventListener("input", this.renderTextTop);
    this.inputTextBottomNode.addEventListener("input", this.renderTextBottom);
  }

  renderOptions(memes) {
    this.imageSelectorNode.innerHTML = "";
    let optionList = `
        <option value="hidden" hidden disabled selected
        >Выбери Мем</option>
        `;
    memes.forEach((element) => {
      optionList += `
            <option value="${element.id}">${element.name}</option>
            `;
    });
    this.imageSelectorNode.innerHTML = optionList;
  }

  cleanImg() {
    this.memeImgNode.src = "";
  }

  displayImg(url) {
    this.memeImgNode.src = url;
  }

  renderTextTop = () => {
    this.textTopNode.textContent = this.inputTextTopNode.value;
  };

  renderTextBottom = () => {
    this.textBottomNode.textContent = this.inputTextBottomNode.value;
  };
}

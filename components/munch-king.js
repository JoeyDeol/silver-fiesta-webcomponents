const munchKingTemplate = document.createElement('template');
munchKingTemplate.innerHTML = `
  <style>
    div {
      border-radius: 90px;
      background-color: pink;
      width: 100px;
      height: 100px;
      transition: 5s all;
    }

    .chomping {
      background-color: blue;
    }

    #apples {
      background-color: crimson;
    }

    #pears {
      background-color: green;
    }

    #oranges {
      background-color: orange;
    }

    #bananas {
      background-color: yellow;
    }
  </style>
  <div class="munch-king"></div>
`;

class MunchKing extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ 'mode': 'open' });
    this.shadowRoot.appendChild(munchKingTemplate.content.cloneNode(true));
    this.$munchKing = this.shadowRoot.querySelector('.munch-king');
  }

  connectedCallback() {
    document.addEventListener('snackClicked', this.handleEvent);
  }

  handleEvent(e) {
    const snackToBeEaten = e.detail.snackElement.innerHTML;
    const munchKingShadowRoot = this.querySelector('munch-king').shadowRoot;

    switch (snackToBeEaten) {
      case 'Apples': 
        munchKingShadowRoot.querySelector('.munch-king').setAttribute('id', 'apples');
        break;
      case 'Pears':
        munchKingShadowRoot.querySelector('.munch-king').setAttribute('id', 'pears');
        break;
      case 'Oranges':
        munchKingShadowRoot.querySelector('.munch-king').setAttribute('id', 'oranges');
        break;
      case 'Bananas':
        munchKingShadowRoot.querySelector('.munch-king').setAttribute('id', 'bananas');
        break;
      default:
        window.alert('You do not have that snack!');

    }
  }
};

window.customElements.define('munch-king', MunchKing);
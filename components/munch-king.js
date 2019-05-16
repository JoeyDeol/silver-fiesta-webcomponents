const munchKingTemplate = document.createElement('template');
munchKingTemplate.innerHTML = `
  <style>
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

    .munch-king {
      position: relative;
      /* border-radius: 90px; */
      border-top-left-radius: 80px 200px;
      border-top-right-radius: 80px 200px;
      border-bottom-left-radius: 100px 40px;
      border-bottom-right-radius: 100px 40px;
      background-color: rgb(24, 154, 211);
      width: 300px;
      height: 300px;
      transition: all 600ms cubic-bezier(0.77, 0, 0.175, 1);
    }
    
    .munch-king-eyes {
      position: absolute;
      top: 25%;
      left: 50px;
      display: flex;
      justify-content: space-between;
      width: 65%;
      background-color: transparent;
      border: 1px solid white;
    }

    .munch-king-eye {
      width: 50px;
      height: 50px;
      background-color: firebrick;
      border-radius: 90px;
    }

    .munch-king-mouth {
      width: 50px;
      height: 50px;
      background-color: firebrick;
      border-radius: 90px;
    }

  </style>
  <div class="munch-king">
    <div class="munch-king-eyes">
      <div class="munch-king-eye left-eye"></div>
      <div class="munch-king-eye right-eye"></div>
    </div>
    <div class="munch-king-mouth">
      <slot name="mouth-style"><div class="munch-king-mouth-default"></div></slot>
    </div>
  </div>
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
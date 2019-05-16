const munchKingTemplate = document.createElement('template');
munchKingTemplate.innerHTML = `
  <style>
    div {
      border-radius: 90px;
      background-color: red;
      width: 100px;
      height: 100px;
      transition: 5s all;
    }

    .chomping {
      background-color: blue;
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
    munchKingShadowRoot.querySelector('.munch-king').classList.add('chomping');    
  }
};

window.customElements.define('munch-king', MunchKing);
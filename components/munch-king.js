const munchKingTemplate = document.createElement('template');
munchKingTemplate.innerHTML = `
  <style>
    div {
      border-radius: 90px;
      background-color: red;
      width: 100px;
      height: 100px;
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
};

window.customElements.define('munch-king', MunchKing);
const template = document.createElement('template');
template.innerHTML = `
  <style>
    .stateful-component {
      width: 100px;
      height: 100px;
      background-color: crimson;
    }
  </style>

  <div class="stateful-component">
    <ul></ul>
  </div>
`

class StatefulComponent extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();

    this.attachShadow({ 'mode': 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$statefulComponent = this.shadowRoot.querySelector('.stateful-component');
    this._state = {};
  }

  connectedCallback() {
    this._state = { ...this._state, componentIsMounted: true, };
  }

  disconnectedCallback() {
    this._state = { ...this._state, componentIsMounted: false, };
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attributeChangedCallback is firing!');
  }
}

window.customElements.define('stateful-component', StatefulComponent);

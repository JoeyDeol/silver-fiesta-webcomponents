const template = document.createElement('template');
template.innerHTML = `
  <li></li>
`

class ListItem extends HTMLElement {
  // Getter associated with attributesChangedCallback()
  static get observedAttributes() {
    return ['text'];
  }

  constructor() {
    super();

    // Adding Element to the Shadow DOM
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$listItem = this._shadowRoot.querySelector('li');

    // Adding Element to the Light DOM
    // this.appendChild(template.content.cloneNode(true));
    console.log('ListItem has been constructed!');
  }

  connectedCallback() {
    // The connectedCallback is called when the element is inserted to the DOM.
    let attributesArray = [...this.attributes];
    let textAttribute = attributesArray.filter((i) => i.name === 'text')[0];

    if (!this.hasAttribute('text')) {
      this.setAttribute('text', 'Connected CallBack Text');
      attributesArray = [...this.attributes];
      textAttribute = attributesArray.filter((i) => i.name === 'text')[0];
    }

    this.$listItem.innerHTML = textAttribute.nodeValue;
    
    console.log('connectedCallBack is firing #ListItem');
  }

  disconnectedCallback() {
    // The disconnectedCallback is called whenever the element is removed from the DOM.
    console.log('disconnectedCallBack is firing #ListItem');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // The attributeChangedCallback is called any time your element's observed attributes change. Only attributes listed in the observedAttributes getter are affected in the attributeChangedCallback.
    console.log('attributeChangedCallBack is firing #ListItem');
  }

  adoptedCallBack() {
    console.log('adoptedCallBack is firing #ListItem');
    // The adoptedCallback is called each time the custom element is moved to a new document. You'll only run into this use case when you have <iframe> elements in your page.
  }
};

window.customElements.define('list-item', ListItem);
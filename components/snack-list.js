const snackListTemplate = document.createElement('template');
snackListTemplate.innerHTML = `
  <style>
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    li {
      padding: 0;
      margin: 0;
      list-style: none; 
    }
  </style>

  <h2>THIS IS A SNACK LIST</h2>
  <ul>
    <li><snack-element snack-name="Apple"></snack-element></li>
    <li><snack-element snack-name="Orange"></snack-element></li>
    <li><snack-element snack-name="Pear"></snack-element></li>
    <li><snack-element snack-name="Banana"></snack-element></li>
  </ul>
`



class SnackList extends HTMLElement {
  static get observedAttributes() {
    return ['snacks'];
  }

  constructor() {
    super();

    this.attachShadow({ 'mode': 'open' });
    this.shadowRoot.appendChild(snackListTemplate.content.cloneNode(true));
    this.$snackList = this.shadowRoot.querySelector('ul');
  }

  connectedCallback() {
    let elementAttributes = [...this.attributes];
    let snacksValue = elementAttributes.filter((i) => i.name === 'snacks')[0].value;

    const regex = /[, ]+/g;
    const snacks = snacksValue.split(' ').map((i) => i.replace(regex, ''));

    // TODO: Figure out how to iterate over snacks array and create li elements out of each.
  }

};

window.customElements.define('snack-list', SnackList);
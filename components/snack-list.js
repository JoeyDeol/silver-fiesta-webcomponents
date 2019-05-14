const snackListTemplate = document.createElement('template');
snackListTemplate.innerHTML = `
  <h2>THIS IS A SNACK LIST</h2>
  <ul>
    <li><snack-element snack-name="Apple"></snack-element></li>
    <li><snack-element snack-name="Orange"></snack-element></li>
    <li><snack-element snack-name="Pear"></snack-element></li>
    <li><snack-element snack-name="Banana"></snack-element></li>
  </ul>
`



class SnackList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ 'mode': 'open' });
    this.shadowRoot.appendChild(snackListTemplate.content.cloneNode(true));
    this.$snackList = this.shadowRoot.querySelector('ul');
  }

  connectedCallback() {

  }

};

window.customElements.define('snack-list', SnackList);
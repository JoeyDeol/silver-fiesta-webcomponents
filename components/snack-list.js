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
  
  <ul></ul>
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
    let snacksValue = this.getAttribute('snacks');
    const snacks = snacksValue.split(', ');

    snacks.map((i) => {
      const item = document.createElement('snack-element');
      item.setAttribute('snack-name', i);
      const listItem = document.createElement('li');
      listItem.appendChild(item);
      
      // Alt method, create listItem element and the modify its inner html to represent your next custom element.
      // listItem.innerHTML = `
      //   <snack-element snack-name="${i}"></snack-element>
      // `
      this.$snackList.append(listItem);
    });
  }

};

window.customElements.define('snack-list', SnackList);
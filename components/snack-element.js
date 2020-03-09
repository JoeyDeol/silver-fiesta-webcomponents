const snackElementTemplate = document.createElement('template');
snackElementTemplate.innerHTML = `
  <style>
    button {
      /* Positioning */
      position: relative;

      /* Box Model */
      height: 50px;
      margin: 6px;
      padding: 16px;
      border: 0; 

      /* Text */
      text-align: center;
      text-transform: uppercase;
      font-size: 16px;
      color: white;

      /* Background */
      background: none;

      /* Animation */
      cursor: pointer;
      transition: all 600ms cubic-bezier(0.77, 0, 0.175, 1);
    }

    button:before, button:after {
      content: '';
      position: absolute;	
      transition: inherit;
      z-index: -1;
    }

    button:hover {
      color: #96B7C4;
      transition-delay: .6s;
    }

    button:hover:before {
      transition-delay: 0s;
    }

    button:hover:after {
      background: white;
      transition-delay: .4s;
    }

    .button-effect:before {
      top: 0;
      left: 50%;
      height: 100%;
      width: 0;
      border: 1px solid white;
      border-left: 0;
      border-right: 0;
    }

    .button-effect:after {
      bottom: 0;
      left: 0;
      height: 0;
      width: 100%;
      background: white;
    }

    .button-effect:hover:before {
      left: 0;
      width: 100%;
    }

    .button-effect:hover:after {
      top: 0;
      height: 100%;
    }
  </style>

  <button type="button" class="button-effect"></button>
`;

class SnackElement extends HTMLElement {
  static get observedAttributes() {
    return ['snack-name'];
  }

  constructor() {
    super();

    this.attachShadow({ 'mode': 'open' });
    this.shadowRoot.appendChild(snackElementTemplate.content.cloneNode(true));
    this.$snackElement = this.shadowRoot.querySelector('button');
  }

  connectedCallback() {
    // Another method for getting all the properties from an element.
    // Grab all the properties written on the component
    let elementAttributes = [...this.attributes];
    // Filter for the specific attributes you're looking for. In this case we're looking for snack names.
    let textAttribute = elementAttributes.filter((i) => i.name === 'snack-name')[0];

    // Method for filtering for expected attributes.
    if(!this.hasAttribute('snack-name')) {
      this.setAttribute('snack-name', 'Snack Element');
      elementAttributes = [...this.attributes];
      textAttribute = elementAttributes.filter((i) => i.name === 'snack-name')[0];
    }

    this.$snackElement.innerHTML = textAttribute.value;


    this.$snackElement.addEventListener('click', this.clickHander);
  }

  clickHander(e) {
    const snackElement = this;
    const snackClickedEvent = new CustomEvent('snackClicked', { 
      'bubbles': true, 
      'composed': true,
      'detail': { snackElement },
    });
    this.dispatchEvent(snackClickedEvent);
  }
};

window.customElements.define('snack-element', SnackElement);
class Square extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const square = document.createElement('div');
        
        const style = document.createElement('style');
        style.textContent = `
            div {
                position: relative;
                width: 100px;
                height: 100px;
                background: red;
            }
        `;

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(square);
    }
}

customElements.define('custom-square', Square);
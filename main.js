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
                margin-bottom: 10px;
            }
        `;

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(square);
    }
}

customElements.define('custom-square', Square);

const btn = document.querySelector('button');
btn.onclick = () => {
    const square = document.createElement('custom-square');
    document.body.appendChild(square);
}
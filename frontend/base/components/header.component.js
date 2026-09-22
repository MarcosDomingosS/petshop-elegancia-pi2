class ExempleComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <div class="exemple">exemplo</div>
        `


    }
}

customElements.define('exemple-component', ExempleComponent);
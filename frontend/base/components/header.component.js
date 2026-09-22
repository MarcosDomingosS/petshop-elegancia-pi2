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

// Web Component customizado com Shadow DOM (encapsula HTML/CSS, sem conflito com o resto do site)Renderiza uma div fixa com o texto "exemplo" — serve de modelo base para criar outros componentes
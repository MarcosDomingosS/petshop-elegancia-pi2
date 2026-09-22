class HeaderIntranet extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    height: 62px;
                }

                header {
                    width: 100%;
                    height: 62px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    padding: 0 24px;

                    background-color: #8B1E2D;
                    color: white;

                    box-sizing: border-box;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
                }

                .titulo {
                    font-size: 18px;
                    font-weight: 600;
                }

                .usuario {
                    font-size: 13px;
                    opacity: 0.9;
                }
            </style>

            <header>
                <div class="titulo">Sistema de Gestão</div>
                <div class="usuario">Usuário: Admin</div>
            </header>
        `;
    }
}

customElements.define('header-intranet', HeaderIntranet);
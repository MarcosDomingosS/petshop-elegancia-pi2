# Pet Shop Elegância

Projeto acadêmico da disciplina de Projeto Integrador II (PI-ADS-2),
dando continuidade ao sistema desenvolvido no PI-ADS-1.

O sistema é um site institucional para o Pet Shop Elegância, com uma
landing page da empresa, uma área de agendamento de serviços e uma
área para visualização dos agendamentos.

## Equipe

- Bianca Cristina Gonçalves Esteves
- Felipe Nascimento Augusto
- Guilherme Henrique Pires Ramos
- Lucas Martins Meneses Costa
- Marcos Domingos dos Santos
- Matheus Manarte Biloti
- Pablo Camilo Girenz Abreu
- Ruan Rodrigues Prieto Gama Silva

## Stack

Frontend em HTML, CSS e JavaScript puro (sem frameworks e sem build
tools).

## Estrutura do repositório

```text
petshop-elegancia-pi2/
│
├── base/              → referência visual compartilhada pelos três grupos
│   ├── template.html
│   ├── styles/
│   ├── assets/
│   └── docs/
│
└── frontend/
    ├── internet/      → área pública (landing page, sobre, serviços...)
    ├── extranet/      → área do cliente (login, agendamento...)
    └── intranet/      → área dos funcionários (dashboard, gestão...)
```

Cada uma das três áreas (`internet`, `extranet`, `intranet`) segue a
mesma organização interna:

```text
<area>/
├── index.html
├── pages/
├── scripts/
├── styles/
└── assets/
```

## Por onde começar

Antes de criar uma página nova, dá uma olhada em `base/docs/`:

- **`identidade-visual.md`** — paleta de cores e princípios visuais do site
- **`estrutura-frontend.md`** — o que pertence a cada uma das três áreas
- **`padrao-paginas.md`** — como estruturar o HTML e nomear os arquivos

E use `base/template.html` e `base/styles/style.css` como ponto de
partida ao criar uma página — eles já vêm com a identidade visual e a
responsividade padrão do projeto.

## Logo

A imagem oficial ainda não foi definida. Quando estiver pronta, ela
entra em `base/assets/logo.png` (fonte oficial) e deve ser copiada
também para `assets/` dentro de cada uma das três áreas
(`internet`, `extranet`, `intranet`), já que o frontend não usa
includes e cada página referencia o arquivo localmente.
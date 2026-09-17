# Estrutura do Frontend

## Organização geral

O frontend do projeto está dividido em três áreas principais:

- Internet
- Extranet
- Intranet

Cada área possui suas próprias páginas, estilos e scripts.

---

## Internet

Área pública do Pet Shop Elegância.

Destinada a visitantes, clientes, fornecedores, parceiros e demais
pessoas que desejem conhecer a empresa.

Exemplos de conteúdo:

- Página inicial
- Sobre nós
- Serviços
- Produtos
- Contato
- Localização

---

## Extranet

Área destinada aos clientes.

O acesso será realizado mediante autenticação.

Exemplos de funcionalidades:

- Login
- Cadastro
- Dados do cliente
- Cadastro/visualização de pets
- Agendamento de serviços
- Consulta de agendamentos

---

## Intranet

Área destinada aos funcionários.

O acesso será realizado mediante autenticação.

Exemplos de funcionalidades:

- Login
- Dashboard
- Visualização de agendamentos
- Consulta de clientes
- Consulta de pets
- Gerenciamento das operações internas

---

## Estrutura de diretórios

```text
frontend/
│
├── base/
│   ├── template.html
│   ├── styles/
│   ├── docs/
│   └── assets/
│
├── internet/
│   ├── index.html
│   ├── pages/
│   ├── styles/
│   └── scripts/
│
├── extranet/
│   ├── index.html
│   ├── pages/
│   ├── styles/
│   └── scripts/
│
└── intranet/
    ├── index.html
    ├── pages/
    ├── styles/
    └── scripts/
```

---

## Observação

A pasta `base` serve como referência para o desenvolvimento das três
áreas.

Ela não representa uma quarta área do sistema.

Os arquivos presentes nessa pasta podem ser utilizados como modelo
para a criação das páginas das equipes.
# Padrão de Páginas

## Estrutura básica

As páginas do projeto devem seguir uma estrutura HTML semelhante:

```text
HTML
│
├── HEAD
│   ├── Meta informações
│   ├── Título
│   └── CSS
│
└── BODY
    │
    ├── HEADER
    │
    ├── MAIN
    │
    └── FOOTER
```

---

## Header

O cabeçalho deve conter a identidade da empresa e os elementos de
navegação correspondentes à área do sistema.

A navegação pode ser diferente entre:

- Internet
- Extranet
- Intranet

Não é necessário utilizar exatamente os mesmos links nas três áreas.

---

## Main

O elemento `<main>` deve conter o conteúdo principal da página.

Cada página deve possuir uma finalidade clara.

Exemplos:

- Apresentação da empresa
- Listagem de serviços
- Formulário de contato
- Agendamento
- Consulta de agendamentos

---

## Footer

O footer deve manter informações institucionais e formas de contato
da empresa.

Sempre que possível, sua estrutura visual deve permanecer consistente
entre as páginas.

---

## Container

A classe `.container` deve ser utilizada para manter o conteúdo
centralizado e limitar sua largura.

---

## Classes

As classes devem possuir nomes claros e relacionados à função do
elemento.

Exemplos:

- `.header`
- `.nav`
- `.container`
- `.section`
- `.btn`
- `.btn-primary`
- `.footer`

Evitar nomes genéricos ou relacionados ao nome do desenvolvedor.

---

## Nomenclatura de arquivos

Utilizar:

- Letras minúsculas
- Palavras separadas por hífen
- Nomes relacionados ao conteúdo

Exemplos:

```text
sobre.html
servicos.html
meus-pets.html
meus-agendamentos.html
```

Evitar:

```text
SobreNos.html
pagina1.html
teste.html
pagina-final.html
rogerio.html
```

---

## Boas práticas

- Utilizar HTML semântico.
- Utilizar `alt` em imagens.
- Manter identação consistente.
- Evitar estilos diretamente nos elementos HTML.
- Utilizar classes CSS para estilização.
- Evitar código duplicado quando possível.
- Manter nomes de arquivos e classes padronizados.
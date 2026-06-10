# FILIPE LUZ STUDIO — site institucional

Primeira versão pública oficial da presença digital da **FILIPE LUZ STUDIO**, um estúdio criativo brasileiro para produção audiovisual, criativos para anúncios, conteúdo de redes sociais, tráfego e presença local.

## Decisão de stack

A stack escolhida é **HTML, CSS e JavaScript puros**, sem frameworks e sem dependências de runtime.

### Justificativa

- **Velocidade:** o site é estático, leve e não depende de hidratação de framework.
- **Manutenção simples:** qualquer pessoa consegue editar textos, links e seções diretamente nos arquivos.
- **Boa experiência visual:** CSS moderno e JavaScript mínimo são suficientes para smooth scrolling, reveal no scroll, microinterações e menu responsivo.
- **Expansão futura:** a estrutura permite migrar para Astro, Vite, Next ou CMS headless caso surjam blog, portfólio real, landing pages ou integração com formulário.

## Estrutura de pastas

```txt
.
├── index.html
├── package.json
├── README.md
├── docs/
│   └── auditoria.md
└── src/
    ├── main.js
    ├── styles.css
    └── assets/
        └── logo-filipe-luz.svg
```

## Identidade visual aplicada

A identidade foi derivada exclusivamente da logo anexada ao projeto:

- **preto profundo** como base de sofisticação e contraste;
- **marfim quente** para tipografia, linhas e sensação de luz;
- **dourado queimado** como acento premium, sem excesso de gradiente;
- **linhas diagonais e círculos** como tradução gráfica do símbolo;
- **textura sutil** para manter aspecto orgânico e audiovisual;
- **tipografia ampla e espaçada** para reforçar direção de estúdio, não de SaaS.

## Seções implementadas

- Hero com CTA para WhatsApp.
- Sobre com posicionamento estratégico.
- Serviços.
- Processo.
- Portfólio conceitual sem clientes inventados.
- Diferenciais.
- CTA final.
- Rodapé com Instagram e WhatsApp.

## Contatos

- Instagram: [@filipeluz.studio](https://instagram.com/filipeluz.studio)
- WhatsApp: [+55 62 99161-8576](https://wa.me/5562991618576)

## Como rodar localmente

```bash
npm run dev
```

Depois acesse:

```txt
http://localhost:4173
```

## Verificações

```bash
npm run check
```

O comando valida a sintaxe do JavaScript do projeto com `node --check`.

## Auditoria crítica

A auditoria com notas, pontos fracos e melhorias implementadas está em [`docs/auditoria.md`](docs/auditoria.md).

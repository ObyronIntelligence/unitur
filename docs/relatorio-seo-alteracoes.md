# Relatorio de alteracoes SEO - Unitur

Este documento consolida as alteracoes tecnicas feitas no projeto para melhorar SEO, indexacao, semantica e performance, sem alterar o design visual, a ordem das secoes ou os textos comerciais aprovados.

## Arquivos alterados

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `src/pages/Index.tsx`
- `src/components/site/Nav.tsx`
- `src/components/site/Differentials.tsx`
- `src/components/site/Hero.tsx`
- `src/components/site/About.tsx`
- `src/components/site/VanShowcase.tsx`
- `src/components/site/Airport.tsx`
- `src/components/site/Highlight.tsx`
- `docs/seo-spa-prerender.md`
- `docs/todo-seo-publicacao.md`

## 1. Metadados essenciais

Arquivo: `index.html`

O que foi feito:

- title otimizado para transporte universitario, aeroporto e fretamento em Itapetininga;
- meta description com foco em busca comercial/local;
- meta robots com `index, follow`;
- canonical com marcador `TODO SEO` para o dominio final;
- theme-color;
- favicon declarado;
- Open Graph completo;
- Twitter Card completo;
- imagem social referenciada com `TODO SEO`.

Impacto esperado:

- melhora a forma como o Google entende o tema principal da pagina;
- melhora o texto exibido em resultados de busca;
- melhora compartilhamento em WhatsApp, Facebook, LinkedIn, Twitter/X e similares;
- evita duplicidade de URL quando o dominio final for preenchido corretamente.

Pendencia:

- substituir `TODO-SEO-dominio-final.com.br`;
- publicar e referenciar a imagem social final;
- publicar e referenciar o logo oficial.

## 2. Dados estruturados JSON-LD

Arquivo: `index.html`

O que foi feito:

- adicionado JSON-LD com `Organization`;
- adicionado JSON-LD com `LocalBusiness` e `TravelAgency`;
- adicionados servicos em `Service`:
  - transporte universitario;
  - transfer aeroporto;
  - fretamento;
- adicionados dados ja existentes no site:
  - Instagram oficial exibido no site;
  - telefone do Marcos;
  - telefone de atendimento Unitur;
  - Itapetininga;
  - Sorocaba;
  - Itapetininga e regiao;
  - aeroportos Guarulhos, Congonhas e Viracopos;
  - atendimento 24h sob agendamento.

O que foi evitado:

- nao foi inventado endereco fisico;
- o bloco `address` foi removido, pois o negocio e uma van/servico movel e nao possui endereco publico informado.

Impacto esperado:

- ajuda buscadores a entenderem a entidade Unitur, os servicos e a area de atendimento;
- reforca sinais de SEO local;
- evita dados estruturados falsos ou nao aprovados.

Pendencia:

- substituir URLs de dominio, logo e imagem quando o dominio final existir.

## 3. Robots e sitemap

Arquivos:

- `public/robots.txt`
- `public/sitemap.xml`

O que foi feito:

- `robots.txt` permite rastreamento;
- `robots.txt` aponta para o sitemap;
- `sitemap.xml` foi criado apenas com a URL raiz, respeitando que o site e one-page.

Impacto esperado:

- facilita descoberta da pagina pelos buscadores;
- mantem coerencia com a estrutura de pagina unica;
- evita criacao de URLs ficticias.

Pendencia:

- substituir a URL temporaria pelo dominio final antes da publicacao.

## 4. Estrutura semantica

Arquivos:

- `src/pages/Index.tsx`
- `src/components/site/Nav.tsx`
- `src/components/site/Differentials.tsx`

O que foi feito:

- `Nav` foi movido para fora do `<main>`;
- `Footer` foi movido para fora do `<main>`;
- conteudo principal ficou dentro de `<main id="conteudo-principal">`;
- `<nav>` recebeu `aria-label="Navegacao principal"`;
- secao de diferenciais recebeu `id="diferenciais"`;
- heading da secao de diferenciais recebeu `id="diferenciais-title"`;
- secao de diferenciais recebeu `aria-labelledby="diferenciais-title"`;
- foi conferido que existe apenas um `h1`.

Impacto esperado:

- melhora leitura da pagina por crawlers e tecnologias assistivas;
- organiza landmarks HTML de forma mais correta;
- preserva a hierarquia principal da landing page;
- facilita futuras ancoras internas para a secao de diferenciais.

Impacto visual:

- nenhum esperado, pois classes, textos e ordem visual foram preservados.

## 5. Performance e Core Web Vitals

Arquivos:

- `src/components/site/Hero.tsx`
- `src/components/site/About.tsx`
- `src/components/site/VanShowcase.tsx`
- `src/components/site/Airport.tsx`
- `src/components/site/Highlight.tsx`

O que foi feito:

- adicionados `width` e `height` nas imagens onde era seguro;
- adicionado `decoding="async"` em imagens adequadas;
- mantido `loading="lazy"` em imagens nao criticas;
- imagem principal do Hero foi tratada como provavel LCP;
- `hero-van.jpg` recebeu `fetchPriority="high"`;
- a imagem LCP nao recebeu lazy loading.

Imagem tratada como LCP:

- `src/assets/hero-van.jpg`

Impacto esperado:

- melhora previsibilidade de layout;
- reduz risco de CLS;
- ajuda o navegador a priorizar a imagem principal do primeiro viewport;
- reduz competicao de carregamento inicial com imagens abaixo da dobra.

Recomendacao futura:

- comprimir imagens pesadas antes da publicacao final, principalmente:
  - `src/assets/van-unitur.jpg`;
  - `src/assets/aparecida-3.jpg`;
  - `src/assets/aparecida-4.jpg`;
  - `src/assets/aparecida.jpg`.

## 6. SPA e indexacao

Arquivos:

- `index.html`
- `docs/seo-spa-prerender.md`

O que foi feito:

- documentada a limitacao atual: o HTML inicial ainda contem apenas o ponto de montagem do React;
- adicionado comentario `TODO SEO SPA` no `index.html`;
- criado documento tecnico explicando a recomendacao de prerender da rota raiz (`/`).

Impacto esperado:

- deixa claro o risco de indexacao de uma SPA com HTML inicial vazio;
- prepara a equipe para implementar prerender sem transformar o site em multiplas paginas;
- melhora a previsibilidade do proximo passo tecnico para SEO.

O que ficou documentado, mas nao implementado:

- prerender automatico no build.

Motivo:

- implementar prerender agora exigiria escolher ferramenta, dependencia e estrategia de deploy. Para seguranca, ficou documentado ate o ambiente de publicacao estar definido.

## 7. Documentacao de pendencias

Arquivo:

- `docs/todo-seo-publicacao.md`

O que foi feito:

- criado documento listando os `TODO SEO` que nao devem ir para a versao final;
- explicado onde cada pendencia aparece;
- explicado quando cada item deve ser resolvido.

Pendencias obrigatorias antes da publicacao final:

- substituir dominio final;
- substituir imagem social;
- substituir logo publico.

Pendencia recomendada para melhor SEO:

- implementar prerender da rota raiz.

## Validacoes executadas

Comandos executados durante o processo:

```bash
npm run test
npx tsc -p tsconfig.app.json --noEmit
npm run build
npm run lint
```

Resultados observados:

- `npm run test`: passou;
- `npx tsc -p tsconfig.app.json --noEmit`: passou;
- `npm run build`: passou;
- `npm run lint`: passou, mantendo apenas warnings conhecidos de Fast Refresh em componentes UI.

Correcoes tecnicas aplicadas para o lint:

- `src/components/ui/command.tsx`: `@typescript-eslint/no-empty-object-type`;
- `src/components/ui/textarea.tsx`: `@typescript-eslint/no-empty-object-type`;
- `tailwind.config.ts`: `@typescript-eslint/no-require-imports`.

Warnings conhecidos:

- warnings de Fast Refresh em componentes UI;
- aviso de `caniuse-lite` desatualizado;
- aviso de classe Tailwind ambigua `duration-[6000ms]`.

## Estado atual para publicacao

O projeto esta melhor preparado para SEO tecnico, indexacao, compartilhamento social e performance.

Ainda nao e recomendado publicar a versao final enquanto existirem URLs com:

```txt
TODO-SEO-dominio-final.com.br
```

Antes da publicacao final, preencher:

- dominio oficial;
- imagem social publica;
- logo publico.

Depois disso, o site tera uma base tecnica mais consistente para publicacao. Para uma estrategia de SEO mais forte, implementar prerender da rota raiz e otimizar/comprimir os assets de imagem mais pesados.

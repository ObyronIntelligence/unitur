# TODO SEO antes da publicacao

Este documento lista os marcadores `TODO SEO` que ainda nao devem ir para a versao final publicada do site.

## 1. Dominio final

Substituir `https://TODO-SEO-dominio-final.com.br/` pelo dominio oficial do site.

Onde aparece:

- `index.html`: canonical
- `index.html`: `og:url`
- `index.html`: URLs internas do JSON-LD
- `public/robots.txt`: `Sitemap`
- `public/sitemap.xml`: URL raiz

Quando fazer:

- Assim que o dominio oficial estiver definido.
- Obrigatoriamente antes do deploy final em producao.

## 2. Imagem social

Substituir a URL temporaria `https://TODO-SEO-dominio-final.com.br/og-unitur.jpg` pela URL publica da imagem social final.

Onde aparece:

- `index.html`: `og:image`
- `index.html`: `twitter:image`
- `index.html`: `image` no JSON-LD

Quando fazer:

- Antes da publicacao final.
- Depois de criar e publicar uma imagem horizontal, preferencialmente 1200x630 px.

Observacao:

- Essa imagem nao aparece no layout do site.
- Ela aparece quando o link e compartilhado no WhatsApp, Facebook, LinkedIn, Twitter/X e similares.

## 3. Logo publico

Substituir `https://TODO-SEO-dominio-final.com.br/TODO-SEO-logo-oficial.png` pela URL publica do logo oficial.

Onde aparece:

- `index.html`: campo `logo` no JSON-LD

Quando fazer:

- Antes da publicacao final.
- Depois que o logo oficial estiver disponivel em uma URL publica do dominio final.

## 4. Prerender da SPA

Existe um comentario `TODO SEO SPA` no `index.html` e uma recomendacao tecnica em `docs/seo-spa-prerender.md`.

Onde aparece:

- `index.html`: comentario junto ao `<div id="root"></div>`
- `docs/seo-spa-prerender.md`

Quando fazer:

- Pode ser feito depois da primeira publicacao, mas e recomendado antes de uma campanha forte de SEO.
- O objetivo e gerar o HTML inicial da rota raiz (`/`) ja com o conteudo principal renderizado, mantendo o site como one-page.

## Resumo de prioridade

Obrigatorio antes da versao final:

- substituir dominio final;
- substituir imagem social;
- substituir logo publico.

Recomendado para melhorar indexacao:

- implementar prerender da rota raiz (`/`).

Nao publicar a versao final com `TODO-SEO-dominio-final.com.br` em metadados, `robots.txt`, `sitemap.xml` ou JSON-LD.

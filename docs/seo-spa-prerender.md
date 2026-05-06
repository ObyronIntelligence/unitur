# SEO SPA e prerender

## Limitação atual

O projeto é uma landing page em React + Vite com renderização no cliente. No `index.html`, o HTML inicial contém apenas o ponto de montagem da aplicação:

```html
<div id="root"></div>
```

Isso significa que o conteúdo principal da página só aparece depois que o JavaScript é carregado e executado. Buscadores modernos conseguem renderizar JavaScript em muitos casos, mas essa etapa pode atrasar a descoberta do conteúdo, reduzir previsibilidade de indexação e dificultar validações de SEO baseadas no HTML inicial.

## Estratégia recomendada

Manter o site como uma única página, mas prerenderizar a rota raiz (`/`) no processo de build.

O resultado esperado é:

- continuar com apenas uma URL principal;
- gerar `dist/index.html` já com o conteúdo HTML renderizado da landing;
- manter os scripts do Vite para hidratação/interatividade no navegador;
- preservar `canonical`, `robots.txt` e `sitemap.xml` apontando apenas para a URL raiz;
- não criar rotas adicionais fictícias.

## Caminho técnico seguro

Quando a publicação estiver próxima, adicionar uma etapa de prerender depois do `vite build`:

1. Executar o build normal do Vite.
2. Subir um servidor local apontando para `dist`.
3. Abrir a rota `/` com um renderizador headless ou plugin de prerender compatível com Vite.
4. Esperar a aplicação React montar.
5. Salvar o HTML renderizado de volta em `dist/index.html`, preservando os assets e scripts gerados pelo Vite.
6. Validar em produção que "Exibir código-fonte" já mostra headings, textos principais, CTAs e seções da landing.

## Critérios de aceite

- A aplicação continua sendo one-page.
- O conteúdo principal aparece no HTML final publicado.
- O `h1` e os principais `h2` aparecem no HTML prerenderizado.
- Os CTAs continuam funcionando após hidratação.
- O sitemap contém apenas a URL raiz.
- O domínio final substitui todos os marcadores `TODO SEO`.

## Por que não implementar agora

Não foi adicionada dependência ou etapa automática de prerender neste momento para evitar alterar o pipeline de build sem definir antes o ambiente de publicação, domínio final e ferramenta preferida de deploy. A recomendação está preparada para ser executada como próxima etapa técnica sem mudar o design nem transformar o site em múltiplas páginas.

# Desentupidora Exata BH · site

Site com foco em SEO local e Google Ads (desentupidora 24h em Belo Horizonte). Feito com [Astro](https://astro.build), gera páginas estáticas e é publicado na Vercel.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefone/WhatsApp, nome, tempo de chegada, GTM/gtag | `src/data/site.ts` |
| Serviços (textos, FAQ, SEO) | `src/data/servicos.ts` |
| Bairros atendidos | `src/data/bairros.ts` |
| Textos das fotos (alt) | `src/data/fotos.ts` |
| Fotos reais | `fotos/<slug-do-serviço>/` (ver `fotos/LEIA-ME.md`) |
| Cores | `src/styles/global.css` (topo do arquivo) |
| Posts do blog | `src/content/blog/*.md` |

Cada serviço vira `/servicos/<slug>/`, cada bairro vira `/desentupidora-em-<slug>/` e cada post vira `/blog/<arquivo>/`. O sitemap é gerado automaticamente.

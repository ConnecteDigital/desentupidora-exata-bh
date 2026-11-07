import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
// Enquanto um serviço não tem foto, o site mostra o ícone do serviço no lugar.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-pia': 'Desentupidor da Desentupidora Exata BH desentupindo pia de cozinha',
  'desentupimento-de-ralo': 'Desentupimento de ralo de banheiro com máquina de cabo rotativo',
  'desentupimento-de-vaso-sanitario': 'Desentupimento de vaso sanitário em Belo Horizonte',
  'desentupimento-de-esgoto': 'Desentupimento de rede de esgoto pela caixa de inspeção',
  'limpa-fossa': 'Limpeza de fossa séptica em Belo Horizonte',
  equipe: 'Equipe da Desentupidora Exata BH em atendimento',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço realizado pela Desentupidora Exata BH' };
}

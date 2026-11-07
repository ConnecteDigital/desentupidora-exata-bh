// Regiões (regionais) de Belo Horizonte
export type Zona =
  | 'Centro-Sul'
  | 'Oeste'
  | 'Pampulha'
  | 'Noroeste'
  | 'Nordeste'
  | 'Leste'
  | 'Norte'
  | 'Venda Nova'
  | 'Barreiro';

export interface Bairro {
  slug: string;
  nome: string;
  zona: Zona;
  // Texto exclusivo da página para não repetir conteúdo entre bairros
  sobre: string;
  vizinhos: string[];
}

// Regiões em foco ganham a etiqueta "Foco" nas listagens (vazio = nenhuma)
export const zonasPrioritarias: Zona[] = [];
export const ordemZonas: Zona[] = [
  'Centro-Sul',
  'Oeste',
  'Pampulha',
  'Noroeste',
  'Nordeste',
  'Leste',
  'Norte',
  'Venda Nova',
  'Barreiro',
];

export const bairros: Bairro[] = [
  {
    slug: 'centro',
    nome: 'Centro',
    zona: 'Centro-Sul',
    sobre:
      'O Centro de BH concentra prédios comerciais antigos, lojas, restaurantes e lanchonetes. Os chamados mais comuns são caixa de gordura cheia, pia de cozinha comercial entupida e coluna de esgoto em edifícios antigos, muitas vezes atendidos à noite para não parar o comércio.',
    vizinhos: ['Funcionários', 'Barro Preto', 'Santa Efigênia', 'Floresta'],
  },
  {
    slug: 'savassi',
    nome: 'Savassi',
    zona: 'Centro-Sul',
    sobre:
      'Na Savassi convivem apartamentos, bares, restaurantes e escritórios. Atendemos desentupimento de pia e caixa de gordura em cozinhas comerciais e vaso e ralo entupidos em apartamentos, inclusive de madrugada e nos fins de semana.',
    vizinhos: ['Funcionários', 'Lourdes', 'Santo Antônio', 'Serra'],
  },
  {
    slug: 'buritis',
    nome: 'Buritis',
    zona: 'Oeste',
    sobre:
      'O Buritis é um bairro de muitos prédios altos e condomínios. Os chamados mais frequentes são vaso sanitário entupido, ralo de box com cabelo e entupimento de coluna de esgoto que afeta vários apartamentos ao mesmo tempo.',
    vizinhos: ['Estoril', 'Havaí', 'Palmeiras', 'Olhos d’Água'],
  },
  {
    slug: 'gutierrez',
    nome: 'Gutierrez',
    zona: 'Oeste',
    sobre:
      'O Gutierrez mistura casas tradicionais e prédios residenciais. Em imóveis mais antigos é comum a rede de esgoto entupir por raízes e acúmulo de gordura; nos prédios, pia de cozinha e ralo de área de serviço.',
    vizinhos: ['Grajaú', 'Nova Granada', 'Barroca', 'Prado'],
  },
  {
    slug: 'pampulha',
    nome: 'Pampulha',
    zona: 'Pampulha',
    sobre:
      'Na região da Pampulha predominam casas amplas, com quintal e caixas de inspeção. Atendemos desentupimento de rede de esgoto, ralos de quintal que transbordam com a chuva e limpeza de caixa de gordura.',
    vizinhos: ['São Luiz', 'Bandeirantes', 'Ouro Preto', 'Jaraguá'],
  },
  {
    slug: 'castelo',
    nome: 'Castelo',
    zona: 'Pampulha',
    sobre:
      'O Castelo cresceu com muitos condomínios e prédios residenciais. Os chamados mais comuns são vaso sanitário e pia entupidos em apartamentos e desentupimento de esgoto em casas e sobrados.',
    vizinhos: ['Ouro Preto', 'Manacás', 'Alípio de Melo', 'Paquetá'],
  },
  {
    slug: 'padre-eustaquio',
    nome: 'Padre Eustáquio',
    zona: 'Noroeste',
    sobre:
      'O Padre Eustáquio é um bairro tradicional, com muitas casas antigas e comércio de rua. É comum encontrar tubulação de esgoto antiga, com acúmulo de gordura e resíduos, que precisa de desobstrução completa da rede.',
    vizinhos: ['Carlos Prates', 'Caiçara', 'Coração Eucarístico', 'Alto dos Pinheiros'],
  },
  {
    slug: 'cidade-nova',
    nome: 'Cidade Nova',
    zona: 'Nordeste',
    sobre:
      'Na Cidade Nova há casas, prédios residenciais e muitos comércios na Avenida Cristiano Machado. Atendemos residências e empresas com desentupimento de pia, ralo, vaso e esgoto a qualquer hora.',
    vizinhos: ['União', 'Silveira', 'Nova Floresta', 'Ipiranga'],
  },
  {
    slug: 'santa-tereza',
    nome: 'Santa Tereza',
    zona: 'Leste',
    sobre:
      'Santa Tereza é conhecido pelas casas antigas e pelos bares. Em imóveis antigos o esgoto costuma entupir por desgaste da tubulação e raízes; nos bares e restaurantes, a caixa de gordura precisa de limpeza frequente.',
    vizinhos: ['Floresta', 'Sagrada Família', 'Horto', 'Colégio Batista'],
  },
  {
    slug: 'sagrada-familia',
    nome: 'Sagrada Família',
    zona: 'Leste',
    sobre:
      'O Sagrada Família tem muitas casas e prédios de poucos andares. Os chamados mais comuns são vaso sanitário entupido, ralo de área de serviço e desentupimento da rede de esgoto até a rua.',
    vizinhos: ['Santa Tereza', 'Pompéia', 'Esplanada', 'Horto'],
  },
  {
    slug: 'venda-nova',
    nome: 'Venda Nova',
    zona: 'Venda Nova',
    sobre:
      'Venda Nova é uma região grande e residencial, com muitas casas e comércio forte. Atendemos desde pia e vaso entupidos até desentupimento de esgoto e limpa fossa em imóveis que ainda usam fossa séptica.',
    vizinhos: ['Santa Mônica', 'Rio Branco', 'Candelária', 'Letícia'],
  },
  {
    slug: 'barreiro',
    nome: 'Barreiro',
    zona: 'Barreiro',
    sobre:
      'No Barreiro há bairros residenciais grandes, com muitas casas e quintais. Fazemos desentupimento de esgoto e de caixa de inspeção, ralos de quintal e limpa fossa em imóveis com fossa séptica.',
    vizinhos: ['Diamante', 'Milionários', 'Lindéia', 'Cardoso'],
  },
  {
    slug: 'planalto',
    nome: 'Planalto',
    zona: 'Norte',
    sobre:
      'O Planalto reúne casas, condomínios e prédios novos. Os chamados mais comuns são vaso e ralo entupidos em apartamentos e desentupimento de rede de esgoto em casas.',
    vizinhos: ['Itapoã', 'Heliópolis', 'São Bernardo', 'Floramar'],
  },
];

export function bairroPath(b: Bairro) {
  return `/desentupidora-em-${b.slug}/`;
}

export function zonaNome(zona: Zona) {
  if (zona === 'Pampulha') return 'região da Pampulha';
  if (zona === 'Barreiro') return 'região do Barreiro';
  if (zona === 'Venda Nova') return 'região de Venda Nova';
  return `região ${zona}`;
}

export function bairrosPorZona() {
  return ordemZonas
    .map((zona) => ({ zona, bairros: bairros.filter((b) => b.zona === zona) }))
    .filter((g) => g.bairros.length > 0);
}

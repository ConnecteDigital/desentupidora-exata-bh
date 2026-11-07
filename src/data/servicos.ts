import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
  destaque?: boolean;
}

export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de Pia',
    keyword: 'Desentupimento de pia em BH',
    resumo: 'Pia da cozinha ou do banheiro parada? Removemos gordura e resíduos sem quebrar nada.',
    metaDescription:
      'Desentupimento de pia de cozinha e banheiro em Belo Horizonte, 24 horas. Chegamos em até 30 minutos, com garantia. Chame no WhatsApp.',
    icon: 'faucet',
    destaque: true,
    intro: [
      'Pia entupida é um dos problemas mais comuns em casas, apartamentos e restaurantes de Belo Horizonte. Na cozinha, a causa quase sempre é gordura acumulada com restos de comida; no banheiro, cabelo, sabonete e creme dental que vão formando uma massa dentro do sifão e do cano.',
      'A Desentupidora Exata BH atende 24 horas, inclusive fins de semana e feriados. Usamos máquina de cabo rotativo e equipamentos de pressão para limpar a tubulação por dentro, sem quebrar parede nem bancada.',
    ],
    sinais: [
      'Água descendo devagar ou parada na cuba',
      'Mau cheiro saindo pelo ralo da pia',
      'Barulho de borbulhas quando a água escoa',
      'Água voltando na pia ao usar a máquina de lavar ou o tanque',
      'Sifão vazando ou cheio de gordura',
    ],
    comoFazemos: [
      'Verificamos o sifão e localizamos o ponto da obstrução',
      'Limpamos a tubulação com máquina de cabo rotativo ou pressão',
      'Testamos o escoamento com água corrente',
      'Orientamos como evitar que a gordura volte a entupir a pia',
    ],
    faq: [
      {
        q: 'Precisa quebrar a parede para desentupir a pia?',
        a: 'Não na grande maioria dos casos. Nossas máquinas alcançam a obstrução por dentro do cano, sem quebra-quebra.',
      },
      {
        q: 'Soda cáustica resolve pia entupida?',
        a: 'Não recomendamos. A soda pode endurecer a gordura, danificar canos de PVC e causar queimaduras. Se a água não desce, o melhor é chamar um desentupidor.',
      },
      {
        q: 'Vocês desentopem pia de restaurante e lanchonete?',
        a: 'Sim. Atendemos cozinhas comerciais, inclusive fora do horário de funcionamento para não atrapalhar o movimento.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de Ralo',
    keyword: 'Desentupimento de ralo em BH',
    resumo: 'Ralo do box, da área de serviço ou da varanda entupido? Resolvemos na hora.',
    metaDescription:
      'Desentupimento de ralo de banheiro, box, área de serviço e quintal em Belo Horizonte. Atendimento 24h, chegada em até 30 minutos.',
    icon: 'drain',
    destaque: true,
    intro: [
      'Ralo entupido deixa o banheiro alagado, traz mau cheiro e pode até fazer a água voltar em outros cômodos. No box, o vilão costuma ser cabelo misturado com sabão; na área de serviço e no quintal, terra, folhas e fiapos da máquina de lavar.',
      'Desentupimos ralos de banheiro, box, área de serviço, varanda, garagem e quintal em toda Belo Horizonte, a qualquer hora, sem precisar quebrar o piso.',
    ],
    sinais: [
      'Água empoçando no box durante o banho',
      'Mau cheiro de esgoto saindo do ralo',
      'Água voltando pelo ralo ao usar a máquina de lavar',
      'Ralo do quintal transbordando quando chove',
    ],
    comoFazemos: [
      'Retiramos a grelha e verificamos a caixa sifonada',
      'Desobstruímos a tubulação com máquina de cabo rotativo',
      'Limpamos a caixa sifonada e testamos o escoamento',
      'Indicamos telas e cuidados para evitar novos entupimentos',
    ],
    faq: [
      {
        q: 'Por que o ralo do banheiro fede mesmo sem entupir?',
        a: 'Geralmente é a caixa sifonada sem água ou suja, que deixa passar o gás do esgoto. Na visita, limpamos a caixa e verificamos se há obstrução mais adiante.',
      },
      {
        q: 'Desentupir o ralo quebra o piso?',
        a: 'Não. O desentupimento é feito por dentro da tubulação, pela própria abertura do ralo.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de Vaso Sanitário',
    keyword: 'Desentupimento de vaso sanitário em BH',
    resumo: 'Vaso transbordando ou que não desce? Atendimento 24h sem retirar o vaso do lugar.',
    metaDescription:
      'Desentupimento de vaso sanitário 24 horas em Belo Horizonte. Vaso transbordando ou que não desce? Chegamos em até 30 minutos, com garantia.',
    icon: 'toilet',
    destaque: true,
    intro: [
      'Vaso sanitário entupido é uma emergência: o banheiro fica inutilizável e o risco de transbordar é grande. As causas mais comuns são papel em excesso, absorventes, fio dental, lenços umedecidos e objetos que caem no vaso, principalmente em casas com crianças.',
      'A Desentupidora Exata BH desentope o vaso sem retirar a louça do lugar sempre que possível, usando equipamentos próprios para a curva do vaso e para o cano de esgoto.',
    ],
    sinais: [
      'Água subindo até a borda ao dar descarga',
      'Descarga fraca ou água descendo muito devagar',
      'Barulho de borbulhas no vaso ao usar a pia ou o chuveiro',
      'Mau cheiro forte de esgoto no banheiro',
    ],
    comoFazemos: [
      'Avaliamos se a obstrução está no vaso ou no cano de esgoto',
      'Desobstruímos com equipamento próprio, sem retirar o vaso',
      'Retiramos o vaso só quando há objeto preso, sempre com seu aceite',
      'Testamos várias descargas antes de liberar o banheiro',
    ],
    faq: [
      {
        q: 'Vocês desentopem vaso de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive fins de semana e feriados.',
      },
      {
        q: 'Caiu um objeto no vaso. Dá para tirar?',
        a: 'Na maioria dos casos, sim. Tentamos retirar pelo próprio vaso; se não for possível, removemos a louça e recolocamos com vedação nova.',
      },
      {
        q: 'Posso continuar dando descarga com o vaso entupido?',
        a: 'Não. Cada descarga aumenta o risco de transbordar. Feche o registro da caixa acoplada ou da válvula e chame a gente.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de Esgoto',
    keyword: 'Desentupimento de esgoto em BH',
    resumo: 'Caixa de gordura, caixa de inspeção, rede e coluna de esgoto desobstruídas.',
    metaDescription:
      'Desentupimento de esgoto, caixa de gordura e caixa de inspeção em Belo Horizonte. Residências, prédios e comércios, 24 horas.',
    icon: 'pipe',
    destaque: true,
    intro: [
      'Quando o esgoto entope, o problema aparece em vários lugares ao mesmo tempo: ralos voltando água, vaso que não desce, caixa de inspeção transbordando no quintal ou na garagem. Em prédios, uma coluna entupida afeta vários apartamentos de uma vez.',
      'Atendemos casas, condomínios, restaurantes e empresas em Belo Horizonte com desentupimento de rede de esgoto, coluna, caixa de gordura e caixa de inspeção, com máquinas para tubulações de vários diâmetros.',
    ],
    sinais: [
      'Caixa de inspeção ou de gordura transbordando',
      'Água voltando em ralos de vários cômodos',
      'Mau cheiro forte de esgoto na casa ou no quintal',
      'Vários pontos de escoamento lentos ao mesmo tempo',
      'Apartamentos do mesmo prédio com o mesmo problema',
    ],
    comoFazemos: [
      'Abrimos as caixas de inspeção para achar o trecho entupido',
      'Desobstruímos a rede com máquina rotativa adequada ao diâmetro do cano',
      'Limpamos caixa de gordura e caixa de inspeção quando necessário',
      'Testamos o escoamento em todos os pontos antes de terminar',
    ],
    faq: [
      {
        q: 'Atendem condomínios e prédios?',
        a: 'Sim. Fazemos desentupimento de coluna e rede de esgoto em condomínios residenciais e comerciais.',
      },
      {
        q: 'De quanto em quanto tempo limpar a caixa de gordura?',
        a: 'Depende do uso. Em residências, a cada 6 meses costuma ser suficiente; em restaurantes, o ideal é uma limpeza mensal ou até quinzenal.',
      },
      {
        q: 'Precisa quebrar o piso para desentupir o esgoto?',
        a: 'Na maioria dos casos, não. Trabalhamos pelas caixas de inspeção. Só indicamos abertura quando há cano quebrado, e sempre com seu aceite antes.',
      },
    ],
  },
  {
    slug: 'limpa-fossa',
    nome: 'Limpa Fossa',
    keyword: 'Limpa fossa em BH',
    resumo: 'Limpeza e esgotamento de fossa séptica e sumidouro em casas, sítios e comércios.',
    metaDescription:
      'Limpa fossa em Belo Horizonte e região: limpeza e esgotamento de fossa séptica e sumidouro. Atendimento rápido, com garantia.',
    icon: 'tank',
    intro: [
      'A fossa séptica precisa de limpeza periódica. Quando ela enche, o esgoto começa a voltar pelos ralos e pelo vaso, aparece mau cheiro no quintal e pode até haver vazamento no terreno.',
      'A Desentupidora Exata BH faz a limpeza e o esgotamento de fossa séptica e sumidouro em casas, sítios, chácaras e comércios de Belo Horizonte e região, com destinação correta dos resíduos.',
    ],
    sinais: [
      'Mau cheiro forte perto da fossa ou no quintal',
      'Vaso e ralos escoando devagar em toda a casa',
      'Esgoto voltando pelos ralos',
      'Terreno úmido ou com poça perto da fossa',
      'Muito tempo sem limpeza (mais de 1 ou 2 anos)',
    ],
    comoFazemos: [
      'Localizamos e abrimos a tampa da fossa',
      'Fazemos a sucção e o esgotamento do conteúdo',
      'Verificamos a entrada, a saída e o sumidouro',
      'Fechamos a fossa e orientamos sobre a próxima limpeza',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo limpar a fossa?',
        a: 'Em média, a cada 1 a 2 anos, dependendo do tamanho da fossa e de quantas pessoas moram no imóvel.',
      },
      {
        q: 'Atendem sítios e chácaras fora de BH?',
        a: 'Atendemos Belo Horizonte e região metropolitana. Chame no WhatsApp com o endereço que confirmamos o atendimento.',
      },
    ],
  },
];

export const servicosDestaque = servicos.filter((s) => s.destaque);

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}

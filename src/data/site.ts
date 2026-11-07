// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// WhatsApp e telefone. Formato: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '5531985179483';

export const site = {
  name: 'Desentupidora Exata BH',
  legalName: 'Desentupidora Exata BH',
  // PENDENTE: confirmar o domínio
  url: 'https://desentupidoraexatabh.com.br',
  city: 'Belo Horizonte',
  cityShort: 'BH',
  state: 'MG',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (31) 90000-0000
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  // Link do botão Ligar no padrão do cliente: 0 + DDD + número (ex.: tel:031985179483)
  tel: `tel:0${PHONE_DIGITS.slice(2)}`,
  // PENDENTE: confirmar o tempo de chegada com o cliente
  arrivalMinutes: 30,
  description:
    'Desentupidora 24 horas em Belo Horizonte. Desentupimento de pia, ralo, vaso sanitário e esgoto, e limpa fossa. Chegamos em até 30 minutos, com garantia.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Desentupidora Exata BH e preciso de um desentupimento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Tag do Google (gtag.js). Deixe vazio enquanto não houver ID; preencha com o ID (ex.: AW-123 ou GT-ABC).
export const googleTagId = '';

// Contêiner do Google Tag Manager (ex.: GTM-XXXXXXX). Vazio = não instala.
export const gtmId = '';

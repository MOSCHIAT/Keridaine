// js/mercadopago.js
// Aqui você pode colocar a lógica de integração com o Mercado Pago.
// Exemplo: criar preferências, webhooks, etc.
export function criarPagamento(dados) {
  console.log('Criando pagamento no Mercado Pago:', dados);
  // Simulação
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 'MP-' + Date.now(), status: 'pending' });
    }, 500);
  });
}
export const formatDate = (date) => date.split('T')[0];
export const formatMoney = (money) => new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
}).format(money);
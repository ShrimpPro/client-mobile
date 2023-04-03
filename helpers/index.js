export const formatDate = (date) => date.split('T')[0];
export const formatMoney = (money) => new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
}).format(money);

export const phColor = (pH) => {
  let color;
  if (pH >= 7 && pH <= 8.5) {
    color = "#008000";
  } else if (pH >= 6 && pH < 7) {
    color = "#ffa500";
  } else if (pH >= 8.5 && pH <= 9.5) {
    color = "#ffa500";
  } else {
    color = "#ff0303";
  }
  return color;
}

export const phCategory = (pH) => {
  let category;
  if (pH >= 7 && pH <= 8.5) {
    category = "Normal";
  } else if (pH >= 6 && pH < 7) {
    category = "Waspada";
  } else if (pH >= 8.5 && pH <= 9.5) {
    category = "Waspada";
  } else {
    category = "Bahaya";
  }
  return category;
}

export const tempColor = (temp) => {
  let color;
  if (temp >= 28 && temp <= 30) {
    color = "#25aff3";
  } else if (temp >= 18 && temp <= 36) {
    color = "#ffa500";
  } else {
    color = "#ff0303";
  }
  return color;
}

export const tempCategory = (temp) => {
  let category;
  if (temp >= 28 && temp <= 30) {
    category = "Normal";
  } else if (temp >= 18 && temp <= 36) {
    category = "Waspada";
  } else {
    category = "Bahaya";
  }
  return category;
}
export const formatDate = (date) => date.split("T")[0];
export const formatMoney = (money) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);

export const phColor = (pH) => {
  let color;
  if (pH >= 7 && pH <= 8.5) {
    color = "#08b608";
  } else if (pH >= 6 && pH < 7) {
    color = "#ffa500";
  } else if (pH >= 8.5 && pH <= 9.5) {
    color = "#ffa500";
  } else {
    color = "#ff0303";
  }
  return color;
};

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
};

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
};

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
};

export const categoryColor = (category) => {
  let color;
  if (category === "Baik") {
    color = "#08b608";
  } else if (category === "Cukup") {
    color = "#ffa500";
  } else {
    color = "#ff0303";
  }
  return color;
};

export const pondCategory = (ponds) => {
  if (ponds.length > 1) return "Tambak besar";
  return "Tambak kecil";
};

export const capitalizeFirstLetter = (word) =>
  word[0].toUpperCase() + word.slice(1);

export const dateToHours = (date) =>
  date.split("T")[1].split(".")[0].slice(0, -3);
export const dateToMonth = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}/${month}`;
};

export const historyDates = (histories) => {
  const dates = [];
  histories?.forEach((el) => {
    dates.push(dateToHours(el.createdAt));
  });
  return dates;
};

export const netProfit = (capital, earning) => earning - capital;
export const profitPerMillion = (profit) => {
  const result = profit / 1000000;
  return result;
};

export const harvestDates = (harvests) => {
  const dates = [];
  harvests?.forEach((el) => {
    const date = new Date(el.createdAt);
    dates.push(dateToMonth(date));
  });
  return dates;
};

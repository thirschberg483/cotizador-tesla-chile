const CLP = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0
});
const TESLA_WORDMARK_JPEG_BASE64 = "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";
const TESLA_WORDMARK_WIDTH = 620;
const TESLA_WORDMARK_HEIGHT = 64;

const catalog = {
  "Model 3": [
    {
      name: "Rear-Wheel Drive",
      price: 29900000,
      autonomy: "534 km",
      wheels: [
        { name: "Rines 18\"", price: 0, note: "Incluidos" },
        { name: "Rines 19\"", price: 1250000, note: "Opcional" }
      ]
    },
    {
      name: "Premium Long Range Rear-Wheel Drive 750 km",
      price: 34900000,
      autonomy: "750 km",
      wheels: [
        { name: "Rines 18\"", price: 0, note: "Incluidos" },
        { name: "Rines 19\"", price: 1250000, note: "Opcional" }
      ]
    },
    {
      name: "Premium Rear-Wheel Drive",
      price: 32900000,
      autonomy: "520 km",
      wheels: [
        { name: "Rines 18\"", price: 0, note: "Incluidos" },
        { name: "Rines 19\"", price: 1250000, note: "Opcional" }
      ]
    },
    {
      name: "Premium Long Range AWD",
      price: 37900000,
      autonomy: "660 km",
      wheels: [
        { name: "Rines 18\"", price: 0, note: "Incluidos" },
        { name: "Rines 19\"", price: 1250000, note: "Opcional" }
      ]
    },
    {
      name: "Performance AWD",
      price: 42900000,
      autonomy: "571 km",
      wheels: [
        { name: "Rines 20\"", price: 0, note: "Única opción / incluidos" }
      ]
    }
  ],
  "Model Y": [
    {
      name: "Premium Long Range Rear-Wheel Drive",
      price: 39900000,
      autonomy: "661 km",
      wheels: [
        { name: "Rines 19\"", price: 0, note: "Incluidos" },
        { name: "Rines 20\"", price: 1500000, note: "Opcional" }
      ]
    },
    {
      name: "Premium Rear-Wheel Drive",
      price: 36900000,
      autonomy: "466 km",
      wheels: [
        { name: "Rines 19\"", price: 0, note: "Incluidos" },
        { name: "Rines 20\"", price: 1500000, note: "Opcional" }
      ]
    },
    {
      name: "Premium Long Range AWD",
      price: 41900000,
      autonomy: "600 km",
      wheels: [
        { name: "Rines 19\"", price: 0, note: "Incluidos" },
        { name: "Rines 20\"", price: 1500000, note: "Opcional" }
      ]
    }
  ]
};

const options = {
  paint: [
    { name: "Blanco Perla Multicapa", price: 0, note: "Incluido" },
    { name: "Gris Grafito", price: 1000000, note: "Opcional" },
    { name: "Negro Diamante", price: 1000000, note: "Opcional" },
    { name: "Azul Marino", price: 1000000, note: "Opcional" },
    { name: "Azul Glaciar", price: 1000000, note: "Opcional" },
    { name: "Rojo Ultra", price: 1500000, note: "Opcional" },
    { name: "Plata Metálico", price: 1500000, note: "Opcional" }
  ],
  interior: [
    { name: "Interior negro", price: 0, note: "Incluido" },
    { name: "Interior blanco y negro", price: 1000000, note: "Opcional" },
    { name: "Gris Zen", price: 1000000, note: "Opcional" }
  ]
};

const technicalSpecs = {
  "Model 3": {
    "Rear-Wheel Drive": {
      "Propulsión": "Rear-Wheel Drive",
      "Aceleración 0-100 km/h": "0 a 100 km/h en 6,2 s",
      "Peso (masa en vacío)": "1.768 kg",
      "Carga": "88 L del. · 594 L tras.",
      "Rines técnicos": "18\"",
      "Asientos": "5 adultos",
      "Altura libre sobre el suelo": "138 mm",
      "Ancho total": "Espejos plegados: 1.933 mm; espejos extendidos: 2.089 mm",
      "Altura total": "1.440 mm",
      "Longitud total": "4.720 mm"
    },
    "Premium Long Range Rear-Wheel Drive 750 km": {
      "Propulsión": "Rear-Wheel Drive",
      "Aceleración 0-100 km/h": "0 a 100 km/h en 5,2 s",
      "Peso (masa en vacío)": "1.747 kg",
      "Carga": "88 L del. · 594 L tras.",
      "Rines técnicos": "18\" o 19\"",
      "Asientos": "5 adultos",
      "Altura libre sobre el suelo": "138 mm",
      "Ancho total": "Espejos plegados: 1.933 mm; espejos extendidos: 2.089 mm",
      "Altura total": "1.441 mm",
      "Longitud total": "4.720 mm"
    },
    "Premium Rear-Wheel Drive": {
      "Propulsión": "Rear-Wheel Drive",
      "Aceleración 0-100 km/h": "0 a 100 km/h en 6,1 s",
      "Peso (masa en vacío)": "1.765 kg",
      "Carga": "88 L del. · 594 L tras.",
      "Rines técnicos": "18\" o 19\"",
      "Asientos": "5 adultos",
      "Altura libre sobre el suelo": "138 mm",
      "Ancho total": "Espejos plegados: 1.933 mm; espejos extendidos: 2.089 mm",
      "Altura total": "1.441 mm",
      "Longitud total": "4.720 mm",
      "Carga máxima Supercharger": "170 kW máx / Pago por uso",
      "Velocidad de carga": "Agrega hasta 147 km en 15 minutos",
      "Garantía vehículo básico": "4 años u 80.000 km, lo que ocurra primero",
      "Garantía batería y unidad de potencia": "8 años o 160.000 km, lo que ocurra primero"
    },
    "Premium Long Range AWD": {
      "Propulsión": "Dual Motor All-Wheel Drive",
      "Aceleración 0-100 km/h": "0 a 100 km/h en 4,4 s",
      "Peso (masa en vacío)": "1.828 kg",
      "Carga": "88 L del. · 594 L tras.",
      "Rines técnicos": "18\" o 19\"",
      "Asientos": "5 adultos",
      "Altura libre sobre el suelo": "138 mm",
      "Ancho total": "Espejos plegados: 1.933 mm; espejos extendidos: 2.089 mm",
      "Altura total": "1.441 mm",
      "Longitud total": "4.720 mm",
      "Carga máxima Supercharger": "250 kW máx / Pago por uso",
      "Velocidad de carga": "Agrega hasta 185 km en 15 minutos",
      "Garantía vehículo básico": "4 años u 80.000 km, lo que ocurra primero",
      "Garantía batería y unidad de potencia": "8 años o 192.000 km, lo que ocurra primero"
    },
    "Performance AWD": {
      "Propulsión": "Dual Motor All-Wheel Drive",
      "Aceleración 0-100 km/h": "0 a 100 km/h en 3,1 s",
      "Peso (masa en vacío)": "1.851 kg",
      "Carga": "88 L del. · 594 L tras.",
      "Rines técnicos": "Rines Warp de 20\"",
      "Asientos": "5 adultos",
      "Altura libre sobre el suelo": "128 mm",
      "Ancho total": "Espejos plegados: 1.933 mm; espejos extendidos: 2.089 mm",
      "Altura total": "1.431 mm",
      "Longitud total": "4.720 mm",
      "Carga máxima Supercharger": "250 kW máx / Pago por uso",
      "Velocidad de carga": "Agrega hasta 237 km en 15 minutos",
      "Garantía vehículo básico": "4 años u 80.000 km, lo que ocurra primero",
      "Garantía batería y unidad de potencia": "8 años o 192.000 km, lo que ocurra primero"
    }
  },
  "Model Y": {
    "Premium Long Range Rear-Wheel Drive": {
      "Propulsión": "Rear-Wheel Drive",
      "Aceleración 0-100 km/h": "0 a 100 km/h en 5,6 s",
      "Peso (masa en vacío)": "1.901 kg",
      "Carga": "116 L del. · 822 L tras.",
      "Rines técnicos": "19\" o 20\"",
      "Asientos": "Hasta 5 adultos",
      "Altura libre sobre el suelo": "167 mm",
      "Ancho total": "Espejos plegados: 1.982 mm; espejos extendidos: 2.129 mm",
      "Altura total": "1.624 mm",
      "Longitud total": "4.790 mm"
    },
    "Premium Rear-Wheel Drive": {
      "Propulsión": "Rear-Wheel Drive",
      "Aceleración 0-100 km/h": "0 a 100 km/h en 5,9 s",
      "Peso (masa en vacío)": "1.928 kg",
      "Carga": "116 L del. · 822 L tras.",
      "Rines técnicos": "19\" o 20\"",
      "Asientos": "Hasta 5 adultos",
      "Altura libre sobre el suelo": "167 mm",
      "Ancho total": "Espejos plegados: 1.982 mm; espejos extendidos: 2.129 mm",
      "Altura total": "1.624 mm",
      "Longitud total": "4.790 mm",
      "Carga máxima Supercharger": "175 kW máx / Pago por uso",
      "Velocidad de carga": "Agrega hasta 216 km en 15 minutos",
      "Garantía vehículo básico": "4 años u 80.000 km, lo que ocurra primero",
      "Garantía batería y unidad de potencia": "8 años o 160.000 km, lo que ocurra primero"
    },
    "Premium Long Range AWD": {
      "Propulsión": "Dual Motor All-Wheel Drive",
      "Aceleración 0-100 km/h": "0 a 100 km/h en 4,8 s",
      "Peso (masa en vacío)": "1.992 kg",
      "Carga": "116 L del. · 822 L tras.",
      "Rines técnicos": "19\" o 20\"",
      "Asientos": "Hasta 5 adultos",
      "Altura libre sobre el suelo": "167 mm",
      "Ancho total": "Espejos plegados: 1.982 mm; espejos extendidos: 2.129 mm",
      "Altura total": "1.624 mm",
      "Longitud total": "4.790 mm",
      "Carga máxima Supercharger": "250 kW máx / Pago por uso",
      "Velocidad de carga": "Agrega hasta 259 km en 15 minutos",
      "Garantía vehículo básico": "4 años u 80.000 km, lo que ocurra primero",
      "Garantía batería y unidad de potencia": "8 años o 192.000 km, lo que ocurra primero"
    }
  }
};

const form = document.querySelector("#quoteForm");
const fields = {
  model: document.querySelector("#model"),
  version: document.querySelector("#version"),
  paint: document.querySelector("#paint"),
  wheels: document.querySelector("#wheels"),
  interior: document.querySelector("#interior"),
  quantity: document.querySelector("#quantity"),
  discount: document.querySelector("#discount"),
  client: document.querySelector("#client"),
  printClientTitle: document.querySelector("#printClientTitle")
};

const totals = {
  unitPrice: document.querySelector("#unitPrice"),
  subtotal: document.querySelector("#subtotal"),
  totalDiscount: document.querySelector("#totalDiscount"),
  grandTotal: document.querySelector("#grandTotal")
};

let latestQuote = null;
const saveStatus = document.querySelector("#saveStatus");
const ORDER_FEE = 300000;
const DOCUMENTATION_FEE = 100000;
const FIXED_DISCOUNT = 0;

function optionLabel(item, includedText = "incluido") {
  const label = item.note || includedText;
  const price = item.price > 0 ? `+${CLP.format(item.price)}` : label;
  return `${item.name} (${price})`;
}

function fillSelect(select, items, selectedIndex = 0) {
  const previous = select.value;
  select.innerHTML = "";
  items.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = optionLabel(item);
    select.append(option);
  });
  const nextIndex = items[Number(previous)] ? Number(previous) : Math.min(selectedIndex, items.length - 1);
  select.selectedIndex = nextIndex;
  select.value = String(nextIndex);
}

function fillModels() {
  Object.keys(catalog).forEach((model) => {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    fields.model.append(option);
  });
  fields.model.value = "Model 3";
}

function fillVersions() {
  const versions = catalog[fields.model.value]
    .map((version, index) => ({ version, index }))
    .sort((a, b) => a.version.price - b.version.price || a.index - b.index);
  fields.version.innerHTML = "";
  versions.forEach(({ version, index }) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${version.name} (${CLP.format(version.price)} - ${version.autonomy} WLTP)`;
    fields.version.append(option);
  });
  fields.version.value = versions.length ? String(versions[0].index) : "0";
  fillConfigurationOptions();
}

function selectedVersion() {
  return selected(fields.version, catalog[fields.model.value]);
}

function fillConfigurationOptions() {
  const version = selectedVersion();
  fillSelect(fields.wheels, version.wheels);
}

function selected(select, items) {
  return items[Number(select.value)] || items[0];
}

function formatQuoteDate(value) {
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"];
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return value || "";
  const [, year, month, day] = match;
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}

function specsFor(model, versionName) {
  const modelSpecs = technicalSpecs[model] || {};
  if (modelSpecs[versionName]) return modelSpecs[versionName];
  if (String(versionName || "").includes("Rear-Wheel Drive")) {
    return modelSpecs["Premium Rear-Wheel Drive"] || {};
  }
  return {};
}

function specValue(specs, key, fallback = "-") {
  return specs[key] || fallback;
}

function extendedMirrorWidth(value) {
  const match = String(value || "").match(/espejos extendidos:\s*([^;]+)/i);
  return match ? match[1].trim() : value || "-";
}

function accelerationValue(value) {
  const match = String(value || "").match(/en\s+([\d,]+)\s*s/i);
  return match ? `${match[1]} s` : value || "-";
}

function seatCount(value) {
  const match = String(value || "").match(/(\d+)/);
  return match ? `${match[1]} pasajeros` : value || "-";
}

function tractionLabel(value) {
  return String(value || "").includes("Dual Motor") ? "Tracción Integral" : "Tracción Trasera";
}

function tractionDetail(value) {
  return String(value || "").includes("Dual Motor") ? "motor dual" : "motor único";
}

function calculate() {
  const version = selectedVersion();
  const paint = selected(fields.paint, options.paint);
  const wheels = selected(fields.wheels, version.wheels);
  const interior = selected(fields.interior, options.interior);
  const quantity = Math.max(1, Number(fields.quantity.value) || 1);
  const discount = FIXED_DISCOUNT;
  const specs = specsFor(fields.model.value, version.name);
  const propulsión = specValue(specs, "Propulsión", version.name.includes("AWD") ? "Dual Motor All-Wheel Drive" : "Rear-Wheel Drive");

  const unit = version.price + paint.price + wheels.price + interior.price;
  const subtotal = unit * quantity;
  const totalDiscount = Math.min(subtotal, discount * quantity);
  const grandTotal = subtotal - totalDiscount + ORDER_FEE + DOCUMENTATION_FEE;

  totals.unitPrice.textContent = CLP.format(unit);
  totals.subtotal.textContent = CLP.format(subtotal);
  totals.totalDiscount.textContent = `-${CLP.format(totalDiscount)}`;
  totals.grandTotal.textContent = CLP.format(grandTotal);
  fields.discount.value = CLP.format(FIXED_DISCOUNT);
  fields.printClientTitle.textContent = fields.client.value || "Cliente";

  latestQuote = {
    client: document.querySelector("#client").value || "Cliente",
    rut: document.querySelector("#rut").value || "",
    date: formatQuoteDate(document.querySelector("#date").value),
    model: fields.model.value,
    version: version.name,
    autonomy: version.autonomy,
    acceleration: accelerationValue(specValue(specs, "Aceleración 0-100 km/h")),
    traction: tractionLabel(propulsión),
    tractionDetail: tractionDetail(propulsión),
    seats: seatCount(specValue(specs, "Asientos")),
    specs,
    paint: paint.name,
    wheels: wheels.name,
    interior: interior.name,
    quantity,
    discount,
    basePrice: version.price,
    paintPrice: paint.price,
    wheelsPrice: wheels.price,
    interiorPrice: interior.price,
    unit,
    subtotal,
    totalDiscount,
    orderFee: ORDER_FEE,
    documentationFee: DOCUMENTATION_FEE,
    grandTotal
  };
}

function pdfLiteral(value) {
  const winAnsi = {
    0x00a1: 161, 0x00a2: 162, 0x00a3: 163, 0x00a5: 165, 0x00a9: 169,
    0x00aa: 170, 0x00ab: 171, 0x00ae: 174, 0x00b0: 176, 0x00b1: 177,
    0x00b2: 178, 0x00b3: 179, 0x00b5: 181, 0x00b7: 183, 0x00ba: 186,
    0x00bb: 187, 0x00bf: 191, 0x00c0: 192, 0x00c1: 193, 0x00c2: 194,
    0x00c3: 195, 0x00c4: 196, 0x00c5: 197, 0x00c6: 198, 0x00c7: 199,
    0x00c8: 200, 0x00c9: 201, 0x00ca: 202, 0x00cb: 203, 0x00cc: 204,
    0x00cd: 205, 0x00ce: 206, 0x00cf: 207, 0x00d1: 209, 0x00d2: 210,
    0x00d3: 211, 0x00d4: 212, 0x00d5: 213, 0x00d6: 214, 0x00d9: 217,
    0x00da: 218, 0x00db: 219, 0x00dc: 220, 0x00dd: 221, 0x00df: 223,
    0x00e0: 224, 0x00e1: 225, 0x00e2: 226, 0x00e3: 227, 0x00e4: 228,
    0x00e5: 229, 0x00e6: 230, 0x00e7: 231, 0x00e8: 232, 0x00e9: 233,
    0x00ea: 234, 0x00eb: 235, 0x00ec: 236, 0x00ed: 237, 0x00ee: 238,
    0x00ef: 239, 0x00f1: 241, 0x00f2: 242, 0x00f3: 243, 0x00f4: 244,
    0x00f5: 245, 0x00f6: 246, 0x00f9: 249, 0x00fa: 250, 0x00fb: 251,
    0x00fc: 252, 0x00fd: 253, 0x00ff: 255
  };

  return `(${String(value).split("").map((char) => {
    const code = char.charCodeAt(0);
    if (char === "\\") return "\\\\";
    if (char === "(") return "\\(";
    if (char === ")") return "\\)";
    if (code >= 32 && code <= 126) return char;
    const mapped = winAnsi[code];
    if (mapped) return `\\${mapped.toString(8).padStart(3, "0")}`;
    return "?";
  }).join("")})`;
}

function wrapText(text, maxChars) {
  const words = String(text || "").replace(/\s+/g, " ").trim().split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });

  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

function slugify(value) {
  return String(value || "cotizacion")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 48) || "cotizacion";
}

function createPdfBlob(quote) {
  const pageWidth = 612;
  const pageHeight = 792;
  const left = 68;
  const right = pageWidth - left;
  const totalPages = 3;
  const pages = [];
  const vehicleTitle = `${quote.model} ${quote.version}`;
  const traction = `${quote.traction} - ${quote.tractionDetail}`;
  const syncText = "Sincronizado con tesla.com/es_CL.";

  function createPage(title, subtitle, pageNumber, drawBody) {
    const content = [];

    const text = (value, x, yy, size = 10, color = "0.10 0.11 0.14", font = "F1") => {
      content.push(`BT ${color} rg /${font} ${size} Tf ${x} ${yy} Td ${pdfLiteral(value)} Tj ET`);
    };

    const textWidth = (value, size) => String(value || "").split("").reduce((total, char) => {
      if (char === " ") return total + size * 0.28;
      if (/[.,:'"|-]/.test(char)) return total + size * 0.25;
      if (/[0-9$]/.test(char)) return total + size * 0.56;
      if (/[A-ZÁÉÍÓÚÜÑ]/.test(char)) return total + size * 0.64;
      return total + size * 0.50;
    }, 0);

    const textCentered = (value, centerX, yy, size = 10, color = "0.10 0.11 0.14", font = "F1") => {
      text(value, centerX - textWidth(value, size) / 2, yy, size, color, font);
    };

    const richText = (segments, x, yy, size = 10, color = "0.10 0.11 0.14", defaultFont = "F1") => {
      const commands = [`BT ${color} rg ${x} ${yy} Td`];
      segments.forEach((segment) => {
        const item = typeof segment === "string" ? { value: segment } : segment;
        commands.push(`/${item.font || defaultFont} ${item.size || size} Tf ${pdfLiteral(item.value)} Tj`);
      });
      commands.push("ET");
      content.push(commands.join(" "));
    };

    const textRotated = (value, x, yy, angleDegrees, size = 10, color = "0.10 0.11 0.14", font = "F1") => {
      const angle = angleDegrees * Math.PI / 180;
      const cos = Math.cos(angle).toFixed(4);
      const sin = Math.sin(angle).toFixed(4);
      content.push(`q /GS1 gs ${cos} ${sin} ${(-Math.sin(angle)).toFixed(4)} ${cos} ${x} ${yy} cm BT ${color} rg /${font} ${size} Tf 0 0 Td ${pdfLiteral(value)} Tj ET Q`);
    };

    const image = (name, x, y, width, height) => {
      content.push(`q ${width} 0 0 ${height} ${x} ${y} cm /${name} Do Q`);
    };

    const line = (x1, y1, x2, y2, color = "0.84 0.85 0.87", width = 0.8) => {
      content.push(`q ${color} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S Q`);
    };

    const rect = (x, y, width, height, radius = 0, fill = "0.96 0.96 0.98", stroke = "") => {
      if (radius) {
        content.push(`q ${fill} rg ${x + radius} ${y} m ${x + width - radius} ${y} l ${x + width} ${y} ${x + width} ${y + radius} v ${x + width} ${y + height - radius} l ${x + width} ${y + height} ${x + width - radius} ${y + height} v ${x + radius} ${y + height} l ${x} ${y + height} ${x} ${y + height - radius} v ${x} ${y + radius} l ${x} ${y} ${x + radius} ${y} v f Q`);
      } else if (stroke) {
        content.push(`q ${fill} rg ${stroke} RG 0.8 w ${x} ${y} ${width} ${height} re B Q`);
      } else {
        content.push(`q ${fill} rg ${x} ${y} ${width} ${height} re f Q`);
      }
    };

    const label = (value, x, y) => text(String(value).toUpperCase(), x, y, 7.5, "0.60 0.61 0.66", "F2");
    const labelCentered = (value, centerX, y) => textCentered(String(value).toUpperCase(), centerX, y, 7.5, "0.60 0.61 0.66", "F2");
    const money = (value) => CLP.format(value);

    image("Logo", left, 731, 160, 16.5);
    line(left + 184, 722, left + 184, 754, "0.78 0.80 0.84", 0.7);
    text(title, left + 200, subtitle ? 742 : 733, 18, "0.10 0.11 0.14", "F2");
    if (subtitle) {
      text(subtitle, left + 200, 720, 17, "0.62 0.63 0.68");
    }

    drawBody({ text, textCentered, richText, textRotated, line, rect, label, labelCentered, money });

    if (pageNumber === 1) {
      textRotated("REFERENCIAL", 150, 315, 30, 58, "0.73 0.74 0.80", "F2");
      textRotated("PRECIO SUJETO A CAMBIO", 252, 294, 30, 13, "0.73 0.74 0.80", "F2");
    }

    line(left, 28, right, 28, "0.88 0.89 0.91", 0.7);
    image("Logo", left, 15, 78, 8);
    line(left + 108, 11, left + 108, 23, "0.78 0.80 0.84", 0.6);
    text("COTIZACIÓN", left + 120, 15, 7.2, "0.40 0.42 0.48", "F2");
    text("CLP - IVA incl.", 320, 15, 7.2, "0.64 0.65 0.70");
    text(`Tesla (c) 2026 - ${pageNumber} / ${totalPages}`, 497, 15, 7.2, "0.64 0.65 0.70");

    pages.push(content.join("\n"));
  }

  createPage("Cotización", "", 1, ({ text, textCentered, textRotated, line, rect, label, labelCentered, money }) => {
    label("Cliente", left, 686);
    text(quote.client, left, 670, 12, "0.10 0.11 0.14", "F2");
    label("RUT", 318, 686);
    text(quote.rut, 318, 670, 12, "0.10 0.11 0.14", "F2");
    label("Fecha", left, 632);
    text(quote.date, left, 616, 12, "0.10 0.11 0.14", "F2");
    label("Mercado", 318, 632);
    text("Chile - CLP", 318, 616, 12, "0.10 0.11 0.14", "F2");

    label("Vehículo", left, 568);
    rect(left, 408, right - left, 132, 8, "0.96 0.96 0.98");
    text(`${vehicleTitle} 2026`, left + 22, 510, 15, "0.10 0.11 0.14", "F2");
    label("Autonomía (WLTP)", left + 22, 482);
    text(quote.autonomy, left + 22, 466, 11, "0.10 0.11 0.14", "F2");
    label("Tracción", left + 195, 482);
    wrapText(traction, 24).slice(0, 2).forEach((lineText, index) => text(lineText, left + 195, 466 - index * 13, 10.5, "0.10 0.11 0.14", "F2"));
    label("Asientos", left + 372, 482);
    text(quote.seats, left + 372, 466, 11, "0.10 0.11 0.14", "F2");
    line(left + 22, 448, right - 22, 448, "0.82 0.83 0.86");
    [quote.paint, quote.wheels, quote.interior].forEach((item, index) => {
      const widths = [110, 95, 115];
      const x = left + 22 + index * 126;
      rect(x, 424, widths[index], 18, 9, "1 1 1", "0.80 0.81 0.85");
      text(item, x + 8, 430, 8.2, "0.10 0.11 0.14", "F2");
    });

    label("Detalle", left, 372);
    label("Concepto", left, 346);
    const quantityCenterX = 337;
    const unitPriceCenterX = 419;
    const amountCenterX = 521;
    labelCentered("Cant.", quantityCenterX, 346);
    labelCentered("Precio unitario", unitPriceCenterX, 346);
    labelCentered("Importe", amountCenterX, 346);
    line(left, 338, right, 338, "0.80 0.81 0.84");

    const detailRows = [
      {
        concept: vehicleTitle,
        detail: `${traction} - ${quote.autonomy}`,
        qty: quote.quantity,
        unit: quote.basePrice,
        amount: quote.basePrice * quote.quantity
      }
    ];
    const optionConcept = (group, name) => {
      const cleanName = String(name || "");
      return cleanName.toLowerCase().startsWith(`${group.toLowerCase()} `) ? cleanName : `${group} ${cleanName}`;
    };

    [
      ["Color exterior", quote.paint, quote.paintPrice],
      ["Rines", quote.wheels, quote.wheelsPrice],
      ["Interior", quote.interior, quote.interiorPrice]
    ].forEach(([group, name, price]) => {
      if (price > 0) {
        detailRows.push({
          concept: optionConcept(group, name),
          detail: `${group} - opción`,
          qty: quote.quantity,
          unit: price,
          amount: price * quote.quantity
        });
      }
    });

    const compactDetailRows = detailRows.length > 3;
    const rowHeight = compactDetailRows ? 38 : 44;
    const conceptSize = compactDetailRows ? 8.7 : 9.8;
    const detailSize = compactDetailRows ? 7.8 : 8.6;
    const valueSize = compactDetailRows ? 9.1 : 10;
    const conceptGap = compactDetailRows ? 9.4 : 11;
    const detailGap = compactDetailRows ? 9 : 10;
    const textVisualOffset = (size) => size * 0.34;
    let rowTop = 338;

    detailRows.forEach((row) => {
      const conceptLines = wrapText(row.concept, compactDetailRows ? 42 : 34).slice(0, compactDetailRows ? 2 : 1);
      const detailLines = wrapText(row.detail, compactDetailRows ? 50 : 42).slice(0, compactDetailRows ? 1 : 2);
      const rowBottom = rowTop - rowHeight;
      const rowCenter = (rowTop + rowBottom) / 2;
      const lineGaps = [];
      for (let index = 1; index < conceptLines.length; index += 1) lineGaps.push(conceptGap);
      if (detailLines.length) lineGaps.push(conceptGap);
      for (let index = 1; index < detailLines.length; index += 1) lineGaps.push(detailGap);

      const totalTextGap = lineGaps.reduce((total, gap) => total + gap, 0);
      let textY = rowCenter - textVisualOffset(conceptSize) + totalTextGap / 2;

      conceptLines.forEach((lineText, index) => {
        text(lineText, left, textY, conceptSize, "0.10 0.11 0.14", "F2");
        textY -= index < conceptLines.length - 1 ? conceptGap : conceptGap;
      });
      detailLines.forEach((lineText, index) => {
        text(lineText, left, textY, detailSize, "0.36 0.37 0.42");
        textY -= index < detailLines.length - 1 ? detailGap : 0;
      });
      const valueY = rowCenter - textVisualOffset(valueSize);
      textCentered(row.qty, quantityCenterX, valueY, valueSize);
      textCentered(money(row.unit), unitPriceCenterX, valueY, valueSize);
      textCentered(money(row.amount), amountCenterX, valueY, valueSize);
      line(left, rowBottom, right, rowBottom, "0.88 0.89 0.91");
      rowTop = rowBottom;
    });

    label("Condiciones", left, 154);
    const conditions = [
      "Valores expresados en pesos chilenos (CLP) con IVA incluido.",
      "Libre de impuesto verde y de impuesto al lujo.",
      "Permiso de circulación no incluido.",
      "Unidad equipada con pisos de alfombra.",
      "Configuración y disponibilidad según catálogo de flota vigente."
    ];
    let conditionY = 132;
    conditions.forEach((condition) => {
      text("-", left, conditionY, 9, "0.24 0.25 0.29");
      wrapText(condition, 52).forEach((lineText, index) => text(lineText, left + 12, conditionY - index * 12, 8.4, "0.35 0.36 0.42"));
      conditionY -= wrapText(condition, 52).length > 1 ? 26 : 18;
    });

    const sumX = 318;
    const amountX = 494;
    text("Subtotal vehículo y opciones", sumX, 166, 9.4, "0.35 0.36 0.42");
    text(money(quote.subtotal), amountX, 166, 10, "0.10 0.11 0.14", "F2");
    text("Descuento", sumX, 144, 9.4, "0.35 0.36 0.42");
    text(`-${money(quote.totalDiscount)}`, amountX, 144, 10, "0.10 0.11 0.14", "F2");
    text("Costo de orden", sumX, 122, 9.4, "0.35 0.36 0.42");
    text(money(quote.orderFee), amountX, 122, 10, "0.10 0.11 0.14", "F2");
    text("Costo de inscripción", sumX, 100, 9.4, "0.35 0.36 0.42");
    text(money(quote.documentationFee), amountX, 100, 10, "0.10 0.11 0.14", "F2");
    line(sumX, 88, right, 88, "0.10 0.11 0.14", 0.8);
    text("TOTAL", sumX, 64, 12, "0.10 0.11 0.14", "F2");
    text(money(quote.grandTotal), 374, 62, 20, "0.10 0.11 0.14", "F2");
    text("CLP - IVA incl.", 510, 65, 8, "0.62 0.63 0.68", "F2");
    text("Precio referencial, no garantizado. Sujeto a cambio hasta la confirmación", sumX, 44, 7.2, "0.64 0.65 0.70");
    text("del pedido.", 500, 34, 7.2, "0.64 0.65 0.70");
  });

  createPage("Especificaciones", "", 2, ({ text, line, rect, label }) => {
    const specs = quote.specs || {};
    const spec = (key, fallback = "-") => specValue(specs, key, fallback);

    label("Vehículo cotizado", left, 684);
    wrapText(`${vehicleTitle} 2026`, 32).slice(0, 2).forEach((lineText, index) => {
      text(lineText, left, 662 - index * 24, 20, index === 0 ? "0.10 0.11 0.14" : "0.62 0.63 0.68", "F2");
    });
    const configText = `Configuración cotizada: ${quote.paint} · ${quote.wheels} · ${quote.interior}. Cifras referenciales según catálogo de configuración vigente.`;
    wrapText(configText, 54).slice(0, 4).forEach((lineText, index) => {
      text(lineText, left, 600 - index * 14, 9.5, "0.35 0.36 0.42");
    });

    const metricCards = [
      ["Autonomía", quote.autonomy.replace(" km", ""), "km · WLTP estimado"],
      ["Aceleración", quote.acceleration.replace(" s", ""), "segundos · 0-100 km/h"],
      ["Tracción", quote.traction.replace("Tracción ", ""), quote.tractionDetail],
      ["Capacidad", quote.seats.replace(" pasajeros", ""), "pasajeros"]
    ];
    const cardWidth = 104;
    metricCards.forEach(([titleText, valueText, detailText], index) => {
      const x = left + index * (cardWidth + 14);
      rect(x, 468, cardWidth, 88, 8, "0.95 0.95 0.97");
      label(titleText, x + 14, 529);
      wrapText(valueText, 13).slice(0, 2).forEach((lineText, lineIndex) => {
        text(lineText, x + 14, 506 - lineIndex * 16, 16, "0.10 0.11 0.14", "F2");
      });
      wrapText(detailText, 18).slice(0, 2).forEach((lineText, lineIndex) => {
        text(lineText, x + 14, 484 - lineIndex * 11, 8.3, "0.35 0.36 0.42");
      });
    });

    label("Dimensiones y peso", left, 422);
    const dimensionRows = [
      ["Peso", spec("Peso (masa en vacío)")],
      ["Asientos", quote.seats],
      ["Rines", quote.wheels],
      ["Longitud total", spec("Longitud total")],
      ["Altura total", spec("Altura total")],
      ["Ancho (con espejos)", extendedMirrorWidth(spec("Ancho total"))],
      ["Carga", spec("Carga")],
      ["Altura libre", spec("Altura libre sobre el suelo")]
    ];
    dimensionRows.forEach(([titleText, valueText], index) => {
      const col = index % 3;
      const row = Math.floor(index / 3);
      const x = [left, 235, 402][col];
      const y = 382 - row * 64;
      label(titleText, x, y);
      wrapText(valueText, col === 2 ? 28 : 23).slice(0, 3).forEach((lineText, lineIndex) => {
        text(lineText, x, y - 20 - lineIndex * 11, 9.2, "0.10 0.11 0.14", lineIndex === 0 ? "F2" : "F1");
      });
    });

  });

  createPage("Instrucciones de pago", "", 3, ({ text, richText, line }) => {
    text("Transferencia bancaria", left, 636, 12, "0.10 0.11 0.14", "F2");
    richText([
      "El saldo total se debe liquidar al menos ",
      { value: "5 días hábiles antes", font: "F2" },
      " de su entrega por medio de una"
    ], left, 614, 9.5, "0.35 0.36 0.42");
    [
      "transferencia a la cuenta indicada. De esta forma podremos confirmar el pago,",
      "preparar la documentación y gestionar todos los trámites",
      "requeridos para su entrega."
    ].forEach((lineText, index) => {
      text(lineText, left, 600 - index * 14, 9.5, "0.35 0.36 0.42");
    });

    const bankRows = [
      ["Nombre del banco", "Banco de Chile"],
      ["Beneficiario de la cuenta", "Tesla Chile SpA"],
      ["RUT", "76.701.598-4"],
      ["Número de cuenta", "113417056"]
    ];
    let bankY = 500;
    bankRows.forEach(([name, value]) => {
      text(name, left, bankY, 9.2, "0.35 0.36 0.42");
      text(value, left + 160, bankY, 9.2, "0.10 0.11 0.14", "F2");
      line(left, bankY - 11, 390, bankY - 11, "0.86 0.87 0.90");
      bankY -= 26;
    });

    text("Envío del comprobante", left, 368, 12, "0.10 0.11 0.14", "F2");
    text("Luego de realizar el pago mediante cheque o vale vista, se deberá enviar el", left, 342, 9.5, "0.35 0.36 0.42");
    richText([
      "comprobante al correo ",
      { value: "pagoschile@tesla.com", font: "F2" },
      ". Para facilitar la identificación del pago,"
    ], left, 328, 9.5, "0.35 0.36 0.42");
    richText([
      "el asunto del correo debe incluir el número de reserva, por ejemplo: ",
      { value: "RN123456789", font: "F2" },
      "."
    ], left, 314, 9.5, "0.35 0.36 0.42");
  });

  const pageCount = pages.length;
  const fontRegularObj = 3 + pageCount;
  const fontBoldObj = 4 + pageCount;
  const watermarkStateObj = 5 + pageCount;
  const logoObj = 6 + pageCount;
  const firstContentObj = 7 + pageCount;
  const logoBinary = atob(TESLA_WORDMARK_JPEG_BASE64);
  const pageRefs = pages.map((_, index) => `${3 + index} 0 R`).join(" ");
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pageRefs}] /Count ${pageCount} >>`
  ];

  pages.forEach((_, index) => {
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegularObj} 0 R /F2 ${fontBoldObj} 0 R >> /ExtGState << /GS1 ${watermarkStateObj} 0 R >> /XObject << /Logo ${logoObj} 0 R >> >> /Contents ${firstContentObj + index} 0 R >>`);
  });
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
  objects.push("<< /Type /ExtGState /ca 0.22 /CA 0.22 >>");
  objects.push(`<< /Type /XObject /Subtype /Image /Width ${TESLA_WORDMARK_WIDTH} /Height ${TESLA_WORDMARK_HEIGHT} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${logoBinary.length} >>\nstream\n${logoBinary}\nendstream`);
  pages.forEach((stream) => {
    objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
  });

  let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;

  const bytes = Uint8Array.from(pdf, (char) => char.charCodeAt(0) & 0xff);
  return new Blob([bytes], { type: "application/pdf" });
}

function downloadQuotePdf() {
  calculate();
  const quote = latestQuote;
  const blob = createPdfBlob(quote);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `cotizacion-tesla-${slugify(quote.client)}.pdf`;
  document.body.append(link);
  link.click();
  link.remove();
  saveStatus.textContent = `PDF generado: ${link.download}`;
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function init() {
  fillModels();
  fillVersions();
  fillSelect(fields.paint, options.paint);
  fillSelect(fields.interior, options.interior, 0);
  calculate();
}

fields.model.addEventListener("change", () => {
  fillVersions();
  calculate();
});

fields.version.addEventListener("change", () => {
  fillConfigurationOptions();
  calculate();
});

form.addEventListener("input", calculate);
form.addEventListener("change", calculate);

document.querySelector("#savePdf").addEventListener("click", () => {
  downloadQuotePdf();
});

init();

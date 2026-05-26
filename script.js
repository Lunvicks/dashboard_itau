const BLUE   = '#378ADD';
const TEAL   = '#1D9E75';
const AMBER  = '#BA7517';
const CORAL  = '#D85A30';
const PURPLE = '#7F77DD';
const GREEN  = '#63B322';
const PINK   = '#D4537E';

const txt  = 'rgba(255,255,255,0.55)';
const grid = 'rgba(255,255,255,0.07)';
const defFont = { family: 'Arial', size: 11 };
Chart.defaults.font = defFont;
Chart.defaults.color = txt;

const operadores = ['OP-01','OP-02','OP-03','OP-04','OP-05','OP-06'];
const acionOp    = [142, 118, 97, 83, 76, 61];

const canais = ['WhatsApp','Telefone','SMS','E-mail'];
const coresCanal = [TEAL, BLUE, AMBER, PURPLE];
const qtdCanal   = [218, 187, 112, 60];
const total = qtdCanal.reduce((a,b)=>a+b,0);

const resultados = ['Promessa de pagamento','Contato sem sucesso','Pagamento confirmado','Número inválido','Recusou negociação'];
const coresRes   = [TEAL, AMBER, GREEN, CORAL, PINK];
const qtdRes     = [194, 152, 112, 78, 41];

const datas      = ['01/05','05/05','08/05','12/05','15/05','19/05','22/05','26/05'];
const dadosAcion = [45, 52, 38, 64, 49, 58, 43, 55];
const dadosCan   = [28, 35, 22, 40, 30, 38, 27, 33];

new Chart(document.getElementById('chart-op'), {
  type: 'bar',
  data: { labels: operadores, datasets: [{ label: 'Acionamentos', data: acionOp, backgroundColor: BLUE, borderRadius: 4, borderSkipped: false }] },
  options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }}, scales: { x: { grid: { color: grid }}, y: { grid: { color: grid }, beginAtZero: true }}}
});

const legCanal = document.getElementById('leg-canal');
canais.forEach((c, i) => {
  const pct = Math.round(qtdCanal[i]/total*100);
  legCanal.innerHTML += `<span class="leg-item"><span class="leg-dot" style="background:${coresCanal[i]}"></span>${c} ${pct}%</span>`;
});

new Chart(document.getElementById('chart-canal'), {
  type: 'doughnut',
  data: { labels: canais, datasets: [{ data: qtdCanal, backgroundColor: coresCanal, borderWidth: 2, borderColor: '#16213e', hoverOffset: 6 }] },
  options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { display: false }, tooltip: { callbacks: { label: (i) => ` ${i.label}: ${i.raw} (${Math.round(i.raw/total*100)}%)` }}}}
});

new Chart(document.getElementById('chart-res'), {
  type: 'bar',
  data: { labels: resultados, datasets: [{ label: 'Acionamentos', data: qtdRes, backgroundColor: coresRes, borderRadius: 4, borderSkipped: false }] },
  options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }}, scales: { x: { grid: { color: grid }, beginAtZero: true }, y: { grid: { display: false }, ticks: { font: { family: 'Arial', size: 10 }}}}}
});

const legTempo = document.getElementById('leg-tempo');
legTempo.innerHTML = `<span class="leg-item"><span class="leg-dot" style="background:${BLUE}"></span>Acionamentos</span><span class="leg-item"><span class="leg-dot" style="background:${TEAL}"></span>Canais ativos</span>`;

new Chart(document.getElementById('chart-data'), {
  type: 'bar',
  data: { labels: datas, datasets: [{ label: 'Acionamentos', data: dadosAcion, backgroundColor: BLUE, borderRadius: 3, borderSkipped: false }, { label: 'Canais ativos', data: dadosCan, backgroundColor: TEAL, borderRadius: 3, borderSkipped: false }] },
  options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }}, scales: { x: { grid: { color: grid }, ticks: { autoSkip: false, maxRotation: 0 }}, y: { grid: { color: grid }, beginAtZero: true }}}
});
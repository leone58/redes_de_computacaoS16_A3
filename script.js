/* ============================================================
   Aula: Sub-redes & Gestão de Riscos
   ============================================================ */

/* ---------- Barra de progresso de scroll ---------- */
const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  scrollProgress.style.width = scrolled + "%";
});

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- Contadores do hero ---------- */
const counters = document.querySelectorAll(".meta-num");
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count, 10);
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 30));
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) {
        cur = target;
        clearInterval(t);
      }
      el.textContent = cur;
    }, 30);
    counterObserver.unobserve(el);
  });
});
counters.forEach((c) => counterObserver.observe(c));

/* ---------- Terminais animados (efeito de digitação) ---------- */
function colorize(line) {
  if (line.startsWith("$")) return `<span class="t-cmd">${line}</span>`;
  if (/\[ok\]|✔/.test(line)) return `<span class="t-ok">${line}</span>`;
  if (/CRITICO|CRÍTICO/i.test(line)) return `<span class="t-crit">${line}</span>`;
  if (/\[acao\]|\[scan\]|recomenda/i.test(line)) return `<span class="t-warn">${line}</span>`;
  return line;
}

function typeTerminal(el) {
  const lines = JSON.parse(el.dataset.lines);
  el.textContent = "";
  let li = 0;
  let ci = 0;
  let acc = "";

  function tick() {
    if (li >= lines.length) {
      el.innerHTML = acc + '<span class="cursor"></span>';
      return;
    }
    const line = lines[li];
    if (ci < line.length) {
      ci++;
      const partial = line.slice(0, ci);
      el.innerHTML =
        acc + colorize(partial) + '<span class="cursor"></span>';
      setTimeout(tick, line.startsWith("$") ? 28 : 12);
    } else {
      acc += colorize(line) + "\n";
      li++;
      ci = 0;
      setTimeout(tick, 220);
    }
  }
  tick();
}

const termObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        typeTerminal(e.target.querySelector(".terminal-body"));
        termObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.4 }
);
document.querySelectorAll(".terminal").forEach((t) => termObserver.observe(t));

/* ---------- Laboratório de sub-redes ---------- */
const cidrRange = document.getElementById("cidrRange");
const cidrValue = document.getElementById("cidrValue");
const hostsOut = document.getElementById("hostsOut");
const subnetsOut = document.getElementById("subnetsOut");

function updateCidr() {
  const cidr = parseInt(cidrRange.value, 10);
  const hostBits = 32 - cidr;
  const hosts = Math.pow(2, hostBits) - 2; // menos rede e broadcast
  const subnets = Math.pow(2, cidr - 24); // a partir de um /24
  cidrValue.textContent = "/" + cidr;
  hostsOut.textContent = hosts;
  subnetsOut.textContent = subnets;
}
cidrRange.addEventListener("input", updateCidr);
updateCidr();

/* ---------- Matriz de risco ---------- */
const matrixGrid = document.getElementById("matrixGrid");
const matrixOut = document.getElementById("matrixOut");
const probLabels = ["Baixa", "Média", "Alta"];
const impactLabels = ["Baixo", "Médio", "Alto"];
// nível 0-3 -> classe e texto
const levels = [
  { cls: "low", txt: "BAIXO" },
  { cls: "med", txt: "MÉDIO" },
  { cls: "high", txt: "ALTO" },
  { cls: "crit", txt: "CRÍTICO" },
];

// linha = impacto (Alto no topo), coluna = probabilidade
for (let imp = 2; imp >= 0; imp--) {
  for (let prob = 0; prob <= 2; prob++) {
    const score = imp + prob; // 0..4
    const level = levels[Math.min(3, score)];
    const cell = document.createElement("button");
    cell.className = "cell " + level.cls;
    cell.textContent = level.txt;
    cell.setAttribute("role", "gridcell");
    cell.addEventListener("click", () => {
      document.querySelectorAll(".cell").forEach((c) => c.classList.remove("sel"));
      cell.classList.add("sel");
      matrixOut.textContent = `Probabilidade ${probLabels[prob]} × Impacto ${impactLabels[imp]} = risco ${level.txt}.`;
    });
    matrixGrid.appendChild(cell);
  }
}

/* ============================================================
   QUIZ  — respostas curtas e de tamanho parecido
   ============================================================ */
const questions = [
  {
    q: "O que é um endereço IP?",
    options: [
      "A senha da rede",
      "O nome do provedor",
      "O identificador do aparelho",
      "A velocidade da internet",
    ],
    answer: 2,
    explain: "O IP identifica cada aparelho na rede, como um RG digital.",
  },
  {
    q: "Para que serve dividir uma rede em sub-redes?",
    options: [
      "Deixar tudo mais lento",
      "Organizar e isolar setores",
      "Aumentar a conta de luz",
      "Apagar os dados antigos",
    ],
    answer: 1,
    explain: "Sub-redes separam setores, melhorando controle, desempenho e segurança.",
  },
  {
    q: "No CIDR, o que significa o /24?",
    code: "Rede: 192.168.0.0/24",
    options: [
      "24 redes no total",
      "24 aparelhos no máximo",
      "24 bits para a rede",
      "24 horas de conexão",
    ],
    answer: 2,
    explain: "O /24 indica 24 bits fixos de rede, sobrando 254 endereços para hosts.",
  },
  {
    q: "Quantos aparelhos utilizáveis cabem em um /24?",
    options: ["128 hosts", "254 hosts", "512 hosts", "64 hosts"],
    answer: 1,
    explain: "Sobram 8 bits: 2^8 = 256, menos rede e broadcast = 254 hosts.",
  },
  {
    q: "Em segurança, o que é um 'ativo'?",
    options: [
      "Algo de valor a proteger",
      "Um tipo de vírus",
      "Uma falha do sistema",
      "Um ataque hacker",
    ],
    answer: 0,
    explain: "Ativo é tudo que tem valor: dados, sistemas, servidores, senhas.",
  },
  {
    q: "O que é uma 'ameaça'?",
    options: [
      "A senha do admin",
      "Algo que pode causar dano",
      "Um backup seguro",
      "Um cabo de rede",
    ],
    answer: 1,
    explain: "Ameaça é o que pode causar dano: hacker, vírus, incêndio, descuido.",
  },
  {
    q: "E o que é uma 'vulnerabilidade'?",
    options: [
      "Uma fraqueza explorável",
      "Um antivírus pago",
      "Uma rede rápida",
      "Um firewall ativo",
    ],
    answer: 0,
    explain: "Vulnerabilidade é a fraqueza que a ameaça aproveita, tipo senha fraca.",
  },
  {
    q: "Como se calcula o risco?",
    code: "risco = ? × ?",
    options: [
      "Preço × Tempo",
      "Rede × Senha",
      "Probabilidade × Impacto",
      "Ativo × Ameaça",
    ],
    answer: 2,
    explain: "Risco = Probabilidade × Impacto: chance de ocorrer vezes o estrago.",
  },
  {
    q: "Senha fraca em um sistema é um exemplo de:",
    options: [
      "Ativo valioso",
      "Vulnerabilidade",
      "Backup extra",
      "Boa prática",
    ],
    answer: 1,
    explain: "É uma vulnerabilidade: uma brecha que facilita o ataque.",
  },
  {
    q: "Qual é uma boa medida de mitigação de risco?",
    options: [
      "Anotar a senha na mesa",
      "Desligar o antivírus",
      "Usar backup e 2FA",
      "Compartilhar o login",
    ],
    answer: 2,
    explain: "Backup e autenticação em dois fatores (2FA) reduzem muito o risco.",
  },
];

const quizCard = document.getElementById("quizCard");
const quizResult = document.getElementById("quizResult");
const quizBar = document.getElementById("quizBar");
const quizCounter = document.getElementById("quizCounter");
const scoreNum = document.getElementById("scoreNum");
const scoreTitle = document.getElementById("scoreTitle");
const scoreMsg = document.getElementById("scoreMsg");
const scoreRing = document.getElementById("scoreRing");
const restartBtn = document.getElementById("restartBtn");

const KEYS = ["A", "B", "C", "D"];
let current = 0;
let score = 0;
let answered = false;

function renderQuestion() {
  answered = false;
  const item = questions[current];
  quizCounter.textContent = `${current + 1} / ${questions.length}`;
  quizBar.style.width = ((current + 1) / questions.length) * 100 + "%";

  let html = `<p class="quiz-q">${item.q}</p>`;
  if (item.code) html += `<div class="quiz-code">${item.code}</div>`;
  html += `<div class="quiz-options">`;
  item.options.forEach((opt, i) => {
    html += `<button class="opt" data-i="${i}">
      <span class="key">${KEYS[i]}</span><span>${opt}</span>
    </button>`;
  });
  html += `</div>`;
  html += `<div class="quiz-feedback hidden" id="feedback"></div>`;
  html += `<div class="quiz-next hidden" id="nextWrap">
      <button class="btn btn-primary" id="nextBtn">
        ${current === questions.length - 1 ? "Ver resultado" : "Próxima →"}
      </button>
    </div>`;
  quizCard.innerHTML = html;

  quizCard.querySelectorAll(".opt").forEach((btn) => {
    btn.addEventListener("click", () => selectOption(btn));
  });
}

function selectOption(btn) {
  if (answered) return;
  answered = true;
  const item = questions[current];
  const chosen = parseInt(btn.dataset.i, 10);
  const opts = quizCard.querySelectorAll(".opt");

  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === item.answer) o.classList.add("correct");
    if (i === chosen && chosen !== item.answer) o.classList.add("wrong");
  });

  if (chosen === item.answer) score++;

  const fb = document.getElementById("feedback");
  fb.classList.remove("hidden");
  fb.innerHTML =
    (chosen === item.answer ? "✅ <strong>Certo!</strong> " : "❌ <strong>Quase!</strong> ") +
    item.explain;

  document.getElementById("nextWrap").classList.remove("hidden");
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizCard.classList.add("hidden");
  quizResult.classList.remove("hidden");
  const pct = Math.round((score / questions.length) * 100);

  // anima o número e o anel
  let cur = 0;
  const t = setInterval(() => {
    if (cur >= score) {
      clearInterval(t);
    } else {
      cur++;
      scoreNum.textContent = cur;
    }
  }, 120);

  scoreRing.style.background = `conic-gradient(var(--primary) ${pct * 3.6}deg, var(--surface-2) 0deg)`;

  let title, msg;
  if (pct === 100) {
    title = "Perfeito! 🏆";
    msg = "Gabaritou! Você mandou muito bem nos dois temas. Parabéns!";
  } else if (pct >= 70) {
    title = "Mandou bem! 🚀";
    msg = "Ótimo desempenho. Revise os pontos que errou e fica craque de vez.";
  } else if (pct >= 40) {
    title = "Tá no caminho! 💪";
    msg = "Você já pegou boa parte. Bora revisar os conceitos e tentar de novo.";
  } else {
    title = "Bora revisar! 📚";
    msg = "Sem estresse: volte às seções acima e refaça o quiz. Você consegue!";
  }
  scoreTitle.textContent = title;
  scoreMsg.textContent = msg;
}

restartBtn.addEventListener("click", () => {
  current = 0;
  score = 0;
  scoreNum.textContent = "0";
  quizResult.classList.add("hidden");
  quizCard.classList.remove("hidden");
  renderQuestion();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
});

renderQuestion();

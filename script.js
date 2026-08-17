/* ============================================================
   AULA DE KOTLIN — LÓGICA DA PÁGINA
   Sem dependências. HTML/CSS/JS puros.
============================================================ */

/* ---------- Utilitário para colorir código Kotlin ----------
   Faz uma ÚNICA passada com um regex combinado para não
   reprocessar o HTML que já foi inserido (evita bug de aspas). */
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlightKotlin(code) {
  const keywords = /^(fun|val|var|if|else|when|for|while|return|in|is|null|true|false|class|object|data)$/;
  const funcs = /^(println|print|main|readLine|listOf|mapOf)$/;

  // Ordem importa: comentário, string, número, palavra.
  const token = /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/g;

  let result = "";
  let lastIndex = 0;
  let m;
  while ((m = token.exec(code)) !== null) {
    // texto normal antes do token
    result += escapeHtml(code.slice(lastIndex, m.index));
    lastIndex = token.lastIndex;

    if (m[1] !== undefined) {
      result += '<span class="k-com">' + escapeHtml(m[1]) + "</span>";
    } else if (m[2] !== undefined) {
      result += '<span class="k-str">' + escapeHtml(m[2]) + "</span>";
    } else if (m[3] !== undefined) {
      result += '<span class="k-num">' + escapeHtml(m[3]) + "</span>";
    } else {
      const word = m[4];
      if (keywords.test(word)) {
        result += '<span class="k-key">' + word + "</span>";
      } else if (funcs.test(word)) {
        result += '<span class="k-fn">' + word + "</span>";
      } else {
        result += escapeHtml(word);
      }
    }
  }
  result += escapeHtml(code.slice(lastIndex));
  return result;
}

/* ============================================================
   1) CARDS DE CONCEITOS
============================================================ */
const conceitos = [
  {
    badge: "val",
    titulo: "Variáveis: val e var",
    texto: "val é imutável (não muda). var é mutável (pode mudar). Kotlin descobre o tipo sozinho.",
    codigo: `val nome = "Ana"   // não pode mudar
var idade = 20     // pode mudar
idade = 21`,
  },
  {
    badge: "Aa",
    titulo: "Tipos de dados",
    texto: "Os tipos mais usados: Int (inteiro), Double (decimal), String (texto) e Boolean (true/false).",
    codigo: `val pontos: Int = 100
val preco: Double = 9.90
val ativo: Boolean = true`,
  },
  {
    badge: "fn",
    titulo: "Funções",
    texto: "Criadas com fun. Podem receber parâmetros e devolver um valor com um tipo de retorno.",
    codigo: `fun somar(a: Int, b: Int): Int {
    return a + b
}
println(somar(2, 3))  // 5`,
  },
  {
    badge: "if",
    titulo: "Condições (if / else)",
    texto: "Executa um bloco ou outro dependendo de uma condição verdadeira ou falsa.",
    codigo: `val nota = 7
if (nota >= 6) {
    println("Aprovado")
} else {
    println("Reprovado")
}`,
  },
  {
    badge: "wh",
    titulo: "when (o switch do Kotlin)",
    texto: "Compara um valor com vários casos. Mais limpo do que muitos if/else encadeados.",
    codigo: `val dia = 3
when (dia) {
    1 -> println("Domingo")
    3 -> println("Terça")
    else -> println("Outro dia")
}`,
  },
  {
    badge: "for",
    titulo: "Laços (for / while)",
    texto: "Repetem um bloco. for percorre um intervalo; while repete enquanto a condição for true.",
    codigo: `for (i in 1..3) {
    println("Volta \$i")
}`,
  },
];

function renderConceitos() {
  const box = document.getElementById("conceitosCards");
  box.innerHTML = conceitos
    .map(
      (c) => `
    <article class="card">
      <div class="card-badge">${c.badge}</div>
      <h3>${c.titulo}</h3>
      <p>${c.texto}</p>
      <pre><code>${highlightKotlin(c.codigo)}</code></pre>
    </article>`
    )
    .join("");
}

/* ============================================================
   2) CONSOLES INTERATIVOS (Kotlin)
   Cada um mostra a "saída" simulada ao clicar em Rodar.
============================================================ */
const consoles = [
  {
    titulo: "Main.kt — Olá, mundo",
    desc: "O primeiro programa: a função main() é onde tudo começa.",
    codigo: `fun main() {
    val nome = "turma"
    println("Olá, \$nome!")
}`,
    saida: "Olá, turma!",
  },
  {
    titulo: "Calculo.kt — Somando valores",
    desc: "Uma função que soma dois números e imprime o resultado.",
    codigo: `fun somar(a: Int, b: Int): Int {
    return a + b
}

fun main() {
    val total = somar(7, 5)
    println("Total: \$total")
}`,
    saida: "Total: 12",
  },
  {
    titulo: "Nota.kt — Condição if/else",
    desc: "Verifica se o aluno passou de acordo com a nota.",
    codigo: `fun main() {
    val nota = 8
    if (nota >= 6) {
        println("Aprovado com \$nota")
    } else {
        println("Reprovado")
    }
}`,
    saida: "Aprovado com 8",
  },
  {
    titulo: "Repeticao.kt — Laço for",
    desc: "Repete uma mensagem usando um intervalo de 1 até 3.",
    codigo: `fun main() {
    for (i in 1..3) {
        println("Contando: \$i")
    }
}`,
    saida: "Contando: 1\nContando: 2\nContando: 3",
  },
];

function renderConsoles() {
  const box = document.getElementById("consoles");
  box.innerHTML = consoles
    .map(
      (c, i) => `
    <div>
      <p class="console-title">${c.titulo}</p>
      <p class="console-desc">${c.desc}</p>
      <div class="console-box">
        <div class="term-bar">
          <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
          <span class="term-title">${c.titulo}</span>
        </div>
        <pre class="console-body"><code>${highlightKotlin(c.codigo)}</code></pre>
        <div class="console-actions">
          <button class="btn btn-primary" data-run="${i}">▶ Rodar</button>
        </div>
        <div class="console-output" id="out-${i}"></div>
      </div>
    </div>`
    )
    .join("");

  box.querySelectorAll("[data-run]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = btn.getAttribute("data-run");
      const out = document.getElementById("out-" + i);
      out.innerHTML =
        '<span class="out-label">Saída do console</span>' +
        consoles[i].saida.replace(/</g, "&lt;");
      out.classList.add("show");
    });
  });
}

/* ============================================================
   3) QUIZ
   Respostas embaralhadas: a correta NÃO é sempre a maior
   nem fica sempre na mesma posição.
============================================================ */
const perguntas = [
  {
    q: 'Qual palavra-chave cria uma variável que <strong>não pode</strong> ser alterada?',
    opcoes: ["var", "val", "let", "const"],
    correta: 1,
    exp: "val cria valores imutáveis. var seria mutável.",
  },
  {
    q: "Como se chama a função onde o programa Kotlin começa a rodar?",
    opcoes: ["start()", "init()", "main()", "run()"],
    correta: 2,
    exp: "Todo programa começa pela função main().",
  },
  {
    q: 'O que <code>println("Oi")</code> faz?',
    opcoes: [
      "Lê um texto do usuário",
      "Imprime Oi no console",
      "Apaga a variável",
      "Cria uma função",
    ],
    correta: 1,
    exp: "println imprime o texto e pula uma linha.",
  },
  {
    q: "Qual tipo é usado para números decimais?",
    opcoes: ["Double", "Int", "Text", "Bool"],
    correta: 0,
    exp: "Double guarda decimais. Int é só inteiro.",
  },
  {
    q: "Qual palavra-chave declara uma função em Kotlin?",
    opcoes: ["func", "def", "fun", "function"],
    correta: 2,
    exp: "Em Kotlin a palavra é fun.",
  },
  {
    q: "Qual estrutura substitui vários if/else para comparar um valor?",
    opcoes: ["loop", "when", "case", "switch"],
    correta: 1,
    exp: "when compara um valor com vários casos.",
  },
  {
    q: 'Quantas vezes o laço <code>for (i in 1..3)</code> repete?',
    opcoes: ["2 vezes", "4 vezes", "3 vezes", "1 vez"],
    correta: 2,
    exp: "1..3 inclui 1, 2 e 3 — ou seja, 3 vezes.",
  },
  {
    q: "Qual tipo guarda apenas true ou false?",
    opcoes: ["Flag", "Boolean", "Bit", "Switch"],
    correta: 1,
    exp: "Boolean só aceita true ou false.",
  },
];

let atual = 0;
let acertos = 0;
let respondida = false;

const elQuestion = document.getElementById("quizQuestion");
const elOptions = document.getElementById("quizOptions");
const elFeedback = document.getElementById("quizFeedback");
const elCounter = document.getElementById("quizCounter");
const elScore = document.getElementById("quizScore");
const elNext = document.getElementById("quizNext");
const elCard = document.getElementById("quizCard");
const elResult = document.getElementById("quizResult");
const elResultScore = document.getElementById("resultScore");
const elResultMsg = document.getElementById("resultMsg");
const elRestart = document.getElementById("quizRestart");

function renderPergunta() {
  respondida = false;
  const p = perguntas[atual];
  elCounter.textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;
  elScore.textContent = `Acertos: ${acertos}`;
  elQuestion.innerHTML = p.q;
  elFeedback.textContent = "";
  elFeedback.className = "quiz-feedback";
  elNext.disabled = true;

  elOptions.innerHTML = "";
  p.opcoes.forEach((op, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.innerHTML = op;
    btn.addEventListener("click", () => escolher(idx, btn));
    elOptions.appendChild(btn);
  });
}

function escolher(idx, btn) {
  if (respondida) return;
  respondida = true;
  const p = perguntas[atual];
  const botoes = elOptions.querySelectorAll(".quiz-opt");
  botoes.forEach((b) => (b.disabled = true));

  if (idx === p.correta) {
    acertos++;
    btn.classList.add("correct");
    elFeedback.textContent = "Correto! " + p.exp;
    elFeedback.className = "quiz-feedback ok";
  } else {
    btn.classList.add("wrong");
    botoes[p.correta].classList.add("correct");
    elFeedback.textContent = "Quase! " + p.exp;
    elFeedback.className = "quiz-feedback no";
  }

  elScore.textContent = `Acertos: ${acertos}`;
  elNext.disabled = false;
  elNext.textContent = atual === perguntas.length - 1 ? "Ver resultado" : "Próxima";
}

elNext.addEventListener("click", () => {
  if (atual < perguntas.length - 1) {
    atual++;
    renderPergunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  elCard.hidden = true;
  elResult.hidden = false;
  elResultScore.textContent = `${acertos} / ${perguntas.length}`;

  const pct = acertos / perguntas.length;
  let msg;
  if (pct === 1) msg = "Perfeito! Você mandou muito bem em Kotlin. 🎉";
  else if (pct >= 0.6) msg = "Muito bom! Você entendeu os principais conceitos.";
  else msg = "Vamos revisar juntos os conceitos e tentar de novo!";
  elResultMsg.textContent = msg;
}

elRestart.addEventListener("click", () => {
  atual = 0;
  acertos = 0;
  elResult.hidden = true;
  elCard.hidden = false;
  renderPergunta();
});

/* ============================================================
   4) BARRA DE PROGRESSO DE ROLAGEM
============================================================ */
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progressBar.style.width = scrolled + "%";
});

/* ---------- Inicialização ---------- */
renderConceitos();
renderConsoles();
renderPergunta();

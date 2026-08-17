# 🎓 Roteiro da Aula — Sub-redes & Gestão de Riscos de Segurança da Informação

> **Duração:** 150 minutos
> **Temas:** (1) Planejamento de sub-redes de uma empresa · (2) Gestão de riscos de segurança da informação
> **Como usar este site:** vá rolando a página junto com os alunos. Cada seção tem um "console" que digita sozinho (ótimo para prender a atenção) e no final tem o **Quiz Relâmpago**.

---

## 📌 Antes de começar (leia isto!)

Este roteiro é o seu **"colinha" falado**. Está tudo escrito do jeitinho que você pode falar em voz alta. Você **não precisa saber tudo de cor** — é só ir lendo, mostrando a tela e fazendo as perguntas que estão marcadas com ❓.

Sempre que aparecer:
- 🗣️ = fala sugerida (pode ler quase igual)
- 👉 = ação na tela (o que clicar/mostrar)
- ❓ = pergunta para jogar para a turma
- ⏱️ = tempo aproximado

---

## ⏱️ Divisão do tempo (150 min)

| Bloco | Tempo | O que acontece |
|------|-------|----------------|
| 1. Abertura | 10 min | Boas-vindas e o que vamos aprender |
| 2. Sub-redes | 45 min | Explicação + console + laboratório do CIDR |
| 3. Intervalo/respiro | 10 min | Pausa rápida |
| 4. Gestão de Riscos | 45 min | Ativos, ameaças, vulnerabilidades + matriz |
| 5. Quiz Relâmpago | 30 min | Turma responde junto |
| 6. Fechamento | 10 min | Resumo e dúvidas |

---

## 🟦 BLOCO 1 — Abertura (10 min)

👉 Deixe a tela na **primeira parte do site** (o título grande).

🗣️ "Bom dia, pessoal! Tudo certo? Hoje a nossa aula é sobre dois assuntos que estão super ligados no mundo real: como a gente **organiza uma rede de computadores** e como a gente **protege as informações** de uma empresa."

🗣️ "Vou usar este site aqui na tela para a gente ir vendo tudo de um jeito mais visual. Tem uns 'terminais' que aparecem digitando sozinho, tem um laboratório para vocês verem os números mudando, e no final tem um **quiz** que a gente vai responder junto — então prestem atenção que vale ponto de orgulho, hein! 😄"

❓ "Antes de começar: quem aqui já ouviu falar em 'endereço IP'? E em 'hacker' ou 'vírus'? Levanta a mão." *(deixe 2-3 alunos falarem — isso quebra o gelo)*

🗣️ "Perfeito. Guardem essas ideias porque a gente vai voltar nelas."

---

## 🟦 BLOCO 2 — Sub-redes (45 min)

### Parte A — A ideia principal (10 min)

👉 Role até a seção **"O que são Sub-redes?"**.

🗣️ "Imaginem um prédio gigante, mas que tem uma sala só, sem paredes. Todo mundo junto: o RH, as vendas, a diretoria, os visitantes... Uma bagunça, né? Se der um problema num canto, atrapalha todo mundo."

🗣️ "Uma **sub-rede** é exatamente a ideia de dividir esse prédio em **andares e salas**. Cada setor tem o seu espaço. Isso deixa tudo mais organizado, mais rápido e, principalmente, mais seguro."

❓ "Por que vocês acham que separar o setor de visitantes do setor da diretoria é uma boa ideia de segurança?" *(resposta esperada: para o visitante não acessar coisas importantes)*

### Parte B — Os 4 conceitos (10 min)

👉 Mostre os 4 cartõezinhos (Endereço IP, Máscara/CIDR, Por que dividir, Vantagens).

🗣️ "Vamos por partes. Cada aparelho na rede tem um **endereço IP** — pensem nele como o **RG do aparelho**. Ninguém tem o mesmo. Ele parece com isso: `192.168.0.10`."

🗣️ "A **máscara de sub-rede** (ou o número depois da barra, o tal do **CIDR**) é o que decide **quanto da rede é fixo e quanto sobra para os aparelhos**. Um `/24`, por exemplo, deixa espaço para 254 aparelhos."

💡 *Dica para você:* não precisa se aprofundar em binário. Basta a ideia: **quanto maior o número depois da barra (/25, /26...), menos aparelhos cabem, mas você cria mais sub-redes.**

### Parte C — O console ao vivo (10 min)

👉 Role até o **terminal "planejamento de sub-redes"**. Ele começa a digitar sozinho quando aparece na tela.

🗣️ "Olhem só. Aqui é como se fosse a tela de um técnico de redes. Primeiro ele consulta o IP da máquina. Depois ele roda um comando que **divide uma rede em 4 setores**: RH, Vendas, TI e Visitas. Reparem que cada setor ganhou o seu próprio 'pedaço' da rede, isolado dos outros."

❓ "Se o setor de Visitas for infectado por um vírus, ele consegue chegar fácil no setor da TI?" *(resposta: não, porque estão isolados em sub-redes diferentes)*

### Parte D — Laboratório do CIDR (15 min)

👉 Role até **"Laboratório rápido: quantos aparelhos cabem?"** e arraste a barrinha.

🗣️ "Agora é experiência ao vivo. Quando eu arrasto essa barra, eu mudo o CIDR. Olhem o número de aparelhos mudando."

👉 Arraste para `/24` → 254 aparelhos. Depois `/26` → 62 aparelhos. Depois `/30` → 2 aparelhos.

🗣️ "Percebam a lógica: quanto **maior** o número (/30), **menos** aparelhos cabem, mas eu consigo fatiar em **mais** sub-redes. É uma troca: mais divisões = pedaços menores."

❓ "Se uma empresa tem 4 setores pequenos, é melhor usar /24 (um bloco grande) ou /26 (quatro blocos menores)? Por quê?" *(resposta: /26, para dar um pedaço isolado a cada setor)*

---

## ☕ BLOCO 3 — Respiro rápido (10 min)

🗣️ "Vamos dar uma esticada de 10 minutinhos. Quando voltarmos, mudamos de assunto: em vez de organizar a rede, a gente vai **proteger** a informação dela."

---

## 🟥 BLOCO 4 — Gestão de Riscos (45 min)

### Parte A — As 3 perguntas-chave (10 min)

👉 Role até **"Gestão de Riscos de Segurança"** e mostre os três blocos: **Ativo → Ameaça → Vulnerabilidade**.

🗣️ "Segurança da informação, no fundo, responde 3 perguntas simples:"

1. 🗣️ "**O que eu quero proteger?** Isso é o **ATIVO**. É tudo que tem valor: os dados dos clientes, o sistema, um servidor, até uma senha."
2. 🗣️ "**Do que eu preciso proteger?** Isso é a **AMEAÇA**. É o que pode causar dano: um hacker, um vírus, um incêndio, ou até um funcionário desatento."
3. 🗣️ "**Onde eu estou fraco?** Isso é a **VULNERABILIDADE**. É a brecha que a ameaça aproveita: uma senha fraca, um programa sem atualização."

❓ "Vamos treinar: o Wi-Fi da empresa sem senha é uma ameaça ou uma vulnerabilidade?" *(resposta: vulnerabilidade — é a brecha)*

❓ "E um ladrão querendo roubar dados, é o quê?" *(resposta: ameaça)*

### Parte B — A fórmula do risco (10 min)

👉 Mostre a fórmula grande: **Risco = Probabilidade × Impacto**.

🗣️ "Aqui está o coração da aula de hoje. O **risco** não é só 'o que pode dar errado'. Ele é a combinação de **duas coisas**: qual a **chance** de acontecer (probabilidade) e o **tamanho do estrago** se acontecer (impacto)."

🗣️ "Exemplo: cair um raio no servidor tem impacto altíssimo, mas probabilidade baixa. Já um funcionário clicar num e-mail falso tem probabilidade alta. Os dois são riscos, mas a gente trata cada um de um jeito."

### Parte C — Console de análise de risco (10 min)

👉 Role até o **terminal "análise de riscos"** e deixe ele digitar.

🗣️ "Olhem esse 'robô' analisando uma loja. Ele achou um ativo valioso (o banco de dados de clientes), uma ameaça (ransomware, aquele vírus que sequestra dados) e uma vulnerabilidade (o backup estava desatualizado)."

🗣️ "No final ele calcula: risco **CRÍTICO**. E ainda sugere o que fazer: backup diário, senha forte e 2FA. Isso se chama **mitigação** — reduzir o risco."

❓ "O que vocês acham que é '2FA'?" *(deixe adivinharem; resposta: autenticação em dois fatores, tipo o código que chega no celular)*

### Parte D — Matriz de risco (15 min)

👉 Role até **"Matriz de risco"** e vá clicando nas células.

🗣️ "Essa tabela colorida é uma ferramenta que empresas de verdade usam. Ela cruza a **probabilidade** (embaixo) com o **impacto** (do lado)."

👉 Clique numa célula verde, depois numa vermelha.

🗣️ "Verde é risco baixo, pode esperar. Vermelho é crítico, tem que resolver **agora**. É assim que a empresa decide o que fazer primeiro: começa sempre pelos vermelhos."

❓ "Um sistema que quase nunca falha, mas se falhar para a empresa inteira: que cor vocês acham que ele fica?" *(resposta: laranja/vermelho — impacto alto)*

---

## 🟩 BLOCO 5 — Quiz Relâmpago (30 min)

👉 Role até a seção **Quiz** (ou clique em "Quiz" no menu de cima).

🗣️ "Chegou a hora da verdade! São 10 perguntas rápidas. Vamos fazer juntos: eu leio a pergunta, vocês gritam a letra, e a gente clica para ver se acertou. A cada resposta aparece uma explicaçãozinha."

**Como conduzir:**
- Leia a pergunta em voz alta.
- Peça para a turma votar (levantar a mão em A, B, C ou D).
- Clique na opção mais votada.
- Leia a explicação que aparece.
- Clique em **"Próxima"**.

🗣️ *(No final, quando aparecer a pontuação:)* "Olha nossa nota! Isso mostra que vocês entenderam bem. Quem quiser treinar de novo em casa, é só clicar em 'Refazer o quiz'."

💡 *Dica:* se sobrar tempo, refaça o quiz trocando quem escolhe a resposta.

---

## 🟪 BLOCO 6 — Fechamento (10 min)

🗣️ "Para fechar, o que a gente viu hoje?"

1. 🗣️ "**Sub-redes** = dividir a rede em setores para organizar e proteger. O CIDD (o número depois da barra) diz o tamanho de cada pedaço."
2. 🗣️ "**Gestão de riscos** = proteger os ativos, entendendo as ameaças e as vulnerabilidades. E o risco é sempre **probabilidade × impacto**."

❓ "Alguma dúvida? Alguma parte que ficou confusa?" *(abra para perguntas)*

🗣️ "Valeu, pessoal! Foi ótimo. Bons estudos e até a próxima! 👊"

---

## 🧠 Glossário rápido (caso um aluno pergunte)

| Termo | Explicação simples |
|-------|--------------------|
| **IP** | O "RG" de cada aparelho na rede. |
| **Sub-rede** | Um pedaço menor da rede, tipo uma sala do prédio. |
| **CIDR (/24, /26...)** | Número que diz o tamanho da sub-rede. Maior = menor. |
| **Ativo** | Algo de valor que se quer proteger. |
| **Ameaça** | Algo que pode causar dano. |
| **Vulnerabilidade** | A fraqueza que a ameaça aproveita. |
| **Risco** | Probabilidade × Impacto. |
| **Mitigação** | Ações para reduzir o risco (backup, 2FA, senha forte). |
| **2FA** | Autenticação em dois fatores (senha + código no celular). |
| **Ransomware** | Vírus que "sequestra" os dados e pede resgate. |

---

## 🛠️ Como rodar este site

É um site puro em **HTML, CSS e JavaScript** — não precisa de nada instalado além de um navegador.

- **Modo simples:** abra o arquivo `index.html` clicando duas vezes nele.
- **Com servidor local** (opcional): `npx serve .` e acesse o endereço que aparecer.

Arquivos:
- `index.html` → estrutura da página
- `styles.css` → visual (tema escuro estilo terminal)
- `script.js` → animações, laboratórios e o quiz

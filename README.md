# Roteiro da Aula de Kotlin (150 minutos)

> Este README é o **seu roteiro de professor**. Aqui está tudo o que você vai falar,
> o que vai explicar de cada conceito de Kotlin, o que perguntar para os alunos e o
> gabarito do quiz. Você **não precisa saber Kotlin de cor** — é só seguir a ordem
> abaixo. As falas em _itálico_ são sugestões do que dizer em voz alta.

---

## Como abrir o site

1. Baixe o projeto (botão de três pontinhos → **Download ZIP**).
2. Abra o arquivo `index.html` no navegador (duplo clique já funciona).
3. Deixe projetado para a turma enquanto você segue este roteiro.

O site tem 3 partes: **Conceitos**, **Console de código** e **Quiz**.

---

## Divisão do tempo (150 minutos)

| Bloco | Tempo | O que fazer |
|-------|-------|-------------|
| 1. Abertura e o que é Kotlin | 15 min | Falar, mostrar o hero do site |
| 2. Variáveis e tipos | 25 min | Explicar cards `val` e "Tipos de dados" |
| 3. Funções | 25 min | Explicar card "Funções" |
| 4. Condições e `when` | 25 min | Explicar cards `if` e `when` |
| 5. Laços (`for`/`while`) | 20 min | Explicar card "Laços" |
| 6. Console de código ao vivo | 20 min | Rodar os exemplos no site |
| 7. Quiz | 15 min | Fazer o quiz com a turma |
| 8. Fechamento | 5 min | Resumo e dúvidas |

---

## BLOCO 1 — Abertura (15 min)

**O que falar:**

> _"Bom dia, pessoal! Hoje a gente vai aprender uma linguagem de programação chamada
> **Kotlin**. Ela é muito usada para criar aplicativos de celular Android, mas também
> serve para vários outros tipos de programa. A boa notícia é que ela é considerada
> uma das linguagens mais fáceis e organizadas de ler. No final da aula vocês vão
> conseguir entender e até escrever seus primeiros programinhas em Kotlin."_

**Pergunte para a turma (para engajar):**
- _"Alguém aqui já ouviu falar em Kotlin ou já mexeu com programação?"_
- _"Vocês sabem o que é um aplicativo? Pois é, muitos deles são feitos com Kotlin."_

**Mostre no site:** o topo (hero) com o código:
```kotlin
fun main() {
    println("Bom dia, turma! Bem-vindos ao Kotlin")
}
```
> _"Esse aqui é o menor programa que existe em Kotlin. Ele só escreve uma frase na
> tela. Ao longo da aula a gente vai entender cada pedacinho dele."_

---

## BLOCO 2 — Variáveis e Tipos (25 min)

### O que é uma variável?

> _"Uma variável é como uma **caixinha com nome** onde a gente guarda uma informação.
> Por exemplo, uma caixinha chamada `idade` que guarda o número 20."_

### `val` e `var` (card do site: "Variáveis: val e var")

Explique a diferença **com esta comparação simples:**
- **`val`** = caixinha **trancada**. Depois que você guarda, **não muda mais**. (val vem de *value*, valor.)
- **`var`** = caixinha **destrancada**. Você **pode trocar** o que está dentro. (var vem de *variable*, variável.)

```kotlin
val nome = "Ana"   // não pode mudar
var idade = 20     // pode mudar
idade = 21         // ok, porque é var
```

**Pergunte:**
- _"Se eu tentar mudar o `nome`, que é `val`, o que vocês acham que acontece?"_
  (Resposta: dá **erro**, porque `val` não pode ser alterado.)

### Tipos de dados (card do site: "Tipos de dados")

> _"Cada caixinha guarda um tipo de coisa. Os principais são:"_

| Tipo | Guarda | Exemplo |
|------|--------|---------|
| `Int` | número inteiro | `100`, `-5`, `42` |
| `Double` | número com vírgula (decimal) | `9.90`, `3.14` |
| `String` | texto | `"Olá"`, `"Kotlin"` |
| `Boolean` | verdadeiro ou falso | `true`, `false` |

```kotlin
val pontos: Int = 100
val preco: Double = 9.90
val ativo: Boolean = true
```

> _"Repararam nos `: Int`, `: Double`? Isso diz para o Kotlin qual é o tipo da caixinha.
> Mas o legal é que muitas vezes o Kotlin **adivinha sozinho** o tipo, então nem
> precisamos escrever."_

**Pergunte:**
- _"O preço de um produto, tipo R\$ 9,90, seria Int ou Double?"_ (Resposta: **Double**, porque tem vírgula.)

---

## BLOCO 3 — Funções (25 min)

### O que é uma função?

> _"Uma função é uma **receita**: um conjunto de passos que a gente dá um nome e pode
> usar quantas vezes quiser. Assim não precisamos repetir código."_

### Como criar (card do site: "Funções")

Explique cada parte:
```kotlin
fun somar(a: Int, b: Int): Int {
    return a + b
}
println(somar(2, 3))  // 5
```

- **`fun`** → palavra que diz "estou criando uma função".
- **`somar`** → o nome que demos à função.
- **`(a: Int, b: Int)`** → os **parâmetros**: informações que a função recebe.
- **`: Int`** → o **tipo de retorno**: a função vai devolver um número inteiro.
- **`return a + b`** → **devolve** o resultado da soma.
- **`somar(2, 3)`** → aqui a gente **chama/usa** a função com os valores 2 e 3.

> _"É como pedir uma receita: eu dou os ingredientes (2 e 3) e ela me devolve o
> bolo pronto (5)."_

**Pergunte:**
- _"Se eu chamar `somar(10, 5)`, o que vai aparecer?"_ (Resposta: **15**.)
- _"Para que serve a palavra `return`?"_ (Resposta: para **devolver** o resultado.)

### `println` — imprimir na tela

> _"`println` é o comando que **escreve** algo no console (a tela de texto). O `ln`
> no final significa que ele pula uma linha depois de escrever."_

---

## BLOCO 4 — Condições e `when` (25 min)

### `if / else` (card do site: "Condições")

> _"O `if` (que significa 'se') faz o programa **tomar decisões**. Se algo for
> verdade, faz uma coisa; senão (`else`), faz outra."_

```kotlin
val nota = 7
if (nota >= 6) {
    println("Aprovado")
} else {
    println("Reprovado")
}
```

- **`if (nota >= 6)`** → "se a nota for maior ou igual a 6".
- **`else`** → "senão" (todos os outros casos).

**Pergunte:**
- _"Com nota 7, o programa vai imprimir o quê?"_ (Resposta: **Aprovado**, porque 7 é maior que 6.)
- _"E se a nota fosse 4?"_ (Resposta: **Reprovado**.)

**Sinais de comparação para mostrar:**
- `>` maior que | `<` menor que | `>=` maior ou igual | `<=` menor ou igual | `==` igual | `!=` diferente

### `when` (card do site: "when")

> _"Quando temos MUITAS opções, usar vários `if` fica cansativo. O `when` resolve isso:
> ele compara um valor com vários casos de uma vez."_

```kotlin
val dia = 3
when (dia) {
    1 -> println("Domingo")
    3 -> println("Terça")
    else -> println("Outro dia")
}
```

> _"Ele olha o valor de `dia` (que é 3) e escolhe o caso certo. Como `dia` é 3,
> imprime 'Terça'. O `else` é o 'para qualquer outro caso'."_

**Pergunte:**
- _"Se `dia` fosse 1, o que apareceria?"_ (Resposta: **Domingo**.)

---

## BLOCO 5 — Laços / Repetição (20 min)

### `for` (card do site: "Laços")

> _"Laço é quando a gente quer **repetir** uma ação várias vezes sem escrever tudo
> de novo. O `for` percorre um intervalo de números."_

```kotlin
for (i in 1..3) {
    println("Volta $i")
}
```

- **`1..3`** → um intervalo de 1 até 3 (inclui o 1, o 2 e o 3).
- **`i`** → uma variável que vai valendo 1, depois 2, depois 3.
- Saída: `Volta 1`, `Volta 2`, `Volta 3`.

> _"O sinal de cifrão `$i` dentro do texto significa 'coloque aqui o valor da
> variável i'. Isso se chama **template de string**."_

**Pergunte:**
- _"Quantas vezes esse laço repete?"_ (Resposta: **3 vezes**.)
- _"E se fosse `1..5`?"_ (Resposta: **5 vezes**.)

### `while` (mencione rapidamente)

> _"Existe também o `while` ('enquanto'), que repete enquanto uma condição for
> verdadeira. A gente usa quando não sabe exatamente quantas vezes vai repetir."_

---

## BLOCO 6 — Console de código ao vivo (20 min)

Vá até a seção **"Console de código"** do site. Para cada exemplo:

1. **Leia o código em voz alta** e explique o que ele faz.
2. **Antes de clicar em "Rodar", pergunte à turma o que vai aparecer.**
3. Clique em **▶ Rodar** e confira a saída junto com eles.

**Gabarito das saídas (para você saber a resposta antes):**

| Exemplo | O que faz | Saída esperada |
|---------|-----------|----------------|
| `Main.kt` | imprime uma saudação usando variável | `Olá, turma!` |
| `Calculo.kt` | soma 7 + 5 com uma função | `Total: 12` |
| `Nota.kt` | verifica aprovação (nota 8) | `Aprovado com 8` |
| `Repeticao.kt` | laço de 1 a 3 | `Contando: 1` / `Contando: 2` / `Contando: 3` |

> _"Viram? Tudo o que a gente aprendeu — variável, função, if, for — apareceu
> aqui funcionando de verdade!"_

---

## BLOCO 7 — Quiz (15 min)

Abra a seção **"Quiz de Kotlin"**. São 8 perguntas. Sugestão: leia cada pergunta em
voz alta, deixe a turma votar/responder e só depois clique na opção.

### Gabarito do quiz (resposta correta em **negrito**)

1. Qual palavra-chave cria uma variável que **não pode** ser alterada?
   → **val** *(var seria mutável)*
2. Como se chama a função onde o programa Kotlin começa a rodar?
   → **main()** *(todo programa começa por ela)*
3. O que `println("Oi")` faz?
   → **Imprime Oi no console**
4. Qual tipo é usado para números decimais?
   → **Double** *(Int é só inteiro)*
5. Qual palavra-chave declara uma função em Kotlin?
   → **fun**
6. Qual estrutura substitui vários if/else para comparar um valor?
   → **when**
7. Quantas vezes o laço `for (i in 1..3)` repete?
   → **3 vezes** *(1, 2 e 3)*
8. Qual tipo guarda apenas true ou false?
   → **Boolean**

> Dica: no site, ao clicar em qualquer resposta, aparece a explicação e a opção
> certa fica verde. Assim, mesmo que erre, dá para explicar na hora.

---

## BLOCO 8 — Fechamento (5 min)

**O que falar:**

> _"Hoje a gente viu os quatro pilares de qualquer programa: **variáveis** (para
> guardar informação), **funções** (para reaproveitar código), **condições** (para
> tomar decisões) e **laços** (para repetir). Isso serve não só para Kotlin, mas para
> quase todas as linguagens de programação. Vocês deram o primeiro passo hoje!"_

**Pergunta final para a turma:**
- _"Qual parte vocês acharam mais interessante? E qual ficou mais confusa?"_
  (Use as respostas para revisar rapidinho o que precisar.)

---

## Glossário rápido de Kotlin (cola do professor)

| Palavra/Símbolo | O que significa |
|-----------------|-----------------|
| `val` | variável que **não muda** (imutável) |
| `var` | variável que **pode mudar** (mutável) |
| `fun` | cria uma **função** |
| `main()` | função **inicial**, onde o programa começa |
| `println(...)` | **imprime** um texto na tela e pula linha |
| `print(...)` | imprime **sem** pular linha |
| `Int` | número **inteiro** |
| `Double` | número **decimal** (com vírgula) |
| `String` | **texto** (entre aspas) |
| `Boolean` | **verdadeiro ou falso** (`true`/`false`) |
| `if / else` | tomar **decisões** ("se / senão") |
| `when` | comparar um valor com **vários casos** |
| `for` | **repetir** percorrendo um intervalo |
| `while` | **repetir enquanto** algo for verdadeiro |
| `return` | **devolve** um valor de uma função |
| `1..3` | **intervalo** de 1 até 3 |
| `$variavel` | insere o **valor da variável** dentro de um texto |
| `==` / `!=` | igual / diferente |
| `>=` / `<=` | maior ou igual / menor ou igual |

---

Bom aula! Qualquer conceito que a turma pedir para aprofundar, os cards do site e este
glossário já te dão o suficiente para responder com segurança.

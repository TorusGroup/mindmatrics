# 🌙 GAME: SLEEP QUALITY LAB (PSQI Official)

## 📋 DESCRIÇÃO DO GAME

**Nome comercial:** "Laboratório do Sono"
**Tagline:** "A ferramenta clínica para descobrir por que você está sempre cansado."
**Preço sugerido:** $9.90 USD
**Tempo de conclusão:** 5-7 minutos
**Base científica:** Pittsburgh Sleep Quality Index (PSQI) - Buysse et al. (1989)

### Proposta de Valor
- Protocolo "Gold Standard" usado por médicos do sono
- Cálculo preciso de eficiência do sono
- Identificação de disturbios ocultos (apneia, movimentos, etc)
- Score Global Validado (0-21)

---

## 🎯 ESTRUTURA DO TESTE

### PARTE 1: HÁBITOS DE SONO (4 Perguntas Abertas)
### PARTE 2: PROBLEMAS DE SONO (10 Perguntas Frequência)
### PARTE 3: USO DE MEDICAÇÃO E DISFUNÇÃO DIURNA

---

## 📊 PARTE 1: HÁBITOS (Horários)

**Instrução:** "As perguntas a seguir referem-se aos seus hábitos de sono habituais **no último mês**."

1. **A que horas você costuma ir para a cama?** (Hora/Min)
2. **Quanto tempo (em minutos) você costuma levar para adormecer?** (Minutos)
3. **A que horas você costuma levantar de manhã?** (Hora/Min)
4. **Quantas horas de sono real você dorme por noite?** (Isso pode ser diferente do número de horas que você passa na cama)

---

## 📊 PARTE 2: PROBLEMAS DE SONO (Frequência)

**Escala:**
0. Nenhuma vez no último mês
1. Menos de uma vez por semana
2. Uma ou duas vezes por semana
3. Três ou mais vezes por semana

**5. Durante o último mês, com que frequência você teve dificuldade para dormir porque você...**
a) Não conseguiu adormecer em 30 minutos?
b) Acordou no meio da noite ou de manhã cedo?
c) Teve que levantar para ir ao banheiro?
d) Não conseguiu respirar confortavelmente?
e) Tossiu ou roncou alto?
f) Sentiu muito frio?
g) Sentiu muito calor?
h) Teve sonhos ruins ou pesadelos?
i) Teve dores?
j) Outra razão? (Descreva e pontue a frequência)

---

## 📊 PARTE 3: QUALIDADE E DISFUNÇÃO

**6. Durante o último mês, como você classificaria a qualidade do seu sono de uma forma geral?**
- Muito boa (0)
- Boa (1)
- Ruim (2)
- Muito ruim (3)

**7. Durante o último mês, com que frequência você tomou remédio (prescrito ou por conta própria) para ajudar a dormir?**
(Escala 0-3 de frequência)

**8. Durante o último mês, com que frequência você teve dificuldade para ficar acordado enquanto dirigia, comia ou participava de uma atividade social?**
(Escala 0-3 de frequência)

**9. Durante o último mês, quanto de problema foi para você manter o entusiasmo para fazer as coisas (suas tarefas habituais)?**
- Nenhum problema (0)
- Um problema leve (1)
- Um problema moderado (2)
- Um grande problema (3)

---

## 📊 LÓGICA DE PONTUAÇÃO (ALGORITMO PSQI)

O PSQI gera 7 componentes (C1-C7):

1.  **C1 (Qualidade Subjetiva):** Valor da questão 6.
2.  **C2 (Latência):** Pontuação da Q2 + Q5a.
3.  **C3 (Duração):** Pontuação baseada na Q4 (>7h=0, 6-7=1, 5-6=2, <5=3).
4.  **C4 (Eficiência Habitual):** (Horas Dormidas / (Hora Levantar - Hora Deitar)) %.
    - >85%=0, 75-84%=1, 65-74%=2, <65%=3.
5.  **C5 (Distúrbios):** Soma de Q5b até Q5j (mapeado para 0-3).
6.  **C6 (Medicação):** Valor da questão 7.
7.  **C7 (Disfunção Diurna):** Soma de Q8 + Q9 (mapeado para 0-3).

**SCORE GLOBAL:** Soma de C1 a C7 (0-21).

### Interpretação Clínica:
- **0 - 4:** **Bom Dormidor.**
- **5 - 10:** **Má Qualidade do Sono.** (Chance significativa de problema).
- **11+:** **Distúrbio do Sono Grave.** (Muito provavelmente requer tratamento médico).

---

## 🎨 COMPONENTES VISUAIS DO RELATÓRIO

### PÁGINA 1 - CAPA
- Cores escuras, relaxantes (Azul Marinho/Roxo).
- "Análise Clínica do Sono (PSQI)"

### PÁGINA 2 - DIAGNÓSTICO
**Componente: A BATERIA**
- Score < 5: 🔋 100% (Verde)
- Score 5-10: 🪫 50% (Amarelo)
- Score 11+: 🔴 20% (Vermelho - Crítico)

**Componente: SEUS LADRÕES DE SONO**
Lista dos componentes C1-C7 com scores mais altos (ex: Latência 3/3, Eficiência 3/3).

---

## 💡 PLANO DE HIGIENE DO SONO 2.0

### PÁGINA 4-7 - PROTOCOLO DE OTIMIZAÇÃO
Recomendações baseadas nos componentes falhos.

- Se C2 (Latência) alto: "Técnicas de relaxamento pré-sono e restrição de leito."
- Se C4 (Eficiência) baixo: "Terapia de Restrição do Sono (SRT)."
- Se C5 (Distúrbios) alto: "Checklist de ambiente (frio/luz/ruído)."

---

## 📧 SEQUÊNCIA DE EMAIL

**Dia 0:** "Seu PSQI Score: O veredito"
**Dia 1:** "A matemática do sono: Cansado vs Sonolento"
**Dia 3:** "O perigo da luz azul e da cafeína tardia"
**Dia 7:** "Oferta Curso Dormir Melhor"

---

## 🔒 ASPECTOS LEGAIS
- "O PSQI é uma ferramenta de avaliação e pesquisa."
- "Resultados elevados indicam má qualidade, mas não diagnosticam causas específicas como Apneia Obstrutiva sem polissonografia."
- Direitos Autorais: University of Pittsburgh. Uso permitido para fins não-comerciais/clínicos individuais.

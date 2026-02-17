
# 🧠 Arquitetura Técnica MindMetrics

Bem-vindo ao núcleo da MindMetrics. Este projeto foi desenhado para ser um **Ecossistema de Protocolos**, não apenas um site de testes.

## 🏗️ Padrões de Design
1. **Registry Pattern**: Localizado em `services/test-registry.ts`. Todos os novos testes devem ser registrados aqui para aparecerem no app.
2. **Engine Decoupling**: O `TestEngine.tsx` é agnóstico. Ele não conhece os detalhes clínicos; ele apenas executa o JSON fornecido pelo `TestConfig`.
3. **I18n-First**: Nenhuma string de UI deve estar hardcoded. Usamos o `I18nContext` para garantir suporte global.

## 📂 Estrutura de Pastas de um Teste
Ao criar um novo teste (ex: `anxiety`), siga esta estrutura:
- `tests/anxiety/config.ts`: Metadados, questões e lógica de segurança.
- `tests/anxiety/AnxietyReport.tsx`: UI do relatório (usando Recharts e `ReportWrapper`).

## 🔐 Lógica de Segurança (Safety Triggers)
Os testes podem interromper o fluxo se detectarem riscos clínicos. Isso é configurado via a propriedade `safetyTrigger` no `config.ts`. Se a função retornar um ID de estado de erro, o motor exibe a tela de suporte imediato.

## 🤖 Integração com IA
O `ai.service.ts` consome o Gemini 3 Flash. Ele utiliza as instruções de sistema dinâmicas baseadas nos resultados psicométricos para gerar insights contextuais.


import { TestConfig } from '../../types/assessment';

export const depressionConfig: TestConfig = {
  id: 'depression',
  title: { 
    pt: 'Inventário de Depressão de Beck (BDI-II)', 
    en: 'Beck Depression Inventory (BDI-II)', 
    es: 'Inventario de Depresión de Beck', 
    fr: 'Inventaire de Dépression de Beck', 
    de: 'Beck-Depressions-Inventar' 
  },
  subtitle: { 
    pt: 'Padrão Ouro em Avaliação Clínica de Humor', 
    en: 'Gold Standard in Clinical Mood Assessment', 
    es: 'Estándar de Oro en Evaluación Clínica', 
    fr: 'Standard d\'Or en Évaluation Clinique', 
    de: 'Goldstandard in der klinischen Bewertung' 
  },
  category: { pt: 'Clínico', en: 'Clinical', es: 'Clínico', fr: 'Clinique', de: 'Klinisch' },
  accentColor: 'darkgray',
  reportType: 'depression',
  
  // Lógica modularizada de segurança
  safetyTrigger: (questionId, value) => questionId === 9 && value > 0,
  safetyAlert: {
    title: { pt: "Você não está sozinho.", en: "You are not alone.", es: "No estás solo.", fr: "Vous n'êtes pas seul.", de: "Du bist nicht allein." },
    description: { 
        pt: "Mencionar pensamentos de se machucar é um sinal de dor profunda. Priorizamos seu cuidado imediato.", 
        en: "Mentioning self-harm thoughts is a sign of deep pain. We prioritize your immediate care.",
        es: "Mencionar pensamientos de hacerse daño es señal de dolor profundo.",
        fr: "Mentionner des pensées d'automutilation est un signe de douleur profonde.",
        de: "Gedanken an Selbstverletzung sind ein Zeichen von tiefem Schmerz."
    },
    ctaText: { pt: "Ligar CVV (188)", en: "Call Helpline (988)", es: "Llamar Ayuda", fr: "Appeler Aide", de: "Hilfe Anrufen" },
    ctaLink: "tel:188"
  },

  technicalData: {
    instrument: "Beck Depression Inventory (BDI-II)",
    citation: "Beck, A. T., Steer, R. A., & Brown, G. K. (1996).",
    reliabilityIndex: "Cronbach's α: 0.92",
    normativeData: "Clinical and General Population Samples"
  },
  questions: [
    { id: 1, dimension: 'affective', text: { pt: "Tristeza: Sentimento de desânimo ou infelicidade.", en: "Sadness: Feeling discouraged or unhappy.", es: "Tristeza: Sentimiento de desánimo o infelicidad.", fr: "Tristesse : Sentiment de découragement ou de malheur.", de: "Traurigkeit: Gefühl der Entmutigung oder des Unglücks." } },
    { id: 2, dimension: 'cognitive', text: { pt: "Pessimismo: Sentimento em relação ao futuro.", en: "Pessimism: Feeling about the future.", es: "Pesimismo: Sentimiento sobre el futuro.", fr: "Pessimisme : Sentiment concernant l'avenir.", de: "Pessimismus: Gefühl in Bezug auf die Zukunft." } },
    { id: 3, dimension: 'cognitive', text: { pt: "Fracasso Passado: Como você vê seus sucessos e falhas.", en: "Past Failure: How you view your successes and failures.", es: "Fracaso Pasado: Cómo ves tus éxitos y fracasos.", fr: "Échec Passé : Comment vous voyez vos succès et vos échecs.", de: "Vergangenes Scheitern: Wie Sie Ihre Erfolge und Misserfolge sehen." } },
    { id: 4, dimension: 'affective', text: { pt: "Perda de Prazer: Satisfação em atividades habituais.", en: "Loss of Pleasure: Satisfaction in usual activities.", es: "Pérdida de Placer: Satisfacción en actividades habituales.", fr: "Perte de Plaisir : Satisfaction dans les activités habituelles.", de: "Verlust der Freude: Zufriedenheit bei gewohnten Aktivitäten." } },
    { id: 5, dimension: 'affective', text: { pt: "Sentimentos de Culpa: Frequência e intensidade da culpa.", en: "Guilty Feelings: Frequency and intensity of guilt.", es: "Sentimientos de Culpa: Frecuencia e intensidad de la culpa.", fr: "Sentiments de Culpabilité : Fréquence et intensité de la culpabilité.", de: "Schuldgefühle: Häufigkeit und Intensität der Schuldgefühle." } },
    { id: 6, dimension: 'cognitive', text: { pt: "Sentimentos de Punição: Sensação de estar sendo punido.", en: "Punishment Feelings: Sensation of being punished.", es: "Sentimientos de Castigo: Sensación de estar siendo castigado.", fr: "Sentiments de Punition : Sensation d'être puni.", de: "Bestrafungsgefühle: Gefühl, bestraft zu werden." } },
    { id: 7, dimension: 'cognitive', text: { pt: "Autoestima: Sentimento em relação a si mesmo.", en: "Self-Dislike: Feeling toward oneself.", es: "Autoestima: Sentimiento hacia uno mismo.", fr: "Dépréciation de soi : Sentiment envers soi-même.", de: "Selbsthass: Gefühl sich selbst gegenüber." } },
    { id: 8, dimension: 'cognitive', text: { pt: "Autocrítica: Tendência a se culpar por erros.", en: "Self-Criticalness: Tendency to blame self for errors.", es: "Autocrítica: Tendencia a culparse por errores.", fr: "Autocritique : Tendance à se blâmer pour ses erreurs.", de: "Selbstkritik: Neigung, sich selbst für Fehler die Schuld zu geben." } },
    { id: 9, dimension: 'suicidability', text: { pt: "Ideação: Pensamentos relacionados a se machucar.", en: "Suicidal Thoughts: Thoughts related to hurting oneself.", es: "Ideación: Pensamientos relacionados con hacerse daño.", fr: "Pensées Suicidaires : Pensées liées au fait de se faire du mal.", de: "Suizidgedanken: Gedanken daran, sich selbst zu verletzen." } },
    { id: 10, dimension: 'affective', text: { pt: "Choro: Frequência de episódios de choro.", en: "Crying: Frequency of crying episodes.", es: "Llanto: Frecuencia de episodios de llanto.", fr: "Pleurs : Fréquence des épisodes de pleurs.", de: "Weinen: Häufigkeit von Weinepisoden." } },
    { id: 11, dimension: 'somatic', text: { pt: "Agitação: Sentimento de inquietação ou nervosismo.", en: "Agitation: Feeling of restlessness or nervousness.", es: "Agitación: Sentimiento de inquietud o nerviosismo.", fr: "Agitation : Sentiment d'agitation ou de nervosité.", de: "Unruhe: Gefühl von Rastlosigkeit oder Nervosität." } },
    { id: 12, dimension: 'affective', text: { pt: "Perda de Interesse: Interesse em outras pessoas.", en: "Loss of Interest: Interest in other people.", es: "Pérdida de Interés: Interés en otras personas.", fr: "Perte d'Intérêt : Intérêt pour les autres.", de: "Interessenverlust: Interesse an anderen Menschen." } },
    { id: 13, dimension: 'cognitive', text: { pt: "Indecisão: Dificuldade em tomar decisões.", en: "Indecisiveness: Difficulty in making decisions.", es: "Indecisión: Dificultad para tomar decisiones.", fr: "Indécision : Difficulté à prendre des décisions.", de: "Unentschlossenheit: Schwierigkeit, Entscheidungen zu treffen." } },
    { id: 14, dimension: 'cognitive', text: { pt: "Desvalorização: Sentimento de inutilidade.", en: "Worthlessness: Feeling of uselessness.", es: "Desvalorización: Sentimiento de inutilidad.", fr: "Dévalorisation : Sentiment d'inutilité.", de: "Wertlosigkeit: Gefühl der Nutzlosigkeit." } },
    { id: 15, dimension: 'somatic', text: { pt: "Energia: Nível de disposição para atividades.", en: "Loss of Energy: Level of energy for activities.", es: "Energía: Nivel de disposición para actividades.", fr: "Perte d'Énergie : Niveau d'énergie pour les activités.", de: "Energieverlust: Ausmaß der Energie für Aktivitäten." } },
    { id: 16, dimension: 'somatic', text: { pt: "Sono: Alterações no padrão de sono.", en: "Sleep Patterns: Changes in sleep patterns.", es: "Sueño: Alteraciones en el patrón de sueño.", fr: "Sommeil : Changements dans les habitudes de sommeil.", de: "Schlafmuster: Veränderungen im Schlafmuster." } },
    { id: 17, dimension: 'affective', text: { pt: "Irritabilidade: Facilidade em ficar irritado.", en: "Irritability: Ease of getting annoyed.", es: "Irritabilidad: Facilidad para irritarse.", fr: "Irritabilité : Facilité à s'énerver.", de: "Reizbarkeit: Leichtigkeit, verärgert zu werden." } },
    { id: 18, dimension: 'somatic', text: { pt: "Apetite: Alterações no desejo de comer.", en: "Changes in Appetite: Changes in desire to eat.", es: "Apetito: Alteraciones en el deseo de comer.", fr: "Appétit : Changements dans le désir de manger.", de: "Appetitveränderungen: Veränderungen im Verlangen zu essen." } },
    { id: 19, dimension: 'cognitive', text: { pt: "Concentração: Capacidade de focar em tarefas.", en: "Concentration Difficulty: Ability to focus on tasks.", es: "Concentración: Capacidad para enfocarse en tareas.", fr: "Difficultés de Concentration : Capacité à se concentrer sur des tâches.", de: "Konzentrationsschwierigkeiten: Fähigkeit, sich auf Aufgaben zu konzentrieren." } },
    { id: 20, dimension: 'somatic', text: { pt: "Cansaço: Sensação de fadiga física.", en: "Tiredness or Fatigue: Sensation of physical fatigue.", es: "Cansancio: Sensación de fatiga física.", fr: "Fatigue : Sensation de fatigue physique.", de: "Müdigkeit oder Erschöpfung: Gefühl körperlicher Ermüdung." } },
    { id: 21, dimension: 'somatic', text: { pt: "Libido: Interesse em atividades sexuais.", en: "Loss of Interest in Sex: Interest in sexual activities.", es: "Libido: Interés en actividades sexuales.", fr: "Libido : Intérêt pour les activités sexuelles.", de: "Libidoverlust: Interesse an sexuellen Aktivitäten." } }
  ],
  scale: [
    { label: { pt: 'Nível 0 (Mínimo)', en: 'Level 0 (Minimum)', es: 'Nivel 0 (Mínimo)', fr: 'Niveau 0 (Minimum)', de: 'Stufe 0 (Minimum)' }, value: 0 },
    { label: { pt: 'Nível 1 (Leve)', en: 'Level 1 (Mild)', es: 'Nivel 1 (Leve)', fr: 'Niveau 1 (Léger)', de: 'Stufe 1 (Leicht)' }, value: 1 },
    { label: { pt: 'Nível 2 (Moderado)', en: 'Level 2 (Moderate)', es: 'Nivel 2 (Moderado)', fr: 'Niveau 2 (Modéré)', de: 'Stufe 2 (Mäßig)' }, value: 2 },
    { label: { pt: 'Nível 3 (Grave)', en: 'Level 3 (Severe)', es: 'Nivel 3 (Grave)', fr: 'Niveau 3 (Sévère)', de: 'Stufe 3 (Schwer)' }, value: 3 },
  ]
};

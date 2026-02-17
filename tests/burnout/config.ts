
import { TestConfig } from '../../types/assessment';

export const burnoutConfig: TestConfig = {
  id: 'burnout',
  title: { pt: 'Resiliência Burnout', en: 'Burnout Resilience', es: 'Resiliencia al Burnout', fr: 'Résilience au Burnout', de: 'Burnout-Resilienz' },
  subtitle: { pt: 'Diagnóstico MBI-GS', en: 'MBI-GS Diagnosis', es: 'Diagnóstico MBI-GS', fr: 'Diagnostic MBI-GS', de: 'MBI-GS-Diagnose' },
  category: { pt: 'Corporativo', en: 'Corporate', es: 'Corporativo', fr: 'Entreprise', de: 'Unternehmen' },
  accentColor: 'darkgray',
  reportType: 'burnout',
  scale: [
    { label: { pt: 'Nunca', en: 'Never', es: 'Nunca', fr: 'Jamais', de: 'Niemals' }, value: 0 },
    { label: { pt: 'Raramente', en: 'Rarely', es: 'Raramente', fr: 'Rarement', de: 'Selten' }, value: 1 },
    { label: { pt: 'Às vezes', en: 'Sometimes', es: 'A veces', fr: 'Parfois', de: 'Manchmal' }, value: 2 },
    { label: { pt: 'Frequentemente', en: 'Frequently', es: 'Frecuentemente', fr: 'Fréquemment', de: 'Häufig' }, value: 3 },
    { label: { pt: 'Muito Frequentemente', en: 'Very Frequently', es: 'Muy Frecuentemente', fr: 'Très Souvent', de: 'Sehr Oft' }, value: 4 },
  ],
  questions: [
    // Added missing es, fr, de translations for each question to comply with LocalizedText interface requirements
    { id: 1, dimension: 'exhaustion', text: { pt: "Sinto-me emocionalmente esgotado pelo trabalho.", en: "I feel emotionally drained from work.", es: "Me siento emocionalmente agotado por el trabajo.", fr: "Je me sens émotionnellement épuisé par le travail.", de: "Ich fühle mich emotional durch die Arbeit erschöpft." } },
    { id: 2, dimension: 'exhaustion', text: { pt: "Sinto-me estafado ao fim de um dia de trabalho.", en: "I feel used up at the end of a workday.", es: "Me siento agotado al final de una jornada laboral.", fr: "Je me sens vidé à la fin d'une journée de travail.", de: "Ich fühle mich am Ende eines Arbeitstages verbraucht." } },
    { id: 3, dimension: 'depersonalization', text: { pt: "Tornou-me mais cínico sobre a utilidade do meu trabalho.", en: "I have become more cynical about work.", es: "Me he vuelto más cínico sobre la utilidad de mi trabajo.", fr: "Je suis devenu plus cynique quant à l'utilité de mon travail.", de: "Ich bin zynischer gegenüber dem Nutzen meiner Arbeit geworden." } },
    { id: 4, dimension: 'accomplishment', text: { pt: "Sinto que estou influenciando positivamente a vida de outras pessoas.", en: "I feel I'm making a difference.", es: "Siento que estoy influyendo positivamente en la vida de otras personas.", fr: "J'ai l'impression d'avoir une influence positive sur la vie des autres.", de: "Ich habe das Gefühl, einen positiven Einfluss auf das Leben anderer zu haben." } },
    { id: 5, dimension: 'exhaustion', text: { pt: "Sinto-me cansado ao levantar de manhã e ter que encarar outro dia.", en: "I feel tired when I get up in the morning.", es: "Me siento cansado al levantarme por la mañana y tener que afrontar otro día.", fr: "Je me sens fatigué quand je me lève le matin et que je dois affronter une autre journée.", de: "Ich fühle mich müde, wenn ich morgens aufstehe und einem weiteren Tag gegenübertrehe." } },
    { id: 6, dimension: 'depersonalization', text: { pt: "Trabalhar o dia todo é realmente uma tensão para mim.", en: "Working all day is a strain for me.", es: "Trabajar todo el día es realmente una tensión para mí.", fr: "Travailler toute la journée est vraiment une tension pour moi.", de: "Den ganzen Tag zu arbeiten ist wirklich anstrengend für mich." } },
    { id: 7, dimension: 'accomplishment', text: { pt: "Eu lido muito bem com os problemas do meu trabalho.", en: "I handle work problems very well.", es: "Manejo muy bien los problemas de mi trabajo.", fr: "Je gère très bien les problèmes de mon travail.", de: "Ich komme sehr gut mit Problemen in meiner Arbeit zurecht." } },
    { id: 8, dimension: 'exhaustion', text: { pt: "Sinto-me 'no limite' com meu trabalho.", en: "I feel 'at the end of my rope' with work.", es: "Me siento 'al límite' con mi trabajo.", fr: "Je me sens 'à bout' avec mon travail.", de: "Ich fühle mich bei meiner Arbeit 'am Ende meiner Kräfte'." } }
  ]
};

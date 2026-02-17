
import { TestConfig } from '../../types/assessment';

export const eqConfig: TestConfig = {
  id: 'eq',
  title: { pt: 'Quociente Emocional', en: 'Emotional Quotient', es: 'Cociente Emocional', fr: 'Quotient Émotionnel', de: 'Emotionaler Quotient' },
  subtitle: { pt: 'Liderança e Ressonância', en: 'Leadership & Resonance', es: 'Liderazgo y Resonancia', fr: 'Leadership et Résonance', de: 'Führung und Resonanz' },
  category: { pt: 'Soft Skills', en: 'Soft Skills', es: 'Habilidades Blandas', fr: 'Soft Skills', de: 'Soft Skills' },
  accentColor: 'sage',
  reportType: 'eq',
  scale: [
    { label: { pt: 'Discordo Totalmente', en: 'Strongly Disagree', es: 'Totalmente en desacuerdo', fr: 'Fortement en Désaccord', de: 'Stimme überhaupt nicht zu' }, value: 1 },
    { label: { pt: 'Discordo', en: 'Disagree', es: 'En desacuerdo', fr: 'En Désaccord', de: 'Stimme nicht zu' }, value: 2 },
    { label: { pt: 'Neutro', en: 'Neutral', es: 'Neutral', fr: 'Neutre', de: 'Neutral' }, value: 3 },
    { label: { pt: 'Concordo', en: 'Agree', es: 'De acordo', fr: 'D\'accord', de: 'Stimme zu' }, value: 4 },
    { label: { pt: 'Concordo Totalmente', en: 'Strongly Agree', es: 'Totalmente de acordo', fr: 'Tout à fait d\'accord', de: 'Stimme voll und ganz zu' }, value: 5 },
  ],
  questions: [
    // Added missing es, fr, de translations for each question to comply with LocalizedText interface requirements
    { id: 1, dimension: 'self_awareness', text: { pt: "Eu percebo quando meu humor muda.", en: "I notice when my mood changes.", es: "Noto cuando mi estado de ánimo cambia.", fr: "Je remarque quand mon humeur change.", de: "Ich bemerke, wenn sich meine Stimmung ändert." } },
    { id: 2, dimension: 'self_regulation', text: { pt: "Eu mantenho a calma sob pressão.", en: "I stay calm under pressure.", es: "Mantengo la calma bajo presión.", fr: "Je reste calme sous la pression.", de: "Ich bleibe unter Druck gelassen." } },
    { id: 3, dimension: 'motivation', text: { pt: "Eu busco excelência por satisfação interna.", en: "I seek excellence for internal satisfaction.", es: "Busco la excelencia por satisfacción interna.", fr: "Je recherche l'excellence pour une satisfaction interne.", de: "Ich strebe nach Exzellenz aus innerer Zufriedenheit." } },
    { id: 4, dimension: 'empathy', text: { pt: "Eu capto facilmente os sentimentos dos outros.", en: "I easily pick up on others' feelings.", es: "Capto fácilmente los sentimientos de los demás.", fr: "Je perçois facilement les sentiments des autres.", de: "Ich nehme die Gefühle anderer leicht wahr." } },
    { id: 5, dimension: 'social_skills', text: { pt: "Eu sou bom em resolver disputas.", en: "I am good at resolving disputes.", es: "Soy bueno resolviendo disputas.", fr: "Je suis doué pour résoudre les conflits.", de: "Ich bin gut darin, Streitigkeiten beizulegen." } },
    { id: 6, dimension: 'self_awareness', text: { pt: "Eu sei quais são meus pontos fortes e fracos.", en: "I know my strengths and weaknesses.", es: "Conozco mis fortalezas y debilidades.", fr: "Je connais mes forces et mes faiblesses.", de: "Ich kenne meine Stärken und Schwächen." } },
    { id: 7, dimension: 'self_regulation', text: { pt: "Eu penso antes de agir por impulso.", en: "I think before acting on impulse.", es: "Pienso antes de actuar por impulso.", fr: "Je réfléchis avant d'agir par impulsion.", de: "Ich denke nach, bevor ich impulsiv handle." } },
    { id: 8, dimension: 'motivation', text: { pt: "Eu me recupero rápido de contratempos.", en: "I bounce back quickly from setbacks.", es: "Me recupero rápido de los contratiempos.", fr: "Je me remets rapidement des revers.", de: "Ich erhole mich schnell von Rückschlägen." } },
    { id: 9, dimension: 'empathy', text: { pt: "Eu entendo o ponto de vista das pessoas.", en: "I understand people's perspectives.", es: "Entiendo el punto de vista de las personas.", fr: "Je comprends le point de vue des gens.", de: "Ich verstehe die Perspektiven der Menschen." } },
    { id: 10, dimension: 'social_skills', text: { pt: "Eu consigo inspirar outras pessoas.", en: "I can inspire others.", es: "Puedo inspirar a otros.", fr: "Je peux inspirer les autres.", de: "Ich kann andere inspirieren." } }
  ]
};

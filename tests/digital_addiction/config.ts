
import { TestConfig } from '../../types/assessment';

export const digitalAddictionConfig: TestConfig = {
  id: 'digital_addiction',
  title: { pt: 'Higiene Digital', en: 'Digital Hygiene', es: 'Higiene Digital', fr: 'Hygiène Numérique', de: 'Digitale Hygiene' },
  subtitle: { pt: 'Protocolo IAT (20 Itens)', en: 'IAT Protocol (20 Items)', es: 'Protocolo IAT', fr: 'Protocole IAT', de: 'IAT-Protokoll' },
  category: { pt: 'Saúde Mental', en: 'Mental Health', es: 'Salud Mental', fr: 'Santé Mentale', de: 'Mentale Gesundheit' },
  accentColor: 'petroleum',
  reportType: 'digital_addiction',
  calculator: {
    title: { pt: 'Tempo de Uso Diário', en: 'Daily Usage Time', es: 'Tiempo de Uso Diario', fr: 'Temps d\'Utilisation Quotidien', de: 'Tägliche Nutzungszeit' },
    inputs: [
      { id: 'social', label: { pt: 'Redes Sociais', en: 'Social Media', es: 'Redes Sociales', fr: 'Réseaux Sociaux', de: 'Soziale Medien' }, min: 0, max: 12, unit: 'h' },
      { id: 'video', label: { pt: 'Streaming/Vídeos', en: 'Streaming/Video', es: 'Streaming/Video', fr: 'Streaming/Vidéo', de: 'Streaming/Video' }, min: 0, max: 12, unit: 'h' },
      { id: 'games', label: { pt: 'Jogos', en: 'Games', es: 'Juegos', fr: 'Jeux', de: 'Spiele' }, min: 0, max: 12, unit: 'h' }
    ]
  },
  scale: [
    { label: { pt: 'Nunca', en: 'Never', es: 'Nunca', fr: 'Jamais', de: 'Niemals' }, value: 1 },
    { label: { pt: 'Raramente', en: 'Rarely', es: 'Raramente', fr: 'Rarement', de: 'Selten' }, value: 2 },
    { label: { pt: 'Às vezes', en: 'Sometimes', es: 'A veces', fr: 'Parfois', de: 'Manchmal' }, value: 3 },
    { label: { pt: 'Frequentemente', en: 'Frequently', es: 'Frecuentemente', fr: 'Fréquemment', de: 'Häufig' }, value: 4 },
    { label: { pt: 'Sempre', en: 'Always', es: 'Siempre', fr: 'Toujours', de: 'Immer' }, value: 5 },
  ],
  questions: [
    { id: 1, dimension: 'control', text: { pt: "Com que frequência você fica on-line mais tempo do que pretendia?", en: "Stay online longer than intended?", es: "¿Más tiempo online do que pretendía?", fr: "Plus longtemps que prévu ?", de: "Länger online als beabsichtigt?" } },
    { id: 2, dimension: 'functionality', text: { pt: "Com que frequência você negligencia tarefas domésticas para passar mais tempo on-line?", en: "Neglect chores for online time?", es: "¿Descuida tareas por estar online?", fr: "Négligez les tâches ?", de: "Hausarbeit vernachlässigt?" } },
    { id: 3, dimension: 'relationships', text: { pt: "Com que frequência você prefere a excitação da Internet à intimidade com seu parceiro?", en: "Prefer Internet excitement to partner intimacy?", es: "¿Prefiere internet a la intimidad?", fr: "Préférez internet à l'intimité ?", de: "Internet vor Intimität?" } },
    { id: 4, dimension: 'social', text: { pt: "Com que frequência você forma novos relacionamentos com outros usuários on-line?", en: "Form new relationships online?", es: "¿Nuevas relaciones online?", fr: "Nouvelles relations ?", de: "Neue Online-Kontakte?" } },
    { id: 5, dimension: 'social', text: { pt: "Com que frequência as pessoas em sua vida reclamam da quantidade de tempo que você passa on-line?", en: "Others complain about your online time?", es: "¿Quejas por su tiempo online?", fr: "Les autres se plaignent ?", de: "Andere beschweren sich?" } },
    { id: 6, dimension: 'functionality', text: { pt: "Com que frequência suas notas ou desempenho no trabalho sofrem devido ao tempo on-line?", en: "Work/grades suffer due to online time?", es: "¿Desempeño afectado?", fr: "Travail affecté ?", de: "Leistung beeinträchtigt?" } },
    { id: 7, dimension: 'compulsion', text: { pt: "Com que frequência você checa seu e-mail/mensagens antes de fazer outras coisas necessárias?", en: "Check email before necessary tasks?", es: "¿Revisa mensajes antes de lo necesario?", fr: "Vérifiez vos messages avant tout ?", de: "E-Mails vor Aufgaben checken?" } },
    { id: 8, dimension: 'shame', text: { pt: "Com que frequência você fica defensivo ou reservado quando alguém pergunta o que você faz on-line?", en: "Defensive when asked about online activity?", es: "¿Defensivo sobre su actividad?", fr: "Défensif sur vos activités ?", de: "Defensiv bei Online-Fragen?" } },
    { id: 9, dimension: 'escape', text: { pt: "Com que frequência você bloqueia pensamentos perturbadores sobre sua vida com a internet?", en: "Block disturbing life thoughts with internet?", es: "¿Evade problemas con internet?", fr: "Évitez les problèmes avec internet ?", de: "Probleme mit Internet verdrängen?" } },
    { id: 10, dimension: 'obsession', text: { pt: "Com que frequência você se pega antecipando quando vai ficar on-line novamente?", en: "Anticipate staying online again?", es: "¿Ansioso por volver a conectarse?", fr: "Anticipez le retour en ligne ?", de: "Warten auf Online-Zeit?" } },
    { id: 11, dimension: 'dependence', text: { pt: "Com que frequência você sente que a vida sem internet seria chata e sem alegria?", en: "Life without internet feels boring?", es: "¿Vida aburrida sin internet?", fr: "Vie ennuyeuse sans internet ?", de: "Leben ohne Internet langweilig?" } },
    { id: 12, dimension: 'withdrawal', text: { pt: "Com que frequência você se irrita se alguém te incomoda enquanto está on-line?", en: "Irritated if disturbed while online?", es: "¿Se irrita si lo interrumpen?", fr: "Irrité si on vous dérange ?", de: "Irritiert bei Störung?" } },
    { id: 13, dimension: 'health', text: { pt: "Com que frequência você perde sono ficando on-line até tarde?", en: "Lose sleep staying online late?", es: "¿Pierde sueño por internet?", fr: "Perdez le sommeil ?", de: "Schlafmangel durch Internet?" } },
    { id: 14, dimension: 'obsession', text: { pt: "Com que frequência você se pega pensando na internet quando está off-line?", en: "Think about internet while offline?", es: "¿Piensa en internet estando offline?", fr: "Pensez à internet hors ligne ?", de: "Offline an Internet denken?" } },
    { id: 15, dimension: 'denial', text: { pt: "Com que frequência você diz 'só mais alguns minutos' quando está on-line?", en: "Say 'just a few more minutes' online?", es: "¿Dice 'solo unos minutos más'?", fr: "Dites 'encore quelques minutes' ?", de: "Sagen 'nur noch ein paar Minuten'?" } },
    { id: 16, dimension: 'control', text: { pt: "Com que frequência você tenta reduzir o tempo on-line e falha?", en: "Try to cut back online time and fail?", es: "¿Intenta reducir tiempo y falla?", fr: "Échouez à réduire le temps ?", de: "Versuch zu reduzieren gescheitert?" } },
    { id: 17, dimension: 'shame', text: { pt: "Com que frequência você tenta esconder quanto tempo passa on-line?", en: "Try to hide online time from others?", es: "¿Oculta su tiempo online?", fr: "Cachez votre temps en ligne ?", de: "Online-Zeit verheimlichen?" } },
    { id: 18, dimension: 'isolation', text: { pt: "Com que frequência você prefere passar mais tempo on-line do que sair com outros?", en: "Prefer online time to going out?", es: "¿Prefiere estar online que salir?", fr: "Préfère être en ligne que sortir ?", de: "Online-Zeit vor Ausgehen?" } },
    { id: 19, dimension: 'withdrawal', text: { pt: "Com que frequência você se sente deprimido ou nervoso quando está off-line?", en: "Feel depressed/nervous when offline?", es: "¿Deprimido o nervioso offline?", fr: "Déprimé ou nerveux hors ligne ?", de: "Deprimiert/Nervös offline?" } },
    { id: 20, dimension: 'consequences', text: { pt: "Com que frequência você arrisca perder relacionamentos ou empregos por causa da internet?", en: "Risk relationships/jobs due to internet?", es: "¿Riesgo de perder empleos/relaciones?", fr: "Risque pour vos relations/travail ?", de: "Risiko für Job/Beziehungen?" } }
  ]
};

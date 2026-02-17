
import { TestConfig } from '../../types/assessment';

export const adhdConfig: TestConfig = {
  id: 'adhd',
  title: { 
    pt: 'Avaliação de TDAH (ASRS-v1.1)', 
    en: 'ADHD Assessment (ASRS-v1.1)', 
    es: 'Evaluación de TDAH', 
    fr: 'Évaluation du TDAH', 
    de: 'ADHS-Bewertung' 
  },
  subtitle: { 
    pt: 'Protocolo de Triagem Validado pela OMS', 
    en: 'WHO Validated Screening Protocol', 
    es: 'Protocolo validado por la OMS', 
    fr: 'Protocole validé par l\'OMS', 
    de: 'WHO-validiertes Protokoll' 
  },
  category: { 
    pt: 'Neurodiversidade', 
    en: 'Neurodiversity', 
    es: 'Neurodiversidad', 
    fr: 'Neurodiversité', 
    de: 'Neurodiversität' 
  },
  accentColor: 'terracotta',
  reportType: 'adhd',
  technicalData: {
    instrument: "Adult ADHD Self-Report Scale (ASRS-v1.1)",
    citation: "Kessler RC, et al. (2005). World Health Organization.",
    reliabilityIndex: "Cronbach's α: 0.88 - 0.94",
    normativeData: "WHO World Mental Health Survey"
  },
  parts: [
    // Fix: Added missing es, fr, de translations to satisfy LocalizedText interface
    { id: 'A', title: { pt: 'Parte A: Screening Crítico', en: 'Part A: Critical Screening', es: 'Parte A: Cribado Crítico', fr: 'Partie A : Dépistage Critique', de: 'Teil A: Kritisches Screening' } },
    { id: 'B', title: { pt: 'Parte B: Aprofundamento Clínico', en: 'Part B: Clinical Deep Dive', es: 'Parte B: Profundización Clínica', fr: 'Partie B : Approfondissement Clinique', de: 'Teil B: Klinische Vertiefung' } }
  ],
  scale: [
    { label: { pt: 'Nunca', en: 'Never', es: 'Nunca', fr: 'Jamais', de: 'Niemals' }, value: 0 },
    { label: { pt: 'Raramente', en: 'Rarely', es: 'Raramente', fr: 'Rarement', de: 'Selten' }, value: 1 },
    { label: { pt: 'Às vezes', en: 'Sometimes', es: 'A veces', fr: 'Parfois', de: 'Manchmal' }, value: 2 },
    { label: { pt: 'Frequentemente', en: 'Frequently', es: 'Frecuentemente', fr: 'Fréquemment', de: 'Häufig' }, value: 3 },
    { label: { pt: 'Muito Frequentemente', en: 'Very Frequently', es: 'Muy Frecuentemente', fr: 'Très Souvent', de: 'Sehr Oft' }, value: 4 },
  ],
  questions: [
    // Fix: Added missing es, fr, de translations for each question to satisfy LocalizedText interface
    { id: 1, part: 'A', dimension: 'inattention_persistence', text: { pt: "Com que frequência você tem dificuldade para terminar os detalhes finais de um projeto, depois que as partes desafiadoras foram concluídas?", en: "Trouble finishing final details after challenging parts are done?", es: "¿Con qué frecuencia tiene dificultad para terminar los detalles finales de un proyecto?", fr: "À quelle fréquence avez-vous du mal à terminer les derniers détails d'un projet ?", de: "Wie oft haben Sie Schwierigkeiten, die letzten Details eines Projekts abzuschließen?" } },
    { id: 2, part: 'A', dimension: 'inattention_organization', text: { pt: "Com que frequência você tem dificuldade para organizar tarefas e atividades?", en: "Difficulty organizing tasks and activities?", es: "¿Con qué frecuencia tiene dificultad para organizar tareas y actividades?", fr: "À quelle fréquence avez-vous du mal à organiser les tâches et les activités ?", de: "Wie oft haben Sie Schwierigkeiten, Aufgaben und Aktivitäten zu organisieren?" } },
    { id: 3, part: 'A', dimension: 'inattention_memory', text: { pt: "Com que frequência você tem problemas para lembrar de compromissos ou obrigações?", en: "Problems remembering appointments or obligations?", es: "¿Con qué frecuencia tiene problemas para recordar citas u obligaciones?", fr: "À quelle fréquence avez-vous du mal à vous souvenir de vos rendez-vous ou obligations ?", de: "Wie oft haben Sie Probleme, sich an Termine oder Verpflichtungen zu erinnern?" } },
    { id: 4, part: 'A', dimension: 'inattention_motivation', text: { pt: "Quando você precisa fazer algo que exige muito raciocínio, com que frequência você evita ou adia começar?", en: "Avoid or delay starting tasks requiring lots of thought?", es: "Cuando necesita hacer algo que requiere mucho esfuerzo mental, ¿con qué frecuencia lo evita?", fr: "Quand vous devez faire quelque chose qui demande beaucoup de réflexion, à quelle fréquence l'évitez-vous ?", de: "Wenn Sie etwas tun müssen, das viel Nachdenken erfordert, wie oft vermeiden oder verschieben Sie den Anfang?" } },
    { id: 5, part: 'A', dimension: 'hyperactivity_physical', text: { pt: "Com que frequência você se mexe na cadeira ou torce as mãos ou os pés quando precisa ficar sentado por muito tempo?", en: "Fidget or squirm when seated for long periods?", es: "¿Con qué frecuencia se retuerce en su asiento o mueve las manos o los pies?", fr: "À quelle fréquence remuez-vous sur votre chaise ou tordez-vous vos mains ou vos pieds ?", de: "Wie oft zappeln Sie auf Ihrem Stuhl oder drehen Ihre Hände oder Füße?" } },
    { id: 6, part: 'A', dimension: 'hyperactivity_internal', text: { pt: "Com que frequência você se sente excessivamente ativo e impelido a fazer coisas, como se estivesse sendo conduzido por um motor?", en: "Feel overly active, as if driven by a motor?", es: "¿Con qué frecuencia se siente excesivamente activo, como impulsado por un motor?", fr: "À quelle fréquence vous sentez-vous excessivement actif et poussé à faire des choses ?", de: "Wie oft fühlen Sie sich übermäßig aktiv und getrieben, Dinge zu tun, als ob Sie von einem Motor angetrieben würden?" } },
    
    // PARTE B
    { id: 7, part: 'B', dimension: 'inattention_sensory', text: { pt: "Com que frequência você se distrai com atividades ou barulho ao seu redor?", en: "Distracted by activity or noise around you?", es: "¿Con qué frecuencia se distrae con las actividades o ruidos a su alrededor?", fr: "À quelle fréquence êtes-vous distrait par les activités ou le bruit autour de vous ?", de: "Wie oft lassen Sie sich von Aktivitäten oder Geräuschen um Sie herum ablenken?" } },
    { id: 8, part: 'B', dimension: 'inattention_memory_spatial', text: { pt: "Com que frequência você esquece onde colocou coisas ou tem dificuldade de encontrar objetos em casa ou no trabalho?", en: "Misplace things or have trouble finding objects?", es: "¿Con qué frecuencia olvida dónde puso las cosas o tiene dificultad para encontrarlas?", fr: "À quelle fréquence oubliez-vous où vous avez mis les choses ?", de: "Wie oft vergessen Sie, wo Sie Dinge hingestellt haben, oder haben Schwierigkeiten, Gegenstände zu finden?" } },
    { id: 9, part: 'B', dimension: 'inattention_sustained', text: { pt: "Com que frequência você tem dificuldade para manter a atenção em tarefas ou atividades recreativas?", en: "Trouble keeping attention on tasks or fun activities?", es: "¿Con qué frecuencia tiene dificultad para mantener la atención en tareas?", fr: "À quelle fréquence avez-vous du mal à maintenir votre attention sur des tâches ?", de: "Wie oft haben Sie Schwierigkeiten, die Aufmerksamkeit bei Aufgaben oder Freizeitaktivitäten aufrechtzuerhalten?" } },
    { id: 10, part: 'B', dimension: 'inattention_listening', text: { pt: "Com que frequência você tem dificuldade para manter o foco em conversas, mesmo quando as pessoas estão falando diretamente com você?", en: "Trouble focusing on conversations when spoken to directly?", es: "¿Con qué frecuencia tiene dificultad para concentrarse en las conversaciones?", fr: "À quelle fréquence avez-vous du mal à rester concentré sur les conversations ?", de: "Wie oft haben Sie Schwierigkeiten, sich auf Gespräche zu konzentrieren, selbst wenn Leute direkt mit Ihnen sprechen?" } },
    { id: 11, part: 'B', dimension: 'hyperactivity_verbal', text: { pt: "Com que frequência você fala demais em situações sociais?", en: "Talk too much in social situations?", es: "¿Con qué frecuencia habla demasiado en situaciones sociales?", fr: "À quelle fréquence parlez-vous trop dans des situations sociales ?", de: "Wie oft reden Sie in sozialen Situationen zu viel?" } },
    { id: 12, part: 'B', dimension: 'impulsivity_communication', text: { pt: "Quando está conversando, com que frequência você termina as frases das pessoas antes delas terminarem?", en: "Finish people's sentences before they are done?", es: "Al conversar, ¿con qué frecuencia termina as frases de las personas antes que ellas?", fr: "En discutant, à quelle fréquence finissez-vous les phrases des gens avant eux ?", de: "Wenn Sie sich unterhalten, wie oft beenden Sie die Sätze anderer Leute, bevor diese fertig sind?" } },
    { id: 13, part: 'B', dimension: 'impulsivity_patience', text: { pt: "Com que frequência você tem dificuldade para esperar sua vez em situações que exigem isso?", en: "Trouble waiting your turn in line or group?", es: "¿Con qué frecuencia tiene dificultad para esperar su turno?", fr: "À quelle fréquence avez-vous du mal à attendre votre tour ?", de: "Wie oft haben Sie Schwierigkeiten, zu warten, bis Sie an der Reihe sind?" } },
    { id: 14, part: 'B', dimension: 'impulsivity_control', text: { pt: "Com que frequência você interrompe os outros quando eles estão ocupados?", en: "Interrupt others when they are busy?", es: "¿Con qué frecuencia interrumpe a los demás cuando estão ocupados?", fr: "À quelle fréquence interrompez-vous les autres quand ils sont occupés ?", de: "Wie oft unterbrechen Sie andere, wenn diese beschäftigt sind?" } },
    { id: 15, part: 'B', dimension: 'inattention_executive', text: { pt: "Com que frequência você tem dificuldade para fazer as coisas em ordem quando precisa fazer uma tarefa que exige organização?", en: "Trouble doing things in order when organizing a task?", es: "¿Con qué frecuencia tiene dificultad para hacer las cosas en orden?", fr: "À quelle fréquence avez-vous du mal à faire les choses dans l'ordre ?", de: "Wie oft haben Sie Schwierigkeiten, Dinge in der richtigen Reihenfolge zu erledigen, wenn Sie eine Aufgabe organisieren müssen?" } },
    { id: 16, part: 'B', dimension: 'inattention_auditory', text: { pt: "Com que frequência você tem dificuldade para prestar atenção no que as pessoas dizem, mesmo quando estão falando diretamente com você?", en: "Trouble paying attention to what people say directly?", es: "¿Con qué frecuencia tiene dificultad para prestar atención a lo que dicen?", fr: "À quelle fréquence avez-vous du mal à prêter attention à ce que les gens disent ?", de: "Wie oft haben Sie Schwierigkeiten, darauf zu achten, was Leute sagen, selbst wenn sie direkt mit Ihnen sprechen?" } },
    { id: 17, part: 'B', dimension: 'inattention_precision', text: { pt: "Com que frequência você comete erros por falta de atenção quando trabalha em projetos chatos ou difíceis?", en: "Careless mistakes on boring or difficult projects?", es: "¿Con qué frecuencia comete errores por falta de atención?", fr: "À quelle fréquence faites-vous des erreurs par manque d'attention ?", de: "Wie oft machen Sie Flüchtigkeitsfehler, wenn Sie an langweiligen oder schwierigen Projekten arbeiten?" } },
    { id: 18, part: 'B', dimension: 'inattention_execution', text: { pt: "Com que frequência você tem dificuldade para seguir instruções ou terminar trabalhos?", en: "Trouble following instructions or finishing work?", es: "¿Con qué frecuencia tiene dificultad para seguir instrucciones?", fr: "À quelle fréquence avez-vous du mal à suivre des instructions ?", de: "Wie oft haben Sie Schwierigkeiten, Anweisungen zu befolgen oder Arbeiten zu beenden?" } }
  ]
};

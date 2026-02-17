import { TestConfig } from '../../types/assessment';

export const gad7Config: TestConfig = {
    id: 'gad7',
    title: {
        pt: 'The Calm Meter (GAD-7)',
        en: 'The Calm Meter (GAD-7)',
        es: 'El Medidor de Calma (GAD-7)',
        fr: 'Le Compteur de Calme (GAD-7)',
        de: 'Das Ruhe-Meter (GAD-7)'
    },
    subtitle: {
        pt: 'Avalie seu nível de ansiedade e aprenda a desacelerar',
        en: 'Assess your anxiety level and learn to slow down',
        es: 'Evalúe su nivel de ansiedad y aprenda a desacelerar',
        fr: 'Évaluez votre niveau d\'anxiété et apprenez à ralentir',
        de: 'Bewerten Sie Ihr Angstniveau und lernen Sie, langsamer zu werden'
    },
    description: {
        pt: 'Uma ferramenta clínica rápida para identificar transtorno de ansiedade generalizada.',
        en: 'A quick clinical tool to identify generalized anxiety disorder.',
        es: 'Una herramienta clínica rápida para identificar el trastorno de ansiedad generalizada.',
        fr: 'Un outil clinique rapide pour identifier le trouble d\'anxiété généralisée.',
        de: 'Ein schnelles klinisches Instrument zur Identifizierung einer generalisierten Angststörung.'
    },
    category: {
        pt: 'Saúde Mental',
        en: 'Mental Health',
        es: 'Salud Mental',
        fr: 'Santé Mentale',
        de: 'Psychische Gesundheit'
    },
    accentColor: 'indigo', // Placeholder, report will force petroleum/sage logic
    reportType: 'gad7',
    scale: [
        { label: { pt: 'Nenhuma vez', en: 'Not at all', es: 'Nunca', fr: 'Jamais', de: 'Überhaupt nicht' }, value: 0 },
        { label: { pt: 'Vários dias', en: 'Several days', es: 'Varios días', fr: 'Plusieurs jours', de: 'An manchen Tagen' }, value: 1 },
        { label: { pt: 'Mais da metade dos dias', en: 'More than half the days', es: 'Más de la mitad de los días', fr: 'Plus de la moitié des jours', de: 'An mehr als der Hälfte der Tage' }, value: 2 },
        { label: { pt: 'Quase todos os dias', en: 'Nearly every day', es: 'Casi todos los días', fr: 'Presque tous les jours', de: 'Beinahe jeden Tag' }, value: 3 },
    ],
    questions: [
        { id: 1, dimension: 'anxiety', text: { pt: 'Sentir-se nervoso, ansioso ou muito tenso', en: 'Feeling nervous, anxious, or on edge', es: 'Sentirse nervioso, ansioso o muy tenso', fr: 'Se sentir nerveux, anxieux ou à bout', de: 'Fühle mich nervös, ängstlich oder angespannt' } },
        { id: 2, dimension: 'anxiety', text: { pt: 'Não ser capaz de impedir ou controlar as preocupações', en: 'Not being able to stop or control worrying', es: 'No poder dejar de preocuparse ni controlar la preocupación', fr: 'Ne pas être capable d\'arrêter ou de contrôler ses inquiétudes', de: 'Nicht in der Lage sein, Sorgen zu stoppen oder zu kontrollieren' } },
        { id: 3, dimension: 'anxiety', text: { pt: 'Preocupar-se muito com diversas coisas', en: 'Worrying too much about different things', es: 'Preocuparse demasiado por diferentes cosas', fr: 'S\'inquiéter trop de choses différentes', de: 'Sich zu viele Sorgen um verschiedene Dinge machen' } },
        { id: 4, dimension: 'anxiety', text: { pt: 'Dificuldade para relaxar', en: 'Trouble relaxing', es: 'Dificultad para relajarse', fr: 'Difficulté à se détendre', de: 'Schwierigkeiten beim Entspannen' } },
        { id: 5, dimension: 'anxiety', text: { pt: 'Ficar tão agitado que se torna difícil permanecer sentado', en: 'Being so restless that it is hard to sit still', es: 'Estar tan inquieto que es difícil quedarse quieto', fr: 'Être si agité qu\'il est difficile de rester assis', de: 'So unruhig sein, dass es schwerfällt, stillzusitzen' } },
        { id: 6, dimension: 'anxiety', text: { pt: 'Ficar facilmente aborrecido ou irritado', en: 'Becoming easily annoyed or irritable', es: 'Irritarse o enfadarse fácilmente', fr: 'Devenir facilement agacé ou irritable', de: 'Leicht genervt oder gereizt werden' } },
        { id: 7, dimension: 'anxiety', text: { pt: 'Sentir medo como se algo horrível fosse acontecer', en: 'Feeling afraid, as if something awful might happen', es: 'Sentir miedo como si algo terrible fuera a suceder', fr: 'Avoir peur comme si quelque chose d\'horrible allait arriver', de: 'Angst haben, als ob etwas Schreckliches passieren würde' } },
    ],
    safetyTrigger: (questionId, value) => {
        // Trigger suicide alert if necessary (not typical for GAD-7 purely, but good practice if extended)
        // GAD-7 doesn't strictly have a suicide question like PHQ-9, but we can monitor high intensity on Q7 (Fear)
        return false;
    }
};

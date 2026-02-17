import { TestConfig } from '../../types/assessment';

export const impostorConfig: TestConfig = {
    id: 'impostor',
    title: {
        pt: 'Decodificador do Impostor (CIPS)',
        en: 'Impostor Syndrome Decoder (CIPS)',
        es: 'Decodificador del Impostor (CIPS)',
        fr: 'Décodeur du Syndrome de l\'Imposteur',
        de: 'Hochstapler-Syndrom-Decoder'
    },
    subtitle: {
        pt: 'Você é uma fraude ou um gênio inseguro?',
        en: 'Are you a fraud or an insecure genius?',
        es: '¿Eres un fraude o un genio inseguro?',
        fr: 'Êtes-vous une fraude ou un génie peu sûr de lui?',
        de: 'Sind Sie ein Betrüger oder ein unsicheres Genie?'
    },
    description: {
        pt: 'Avaliação clínica precisa do Fenômeno do Impostor baseada na Escala Clance (CIPS).',
        en: 'Precise clinical assessment of the Impostor Phenomenon based on the Clance Scale (CIPS).',
        es: 'Evaluación clínica precisa del Fenómeno del Impostor basada en la Escala Clance.',
        fr: 'Évaluation clinique précise du phénomène de l\'imposteur basée sur l\'échelle de Clance.',
        de: 'Präzise klinische Bewertung des Hochstapler-Phänomens basierend auf der Clance-Skala.'
    },
    category: {
        pt: 'Carreira',
        en: 'Career',
        es: 'Carrera',
        fr: 'Carrière',
        de: 'Karriere'
    },
    accentColor: 'indigo',
    reportType: 'impostor',
    scale: [
        { label: { pt: 'Não é verdade', en: 'Not true', es: 'No es verdad', fr: 'Pas vrai', de: 'Nicht wahr' }, value: 1 },
        { label: { pt: 'Raramente', en: 'Rarely', es: 'Raramente', fr: 'Rarement', de: 'Selten' }, value: 2 },
        { label: { pt: 'Às vezes', en: 'Sometimes', es: 'A veces', fr: 'Parfois', de: 'Manchmal' }, value: 3 },
        { label: { pt: 'Frequentemente', en: 'Often', es: 'A menudo', fr: 'Souvent', de: 'Oft' }, value: 4 },
        { label: { pt: 'Muito verdade', en: 'Very true', es: 'Muy cierto', fr: 'Très vrai', de: 'Sehr wahr' }, value: 5 },
    ],
    questions: [
        { id: 1, dimension: 'impostor', text: { pt: 'Muitas vezes, consegui êxito em um teste ou tarefa, mesmo quando temia que não me sairia bem.', en: 'I have often succeeded on a test or task even though I was afraid that I would not do well before I undertook the task.', es: 'A menudo he tenido éxito en una prueba o tarea aunque temía no hacerlo bien.', fr: 'J\'ai souvent réussi un test ou une tâche même si j\'avais peur de ne pas réussir.', de: 'Ich habe oft bei einem Test oder einer Aufgabe Erfolg gehabt, obwohl ich Angst hatte, nicht gut abzuschneiden.' } },
        { id: 2, dimension: 'impostor', text: { pt: 'Posso dar a impressão de que sou mais competente do que realmente sou.', en: 'I can give the impression that I\'m more competent than I really am.', es: 'Puedo dar la impresión de que soy más competente de lo que realmente soy.', fr: 'Je peux donner l\'impression d\'être plus compétent que je ne le suis vraiment.', de: 'Ich kann den Eindruck erwecken, kompetenter zu sein, als ich wirklich bin.' } },
        { id: 3, dimension: 'impostor', text: { pt: 'Procuro evitar avaliações, se possível, e tenho medo de que outros me avaliem.', en: 'I avoid evaluations if possible and have a dread of others evaluating me.', es: 'Evito las evaluaciones si es posible y temo que otros me evalúen.', fr: 'J\'évite les évaluations si possible et je crains que les autres ne m\'évaluent.', de: 'Ich vermeide Bewertungen wenn möglich und fürchte mich davor, von anderen bewertet zu werden.' } },
        { id: 4, dimension: 'impostor', text: { pt: 'Quando as pessoas me elogiam, tenho receio de não satisfazer as expectativas no futuro.', en: 'When people praise me for something I\'ve accomplished, I\'m afraid I won\'t be able to live up to their expectations of me in the future.', es: 'Cuando la gente me elogia, temo no poder cumplir con sus expectativas en el futuro.', fr: 'Quand les gens me félicitent, j\'ai peur de ne pas être à la hauteur de leurs attentes à l\'avenir.', de: 'Wenn Leute mich loben, habe ich Angst, ihren Erwartungen in Zukunft nicht gerecht zu werden.' } },
        { id: 5, dimension: 'impostor', text: { pt: 'Às vezes, penso que obtive meu sucesso porque estava no lugar certo ou conhecia as pessoas certas.', en: 'I sometimes think I obtained my present position or gained my present success because I happened to be in the right place at the right time or knew the right people.', es: 'A veces pienso que obtuve mi éxito porque estaba en el lugar correcto o conocía a las personas adecuadas.', fr: 'Je pense parfois que j\'ai obtenu mon succès parce que j\'étais au bon endroit ou que je connaissais les bonnes personnes.', de: 'Manchmal denke ich, dass ich meinen Erfolg nur hatte, weil ich zur richtigen Zeit am richtigen Ort war.' } },
        { id: 6, dimension: 'impostor', text: { pt: 'Tenho medo de que as pessoas importantes para mim descubram que não sou tão capaz quanto pensam.', en: 'I\'m afraid that people important to me may find out that I\'m not as capable as they think I am.', es: 'Tengo miedo de que las personas importantes para mí descubran que no soy tan capaz como piensan.', fr: 'J\'ai peur que les gens importants pour moi découvrent que je ne suis pas aussi capable qu\'ils le pensent.', de: 'Ich habe Angst, dass wichtige Menschen herausfinden könnten, dass ich nicht so fähig bin, wie sie denken.' } },
        { id: 7, dimension: 'impostor', text: { pt: 'Tendo a me lembrar mais dos incidentes em que não me saí bem do que daqueles em que me saí bem.', en: 'I tend to remember the incidents in which I have not done my best more than those times I have done my best.', es: 'Tiendo a recordar más los incidentes en los que no lo hice bien que aquellos en los que sí.', fr: 'J\'ai tendance à me souvenir davantage des incidents où je n\'ai pas fait de mon mieux.', de: 'Ich neige dazu, mich mehr an die Vorfälle zu erinnern, bei denen ich nicht mein Bestes gegeben habe.' } },
        { id: 8, dimension: 'impostor', text: { pt: 'Raramente faço um projeto ou tarefa tão bem quanto gostaria de fazer.', en: 'I rarely do a project or task as well as I would like to do it.', es: 'Raramente hago un proyecto o tarea tan bien como me gustaría.', fr: 'Je fais rarement un projet ou une tâche aussi bien que je le voudrais.', de: 'Ich mache ein Projekt oder eine Aufgabe selten so gut, wie ich es gerne würde.' } },
        { id: 9, dimension: 'impostor', text: { pt: 'Às vezes, sinto que meu sucesso foi resultado de algum tipo de erro.', en: 'Sometimes I feel or believe that my success in my life or in my job has been the result of some kind of error.', es: 'A veces siento que mi éxito ha sido resultado de algún tipo de error.', fr: 'Parfois, je sens que mon succès est le résultat d\'une erreur.', de: 'Manchmal glaube ich, dass mein Erfolg das Ergebnis eines Fehlers war.' } },
        { id: 10, dimension: 'impostor', text: { pt: 'É difícil para mim aceitar elogios sobre minha inteligência ou realizações.', en: 'It\'s hard for me to accept compliments or praise about my intelligence or accomplishments.', es: 'Es difícil para mí aceptar elogios sobre mi inteligencia o logros.', fr: 'Il m\'est difficile d\'accepter des compliments sur mon intelligence ou mes réalisations.', de: 'Es fällt mir schwer, Komplimente über meine Intelligenz oder Leistungen anzunehmen.' } },
        { id: 11, dimension: 'impostor', text: { pt: 'Às vezes, sinto que o meu sucesso foi devido a algum tipo de sorte.', en: 'At times, I feel my success has been due to some kind of luck.', es: 'A veces siento que mi éxito se debió a algún tipo de suerte.', fr: 'Parfois, je sens que mon succès est dû à la chance.', de: 'Manchmal habe ich das Gefühl, dass mein Erfolg auf Glück zurückzuführen ist.' } },
        { id: 12, dimension: 'impostor', text: { pt: 'Fico desapontado com minhas realizações e acho que deveria ter realizado muito mais.', en: 'I\'m disappointed at times in my present accomplishments and think I should have accomplished much more.', es: 'Estoy decepcionado con mis logros actuales y creo que debería haber logrado mucho más.', fr: 'Je suis déçu de mes réalisations actuelles et je pense que j\'aurais dû accomplir beaucoup plus.', de: 'Ich bin von meinen Leistungen enttäuscht und denke, ich hätte viel mehr erreichen sollen.' } },
        { id: 13, dimension: 'impostor', text: { pt: 'Tenho medo de que os outros descubram a falta de conhecimento que realmente tenho.', en: 'Sometimes I\'m afraid others will discover how much knowledge or ability I really lack.', es: 'Tengo miedo de que otros descubran cuánto conocimiento realmente me falta.', fr: 'J\'ai peur que les autres découvrent à quel point je manque de connaissances.', de: 'Ich habe Angst, dass andere entdecken, wie viel Wissen mir wirklich fehlt.' } },
        { id: 14, dimension: 'impostor', text: { pt: 'Tenho medo de falhar em uma nova tarefa, mesmo que eu geralmente me saia bem.', en: 'I\'m often afraid that I may fail at a new assignment or undertaking even though I generally do well at what I attempt.', es: 'A menudo tengo miedo de fallar en una nueva tarea, aunque generalmente me va bien.', fr: 'J\'ai souvent peur d\'échouer à une nouvelle tâche, même si je réussis généralement bien.', de: 'Ich habe oft Angst, bei einer neuen Aufgabe zu scheitern, auch wenn ich meistens gut abschneide.' } },
        { id: 15, dimension: 'impostor', text: { pt: 'Quando recebo reconhecimento, duvido que possa continuar a repetir esse sucesso.', en: 'When I\'ve succeeded at something and received recognition, I have doubts that I can keep repeating that success.', es: 'Cuando recibo reconocimiento, dudo que pueda repetir ese éxito.', fr: 'Quand je reçois de la reconnaissance, je doute de pouvoir répéter ce succès.', de: 'Wenn ich Anerkennung erhalte, zweifle ich daran, ob ich diesen Erfolg wiederholen kann.' } },
        { id: 16, dimension: 'impostor', text: { pt: 'Se recebo muitos elogios, tendo a desvalorizar a importância do que fiz.', en: 'If I receive a great deal of encouragement and praise, I tend to discount the importance of what I\'ve done.', es: 'Si recibo muchos elogios, tiendo a descontar la importancia de lo que he hecho.', fr: 'Si je reçois beaucoup d\'éloges, j\'ai tendance à minimiser l\'importance de ce que j\'ai fait.', de: 'Wenn ich viel Lob erhalte, neige ich dazu, die Wichtigkeit meiner Leistung herunterzuspielen.' } },
        { id: 17, dimension: 'impostor', text: { pt: 'Comparo minha capacidade com a dos outros e penso que eles podem ser mais inteligentes.', en: 'I often compare my ability to those around me and think they may be more intelligent than I am.', es: 'A menudo comparo mi capacidad con la de los demás y pienso que pueden ser más inteligentes.', fr: 'Je compare souvent mes capacités à celles des autres et je pense qu\'ils sont peut-être plus intelligents.', de: 'Ich vergleiche meine Fähigkeiten oft mit anderen und denke, dass sie intelligenter sein könnten.' } },
        { id: 18, dimension: 'impostor', text: { pt: 'Me preocupo em não ter êxito, mesmo que os outros tenham confiança em mim.', en: 'I often worry about not succeeding with a project or examination, even though others around me have considerable confidence that I will do well.', es: 'A menudo me preocupo por no tener éxito, aunque otros confíen en mí.', fr: 'Je m\'inquiète souvent de ne pas réussir, même si les autres ont confiance en moi.', de: 'Ich mache mir oft Sorgen, keinen Erfolg zu haben, auch wenn andere Vertrauen in mich haben.' } },
        { id: 19, dimension: 'impostor', text: { pt: 'Hesito em contar aos outros sobre promoções até que seja um fato consumado.', en: 'If I\'m going to receive a promotion or gain some kind of recognition, I hesitate to tell others until it is an accomplished fact.', es: 'Dudo en contar a otros sobre promociones hasta que sea un hecho.', fr: 'J\'hésite à parler aux autres de promotions tant que ce n\'est pas un fait accompli.', de: 'Ich zögere, anderen von Beförderungen zu erzählen, bis sie Tatsache sind.' } },
        { id: 20, dimension: 'impostor', text: { pt: 'Sinto-me mal se não sou "o melhor" ou "muito especial" em situações de realização.', en: 'I feel bad and discouraged if I\'m not "the best" or at least "very special" in situations that involve achievement.', es: 'Me siento mal si no soy "el mejor" o "muy especial" en situaciones de logro.', fr: 'Je me sens mal si je ne suis pas "le meilleur" ou "très spécial" dans les situations de réussite.', de: 'Ich fühle mich schlecht, wenn ich in Leistungssituationen nicht "der Beste" oder zumindest "sehr speziell" bin.' } },
    ],
    calculator: null
};

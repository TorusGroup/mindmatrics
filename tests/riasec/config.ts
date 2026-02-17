import { TestConfig } from '../../types/assessment';

export const riasecConfig: TestConfig = {
    id: 'riasec',
    title: {
        pt: 'Bússola de Carreira (RIASEC)',
        en: 'Career Compass (RIASEC)',
        es: 'Brújula de Carrera (RIASEC)',
        fr: 'Boussole de Carrière (RIASEC)',
        de: 'Karriere-Kompass (RIASEC)'
    },
    subtitle: {
        pt: 'Descubra sua vocação profissional com o protocolo O*NET',
        en: 'Discover your professional calling with the O*NET protocol',
        es: 'Descubra su vocación profesional con el protocolo O*NET',
        fr: 'Découvrez votre vocation professionnelle avec le protocole O*NET',
        de: 'Entdecken Sie Ihre berufliche Berufung mit dem O*NET-Protokoll'
    },
    description: {
        pt: 'O teste vocacional mais utilizado no mundo para alinhar personalidade e carreira.',
        en: 'The most widely used vocational test in the world to align personality and career.',
        es: 'La prueba vocacional más utilizada en el mundo para alinear personalidad y carrera.',
        fr: 'Le test d\'orientation professionnelle le plus utilisé au monde pour aligner personnalité et carrière.',
        de: 'Der weltweit am häufigsten verwendete Berufstest zur Abstimmung von Persönlichkeit und Karriere.'
    },
    category: {
        pt: 'Carreira',
        en: 'Career',
        es: 'Carrera',
        fr: 'Carrière',
        de: 'Karriere'
    },
    accentColor: 'petroleum',
    reportType: 'riasec',
    scale: [
        { label: { pt: 'Detestaria', en: 'Hate it', es: 'Lo odiaría', fr: 'Je détesterais', de: 'Würde ich hassen' }, value: 1 },
        { label: { pt: 'Não gostaria', en: 'Dislike it', es: 'No me gustaría', fr: 'J\'aimerais pas', de: 'Würde ich nicht mögen' }, value: 2 },
        { label: { pt: 'Neutro', en: 'Neutral', es: 'Neutro', fr: 'Neutre', de: 'Neutral' }, value: 3 },
        { label: { pt: 'Gostaria', en: 'Like it', es: 'Me gustaría', fr: 'J\'aimerais', de: 'Würde ich mögen' }, value: 4 },
        { label: { pt: 'Adoraria', en: 'Love it', es: 'Me encantaría', fr: 'J\'adorerais', de: 'Würde ich lieben' }, value: 5 },
    ],
    questions: [
        // REALISTIC (R)
        { id: 1, dimension: 'realistic', text: { pt: 'Consertar equipamentos eletrônicos.', en: 'Repair electronic equipment.', es: 'Reparar equipos electrónicos.', fr: 'Réparer des équipements électroniques.', de: 'Elektronische Geräte reparieren.' } },
        { id: 2, dimension: 'realistic', text: { pt: 'Consertar carros.', en: 'Repair cars.', es: 'Reparar coches.', fr: 'Réparer des voitures.', de: 'Autos reparieren.' } },
        { id: 3, dimension: 'realistic', text: { pt: 'Instalar e reparar telefones.', en: 'Install and repair telephones.', es: 'Instalar y reparar teléfonos.', fr: 'Installer et réparer des téléphones.', de: 'Telefone installieren und reparieren.' } },
        { id: 4, dimension: 'realistic', text: { pt: 'Operar máquinas industriais.', en: 'Operate industrial machines.', es: 'Operar máquinas industriales.', fr: 'Opérer des machines industrielles.', de: 'Industriemaschinen bedienen.' } },
        { id: 5, dimension: 'realistic', text: { pt: 'Construir armários de cozinha.', en: 'Build kitchen cabinets.', es: 'Construir gabinetes de cocina.', fr: 'Construire des armoires de cuisine.', de: 'Küchenschränke bauen.' } },
        { id: 6, dimension: 'realistic', text: { pt: 'Assentar tijolos ou azulejos.', en: 'Lay brick or tile.', es: 'Colocar ladrillos o azulejos.', fr: 'Poser des briques ou du carrelage.', de: 'Ziegel oder Fliesen legen.' } },
        { id: 7, dimension: 'realistic', text: { pt: 'Testar a qualidade de peças antes do envio.', en: 'Test the quality of parts before shipment.', es: 'Probar la calidad de las piezas antes del envío.', fr: 'Tester la qualité des pièces avant expédition.', de: 'Die Qualität von Teilen vor dem Versand prüfen.' } },
        { id: 8, dimension: 'realistic', text: { pt: 'Montar componentes eletrônicos.', en: 'Assemble electronic parts.', es: 'Montar componentes electrónicos.', fr: 'Assembler des composants électroniques.', de: 'Elektronische Bauteile montieren.' } },
        { id: 9, dimension: 'realistic', text: { pt: 'Dirigir um caminhão ou trator.', en: 'Drive a truck or tractor.', es: 'Conducir un camión o tractor.', fr: 'Conduire un camion ou un tracteur.', de: 'Einen LKW oder Traktor fahren.' } },
        { id: 10, dimension: 'realistic', text: { pt: 'Trabalhar ao ar livre em qualquer clima.', en: 'Work outdoors in any weather.', es: 'Trabajar al aire libre en cualquier clima.', fr: 'Travailler dehors par tous les temps.', de: 'Bei jedem Wetter draußen arbeiten.' } },

        // INVESTIGATIVE (I)
        { id: 11, dimension: 'investigative', text: { pt: 'Estudar o movimento dos planetas.', en: 'Study the movement of planets.', es: 'Estudiar el movimiento de los planetas.', fr: 'Étudier le mouvement des planètes.', de: 'Die Bewegung der Planeten studieren.' } },
        { id: 12, dimension: 'investigative', text: { pt: 'Desenvolver um novo remédio.', en: 'Develop a new medicine.', es: 'Desarrollar un nuevo medicamento.', fr: 'Développer un nouveau médicament.', de: 'Ein neues Medikament entwickeln.' } },
        { id: 13, dimension: 'investigative', text: { pt: 'Examinar células no microscópio.', en: 'Examine blood samples using a microscope.', es: 'Examinar células en el microscopio.', fr: 'Examiner des cellules au microscope.', de: 'Zellen unter dem Mikroskop untersuchen.' } },
        { id: 14, dimension: 'investigative', text: { pt: 'Analisar a estrutura química de um material.', en: 'Analyze the structure of molecules.', es: 'Analizar la estructura química de un material.', fr: 'Analyser la structure chimique d\'un matériau.', de: 'Die chemische Struktur eines Materials analysieren.' } },
        { id: 15, dimension: 'investigative', text: { pt: 'Fazer estudos científicos de campo.', en: 'Do scientific research in the field.', es: 'Hacer estudios científicos de campo.', fr: 'Faire des études scientifiques sur le terrain.', de: 'Wissenschaftliche Feldstudien durchführen.' } },
        { id: 16, dimension: 'investigative', text: { pt: 'Estudar o comportamento humano.', en: 'Study human behavior.', es: 'Estudiar el comportamiento humano.', fr: 'Étudier le comportement humain.', de: 'Menschliches Verhalten studieren.' } },
        { id: 17, dimension: 'investigative', text: { pt: 'Resolver problemas matemáticos complexos.', en: 'Solve complex math problems.', es: 'Resolver problemas matemáticos complejos.', fr: 'Résoudre des problèmes mathématiques complexes.', de: 'Komplexe mathematische Probleme lösen.' } },
        { id: 18, dimension: 'investigative', text: { pt: 'Realizar testes de laboratório.', en: 'Conduct laboratory tests.', es: 'Realizar pruebas de laboratorio.', fr: 'Effectuer des tests en laboratoire.', de: 'Labortests durchführen.' } },
        { id: 19, dimension: 'investigative', text: { pt: 'Desenvolver novas teorias científicas.', en: 'Develop new scientific theories.', es: 'Desarrollar nuevas teorías científicas.', fr: 'Développer de nouvelles théories scientifiques.', de: 'Neue wissenschaftliche Theorien entwickeln.' } },
        { id: 20, dimension: 'investigative', text: { pt: 'Ler artigos técnicos ou científicos.', en: 'Read technical or scientific articles.', es: 'Leer artículos técnicos o científicos.', fr: 'Lire des articles techniques ou scientifiques.', de: 'Technische oder wissenschaftliche Artikel lesen.' } },

        // ARTISTIC (A)
        { id: 21, dimension: 'artistic', text: { pt: 'Escrever roteiros para filmes ou TV.', en: 'Write scripts for movies or TV.', es: 'Escribir guiones para películas o TV.', fr: 'Écrire des scénarios pour des films ou la télé.', de: 'Drehbücher für Filme oder Fernsehen schreiben.' } },
        { id: 22, dimension: 'artistic', text: { pt: 'Tocar um instrumento musical.', en: 'Play a musical instrument.', es: 'Tocar un instrumento musical.', fr: 'Jouer d\'un instrument de musique.', de: 'Ein Musikinstrument spielen.' } },
        { id: 23, dimension: 'artistic', text: { pt: 'Desenhar cenários para peças de teatro.', en: 'Design sets for plays.', es: 'Diseñar escenarios para obras de teatro.', fr: 'Concevoir des décors pour des pièces de théâtre.', de: 'Bühnenbilder für Theaterstücke entwerfen.' } },
        { id: 24, dimension: 'artistic', text: { pt: 'Criar efeitos especiais para filmes.', en: 'Create special effects for movies.', es: 'Crear efectos especiales para películas.', fr: 'Créer des effets spéciaux pour des films.', de: 'Spezialeffekte für Filme erstellen.' } },
        { id: 25, dimension: 'artistic', text: { pt: 'Pintar quadros.', en: 'Paint pictures.', es: 'Pintar cuadros.', fr: 'Peindre des tableaux.', de: 'Bilder malen.' } },
        { id: 26, dimension: 'artistic', text: { pt: 'Escrever livros ou histórias.', en: 'Write books or stories.', es: 'Escribir libros o historias.', fr: 'Écrire des livres ou des histoires.', de: 'Bücher oder Geschichten schreiben.' } },
        { id: 27, dimension: 'artistic', text: { pt: 'Criar esculturas.', en: 'Create sculptures.', es: 'Crear esculturas.', fr: 'Créer des sculptures.', de: 'Skulpturen erstellen.' } },
        { id: 28, dimension: 'artistic', text: { pt: 'Escrever uma música.', en: 'Compose or arrange music.', es: 'Escribir una canción.', fr: 'Écrire une chanson.', de: 'Ein Lied schreiben.' } },
        { id: 29, dimension: 'artistic', text: { pt: 'Atuar em um filme ou peça.', en: 'Act in a movie or play.', es: 'Actuar en una película u obra.', fr: 'Jouer dans un film ou une pièce.', de: 'In einem Film oder Theaterstück mitspielen.' } },
        { id: 30, dimension: 'artistic', text: { pt: 'Dançar em um espetáculo.', en: 'Dance in a show.', es: 'Bailar en un espectáculo.', fr: 'Danser dans un spectacle.', de: 'In einer Show tanzen.' } },

        // SOCIAL (S)
        { id: 31, dimension: 'social', text: { pt: 'Ensinar exercícios a um grupo.', en: 'Teach an exercise class.', es: 'Enseñar ejercicios a un grupo.', fr: 'Donner un cours de sport.', de: 'Einer Gruppe Übungen beibringen.' } },
        { id: 32, dimension: 'social', text: { pt: 'Ajudar pessoas com problemas pessoais.', en: 'Help people with personal problems.', es: 'Ayudar a personas con problemas personales.', fr: 'Aider des gens avec des problèmes personnels.', de: 'Menschen bei persönlichen Problemen helfen.' } },
        { id: 33, dimension: 'social', text: { pt: 'Cuidar de pessoas doentes.', en: 'Take care of sick people.', es: 'Cuidar de personas enfermas.', fr: 'Prendre soin de personnes malades.', de: 'Kranke Menschen pflegen.' } },
        { id: 34, dimension: 'social', text: { pt: 'Dar aulas para adultos.', en: 'Teach a class to adults.', es: 'Dar clases a adultos.', fr: 'Donner des cours à des adultes.', de: 'Erwachsene unterrichten.' } },
        { id: 35, dimension: 'social', text: { pt: 'Trabalhar como voluntário.', en: 'Do volunteer work.', es: 'Trabajar como voluntario.', fr: 'Travailler comme bénévole.', de: 'Ehrenamtlich arbeiten.' } },
        { id: 36, dimension: 'social', text: { pt: 'Ensinar crianças na escola.', en: 'Teach children.', es: 'Enseñar a niños en la escuela.', fr: 'Enseigner aux enfants à l\'école.', de: 'Kinder in der Schule unterrichten.' } },
        { id: 37, dimension: 'social', text: { pt: 'Aconselhar pessoas sobre carreiras.', en: 'Counsel people about career choices.', es: 'Aconsejar a personas sobre carreras.', fr: 'Conseiller les gens sur leur carrière.', de: 'Menschen bei der Berufswahl beraten.' } },
        { id: 38, dimension: 'social', text: { pt: 'Realizar terapia ou aconselhamento.', en: 'Perform rehabilitation therapy.', es: 'Realizar terapia o asesoramiento.', fr: 'Effectuer une thérapie ou un conseil.', de: 'Therapie oder Beratung durchführen.' } },
        { id: 39, dimension: 'social', text: { pt: 'Ajudar idosos em suas rotinas diárias.', en: 'Assist elderly people with daily activities.', es: 'Ayudar a ancianos en sus rutinas diarias.', fr: 'Aider les personnes âgées au quotidien.', de: 'Älteren Menschen im Alltag helfen.' } },
        { id: 40, dimension: 'social', text: { pt: 'Trabalhar em um hospital ou clínica.', en: 'Work in a hospital or clinic.', es: 'Trabajar en un hospital o clínica.', fr: 'Travailler dans un hôpital ou une clinique.', de: 'In einem Krankenhaus oder einer Klinik arbeiten.' } },

        // ENTERPRISING (E)
        { id: 41, dimension: 'enterprising', text: { pt: 'Comprar e vender ações ou imóveis.', en: 'Buy and sell stocks or real estate.', es: 'Comprar y vender acciones o bienes raíces.', fr: 'Acheter et vendre des actions ou de l\'immobilier.', de: 'Aktien oder Immobilien kaufen und verkaufen.' } },
        { id: 42, dimension: 'enterprising', text: { pt: 'Gerenciar uma loja de varejo.', en: 'Manage a retail store.', es: 'Administrar una tienda minorista.', fr: 'Gérer un magasin de détail.', de: 'Ein Einzelhandelsgeschäft leiten.' } },
        { id: 43, dimension: 'enterprising', text: { pt: 'Operar um salão de beleza ou barbearia.', en: 'Operate a beauty salon or barber shop.', es: 'Operar un salón de belleza o barbería.', fr: 'Gérer un salon de beauté ou de coiffure.', de: 'Einen Schönheitssalon oder Friseursalon betreiben.' } },
        { id: 44, dimension: 'enterprising', text: { pt: 'Gerenciar um departamento em uma grande empresa.', en: 'Manage a department within a large company.', es: 'Administrar un departamento en una gran empresa.', fr: 'Gérer un département dans une grande entreprise.', de: 'Eine Abteilung in einem großen Unternehmen leiten.' } },
        { id: 45, dimension: 'enterprising', text: { pt: 'Iniciar seu próprio negócio.', en: 'Start your own business.', es: 'Iniciar su propio negocio.', fr: 'Lancer sa propre entreprise.', de: 'Sein eigenes Unternehmen gründen.' } },
        { id: 46, dimension: 'enterprising', text: { pt: 'Negociar contratos de negócios.', en: 'Negotiate business contracts.', es: 'Negociar contratos comerciales.', fr: 'Négocier des contrats commerciaux.', de: 'Geschäftsverträge aushandeln.' } },
        { id: 47, dimension: 'enterprising', text: { pt: 'Representar um cliente em um processo judicial.', en: 'Represent a client in a lawsuit.', es: 'Representar a un cliente en una demanda.', fr: 'Représenter un client dans un procès.', de: 'Einen Mandanten in einem Rechtsstreit vertreten.' } },
        { id: 48, dimension: 'enterprising', text: { pt: 'Vender carros ou casas.', en: 'Sell cars or real estate.', es: 'Vender coches o casas.', fr: 'Vendre des voitures ou des maisons.', de: 'Autos oder Häuser verkaufen.' } },
        { id: 49, dimension: 'enterprising', text: { pt: 'Liderar uma equipe de vendas.', en: 'Lead a sales team.', es: 'Liderar un equipo de ventas.', fr: 'Diriger une équipe de vente.', de: 'Ein Verkaufsteam leiten.' } },
        { id: 50, dimension: 'enterprising', text: { pt: 'Fazer discursos públicos.', en: 'Give speeches.', es: 'Dar discursos públicos.', fr: 'Faire des discours publics.', de: 'Öffentliche Reden halten.' } },

        // CONVENTIONAL (C)
        { id: 51, dimension: 'conventional', text: { pt: 'Desenvolver planilhas no computador.', en: 'Develop spreadsheet software.', es: 'Desarrollar hojas de cálculo.', fr: 'Dévelloper des feuilles de calcul.', de: 'Tabellenkalkulationen entwickeln.' } },
        { id: 52, dimension: 'conventional', text: { pt: 'Manter registros de envio e recebimento.', en: 'Keep shipping and receiving records.', es: 'Mantener registros de envío y recepción.', fr: 'Tenir des registres d\'expédition et de réception.', de: 'Versand- und Empfangsprotokolle führen.' } },
        { id: 53, dimension: 'conventional', text: { pt: 'Calcular salários de funcionários.', en: 'Calculate employee wages.', es: 'Calcular salarios de empleados.', fr: 'Calculer les salaires des employés.', de: 'Mitarbeiterlöhne berechnen.' } },
        { id: 54, dimension: 'conventional', text: { pt: 'Fazer inventário de suprimentos.', en: 'Inventory supplies.', es: 'Hacer inventario de suministros.', fr: 'Faire l\'inventaire des fournitures.', de: 'Vorräte inventarisieren.' } },
        { id: 55, dimension: 'conventional', text: { pt: 'Organizar arquivos de escritório.', en: 'Organize office files.', es: 'Organizar archivos de oficina.', fr: 'Organiser des fichiers de bureau.', de: 'Bürodateien organisieren.' } },
        { id: 56, dimension: 'conventional', text: { pt: 'Digitar documentos e relatórios.', en: 'Type text or reports.', es: 'Escribir documentos y reportes.', fr: 'Taper des documents et des rapports.', de: 'Dokumente und Berichte tippen.' } },
        { id: 57, dimension: 'conventional', text: { pt: 'Verificar erros em formulários.', en: 'Check forms for errors.', es: 'Verificar errores en formularios.', fr: 'Vérifier les erreurs sur les formulaires.', de: 'Formulare auf Fehler überprüfen.' } },
        { id: 58, dimension: 'conventional', text: { pt: 'Manter a contabilidade de uma empresa.', en: 'Keep financial records.', es: 'Llevar la contabilidad de una empresa.', fr: 'Tenir la comptabilité d\'une entreprise.', de: 'Buchhaltung führen.' } },
        { id: 59, dimension: 'conventional', text: { pt: 'Operar uma calculadora ou máquina de somar.', en: 'Operate a calculator or adding machine.', es: 'Operar una calculadora.', fr: 'Utiliser une calculatrice.', de: 'Einen Taschenrechner bedienen.' } },
        { id: 60, dimension: 'conventional', text: { pt: 'Seguir procedimentos detalhados de trabalho.', en: 'Follow detailed regulations.', es: 'Seguir procedimientos de trabajo detallados.', fr: 'Suivre des procédures de travail détaillées.', de: 'Detaillierte Arbeitsanweisungen befolgen.' } },
    ],
    safetyTrigger: (questionId, value) => false,
};

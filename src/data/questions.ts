// type : description_projet / client_information / coordonnées 

export interface IQuestion {
    id: string;
    questionLabel: string;
    questionDescription: string | null;
    label: string | null;
    placeholder: string | null;
    answerType: "CHOICE" | "TEXT" | "NUMERIC" | "RANGE" | "FORM";
    answers: {
        value: string | number;
        nextQuestionId?: string;
    }[];
    recap: string;
    section: string;
    isLast?: boolean;

    // FOR FORM //
    fields?: {
        id: string;
        label: string;
        type: "choice" | "text";
        options?: string[];
        placeholder?: string;
        value: string;
    }[]
}


export const question_sections = [
    {
        id: "VOTRE_PROJET",
        label: "Votre projet",
        section: "description_projet"
    },
    {
        id: "VOTRE_INFORMATION",
        label: "Votre information",
        section: "client_information",
    },
    {
        id: "VOTRE_DEVIS",
        label: "Votre devis",
        section: "client_coordonne",
    },
]

export const questions: IQuestion[] = [
    {
        id: "PROJET_TYPE",
        questionLabel: "Votre projet concerne :",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Maison", nextQuestionId: "DATE_CONSTRUCTION" },
            { value: "Appartement", nextQuestionId: "DATE_CONSTRUCTION" }
        ],
        recap: "Projet concerne",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "DATE_CONSTRUCTION",
        questionLabel: 'De quand date la construction du logement concerné par les travaux ?',
        questionDescription: "Cela permet de nous assurer de votre éligibilité aux différentes aides.",
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Moins de 2 ans", nextQuestionId: "CHAUF1" },
            { value: "Entre 2 ans et 15 ans", nextQuestionId: "CHAUF1" },
            { value: "Plus de 15 ans", nextQuestionId: "CHAUF1" },
        ],
        recap: "Date de la construction du logement",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF1",
        questionLabel: "Quelle est l’énergie de chauffage actuelle de votre logement ?",
        questionDescription: "Si vous avez plusieurs énergies de chauffage, indiquez-nous la principale.",
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Chauffage au fioul", nextQuestionId: "CHAUF2" },
            { value: "Chauffage électrique", nextQuestionId: "CHAUF3" },
            { value: "Chauffage au gaz", nextQuestionId: "CHAUF4" },
            { value: "Chauffage au bois", nextQuestionId: "CHAUF5" },
            { value: "Pompe à chaleur", nextQuestionId: "CHAUF5" },
            { value: "Chauffage au charbon", nextQuestionId: "CHAUF5" },
        ],
        recap: "L’énergie de chauffage actuelle",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF2",
        questionLabel: "Quel type d'équipement au fioul est installé ?",
        questionDescription: "Les chaudières installées depuis moins de 10 ans sont généralement à condensation",
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Chaudière à condensation", nextQuestionId: "CHAUF5" },
            { value: "Chaudière classique", nextQuestionId: "CHAUF5" },
            { value: "Poêle", nextQuestionId: "CHAUF5" },
        ],
        recap: "Type d'équipement au fioul installé",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF3",
        questionLabel: "Quel type d'équipement électrique est installé ?",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Chaudière électrique", nextQuestionId: "CHAUF5" },
            { value: "Plafonds ou planchers chauffants", nextQuestionId: "CHAUF5" },
            { value: "Radiateurs électrique", nextQuestionId: "CHAUF5" },
        ],
        recap: "Type d'équipement électrique installé",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF4",
        questionLabel: "Quel type d'équipement au gaz est installé ?",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Chaudière à condensation", nextQuestionId: "CHAUF5" },
            { value: "Chaudière classique", nextQuestionId: "CHAUF5" },
            { value: "Radiateur au gaz", nextQuestionId: "CHAUF5" },
            { value: "Poêle au gaz", nextQuestionId: "CHAUF5" },
        ],
        recap: "Type d'équipement au gaz installé",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF5",
        questionLabel: "Quelle est la surface habitable de votre logement ?",
        questionDescription: null,
        label: "Surface en m²",
        placeholder: null,
        answerType: "TEXT",
        answers: [{ value: '', nextQuestionId: "CHAUF6" }],
        recap: "Surface habitable",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF6",
        questionLabel: "Quel équipement de chauffage souhaitez-vous installer ?",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Une pompe à chaleur", nextQuestionId: "CHAUF7" },
            { value: "Une chaudière", nextQuestionId: "CHAUF9" },
            { value: "Un poêle à bois (granulés ou bûches)", nextQuestionId: "CHAUF10" },
            { value: "Un insert cheminée", nextQuestionId: "CHAUF7" },
            { value: "Des radiateurs électriques", nextQuestionId: "CHAUF11" },
            { value: "Climatisation réversible (Pompe à Chaleur Air/Air)", nextQuestionId: "CHAUF8" },
        ],
        recap: "Type d'équipement de chauffage souhaité",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF7",
        questionLabel: "Quel type de pompe à chaleur souhaitez-vous installer ?",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Pompe à Chaleur Air/Eau", nextQuestionId: "CHAUF8" },
            { value: "Climatisation réversible (Pompe à Chaleur Air/Air)", nextQuestionId: "CHAUF8" },
            { value: "Pompe à Chaleur Géothermique", nextQuestionId: "CHAUF8" },
            { value: "Pompe à Chaleur Hybride", nextQuestionId: "CHAUF8" },
        ],
        recap: "Type de pompe à chaleur souhaité",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF8",
        questionLabel: "Quelle surface sera chauffée par la pompe à chaleur ?",
        answerType: "TEXT",
        questionDescription: "N’indiquez que la surface des pièces que la pompe à chaleur chauffe.",
        label: "Surface en m²",
        placeholder: null,
        answers: [{ value: "", nextQuestionId: "CHAUF12" }],
        recap: "Surface sera chauffé par la pompe à chaleur",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF9",
        questionLabel: "Quel type de chaudière souhaitez-vous installer ?",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Chaudière gaz à condensation", nextQuestionId: "CHAUF12" },
            { value: "Chaudière bois (granulés ou bûches)", nextQuestionId: "CHAUF12" },
            { value: "Chaudière fioul à condensation", nextQuestionId: "CHAUF12" },
        ],
        recap: "Type de chaudière souhaité",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF10",
        questionLabel: "Quel type de poêle à bois souhaitez-vous installer ?",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Un poêle à bûches", nextQuestionId: "CHAUF12" },
            { value: "Un poêle à granulés", nextQuestionId: "CHAUF12" },
        ],
        recap: "Type de poêle à bois souhaité",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF11",
        questionLabel: "Combien de radiateurs souhaitez-vous installer ou remplacer ?",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "NUMERIC",
        answers: [{ value: 1 as number, nextQuestionId: "CHAUF12" }],
        recap: "Nombre de radiateurs souhaité",
        section: "description_projet",
        isLast: false,
    },
    {
        id: "CHAUF12",
        questionLabel: "Où se situe le logement concerné par les travaux ?",
        answerType: "TEXT",
        questionDescription: "Le montant de vos aides peut varier en fonction de votre localisation.",
        label: "Adresse",
        placeholder: "34 rue Victor Hugo, 34800 Claye Mouilly",
        answers: [{ value: "", nextQuestionId: "CHAUF13" }],
        recap: "Addresse pour les travaux",
        section: "client_information",
        isLast: false,
    },
    {
        id: "CHAUF13",
        questionLabel: "Où en êtes-vous dans votre projet ?",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Je réfléchis à mes travaux", nextQuestionId: "CHAUF14" },
            { value: "Je recherche un artisan RGE", nextQuestionId: "CHAUF15" },
            { value: "Je vais signer mon devis", nextQuestionId: "CHAUF15" },
            { value: "J’ai déjà signé mon devis", nextQuestionId: "CHAUF15" },
        ],
        recap: "L'état du projet",
        section: "client_information",
        isLast: false,
    },
    {
        id: "CHAUF14",
        questionLabel: "Quand souhaitez-vous démarrer vos travaux ?",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Le plus tôt possible", nextQuestionId: "CHAUF15" },
            { value: "Dans les 6 prochains mois", nextQuestionId: "CHAUF15" },
        ],
        recap: "Date de démarrer vos travaux",
        section: "client_information",
        isLast: false,
    },
    {
        id: "CHAUF15",
        questionLabel: " Dans ce logement, vous êtes ?",
        questionDescription: null,
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Propriétaire occupant", nextQuestionId: "CHAUF17" },
            { value: "Propriétaire d’une résidence secondaire", nextQuestionId: "CHAUF16" },
            { value: "Propriétaire bailleur", nextQuestionId: "CHAUF16" },
            { value: "Locataire", nextQuestionId: "CHAUF17" },
        ],
        recap: "Votre status par rapport au logement",
        section: "client_information",
        isLast: false,
    },
    {
        id: "CHAUF16",
        questionLabel: "Quel est le code postal de votre résidence principale ?",
        questionDescription: "Le montant de vos aides peut varier en fonction de votre localisation.",
        label: "Code Postal",
        placeholder: "34800",
        answerType: "TEXT",
        answers: [{ value: "", nextQuestionId: "CHAUF17" }],
        recap: "Votre code postale",
        section: "client_information",
        isLast: false,
    },
    {
        id: "CHAUF17",
        questionLabel: "Combien de personnes composent votre foyer, vous compris ?",
        questionDescription: "Le montant de vos aides peut varier en fonction de votre localisation.",
        label: null,
        placeholder: null,
        answerType: "NUMERIC",
        answers: [{ value: 1 as number, nextQuestionId: "CHAUF18" }],
        recap: "Nombre de personne dans votre foyer",
        section: "client_information",
        isLast: false,
    },
    {
        id: "CHAUF18",
        questionLabel: "À combien s'élève le revenu total de votre foyer fiscal ?",
        questionDescription: "Le revenu fiscal de référence est utilisé pour calculer le montant de vos aides au plus juste.",
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Inférieur à 22 320 €", nextQuestionId: "CLIENT1" },
            { value: "Entre 22 320 € et 28 614 €", nextQuestionId: "CLIENT1" },
            { value: "Entre 28 614 € et 42 848 €", nextQuestionId: "CLIENT1" },
            { value: "Supérieur à 42 848 €", nextQuestionId: "CLIENT1" },
        ],
        recap: "Le revenu total de votre foyer fiscal",
        section: "client_information",
        isLast: false,
    },
    {
        id: "CLIENT1",
        questionLabel: "Quel est votre numéro de téléphone ?",
        questionDescription: null,
        label: "Téléphone",
        placeholder: "06 XX XX XX XX",
        answerType: "TEXT",
        answers: [{ value: "", nextQuestionId: "CLIENT2" }],
        recap: "Votre coordonnée téléphonique",
        section: "client_coordonne",
        isLast: false,
    },
    {
        id: "CLIENT2",
        questionLabel: "Vos informations personnelles",
        questionDescription: "Merci de renseigner vos coordonnées.",
        label: null,
        placeholder: null,
        answerType: "CHOICE",
        answers: [
            { value: "Mr.", nextQuestionId: "CLIENT3" },
            { value: "Mme.", nextQuestionId: "CLIENT3" },
            { value: "Autre.", nextQuestionId: "CLIENT3" }
        ],
        recap: "Vous êtes",
        section: "client_coordonne",
        isLast: false,
    },
    {
        id: "CLIENT3",
        questionLabel: "Vos informations personnelles",
        questionDescription: "Merci de renseigner vos coordonnées.",
        label: "Nom",
        placeholder: "Dupont",
        answerType: "TEXT",
        answers: [{ value: "", nextQuestionId: "CLIENT4" }],
        recap: "Votre nom",
        section: "client_coordonne",
        isLast: false,
    },
    {
        id: "CLIENT4",
        questionLabel: "Vos informations personnelles",
        questionDescription: "Merci de renseigner vos coordonnées.",
        label: "Prénom",
        placeholder: "Jean",
        answerType: "TEXT",
        answers: [{ value: ""}],
        recap: "Votre prénom",
        section: "client_coordonne",
        isLast: true,
    },

    // {
    //     id: "CLIENT2",
    //     questionLabel: "Vos informations personnelles",
    //     questionDescription: "Merci de renseigner vos coordonnées.",
    //     label: null,
    //     placeholder: null,
    //     answerType: "FORM",
    //     answers: [
    //         { value: "" }
    //     ],
    //     recap: "Informations personnelles",
    //     section: "client_coordonne",
    //     fields: [
    //         {
    //             id: "genre",
    //             label: "Genre",
    //             type: "choice",
    //             options: ["Homme", "Femme", "Autre"],
    //             value: "",
    //         },
    //         {
    //             id: "firstname",
    //             label: "Prénom",
    //             type: "text",
    //             placeholder: "Jean",
    //             value: "",
    //         },
    //         {
    //             id: "lastname",
    //             label: "Nom",
    //             type: "text",
    //             placeholder: "Dupont",
    //             value: "",
    //         }
    //     ],
    //     isLast: true,
    // }
];
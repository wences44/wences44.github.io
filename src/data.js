const countries = [
  {
    id: 1,
    name: "Austria",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/AT.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/austria/",
        phone: "",
        email: "",
      },
    ],
  },
  {
    id: 2,
    name: "Belgium",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/BE.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/belgium/",
      },
    ],
  },
  {
    id: 3,
    name: "Bulgaria",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/BG.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/bulgaria/",
      },
    ],
  },
  {
    id: 4,
    name: "Croatia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/HR.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/croatia/",
      },
    ],
  },

  {
    id: 5,
    name: "Czech Republic",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CZ.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/czech",
      },
    ],
  },
  {
    id: 6,
    name: "Denmark",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/DK.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/denmark",
      },
    ],
  },
  {
    id: 7,
    name: "Finland",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/FI.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/finland/information-for-people-fleeing-ukraine-seeking-protection-in-finland/",
        phone: "+358 295 790 605",
      },
    ],
  },
  {
    id: 8,
    name: "France",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/france/informations-pour-les-personnes-qui-arrivent-dukraine/",
      },
    ],
  },
  {
    id: 9,
    name: "Georgia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GE.svg",
    entities: [
      {
        id: 1,
        entity: "Ambassador Hotel",
        phone: "Contact +995800800909",
        services:
          "Ambassador Hotel offers free accommodation for Ukrainians in Tbilisi, Kachreti and Gordredzi. in ",
      },
    ],
  },
  {
    id: 10,
    name: "Germany",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
    entities: [
      {
        id: 1,
        entity: "Federal Government",
        url: "https://www.germany4ukraine.de/hilfeportal-en",
        phone: "0800 500 225 0",
        services:
          "residence permit, integration, healthcare, accomodation, report war crime, education, mobility",
      },
      {
        id: 2,
        entity: "Berlin Government",
        url: "https://www.berlin.de/ukraine/en/arrive/",
        phone: "+49 30 90 127 127",
        services: "residence permit, accomodation, support",
      },
      {
        id: 3,
        entity: "Federal Agency",
        url: "https://www.arbeitsagentur.de/ukraine/ukraine-en",
        services: "Employement, financial help",
      },
      {
        id: 4,
        entity: "United Nations",
        url: "https://help.unhcr.org/germany/information-on-ukraine/",
      },
    ],
  },
  {
    id: 11,
    name: "Greece",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GR.svg",
    entities: [
      {
        id: 1,
        entity: "UN Migration",
        url: "https://greece.iom.int/hellenic-integration-support-beneficiaries-international-protection-and-temporary-protection-helios",
        phone: "+30 210 9919040",
      },
      {
        id: 2,
        entity: "UN Refugee Agency",
        url: "https://www.unhcr.org/gr/#_ga=2.2222067.274725204.1682451029-1836247767.1682451029",
      },
    ],
  },
  {
    id: 12,
    name: "Hungary",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/HU.svg",
    entities: [
      {
        id: 1,
        entity: "Ingatlan",
        url: "https://ingatlan.com/",
        services: "Accommodation",
      },
      {
        id: 2,
        entity: "United Nations",
        url: "https://help.unhcr.org/hungary/",
        phone: "+36 80 984 583",
      },
    ],
  },
  {
    id: 13,
    name: "Italy",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/italy/",
        phone: "+36 80 984 583",
      },
    ],
  },
  {
    id: 14,
    name: "Ireland",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/ireland/uk/",
      },
    ],
  },
  {
    id: 15,
    name: "Iceland",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/IS.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/iceland/information-for-people-fleeing-ukraine/",
      },
    ],
  },
  {
    id: 16,
    name: "Moldova",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/MD.svg",
    entities: [
      {
        id: 1,
        entity: "Government",
        url: "https://dopomoga.gov.md/",
        phone: "+0 800 800 11",
      },
      {
        id: 2,
        entity: "CDA",
        url: "https://cda.md/2022/02/24/how-to-apply-for-asylum-in-moldova/",
        phone: "+373 60574848",
        services: "Information on asylum protection",
      },
      {
        id: 3,
        entity: "United Nations",
        url: "https://help.unhcr.org/moldova/",
        phone: "+373 22 780 071",
        email: "office@cnrr.ro",
      },
      {
        id: 4,
        entity: "MedPark Hospital",
        url: "https://www.instagram.com/medparkhospital/?utm_medium=copy_link",
        services: "Free medical advice",
      },
    ],
  },
  {
    id: 17,
    name: "Netherlands",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/netherlands/",
        phone: "+373 22 780 071",
        email: "office@cnrr.ro",
      },
    ],
  },
  {
    id: 18,
    name: "Norway",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/NO.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/norway/",
        phone: "+373 22 780 071",
        email: "office@cnrr.ro",
      },
    ],
  },
  {
    id: 19,
    name: "Poland",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg",
    entities: [
      {
        id: 1,
        entity: "Government",
        url: "https://www.gov.pl/web/mswia-en/information-for-refugees-from-ukraine",
        phone: "+48 47 721 75 75",
        email: "kontakt@mswia.gov.pl",
      },
      {
        id: 2,
        entity: "Kancelaria Prezesa Rady Ministrow",
        url: "https://pomagamukrainie.gov.pl/",
        services: "general information",
      },
      {
        id: 3,
        entity: "Refugees Welcome Program",
        url: "https://refugeeswelcome.pl/refugee-registration",
        services: "accommodation, language courses, adaptation",
      },
      {
        id: 4,
        entity: "United Nations",
        url: "https://help.unhcr.org/poland/information-for-new-arrivals-from-ukraine/",
        phone: "",
      },
    ],
  },
  {
    id: 20,
    name: "Portugal",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/portugal/information-for-people-fleeing-ukraine/",
      },
    ],
  },
  {
    id: 21,
    name: "Romania",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/RO.svg",
    entities: [
      {
        id: 1,
        entity: "National Council for Refugees",
        url: "https://dopomoha.ro/uk",
        phone: "+40 730073170",
        email: "office@cnrr.ro",
        services: "Information, legal counselling",
      },
      {
        id: 2,
        entity: "United Nations",
        url: "https://help.unhcr.org/romania/",
        phone: "(004) 0213126210",
        email: "office@cnrr.ro",
      },
    ],
  },
  {
    id: 22,
    name: "Serbia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/RS.svg",
    entities: [
      {
        id: 1,
        entity: "Government",
        url: "https://help.unhcr.org/serbia/",
      },
    ],
  },
  {
    id: 23,
    name: "Slovakia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/SK.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/slovakia/",
        phone: "",
        email: "",
      },
    ],
  },

  {
    id: 24,
    name: "Slovenia",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/SI.svg",
    entities: [
      {
        id: 1,
        entity: "Government",
        url: "https://www.gov.si/en/topics/slovenias-assistance-to-the-citizens-of-ukraine/",
      },
      {
        id: 2,
        entity: "Study Institutions",
        url: "https://studyinslovenia.si/news/slovenias-assistance-to-the-citizens-of-ukraine/",
        phone: "+386 1478 7530",
      },
      {
        id: 3,
        entity: "United Nations",
        url: "https://www.unhcr.org/countries/slovenia",
      },
    ],
  },
  {
    id: 25,
    name: "Spain",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
    entities: [
      {
        id: 1,
        entity: "Madrid Government",
        url: "https://www.comunidad.madrid/servicios/ucrania",
        phone: "+34 900 822 833",
      },
      {
        id: 2,
        entity: "United Nations",
        url: "https://help.unhcr.org/spain/ucrania-proteccion-en-espana/",
      },
    ],
  },
  {
    id: 26,
    name: "Sweden",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/SE.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/sweden/",
        phone: "",
        email: "",
      },
    ],
  },
  {
    id: 27,
    name: "Switzerland",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CH.svg",
    entities: [
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/switzerland/ukraine",
        phone: "",
        email: "",
      },
    ],
  },
  {
    id: 28,
    name: "United Kingdom",
    flag: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    entities: [
      {
        id: 1,
        entity: "Government Visas ",
        url: "https://taplink.cc/bakhutiklaw",
      },
      {
        id: 1,
        entity: "United Nations",
        url: "https://help.unhcr.org/uk/unhcr-uk-information-and-links-regarding-ukraine/",
        phone: "",
        email: "",
      },
    ],
  },
];
export default countries;

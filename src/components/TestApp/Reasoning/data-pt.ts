import type { ReasoningData } from "@components/TestApp/types";

const names = [
  "Ana",
  "Bruno",
  "Camila",
  "Diego",
  "Eduarda",
  "Felipe",
  "Gabriela",
  "Henrique",
  "Isabela",
  "João",
  "Larissa",
  "Lucas",
  "Mariana",
  "Mateus",
  "Natália",
  "Otávio",
  "Patrícia",
  "Pedro",
  "Rafaela",
  "Ricardo",
  "Sofia",
  "Thiago",
  "Valentina",
  "Vinícius",
  "Amanda",
  "André",
  "Beatriz",
  "Caio",
  "Carolina",
  "Daniel",
  "Elena",
  "Fernando",
  "Fernanda",
  "Gabriel",
  "Helena",
  "Igor",
  "Júlia",
  "Leonardo",
  "Letícia",
  "Marcos",
  "Melissa",
  "Nicolas",
  "Olivia",
  "Paulo",
  "Priscila",
  "Renata",
  "Rodrigo",
  "Samuel",
  "Tatiana",
  "Victor",
  "Alice",
  "Arthur",
  "Bianca",
  "Carlos",
  "Clara",
  "Davi",
  "Débora",
  "Eduardo",
  "Flávia",
  "Gustavo",
  "Ingrid",
  "José",
  "Juliana",
  "Kevin",
  "Laura",
  "Luiza",
  "Marcelo",
  "Miguel",
  "Nina",
  "Raquel",
  "Roberto",
  "Sandra",
  "Sérgio",
  "Teresa",
  "Tomás",
  "Vanessa",
  "Wagner",
  "Yasmin",
  "Alexandre",
  "Aline",
  "Bernardo",
  "Cristina",
  "Douglas",
  "Elisa",
  "Fábio",
  "Giovana",
  "Hugo",
  "Irene",
  "Jefferson",
  "Karina",
  "Leandro",
  "Mônica",
  "Nathan",
  "Paula",
  "Ronaldo",
  "Simone",
  "Tiago",
  "Úrsula",
  "Vitor",
  "William",
  "Xavier",
  "Zélia",
];

const comparisons = [
  {
    s: [
      ["é mais forte que", "não é tão débil quanto"],
      ["é mais débil que", "não é tão forte quanto"],
    ],
    q: [
      ["mais forte", "menos débil"],
      ["mais débil", "menos forte"],
    ],
  },
  {
    s: [
      ["é mais inteligente que", "não é tão obtuso quanto"],
      ["é mais obtuso que", "não é tão inteligente quanto"],
    ],
    q: [
      ["mais inteligente", "menos obtuso"],
      ["mais obtuso", "menos inteligente"],
    ],
  },
  {
    s: [
      ["tem mais altura que", "não tem tão pouca altura quanto"],
      ["tem menos altura que", "não tem tanta altura quanto"],
    ],
    q: [
      ["de maior altura", "de maior altura"],
      ["de menor altura", "de menor altura"],
    ],
  },
  {
    s: [
      ["é mais valente que", "não é tão covarde quanto"],
      ["é mais covarde que", "não é tão valente quanto"],
    ],
    q: [
      ["mais valente", "menos covarde"],
      ["mais covarde", "menos valente"],
    ],
  },
  {
    s: [
      ["é mais gentil que", "não é tão cruel quanto"],
      ["é mais cruel que", "não é tão gentil quanto"],
    ],
    q: [
      ["mais gentil", "menos cruel"],
      ["mais cruel", "menos gentil"],
    ],
  },
  {
    s: [
      ["é mais divertido que", "não é tão grave quanto"],
      ["é mais grave que", "não é tão cômico quanto"],
    ],
    q: [
      ["mais cômico", "menos grave"],
      ["mais grave", "menos cômico"],
    ],
  },
  {
    s: [
      ["é mais amigável que", "não é tão hostil quanto"],
      ["é mais hostil que", "não é tão amigável quanto"],
    ],
    q: [
      ["mais amigável", "menos hostil"],
      ["mais hostil", "menos amigável"],
    ],
  },
  {
    s: [
      ["é mais magnânimo que", "não é tão egoísta quanto"],
      ["é mais egoísta que", "não é tão altruísta quanto"],
    ],
    q: [
      ["mais altruísta", "menos egoísta"],
      ["mais egoísta", "menos altruísta"],
    ],
  },
  {
    s: [
      ["é mais confiante que", "não é tão instável quanto"],
      ["é mais instável que", "não é tão confiante quanto"],
    ],
    q: [
      ["mais confiante", "menos instável"],
      ["mais instável", "menos confiante"],
    ],
  },
  {
    s: [
      ["é mais tranquilo que", "não é tão tenso quanto"],
      ["é mais inquieto que", "não é tão pacífico quanto"],
    ],
    q: [
      ["mais pacífico", "menos tenso"],
      ["mais tenso", "menos pacífico"],
    ],
  },
  {
    s: [
      ["é mais otimista que", "não é tão pessimista quanto"],
      ["é mais pessimista que", "não é tão otimista quanto"],
    ],
    q: [
      ["mais otimista", "menos pessimista"],
      ["mais pessimista", "menos otimista"],
    ],
  },
  {
    s: [
      ["é mais persistente que", "não é tão indolente quanto"],
      ["é mais indolente que", "não é tão persistente quanto"],
    ],
    q: [
      ["mais persistente", "menos indolente"],
      ["mais indolente", "menos persistente"],
    ],
  },
  {
    s: [
      ["é mais responsável que", "não é tão negligente quanto"],
      ["é mais negligente que", "não é tão responsável quanto"],
    ],
    q: [
      ["mais responsável", "menos negligente"],
      ["mais negligente", "menos responsável"],
    ],
  },
  {
    s: [
      ["é mais humano que", "não é tão insensível quanto"],
      ["é mais insensível que", "não é tão solidário quanto"],
    ],
    q: [
      ["mais solidário", "menos insensível"],
      ["mais insensível", "menos solidário"],
    ],
  },
  {
    s: [
      ["é mais original que", "não é tão convencional quanto"],
      ["é mais convencional que", "não é tão inventivo quanto"],
    ],
    q: [
      ["mais inventivo", "menos convencional"],
      ["mais convencional", "menos inventivo"],
    ],
  },
  {
    s: [
      ["é mais diligente que", "não é tão imprudente quanto"],
      ["é mais imprudente que", "não é tão diligente quanto"],
    ],
    q: [
      ["mais diligente", "menos imprudente"],
      ["mais imprudente", "menos diligente"],
    ],
  },
  {
    s: [
      ["é mais atraente que", "não é tão desagradável quanto"],
      ["é mais desagradável que", "não é tão atraente quanto"],
    ],
    q: [
      ["mais atraente", "menos desagradável"],
      ["mais desagradável", "menos atraente"],
    ],
  },
  {
    s: [
      ["é mais ético que", "não é tão fraudulento quanto"],
      ["é mais ardiloso que", "não é tão ético quanto"],
    ],
    q: [
      ["mais ético", "menos fraudulento"],
      ["mais fraudulento", "menos ético"],
    ],
  },
  {
    s: [
      ["é mais paciente que", "não é tão impaciente quanto"],
      ["é mais impaciente que", "não é tão paciente quanto"],
    ],
    q: [
      ["mais paciente", "menos impaciente"],
      ["mais impaciente", "menos paciente"],
    ],
  },
  {
    s: [
      ["é mais aberto que", "não é tão hermético quanto"],
      ["é mais hermético que", "não é tão inclusivo quanto"],
    ],
    q: [
      ["mais inclusivo", "menos hermético"],
      ["mais hermético", "menos inclusivo"],
    ],
  },
  {
    s: [
      ["é mais cortês que", "não é tão rude quanto"],
      ["é mais rude que", "não é tão cortês quanto"],
    ],
    q: [
      ["mais cortês", "menos rude"],
      ["mais rude", "menos cortês"],
    ],
  },
  {
    s: [
      ["é mais sistemático que", "não é tão desorganizado quanto"],
      ["é mais confuso que", "não é tão sistemático quanto"],
    ],
    q: [
      ["mais sistemático", "menos desorganizado"],
      ["mais desorganizado", "menos sistemático"],
    ],
  },
  {
    s: [
      ["é mais prudente que", "não é tão pueril quanto"],
      ["é mais pueril que", "não é tão sensato quanto"],
    ],
    q: [
      ["mais sensato", "menos pueril"],
      ["mais pueril", "menos sensato"],
    ],
  },
  {
    s: [
      ["é mais flexível que", "não é tão inflexível quanto"],
      ["é mais inflexível que", "não é tão flexível quanto"],
    ],
    q: [
      ["mais flexível", "menos inflexível"],
      ["mais inflexível", "menos flexível"],
    ],
  },
  {
    s: [
      ["é mais humilde que", "não é tão arrogante quanto"],
      ["é mais arrogante que", "não é tão humilde quanto"],
    ],
    q: [
      ["mais humilde", "menos arrogante"],
      ["mais arrogante", "menos humilde"],
    ],
  },
  {
    s: [
      ["é mais cativante que", "não é tão entediante quanto"],
      ["é mais entediante que", "não é tão cativante quanto"],
    ],
    q: [
      ["mais cativante", "menos entediante"],
      ["mais entediante", "menos cativante"],
    ],
  },
  {
    s: [
      ["é mais confiável que", "não é tão questionável quanto"],
      ["é mais questionável que", "não é tão confiável quanto"],
    ],
    q: [
      ["mais confiável", "menos questionável"],
      ["mais questionável", "menos confiável"],
    ],
  },
  {
    s: [
      ["é mais ardente que", "não é tão indiferente quanto"],
      ["é mais indiferente que", "não é tão ardente quanto"],
    ],
    q: [
      ["mais ardente", "menos indiferente"],
      ["mais indiferente", "menos ardente"],
    ],
  },
  {
    s: [
      ["é mais tolerante que", "não é tão crítico quanto"],
      ["é mais crítico que", "não é tão tolerante quanto"],
    ],
    q: [
      ["mais tolerante", "menos crítico"],
      ["mais crítico", "menos tolerante"],
    ],
  },
  {
    s: [
      ["é mais tolerante que", "não é tão intolerante quanto"],
      ["é mais intolerante que", "não é tão tolerante quanto"],
    ],
    q: [
      ["mais tolerante", "menos intolerante"],
      ["mais intolerante", "menos tolerante"],
    ],
  },
  {
    s: [
      ["é mais indulgente que", "não é tão retaliativo quanto"],
      ["é mais retaliativo que", "não é tão indulgente quanto"],
    ],
    q: [
      ["mais indulgente", "menos retaliativo"],
      ["mais retaliativo", "menos indulgente"],
    ],
  },
  {
    s: [
      ["é mais ágil que", "não é tão lerdo quanto"],
      ["é mais lerdo que", "não é tão ágil quanto"],
    ],
    q: [
      ["mais ágil", "menos lerdo"],
      ["mais lerdo", "menos ágil"],
    ],
  },
  {
    s: [
      ["é mais simples que", "não é tão extravagante quanto"],
      ["é mais extravagante que", "não é tão simples quanto"],
    ],
    q: [
      ["mais simples", "menos extravagante"],
      ["mais extravagante", "menos simples"],
    ],
  },
  {
    s: [
      ["é mais franco que", "não é tão hipócrita quanto"],
      ["é mais hipócrita que", "não é tão franco quanto"],
    ],
    q: [
      ["mais franco", "menos hipócrita"],
      ["mais hipócrita", "menos franco"],
    ],
  },
  {
    s: [
      ["é mais previdente que", "não é tão impulsivo quanto"],
      ["é mais precipitado que", "não é tão preveniente quanto"],
    ],
    q: [
      ["mais preveniente", "menos impulsivo"],
      ["mais impulsivo", "menos preveniente"],
    ],
  },
  {
    s: [
      ["é mais tenaz que", "não é tão hesitante quanto"],
      ["é mais hesitante que", "não é tão tenaz quanto"],
    ],
    q: [
      ["mais tenaz", "menos hesitante"],
      ["mais hesitante", "menos tenaz"],
    ],
  },
  {
    s: [
      ["é mais verdadeiro que", "não é tão artificial quanto"],
      ["é mais forçado que", "não é tão autêntico quanto"],
    ],
    q: [
      ["mais autêntico", "menos artificial"],
      ["mais artificial", "menos autêntico"],
    ],
  },
  {
    s: [
      ["é mais entusiasta que", "não é tão indiferente quanto"],
      ["é mais indiferente que", "não é tão entusiasta quanto"],
    ],
    q: [
      ["mais entusiasta", "menos indiferente"],
      ["mais indiferente", "menos entusiasta"],
    ],
  },
  {
    s: [
      ["é mais vigilante que", "não é tão disperso quanto"],
      ["é mais disperso que", "não é tão vigilante quanto"],
    ],
    q: [
      ["mais vigilante", "menos disperso"],
      ["mais disperso", "menos vigilante"],
    ],
  },
  {
    s: [
      ["é mais cortês que", "não é tão insolente quanto"],
      ["é mais insolente que", "não é tão cortês quanto"],
    ],
    q: [
      ["mais cortês", "menos insolente"],
      ["mais insolente", "menos cortês"],
    ],
  },
  {
    s: [
      ["é mais acessível que", "não é tão intimidante quanto"],
      ["é mais intimidante que", "não é tão acessível quanto"],
    ],
    q: [
      ["mais acessível", "menos intimidante"],
      ["mais intimidante", "menos acessível"],
    ],
  },
  {
    s: [
      ["é mais imprevisível que", "não é tão previsível quanto"],
      ["é mais previsível que", "não é tão improvisado quanto"],
    ],
    q: [
      ["mais improvisado", "menos previsível"],
      ["mais previsível", "menos improvisado"],
    ],
  },
  {
    s: [
      ["é mais cauteloso que", "não é tão franco quanto"],
      ["é mais franco que", "não é tão cauteloso quanto"],
    ],
    q: [
      ["mais cauteloso", "menos franco"],
      ["mais franco", "menos cauteloso"],
    ],
  },
  {
    s: [
      ["é mais leal que", "não é tão desleal quanto"],
      ["é mais desleal que", "não é tão leal quanto"],
    ],
    q: [
      ["mais leal", "menos desleal"],
      ["mais desleal", "menos leal"],
    ],
  },
  {
    s: [
      ["é mais prudente que", "não é tão imprudente quanto"],
      ["é mais imprudente que", "não é tão prudente quanto"],
    ],
    q: [
      ["mais prudente", "menos imprudente"],
      ["mais imprudente", "menos prudente"],
    ],
  },
  {
    s: [
      ["é mais cooperante que", "não é tão individualista quanto"],
      ["é mais individualista que", "não é tão colaborativo quanto"],
    ],
    q: [
      ["mais colaborativo", "menos individualista"],
      ["mais individualista", "menos colaborativo"],
    ],
  },
  {
    s: [
      ["é mais diligente que", "não é tão negligente quanto"],
      ["é mais negligente que", "não é tão diligente quanto"],
    ],
    q: [
      ["mais diligente", "menos negligente"],
      ["mais negligente", "menos diligente"],
    ],
  },
  {
    s: [
      ["é mais amável que", "não é tão distante quanto"],
      ["é mais arredio que", "não é tão amável quanto"],
    ],
    q: [
      ["mais amável", "menos distante"],
      ["mais distante", "menos amável"],
    ],
  },
  {
    s: [
      ["é mais prudente que", "não é tão irracional quanto"],
      ["é mais irracional que", "não é tão prudente quanto"],
    ],
    q: [
      ["mais prudente", "menos irracional"],
      ["mais irracional", "menos prudente"],
    ],
  },
] satisfies ReasoningData["comparisons"];

export default {
  names,
  comparisons,
  question: "Quem é",
} satisfies ReasoningData;

/**
 * Sýnilausn á verkefni 7 í vef1 2025.
 *
 * Notar jsdoc fyrir skjölun og týpur.
 * Hægt að kveikja á `Check JS` og `Strict Null Checks` í VSCode til að fá
 * ábendingar um hvar hlutir geti bilað.
 *
 * Munið að þetta verkefni skal skrifað af ykkur án hjálpar mállíkans.
 * Agents, models and other LLMs or AI tools must not be used to implement this
 * assignment. They can be used to help with understanding concepts and if that
 * is done, include a link to the chat via sharing.
 */

/** @typedef {Object} TodoItem
 * @property {string} text - Texti verkefnis.
 * @property {boolean} finished - Hvort verkefni sé klárað eða ekki.
 */

/** Verkefnalistinn okkar, hann mun innihalda hluti (objects) af týpu
 * `TodoItem`.
 * Með því að skilgreina týpuna og kveikja á `Check JS` í VSCode fáum við villu
 * ef við reynum að setja eitthvað annað en `TodoItem` í listann.
 * @type {TodoItem[]}
 */
const todoList = [
  // Hér er hægt að fjarlægja komment til að hafa nokkur verkefni í byrjun
  // Ekki skila með þessu inni.
  { text: "Læra CSS", finished: true },
  { text: "Læra JavaScript", finished: false },
  { text: "Búa til verkefnalista", finished: false },
];

//------------------------------------------------------------------------------
// Föll sem vinna með verkefnalistann

console.log("halló frá scripts.js");

/**
 * Búa til verkefni og bæta því aftast í verkefnalistann.
 * @param {unknown} input - Texti verkefnis, ætti að vera strengur.
 * @returns {number} Ný stærð verkefnalistans.
 */
function createTodoItem(input) {
  if (typeof input === "string") {
    const item = {
      text: input,
      finished: false,
    };

    return todoList.push(item);
  }

  console.error("input verður að vera strengur, en var", typeof input);
  return -1;
}

/**
 * Birtir verkefnalistann í console.
 */
function list() {
  for (const todoItem of todoList) {
    console.log(todoItem.text, "er", todoItem.finished ? "búið" : "ekki búið");
  }
}

/**
 * Breytir stöðu verkefnis í „klárað“ eða „óklárað“.
 * @param {unknown} index - Index verkefnis í lista, verður að vera á bilinu
 *   [0, todoList.length], ætti að vera tala
 * @returns {boolean} - `true` ef breyting tókst, annars `false`.
 */
function toggleFinished(index) {
  /* TODO útfæra */
}

/**
 * Skrifar út stöðu verkefnalistans í console.
 */
function stats() {
  /* TODO útfæra */
}

/**
 * Tæma verkefnalistann.
 */
function clear() {
  /* TODO útfæra */
}

/**
 * Leiðbeint ferli til að bæta verkefnum við, sýnir síðan lista og stöðu.
 */
function start() {
  /* TODO útfæra */
}

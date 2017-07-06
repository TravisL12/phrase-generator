const words = [
    "somebody", "once", "told", "me", "the", "world", "is", "gonna", "roll", "me",
    "ain't", "the", "sharpest", "tool", "in", "the", "shed", "she", "was",
    "looking", "kind", "of", "dumb", "with", "her", "finger", "and", "her", "thumb",
    "in", "the", "shape", "of", "an", "on", "her", "forehead", "well", "the",
    "years", "start", "coming", "and", "they", "don't", "stop", "coming", "fed", "to",
    "the", "rules", "and", "I", "hit", "the", "ground", "running", "didn't",
    "make", "sense", "not", "to", "live", "for", "fun", "your", "brain", "gets",
    "smart", "but", "your", "head", "gets", "dumb", "so", "much", "to", "do", "so"
];

const bodyEl = document.querySelector('.container');
let lastPhrase;

function randomizer (max, min) {
    min = min || 0;
    max = max || 1;

    return Math.round(Math.random() * (max - min) + min);
}

function titleCase (text) {
    return text.slice(0,1).toUpperCase() + text.slice(1);
}

function savePhrase (phrase) {
    let el = document.createElement('div');
    el.classList = 'previous-phrase';
    el.innerHTML = `<h3>${phrase}</h3>`;

    el.style.top = randomizer(90, 10) + '%';
    el.style.left = randomizer(90, 10) + '%';

    bodyEl.appendChild(el);
}

function phraseGenerator () {
    const phraseLength = 3;
    let oath = [];
    for (let i = 0; i < phraseLength; i++) {
        oath.push(words[randomizer(words.length - 1)]);
    }
    let phrase = oath.join(' ');
    return titleCase(phrase);
}

function buildOath (el) {
    textEl = document.getElementById(el);
    const phrase = phraseGenerator();
    textEl.textContent = phrase;
    savePhrase(phrase);
}

class OathGenerator {

    constructor (buttonEl) {
        this.buttonEl = document.getElementById(buttonEl);
        this.buttonEl.addEventListener('click', (e) => {
            buildOath('your-oath');
        });
    }

}

const generatorBtn = new OathGenerator('generator-button');

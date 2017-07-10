const verbs = [
    'create', 'build', 'invent', 'run', 'jump', 'skip', 'start', 'roll', 'told', 'look'
];

const adjectives = [
    'good', 'bad', 'fat', 'skinny', 'tall', 'short', 'gross', 'happy'
];

const pluralNouns = [
    'cats', 'dogs', 'frogs', 'stars', 'songs', 'projects', 'fingers',
    'tools', 'sheds', 'thumbs', 'foreheads', 'brains', 'heads',
];

const bodyEl = document.querySelector('.container');

class OathGenerator {

    constructor (buttonEl) {
        this.buttonEl = document.getElementById(buttonEl);
        this.buttonEl.addEventListener('click', (e) => {
            this.buildOath('your-oath');
        });
    }

    randomizer (max, min) {
        min = min || 0;
        max = max || 1;

        return Math.round(Math.random() * (max - min) + min);
    }

    titleCase (text) {
        return text.slice(0,1).toUpperCase() + text.slice(1);
    }

    savePhrase (phrase) {
        let el = document.createElement('div');
        el.classList = 'previous-phrase';
        el.innerHTML = `<h3>${phrase}</h3>`;

        el.style.top = this.randomizer(90, 10) + '%';
        el.style.left = this.randomizer(90, 10) + '%';

        bodyEl.appendChild(el);
    }

    phraseGenerator () {
        const phraseLength = 3;
        let oath = [];
        
        oath.push(verbs[this.randomizer(verbs.length - 1)]);
        oath.push(adjectives[this.randomizer(adjectives.length - 1)]);
        oath.push(pluralNouns[this.randomizer(pluralNouns.length - 1)]);

        let phrase = oath.join(' ');
        return this.titleCase(phrase);
    }

    buildOath (el) {
        let textEl = document.getElementById(el);
        const phrase = this.phraseGenerator();
        textEl.textContent = phrase;
        this.savePhrase(phrase);
    }

}

const generatorBtn = new OathGenerator('generator-button');

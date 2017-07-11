const verbs = [
    'agree','support','hit','produce','eat','cover','catch','draw','choose',
    'appear','buy','serve','die','send','build','stay','fall','cut','reach','kill','raise',
    'be','have','do','say','go','get','make','know','think','take','see','come','want',
    'continue','set','learn','change','lead','understand','watch','follow','stop','create',
    'create', 'build', 'invent', 'run', 'jump', 'skip', 'start', 'roll', 'told', 'look',
    'live','believe','bring','happen','write','sit','stand','lose','pay','meet','include',
    'pass','sell','decide','return','explain','hope','develop','carry','break','receive',
    'put','mean','keep','let','begin','seem','help','show','hear','play','run','move',
    'speak','read','spend','grow','open','walk','win','teach','offer','remember','consider',
    'use','find','give','tell','work','call','try','ask','need','feel','become','leave'
];

const adjectives = [
    'able','abundant','adorable','agreeable','alive','ancient','angry',
    'bad','beautiful','better','bewildered','big','big','bitter','black',
    'blue','boiling','brave','breeze','brief','broad','broken','bumpy',
    'calm','careful','chilly','chubby','clean','clever','clumsy','cold',
    'colossal','cooing','cool','creepy','crooked','crooked','cuddly',
    'curly','curved','damaged','damp','dead','deafening','deep','defeated',
    'delicious','delightful','different','dirty','drab','dry','dusty','eager',
    'early','early','easy','elegant','embarrassed','empty','faint',
    'faithful','famous','fancy','fast','fat','few','few','fierce',
    'filthy','first','flaky','flat','fluffy','freezing','fresh','full',
    'gentle','gifted','gigantic','glamorous','good','gray','greasy','great',
    'good', 'bad', 'fat', 'skinny', 'tall', 'short', 'gross', 'happy',
    'great','green','grumpy','handsome','happy','heavy','helpful','helpless',
    'high','high','hissing','hollow','hot','hot','huge','icy','immense',
    'important','important','inexpensive','itchy','jealous','jolly','juicy',
    'kind','large','large','last','late','lazy','light','little','little',
    'lively','long','long','long','loose','loud','low','magnificent','mammoth',
    'many','massive','melodic','melted','miniature','modern','mushy','mysterious',
    'narrow','nervous','new','next','nice','noisy','numerous','nutritious','obedient',
    'obnoxious','odd','old','old','old-fashioned','old-fashioned','orange',
    'other','own','panicky','petite','plain','powerful','prickly','proud','public',
    'puny','purple','purring','quaint','quick','quiet','rainy','rapid','raspy',
    'red','relieved','repulsive','rich','right','rotten','round','salty','same',
    'scary','scrawny','screeching','shallow','short','short','shy','silly','skinny',
    'slow','small','small','sparkling','sparse','square','steep','sticky','straight',
    'strong','substantial','sweet','swift','tall','tart','tasteless','teeny','teeny-tiny',
    'tender','thankful','thoughtless','thundering','tiny','ugliest','uneven',
    'uninterested','unsightly','uptight','vast','victorious','voiceless','warm',
    'weak','wet','wet','whispering','white','wide','wide-eyed','witty','wooden',
    'worried','wrong','yellow','young','young','yummy','zealous',
];

const pluralNouns = [
    'airs','areas','arts','backs','bodys','books','businesses','cars','cases',
    'cats', 'dogs', 'frogs', 'stars', 'songs', 'projects', 'fingers',
    'changes','childs','citys','communitys','companys','countrys','days','doors',
    'educations','ends','eyes','faces','facts','familys','fathers','forces','friends',
    'games','girls','governments','groups','guys','hands','heads','healths',
    'historys','homes','hours','houses','ideas','informations','issues','jobs',
    'kids','kinds','laws','levels','lifes','lines','lots','mans','members','minutes',
    'moments','moneys','months','mornings','mothers','names','nights','numbers',
    'offices','others','parents','parts','partys','peoples','persons','places',
    'points','powers','presidents','problems','programs','questions','reasons',
    'researchs','results','rights','rooms','schools','services','sides','states',
    'storys','students','studys','systems','teachers','teams','things','times',
    'tools', 'sheds', 'thumbs', 'foreheads', 'brains', 'heads',
    'wars','waters','ways','weeks','womans','words','works','worlds','years',
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

    getWord (dict) {
        return dict[this.randomizer(dict.length - 1)];
    }

    phraseGenerator () {        
        const verb = this.getWord(verbs);
        const adjective = this.getWord(adjectives);
        const noun = this.getWord(pluralNouns);

        return this.titleCase(`${verb} ${adjective} ${noun}`);
    }

    buildOath (el) {
        let textEl = document.getElementById(el);
        const phrase = this.phraseGenerator();
        textEl.textContent = phrase;
        this.savePhrase(phrase);
    }

}

const generatorBtn = new OathGenerator('generator-button');

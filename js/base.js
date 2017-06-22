
t = Math.round( 3 * Math.random() - 0.5 ); // tenses
f = Math.round( 3 * Math.random() - 0.5 ); // forms
p = Math.round( 6 * Math.random() - 0.5 ); // pronouns
p2 = Math.round( 6 * Math.random() - 0.5 ); 
p3 = Math.round( 6 * Math.random() - 0.5 ); // притяжательные

v12 = Math.round( 12 * Math.random() - 0.5 );
v50 = Math.round( 50 * Math.random() - 0.5 ); // verbs
v174 = Math.round( 174 * Math.random() - 0.5 );
q = Math.round( 6 * Math.random() - 0.5 ); // questions
num = Math.round( 2 * Math.random() - 0.5 ); // number
a50 = Math.round( 6 * Math.random() - 0.5 ); // adj
n202 = Math.round( 6 * Math.random() - 0.5 ); // noun
subs = Math.round( 17 * Math.random() - 0.5 ); // subjects
ap = Math.round( 8 * Math.random() - 0.5 ); // absprons


var tenses = [
"past", 
"present", 
"future"
];

var forms = [
"-", 
"+", 
"?"
];

var v12en = [
"love", 
"live", 
"work", 
"open", 
"close", 
"see", 
"come", 
"go", 
"know", 
"think", 
"start", 
"finish"
];

var v12en2 = [
"loved", 
"lived", 
"worked", 
"opened", 
"closed", 
"saw", 
"came", 
"went", 
"knew", 
"thought", 
"started", 
"finished"
];

var v12ru = [
"любить", 
"жить", 
"работать", 
"открыть", 
"закрыть", 
"видеть", 
"приходить", 
"идти", 
"знать", 
"думать", 
"начать", 
"закончить"
];










var absprons = [
"мой</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>mine [maɪn]", 
"твой, ваш</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>yours [jɔːz, jərz]", 
"его</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>his [hɪz]", 
"ее</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>hers [hɜː(r)z]", 
"его, ее</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>its [ɪts]", 
"наш</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>ours [ɑːz, ɑːrz]", 
"ваш</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>yours [jɔː(r), jʊr]", 
"их</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>theirs [ðeəz, ðerz]"
];

var prons = [
"я</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>I  [aɪ]", 
"ты</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>you  [ju]", 
"мы</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>we  [wi]", 
"они</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>they  [ðeɪ]", 
"он</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>he  [hi]", 
"она</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>she  [ʃi]"
];

var pronsen = [
"I  [aɪ]", 
"you  [ju]", 
"we  [wi]", 
"they  [ðeɪ]", 
"he  [hi]", 
"she  [ʃi]"
];

var pronsru = [
"я", 
"ты", 
"мы", 
"они", 
"он", 
"она"
];







var subjects = [
"я</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>I  [aɪ]", 
"ты</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>you  [ju]", 
"мы</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>we  [wi]", 
"они</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>they  [ðeɪ]", 
"он</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>he  [hi]", 
"она</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>she  [ʃi]", 
"Алиса</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>Alice  [ˈælɪs]", 
"Боб</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>Bob  [bɔb]", 
"это, оно</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>it  [ɪt]", 
"этот, эта, это</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>this  [ðɪs]", 
"эти</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>these  [ðiːz]", 
"те</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>those  [ðəʊz, ðoʊz]", 
"тот, та, то</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>that  [ðæt]", 
"кто-то, кто-нибудь, кто-либо, кое-кто, некто</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>somebody [ˈsʌmbədi], someone [ˈsʌmwʌn]", 
"кто-то, кто-либо, кто-нибудь, всякий, любой</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>anybody [ˈenibɒdi, ˈenibɑːdi], anyone [ˈeniwʌn]", 
"никто, никого</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>nobody [ˈnoʊbədi], no one [noʊ wʌn]", 
"все, каждый</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>everybody [ˈevribɒdi, ˈevribɑːdi], everyone [ˈevriwʌn]", 
];

var prons2 = [
"меня, мне</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>me [miː]", 
"вас, тебе, тебя</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>you [ju]", 
"ему, его</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>him [hɪm]", 
"её, ей</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>her [hə(r)]", 
"нас, нам</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>us [ʌs]", 
"их, им</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>them [ðəm]"
];

var prons3 = [
"моё, мои</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>my [maɪ]", 
"твоё, ваше</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>your [jʊ(r)]", 
"его</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>his [hɪz]", 
"ее</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>her [hə(r)]", 
"наше, наш</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>our [aʊə]", 
"их</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>their [ðer, ðeə]"
];

var quests = [
"Что? Какой?</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>what [wɑːt, wɒt]", 
"Кто?</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>who [huː]", 
"Где? Куда?</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>where [weə(r)]", 
"Когда?</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>when [wen]", 
"Почему? Зачем?</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>why [waɪ]", 
"Как? Каким Образом?</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>how [haʊ]"
];

var numbers = [
"единств.", 
"множ."
];

var be = "быть</td></tr><tr><td class=ab>Спойлер:</td><td class=spo>be [bi:] (am [æm, əm], is [ɪz], are [ɑː(r)]) - was [wɒz]/were [wɜ:] - been [bi:n]";









var a = '';
var b = '';
var c = '';






// 1
if (forms[f] === "?") {
	if (tenses[t] === "future") {
	a = "will ";
	} else if (tenses[t] === "present") {

//	a = "Do/Does ";

		if ( (pronsen[p] === "he") || ((pronsen[p] === "she")) ) {
		a = "does";
		} else {
		a = "do";
		}

	} else {
	a = "did ";
	}
} else {
a = pronsen[p];
}

// 2
if ( forms[f] === "?" ) {
b = pronsen[p];
};
if ( (forms[f] === "+") && (tenses[t] === "future") ) {
b = "will";
}
if ( (forms[f] === "-") && (tenses[t] === "future") ) {
b = "won't";
}

if ( (forms[f] === "-") && (tenses[t] === "present") ) {

// b = "do/does not";

		if ( ( pronsen[p] === "he" ) || ( pronsen[p] === "she" ) ) {
		b = "doesn't";
		} else {
		b = "don't";
		}

}
if ( (forms[f] === "-") && (tenses[t] === "past") ) {
b = "didn't";
}

// 3
if ( forms[f] === "-" ) {
c = v12en[v12];
}

if ( forms[f] === "?" ) {
c = v12en[v12] + "?";
}

if ( (forms[f] === "+") && (tenses[t] === "past") ) {
c = v12en2[v12];
}

if ( (forms[f] === "+") && (tenses[t] === "present") ) {

// c = v12en[v12] + "(s)";

		if ( ( pronsen[p] === "he" ) || ( pronsen[p] === "she" ) ) {
		c = v12en[v12] + "(s)";
		} else {
		c = v12en[v12];
		}

}

if ( (forms[f] === "+") && (tenses[t] === "future") ) {
c = v12en[v12];
}










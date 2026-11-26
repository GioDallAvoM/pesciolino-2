// 26 novembre 2026 · ✒️ Dante e 👓 Michael della Scuola · nuovo
// La tappa 1 di ogni capitolo: le parole della grammatica del CILS da abbinare al corrispondente inglese
// (ordine del Signore: «mantieni una parte di vocaboli se sono necessari agli esercizi del CILS (es. sebbene, affinché,
// nonostante), se serve usa come traduzione l'inglese per abbinare il corrispettivo»).
// Ogni parola: [italiano, inglese, regola, nota breve]. Il gioco forma 7 abbinamenti da 4 coppie per capitolo:
// ogni parola compare due volte. In uno stesso gruppo non ci sono due parole con lo stesso significato inglese.
const P = {
  // parole di livello C2 (giro 1, Bartoletti: «la tappa 1 al livello C2»)
  giacche: ['giacché', 'since (formal)', 'causa', '«giacché» è una causa formale, con l\'indicativo'],
  sicche: ['sicché', 'so, hence', 'conseguenza', '«sicché» introduce la conseguenza, con l\'indicativo'],
  seppure: ['seppure', 'even though', 'concessione', '«seppure» vuole il congiuntivo'],
  laddove: ['laddove', 'whereas; where, if (formal)', 'contrasto', '«laddove» oppone due situazioni, oppure è un «se» formale'],
  nondimeno: ['nondimeno', 'nevertheless', 'contrasto', '«nondimeno» introduce un contrasto, registro formale'],
  ciononostante: ['ciononostante', 'nonetheless', 'contrasto', '«ciononostante» = nonostante ciò'],
  peraltro: ['peraltro', 'besides, what is more', 'aggiunta', '«peraltro» aggiunge un\'informazione, spesso inattesa'],
  daltronde: ['d\'altronde', 'after all', 'causa', '«d\'altronde» giustifica quello che si è detto'],
  bensi: ['bensì', 'but rather', 'contrasto', '«bensì» corregge dopo una negazione: non questo, bensì quello'],
  ossia: ['ossia', 'in other words, i.e.', 'aggiunta', '«ossia» spiega con altre parole'],
  allorche: ['allorché', 'when (formal)', 'tempo', '«allorché» è un «quando» formale'],
  alfinedi: ['al fine di', 'with the aim of', 'fine', '«al fine di» + infinito o nome: per, con lo scopo di'],
  onde: ['onde', 'in order to (formal)', 'fine', '«onde» + infinito è un «per» molto formale'],
  invirtudi: ['in virtù di', 'by virtue of', 'nominale', '«in virtù di» + nome: grazie a, sulla base di'],
  afrontedi: ['a fronte di', 'in return for, against', 'nominale', '«a fronte di» + nome: in cambio di, considerato'],
  aprescinderedi: ['a prescindere da', 'regardless of', 'nominale', '«a prescindere da» + nome: senza considerare'],
  fermorestando: ['fermo restando che', 'it being understood that', 'condizione', '«fermo restando che» mette una condizione che non cambia'],
  dopodiche: ['dopodiché', 'after which', 'tempo', '«dopodiché» = dopo questo'],
  tantoche: ['tant\'è che', 'so much so that', 'conseguenza', '«tant\'è che» introduce una conseguenza che dimostra quanto detto'],
  ancorche: ['ancorché', 'although (literary)', 'concessione', '«ancorché» vuole il congiuntivo, registro letterario'],
  ove: ['ove', 'if (formal); where', 'condizione', '«ove» = «se» nei testi formali, con il congiuntivo'],
  perche: ['perché', 'because (+ indicative)', 'causa', '«perché» + indicativo indica la causa'],
  poiche: ['poiché', 'since, as', 'causa', '«poiché» è una causa più formale di «perché»'],
  siccome: ['siccome', 'since (at the start)', 'causa', '«siccome» introduce la causa all\'inizio della frase'],
  datoche: ['dato che', 'given that', 'causa', '«dato che» introduce una causa già nota'],
  vistoche: ['visto che', 'seeing that', 'causa', '«visto che» introduce una causa evidente'],
  dalmomento: ['dal momento che', 'since (given that)', 'causa', '«dal momento che» è una causa, registro formale'],
  sebbene: ['sebbene', 'although', 'concessione', '«sebbene» vuole il congiuntivo'],
  benche: ['benché', 'though', 'concessione', '«benché» vuole il congiuntivo, come «sebbene»'],
  nonostante: ['nonostante', 'despite', 'concessione', '«nonostante» regge il congiuntivo o un nome'],
  malgrado: ['malgrado', 'in spite of', 'concessione', '«malgrado» regge il congiuntivo o un nome'],
  anchese: ['anche se', 'even if', 'concessione', '«anche se» vuole l\'indicativo'],
  affinche: ['affinché', 'so that (+ subjunctive)', 'fine', '«affinché» indica lo scopo e vuole il congiuntivo'],
  purche: ['purché', 'provided that', 'condizione', '«purché» mette una condizione e vuole il congiuntivo'],
  apattoche: ['a patto che', 'on condition that', 'condizione', '«a patto che» vuole il congiuntivo'],
  qualora: ['qualora', 'should, if ever', 'condizione', '«qualora» è un «se» formale con il congiuntivo'],
  amenoche: ['a meno che', 'unless', 'condizione', '«a meno che» (non) vuole il congiuntivo'],
  nelcaso: ['nel caso in cui', 'in the event that', 'condizione', '«nel caso in cui» vuole il congiuntivo'],
  quindi: ['quindi', 'therefore', 'conseguenza', '«quindi» introduce la conseguenza'],
  percio: ['perciò', 'for this reason', 'conseguenza', '«perciò» introduce la conseguenza'],
  dunque: ['dunque', 'thus', 'conseguenza', '«dunque» introduce una conclusione'],
  pertanto: ['pertanto', 'consequently', 'conseguenza', '«pertanto» è una conseguenza formale'],
  tuttavia: ['tuttavia', 'however', 'contrasto', '«tuttavia» introduce un contrasto, anche fra virgole'],
  pero: ['però', 'but', 'contrasto', '«però» è un «ma» che può stare anche dentro la frase'],
  invece: ['invece', 'instead', 'contrasto', '«invece» dice che è successo il contrario'],
  eppure: ['eppure', 'and yet', 'contrasto', '«eppure» introduce un contrasto che sorprende'],
  anzi: ['anzi', 'on the contrary', 'contrasto', '«anzi» corregge e rafforza quello che si è detto'],
  inoltre: ['inoltre', 'moreover', 'aggiunta', '«inoltre» aggiunge un\'informazione'],
  oltrea: ['oltre a', 'in addition to, apart from', 'aggiunta', '«oltre a» + nome o infinito aggiunge qualcosa'],
  infatti: ['infatti', 'indeed', 'causa', '«infatti» spiega e conferma quello che si è detto'],
  cioe: ['cioè', 'that is', 'aggiunta', '«cioè» spiega meglio con altre parole'],
  mentre: ['mentre', 'while, whereas', 'passato', '«mentre» indica un\'azione in corso, ma anche un contrasto (= whereas)'],
  finche: ['finché', 'as long as; until (finché non)', 'tempo', '«finché»: per tutto il tempo che; «finché non»: fino al momento in cui'],
  appena: ['appena', 'as soon as', 'futuro', '«appena» indica che una cosa succede subito dopo l\'altra'],
  primache: ['prima che', 'before (+ clause)', 'congiuntivo', '«prima che» vuole il congiuntivo'],
  dopoche: ['dopo che', 'after (+ clause)', 'passato', '«dopo che» vuole l\'indicativo'],
  senza: ['senza', 'without', 'senza', '«senza» + infinito: un\'azione che non avviene'],
  acausadi: ['a causa di', 'because of', 'nominale', '«a causa di» + nome indica la causa'],
  graziea: ['grazie a', 'thanks to', 'nominale', '«grazie a» + nome indica una causa positiva'],
  incasodi: ['in caso di', 'in case of', 'nominale', '«in caso di» + nome è un «se» formale'],
  invecedi: ['invece di', 'instead of', 'nominale', '«invece di» + nome o infinito'],
  altrimenti: ['altrimenti', 'otherwise', 'struttura', '«altrimenti» vuol dire «se no»'],
  comese: ['come se', 'as if', 'congiuntivo', '«come se» vuole il congiuntivo imperfetto'],
  cui: ['cui', 'which, whom', 'relativi', '«cui» si usa dopo una preposizione'],
  ilquale: ['il quale', 'who, which (formal)', 'relativi', '«il quale» si accorda con il nome'],
  ilcui: ['il cui', 'whose', 'relativi', '«il cui» indica il possesso'],
  chi: ['chi', 'whoever', 'relativi', '«chi» = «la persona che», con il verbo al singolare'],
  gia: ['già', 'already', 'tempo', '«già»: è successo, anche presto'],
  ancora: ['ancora', 'still, yet', 'tempo', '«ancora»: continua; «non ancora»: non finora'],
  nonpiu: ['non… più', 'no longer', 'tempo', '«non… più»: una cosa è finita'],
  nonmai: ['non… mai', 'never', 'tempo', '«non… mai»: nemmeno una volta'],
  perfino: ['perfino', 'even', 'misura', '«perfino» aggiunge sorpresa'],
  soltanto: ['soltanto', 'only', 'misura', '«soltanto» limita'],
  ormai: ['ormai', 'by now', 'tempo', '«ormai»: è troppo tardi per cambiare'],
  appunto: ['appunto', 'precisely', 'misura', '«appunto» conferma: proprio così'],
  comunque: ['comunque', 'anyway', 'contrasto', '«comunque»: in ogni caso'],
  magari: ['magari', 'maybe, if only', 'congiuntivo', '«magari» + congiuntivo esprime un desiderio'],
  piuttosto: ['piuttosto', 'rather', 'misura', '«piuttosto»: meglio, invece'],
  addirittura: ['addirittura', 'even (surprisingly)', 'misura', '«addirittura» sottolinea qualcosa di eccezionale'],
  entro: ['entro', 'by (a deadline)', 'preptempo', '«entro» indica una scadenza'],
  tra: ['tra', 'in (time from now)', 'preptempo', '«tra dieci minuti»: quanto manca'],
  da: ['da', 'for (still going on)', 'preptempo', '«vivo qui da tre anni»: continua ancora'],
  fa: ['fa', 'ago', 'preptempo', '«tre anni fa»: nel passato'],
  per: ['per', 'for (a finished period)', 'preptempo', '«ho lavorato lì per tre anni»: è finito'],
  allora: ['allora', 'at that time, then', 'conseguenza', '«allora»: in quel momento, oppure di conseguenza'],
  poi: ['poi', 'afterwards', 'tempo', '«poi»: dopo'],
  infine: ['infine', 'lastly, in the end', 'tempo', '«infine»: per ultimo'],
  siasia: ['sia… sia', 'both… and', 'aggiunta', '«sia… sia» unisce due elementi'],
  nene: ['né… né', 'neither… nor', 'aggiunta', '«né… né» nega due elementi'],
  oo: ['o… o', 'either… or', 'aggiunta', '«o… o» propone un\'alternativa'],
  nonsolo: ['non solo… ma anche', 'not only… but also', 'aggiunta', '«non solo… ma anche» aggiunge e rafforza']
};

// I gruppi, uno per capitolo, nell'ordine dei capitoli (14 parole ciascuno).
// Pesciolino 2.0: i gruppi vanno dal facile (capitolo 1) al difficilissimo (capitolo 10); capitoli 3-9 riordinati da Franchini
// (giro 1 della 2.0) perché nello stesso abbinamento non capitino due sinonimi.
const GRUPPI_CONNETTIVI = [
  ['perche', 'pero', 'quindi', 'invece', 'mentre', 'gia', 'ancora', 'chi', 'senza', 'poi', 'allora', 'tra', 'fa', 'cioe'],
  ['poiche', 'infatti', 'inoltre', 'appena', 'finche', 'da', 'per', 'nonpiu', 'nonmai', 'soltanto', 'oo', 'cui', 'dopoche', 'perfino'],
  ['anchese', 'datoche', 'oltrea', 'tuttavia', 'invecedi', 'primache', 'ilquale', 'eppure', 'comunque', 'siasia', 'graziea', 'siccome', 'acausadi', 'nene'],
  ['magari', 'primache', 'percio', 'ormai', 'sebbene', 'anchese', 'vistoche', 'infine', 'incasodi', 'invecedi', 'nonostante', 'dunque', 'malgrado', 'piuttosto'],
  ['purche', 'comese', 'dopodiche', 'pertanto', 'altrimenti', 'nelcaso', 'dalmomento', 'anzi', 'apattoche', 'affinche', 'benche', 'amenoche', 'appunto', 'addirittura'],
  ['seppure', 'giacche', 'laddove', 'nondimeno', 'bensi', 'peraltro', 'qualora', 'ciononostante', 'sicche', 'fermorestando', 'onde', 'ossia', 'alfinedi', 'afrontedi'],
  ['allorche', 'comese', 'tantoche', 'daltronde', 'dopoche', 'appena', 'invecedi', 'mentre', 'ilcui', 'ilquale', 'oltrea', 'anzi', 'inoltre', 'nonsolo'],
  ['allorche', 'dopoche', 'pertanto', 'giacche', 'acausadi', 'invirtudi', 'aprescinderedi', 'afrontedi', 'tuttavia', 'bensi', 'peraltro', 'laddove', 'nondimeno', 'graziea'],
  ['pertanto', 'amenoche', 'aprescinderedi', 'qualora', 'sicche', 'nelcaso', 'invirtudi', 'giacche', 'laddove', 'entro', 'onde', 'dalmomento', 'altrimenti', 'fermorestando'],
  ['ancorche', 'ove', 'sicche', 'giacche', 'nondimeno', 'bensi', 'daltronde', 'tantoche', 'fermorestando', 'afrontedi', 'aprescinderedi', 'magari', 'onde', 'peraltro']
];

// Costruisce i 7 abbinamenti di un capitolo: ogni parola compare due volte, mai due volte nello stesso abbinamento.
function abbinamentiDelCapitolo(n) {
  const g = GRUPPI_CONNETTIVI[(n - 1) % GRUPPI_CONNETTIVI.length].map(k => P[k]);
  const ordine = g.concat([0, 7, 1, 8, 2, 9, 3, 10, 4, 11, 5, 12, 6, 13].map(i => g[i])); // il secondo giro mescola le coppie
  const out = [];
  for (let i = 0; i < 7; i++) {
    const c = ordine.slice(i * 4, i * 4 + 4);
    out.push({k: 'abbina', c: c.map(x => [x[0], x[1]]), r: c[0][2], p: c.map(x => x[3]).join('. ') + '.'});
  }
  return out;
}

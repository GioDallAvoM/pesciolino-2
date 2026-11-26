// 26 novembre 2026 · ✒️ Dante e 👓 Michael della Scuola · sostituisce: le regole che stavano in esercizi.js (ora in archivio/)
// Le schede di grammatica che si aprono con il tasto 📖 Regola. Chiave = nome della regola, t = titolo, b = testo HTML.
const REGOLE = {
  causa: {
    t: "I connettivi di causa",
    b: `<p>Spiegano <b>perché</b> succede una cosa. Dopo il connettivo c'è il motivo.</p>
<table><tr><th>Connettivo</th><th>Dove sta</th><th>Esempio</th></tr>
<tr><td><b>perché</b></td><td>dopo la frase principale</td><td>Resto a casa perché piove.</td></tr>
<tr><td><b>poiché</b>, <b>dato che</b>, <b>dal momento che</b></td><td>prima o dopo</td><td>Poiché piove, resto a casa.</td></tr>
<tr><td><b>siccome</b></td><td>quasi sempre all'inizio</td><td>Siccome piove, resto a casa.</td></tr></table>
<p>Il verbo dopo questi connettivi è all'<b>indicativo</b>.</p>
<p>Attenzione: <b>perché</b> + congiuntivo non è più una causa, è un fine (vedi «I connettivi di fine»).</p>`
  },
  concessione: {
    t: "I connettivi di concessione",
    b: `<p>Dicono che una cosa succede <b>anche se</b> c'è un ostacolo.</p>
<table><tr><th>Connettivo</th><th>Modo del verbo</th><th>Esempio</th></tr>
<tr><td><b>sebbene</b>, <b>benché</b>, <b>nonostante</b>, <b>malgrado</b></td><td>congiuntivo</td><td>Sebbene sia tardi, resto.</td></tr>
<tr><td><b>anche se</b></td><td>indicativo</td><td>Anche se è tardi, resto.</td></tr>
<tr><td><b>nonostante</b> + nome</td><td>nessun verbo</td><td>Nonostante la pioggia, usciamo.</td></tr></table>
<p><span class="en">EN</span> <i>although</i> = <b>sebbene</b>, <b>benché</b>: in inglese il verbo resta uguale, in italiano va al congiuntivo (<i>although it is late</i> = sebbene <b>sia</b> tardi). <i>even if</i> = <b>anche se</b>, con l'indicativo.</p>`
  },
  fine: {
    t: "I connettivi di fine",
    b: `<p>Dicono <b>lo scopo</b>: per ottenere che cosa?</p>
<table><tr><th>Connettivo</th><th>Quando</th><th>Esempio</th></tr>
<tr><td><b>per</b> + infinito</td><td>stesso soggetto</td><td>Studio per superare l'esame.</td></tr>
<tr><td><b>affinché</b>, <b>perché</b> + congiuntivo</td><td>soggetto diverso</td><td>Parlo piano affinché tu capisca.</td></tr></table>
<p>Nel passato il congiuntivo diventa imperfetto: <i>Ho parlato piano affinché tu <b>capissi</b>.</i></p>
<p><span class="en">EN</span> <i>to</i> + infinito = <b>per</b> + infinito (<i>I study to pass</i> = studio per superare). <i>so that</i> = <b>affinché</b> + congiuntivo (<i>so that you understand</i> = affinché tu capisca).</p>`
  },
  condizione: {
    t: "I connettivi di condizione",
    b: `<p>Dicono a quale condizione succede una cosa.</p>
<table><tr><th>Connettivo</th><th>Modo</th><th>Esempio</th></tr>
<tr><td><b>se</b></td><td>indicativo o congiuntivo (periodo ipotetico)</td><td>Se piove, resto a casa.</td></tr>
<tr><td><b>purché</b>, <b>a patto che</b>, <b>a condizione che</b></td><td>congiuntivo</td><td>Vengo, purché tu guidi.</td></tr>
<tr><td><b>in caso di</b> + nome</td><td>nessun verbo</td><td>In caso di pioggia, resto a casa.</td></tr></table>
<p><b>Purché</b> mette una condizione necessaria: «sì, ma solo se…».</p>`
  },
  conseguenza: {
    t: "I connettivi di conseguenza",
    b: `<p>Dicono <b>che cosa succede dopo</b>, come effetto di quello che si è detto prima.</p>
<table><tr><th>Connettivo</th><th>Esempio</th></tr>
<tr><td><b>quindi</b>, <b>perciò</b>, <b>dunque</b>, <b>pertanto</b></td><td>Il museo chiude alle sei; conviene, quindi, arrivare presto.</td></tr>
<tr><td><b>così</b> / <b>tanto</b> … <b>che</b></td><td>Era così stanco che dormiva in piedi.</td></tr></table>
<p><b>Quindi</b>, <b>perciò</b> e <b>dunque</b> si possono mettere anche dentro la frase, fra due virgole.</p>
<p><b>Pertanto</b> è più formale: si trova nei regolamenti e nelle lettere ufficiali.</p>`
  },
  contrasto: {
    t: "I connettivi di contrasto",
    b: `<p>Dicono che la seconda parte va <b>contro</b> quello che ci si aspettava, o che due cose si oppongono.</p>
<table><tr><th>Connettivo</th><th>Uso</th><th>Esempio</th></tr>
<tr><td><b>ma</b>, <b>però</b></td><td>contrasto semplice; «però» può stare anche dentro la frase</td><td>È ricco, ma non è felice. Non è, però, felice.</td></tr>
<tr><td><b>tuttavia</b>, <b>nondimeno</b>, <b>ciononostante</b></td><td>contrasto formale, all'inizio o fra virgole</td><td>Il piano era rischioso; nondimeno, lo approvarono.</td></tr>
<tr><td><b>invece</b></td><td>oppone una cosa a un'altra, o dice che è successo il contrario</td><td>Un tempo era la norma; oggi, invece, è un'eccezione.</td></tr>
<tr><td><b>mentre</b>, <b>laddove</b></td><td>oppone due situazioni (= <i>whereas</i>)</td><td>Lui ama il mare, mentre lei preferisce la montagna.</td></tr>
<tr><td><b>bensì</b></td><td>corregge dopo una negazione</td><td>Non è un errore, bensì una scelta.</td></tr>
<tr><td><b>eppure</b>, <b>anzi</b></td><td>contrasto che sorprende; correzione che rafforza</td><td>Ha studiato poco, eppure è passata. Non è stanco, anzi: è pieno di energia.</td></tr>
<tr><td><b>peraltro</b></td><td>aggiunge un'osservazione, spesso in contrasto con quanto detto</td><td>Il prezzo è alto; peraltro, la qualità è ottima.</td></tr></table>
<p>Fra due virgole, dentro la frase, non si usa <b>ma</b>: si usano <b>però</b>, <b>tuttavia</b>, <b>invece</b>.</p>
<p><span class="en">EN</span> <i>but rather</i> = <b>bensì</b>; <i>whereas</i> = <b>mentre</b>, <b>laddove</b>; <i>nevertheless</i> = <b>nondimeno</b>, <b>tuttavia</b>.</p>`
  },
  relativi: {
    t: "I pronomi relativi",
    b: `<p>Guarda che cosa c'è <b>subito prima</b> dello spazio.</p>
<table><tr><th>Prima dello spazio</th><th>Relativo</th><th>Esempio</th></tr>
<tr><td>un nome</td><td><b>che</b></td><td>il libro che leggo</td></tr>
<tr><td>una preposizione semplice</td><td><b>cui</b></td><td>la città in cui vivo · l'amico di cui parlo</td></tr>
<tr><td>una preposizione articolata</td><td><b>quale</b> (accordato)</td><td>le persone alle quali scrivo</td></tr>
<tr><td>un articolo, e dopo un nome</td><td><b>cui</b></td><td>lo scrittore i cui libri leggo</td></tr>
<tr><td>niente: la frase comincia lì</td><td><b>chi</b></td><td>Chi arriva tardi aspetta.</td></tr></table>
<p><span class="en">EN</span> In inglese la preposizione può restare in fondo: <i>the city I live in</i>. In italiano va sempre davanti al relativo: la città <b>in cui</b> vivo. <i>whose</i> = <b>il cui</b>, che si accorda con il nome che segue: <i>whose books</i> = <b>i cui</b> libri.</p>`
  },
  tempo: {
    t: "Le parole del tempo: già, ancora, più, prima",
    b: `<table><tr><th>Parola</th><th>Che cosa dice</th><th>Esempio</th></tr>
<tr><td><b>già</b></td><td>è successo (anche presto)</td><td>Ho già mangiato.</td></tr>
<tr><td><b>ancora</b></td><td>continua</td><td>Dorme ancora.</td></tr>
<tr><td><b>non … ancora</b></td><td>non è successo finora</td><td>Non è ancora arrivato.</td></tr>
<tr><td><b>non … più</b></td><td>è finito</td><td>Non fumo più.</td></tr>
<tr><td><b>prima di</b> + infinito o nome</td><td>prima</td><td>Prima di uscire, chiudi.</td></tr></table>
<p>Con i tempi composti queste parole stanno <b>fra l'ausiliare e il participio</b>: <i>non è <b>più</b> tornato</i>.</p>`
  },
  misura: {
    t: "Le parole piccole: anche, perfino, solo",
    b: `<p>Stanno <b>subito prima</b> della parola che modificano; se le sposti, cambia il senso.</p>
<table><tr><th>Parola</th><th>Che cosa aggiunge</th><th>Esempio</th></tr>
<tr><td><b>anche</b></td><td>un elemento in più</td><td>Viene anche Anna.</td></tr>
<tr><td><b>perfino</b>, <b>persino</b>, <b>addirittura</b></td><td>un elemento in più, che sorprende</td><td>Ha riso perfino il professore.</td></tr>
<tr><td><b>solo</b>, <b>soltanto</b></td><td>limita</td><td>Solo Anna ha capito.</td></tr></table>`
  },
  preptempo: {
    t: "Le preposizioni del tempo: da, tra, per, in",
    b: `<table><tr><th>Preposizione</th><th>Che cosa dice</th><th>Esempio</th></tr>
<tr><td><b>da</b> + presente</td><td>un'azione cominciata nel passato che continua</td><td>Vivo qui da tre anni.</td></tr>
<tr><td><b>tra</b> / <b>fra</b></td><td>quanto manca, nel futuro</td><td>Parto tra dieci minuti.</td></tr>
<tr><td><b>per</b></td><td>una durata chiusa</td><td>Ho lavorato lì per tre anni.</td></tr>
<tr><td><b>in</b></td><td>quanto tempo serve</td><td>Ho finito in un'ora.</td></tr></table>
<p><span class="en">EN</span> <i>in ten minutes</i> = <b>tra</b> dieci minuti. <i>I have lived here for three years</i> = vivo qui <b>da</b> tre anni: l'italiano usa il presente, non il passato prossimo. <i>three years ago</i> = tre anni <b>fa</b>.</p>`
  },
  passato: {
    t: "Imperfetto, passato prossimo, trapassato",
    b: `<table><tr><th>Tempo</th><th>Quando si usa</th><th>Esempio</th></tr>
<tr><td><b>imperfetto</b></td><td>descrizioni, età, abitudini, azioni in corso</td><td>Avevo diciott'anni. Mentre cucinavo…</td></tr>
<tr><td><b>passato prossimo</b></td><td>un fatto concluso</td><td>…è squillato il telefono.</td></tr>
<tr><td><b>trapassato prossimo</b></td><td>un fatto <b>prima</b> di un altro fatto passato</td><td>Quando sono arrivata, il treno era partito.</td></tr></table>
<p>Il trapassato si fa con l'imperfetto di <i>avere</i> o <i>essere</i> + participio: <i>avevo mangiato</i>, <i>ero uscita</i>.</p>
<p><span class="en">EN</span> In linea di massima: <i>I was reading / I used to read</i> = imperfetto (<b>leggevo</b>); <i>I read, I have read</i> (fatto concluso) = passato prossimo (<b>ho letto</b>); <i>I had read</i> = trapassato (<b>avevo letto</b>).</p>`
  },
  remoto: {
    t: "Il passato remoto",
    b: `<p>Si usa per fatti lontani, chiusi, senza legame con il presente: la storia, le biografie, i romanzi.</p>
<table><tr><th></th><th>-are</th><th>-ere</th><th>-ire</th></tr>
<tr><td>io</td><td>arrivai</td><td>credei / credetti</td><td>partii</td></tr>
<tr><td>lui, lei</td><td><b>arrivò</b></td><td><b>credé</b> / credette</td><td><b>partì</b></td></tr>
<tr><td>loro</td><td>arrivarono</td><td>crederono / credettero</td><td>partirono</td></tr></table>
<p>La terza persona singolare ha sempre l'<b>accento</b>: <i>arrivò</i>, <i>partì</i>. Senza accento <i>arrivo</i> è il presente.</p>
<p>Irregolari frequenti: <i>fu</i> (essere), <i>ebbe</i> (avere), <i>fece</i>, <i>disse</i>, <i>venne</i>, <i>nacque</i>, <i>morì</i>.</p>`
  },
  congiuntivo: {
    t: "Il congiuntivo",
    b: `<p>Si usa dopo verbi ed espressioni che non dicono un fatto sicuro.</p>
<table><tr><th>Dopo…</th><th>Esempio</th></tr>
<tr><td>opinione: <b>penso, credo, mi sembra che</b></td><td>Penso che tu abbia ragione.</td></tr>
<tr><td>volontà: <b>voglio, vorrei, spero che</b></td><td>Vorrei che veniste.</td></tr>
<tr><td>impersonali: <b>è importante, bisogna, è possibile che</b></td><td>Bisogna che tu finisca.</td></tr></table>
<p><b>La concordanza:</b></p>
<table><tr><th>Verbo principale</th><th>Azione contemporanea</th><th>Azione prima</th></tr>
<tr><td>presente (penso)</td><td>congiuntivo presente: <i>sia</i></td><td>congiuntivo passato: <i>sia stato</i></td></tr>
<tr><td>passato o condizionale (pensavo, vorrei)</td><td>congiuntivo imperfetto: <i>fosse</i></td><td>congiuntivo trapassato: <i>fosse stato</i></td></tr></table>
<p><span class="en">EN</span> <i>I think (that) you are right</i>: in inglese l'indicativo, in italiano il congiuntivo, <b>penso che tu abbia ragione</b>. Dopo <i>I want you to come</i> l'italiano dice <b>voglio che tu venga</b>.</p>`
  },
  ipotetico: {
    t: "Il periodo ipotetico",
    b: `<table><tr><th>Tipo</th><th>Dopo «se»</th><th>Nella principale</th><th>Esempio</th></tr>
<tr><td>reale</td><td>indicativo</td><td>indicativo</td><td>Se piove, resto a casa.</td></tr>
<tr><td>possibile</td><td>congiuntivo imperfetto</td><td>condizionale presente</td><td>Se avessi tempo, verrei.</td></tr>
<tr><td>irreale nel passato</td><td>congiuntivo trapassato</td><td>condizionale passato</td><td>Se l'avessi saputo, te l'avrei detto.</td></tr></table>
<p>Dopo <b>se</b> non va mai il condizionale: <s>se avrei</s> è un errore.</p>
<p><span class="en">EN</span> <i>If I had time, I would come</i> = se <b>avessi</b> tempo, <b>verrei</b>. <i>If I had known, I would have told you</i> = se l'<b>avessi saputo</b>, te l'<b>avrei detto</b>. Dove l'inglese usa il passato dopo <i>if</i>, l'italiano usa il congiuntivo.</p>`
  },
  futuro: {
    t: "Il futuro semplice e il futuro anteriore",
    b: `<table><tr><th>Tempo</th><th>Quando</th><th>Esempio</th></tr>
<tr><td><b>futuro semplice</b></td><td>un fatto futuro</td><td>Domani mi alzerò presto.</td></tr>
<tr><td><b>futuro anteriore</b></td><td>un fatto futuro che viene <b>prima</b> di un altro fatto futuro</td><td>Ti chiamerò appena sarò arrivata.</td></tr></table>
<p>Il futuro anteriore: futuro di <i>avere</i> / <i>essere</i> + participio (<i>avrò finito</i>, <i>sarò arrivata</i>).</p>
<p>Nella lingua parlata, dopo <b>appena</b> e <b>quando</b>, va bene anche il futuro semplice: <i>appena arriverò</i>.</p>
<p>I verbi riflessivi tengono il pronome davanti: <i><b>mi</b> alzerò</i>, <i><b>ci</b> vedremo</i>.</p>`
  },
  passivo: {
    t: "La forma passiva",
    b: `<p>L'oggetto della frase attiva diventa il soggetto; chi fa l'azione si introduce con <b>da</b>.</p>
<p><i>Il comune <b>ha approvato</b> il regolamento.</i> → <i>Il regolamento <b>è stato approvato</b> dal comune.</i></p>
<table><tr><th>Ausiliare</th><th>Che cosa aggiunge</th><th>Esempio</th></tr>
<tr><td><b>essere</b> + participio</td><td>passivo normale, tutti i tempi</td><td>è stato costruito</td></tr>
<tr><td><b>venire</b> + participio</td><td>solo nei tempi semplici</td><td>viene costruito, venne costruito</td></tr>
<tr><td><b>andare</b> + participio</td><td>obbligo («deve essere»)</td><td>La domanda va presentata entro maggio.</td></tr></table>
<p>Il participio si accorda con il nuovo soggetto: <i>le lettere sono state scritt<b>e</b></i>.</p>
<p><span class="en">EN</span> Come in inglese: <i>the bridge was built by…</i> = il ponte <b>è stato costruito da</b>… <i>by</i> = <b>da</b> (con l'articolo: dal, dalla, dai…). In italiano il participio si accorda con il soggetto.</p>`
  },
  accordo: {
    t: "L'accordo del participio",
    b: `<p>Con l'ausiliare <b>essere</b> il participio si accorda sempre con il soggetto: <i>Maria è partit<b>a</b></i>.</p>
<p>Con l'ausiliare <b>avere</b> di solito non si accorda: <i>Ho perso le chiavi</i>.</p>
<p>Ma se prima del verbo c'è un pronome diretto <b>lo, la, li, le</b>, il participio si accorda con il pronome:</p>
<table><tr><th>Pronome</th><th>Esempio</th></tr>
<tr><td>lo / l'</td><td>Il libro? L'ho lett<b>o</b>.</td></tr>
<tr><td>la / l'</td><td>La lettera? L'ho scritt<b>a</b>.</td></tr>
<tr><td>li</td><td>I biglietti? Li ho pres<b>i</b>.</td></tr>
<tr><td>le</td><td>Le chiavi? Le ho pers<b>e</b>.</td></tr></table>`
  },
  indiretto: {
    t: "Il discorso indiretto",
    b: `<p>Quando si riportano le parole di qualcuno con un verbo al passato (ha detto, chiese), cambiano i tempi, le parole del tempo, i pronomi e i possessivi.</p>
<table><tr><th>Discorso diretto</th><th>Discorso indiretto (dopo «ha detto che»)</th></tr>
<tr><td>presente: <i>parto</i></td><td>imperfetto: <i>partiva</i></td></tr>
<tr><td>futuro: <i>partirò</i></td><td>condizionale passato: <i>sarebbe partito</i></td></tr>
<tr><td>passato prossimo: <i>sono partito</i></td><td>trapassato: <i>era partito</i></td></tr>
<tr><td>imperativo: <i>Partite!</i></td><td><b>di</b> + infinito: <i>ci ha detto di partire</i> (oppure «che partissimo»)</td></tr>
<tr><td>domanda: <i>«Hai finito?»</i></td><td><b>se</b> + indicativo o congiuntivo: <i>mi ha chiesto se avevo / avessi finito</i></td></tr>
<tr><td><i>domani · ieri · oggi · qui</i></td><td><i>il giorno dopo (l'indomani, il giorno seguente) · il giorno prima · quel giorno · lì</i></td></tr>
<tr><td><i>questo</i> · <i>venire</i></td><td><i>quello</i> · <i>andare</i></td></tr>
<tr><td>domanda con <i>chi, che cosa, da quanto tempo…</i></td><td>la stessa parola + indicativo o congiuntivo: <i>mi chiese da quanto tempo avvertissi / avvertivo il dolore</i></td></tr>
<tr><td><i>io, mio · tu, tuo · vi</i></td><td><i>lui/lei, suo · io, mio · ci/loro</i> (dipende da chi racconta)</td></tr></table>
<p>Il <b>futuro nel passato</b> si dice con il <b>condizionale passato</b>: <i>Ha detto che sarebbe venuto.</i></p>
<p><span class="en">EN</span> Come in inglese: <i>he said he would come</i> = <b>ha detto che sarebbe venuto</b>. Ma l'italiano usa il condizionale <b>passato</b>, non il presente.</p>`
  },
  collocazioni: {
    t: "Le coppie fisse (verbo + nome)",
    b: `<p>Alcuni nomi vogliono un verbo preciso: si imparano a coppie.</p>
<table><tr><th>Giusto</th><th>Sbagliato</th></tr>
<tr><td><b>prendere</b> una decisione</td><td><s>fare una decisione</s></td></tr>
<tr><td><b>porre</b> / <b>fare</b> una domanda</td><td><s>chiedere una domanda</s></td></tr>
<tr><td><b>approvare</b> una legge</td><td><s>accettare una legge</s></td></tr>
<tr><td><b>realizzare</b> un'opera, un progetto</td><td><s>attuare un ponte</s></td></tr>
<tr><td><b>esprimere</b> un parere</td><td><s>dire un parere</s></td></tr>
<tr><td>effetti <b>collaterali</b></td><td><s>effetti laterali</s></td></tr></table>
<p><span class="en">EN</span> <i>to make a decision</i> = <b>prendere</b> una decisione (non «fare»); <i>to ask a question</i> = <b>fare / porre</b> una domanda (non «chiedere una domanda»).</p>`
  },
  prepverbi: {
    t: "I verbi e gli aggettivi con la loro preposizione",
    b: `<p>Molti verbi e aggettivi vogliono una preposizione fissa.</p>
<table><tr><th>Con a</th><th>Con da</th><th>Con di</th></tr>
<tr><td>interessato <b>a</b><br>rinunciare <b>a</b><br>pensare <b>a</b></td><td>dipendere <b>da</b><br>diverso <b>da</b><br>partire <b>da</b></td><td>parlare <b>di</b><br>accorgersi <b>di</b><br>innamorarsi <b>di</b></td></tr></table>
<p>Davanti all'articolo la preposizione si unisce: <i>a + la = <b>alla</b></i>, <i>di + il = <b>del</b></i>, <i>da + i = <b>dai</b></i>.</p>
<p><b>Rifiutare</b> non vuole preposizione (<i>rifiutare un invito</i>); <b>rinunciare</b> vuole <b>a</b> (<i>rinunciare a un invito</i>).</p>`
  },
  suffissi: {
    t: "I suffissi: come nascono le parole",
    b: `<table><tr><th>Suffisso</th><th>Significato</th><th>Esempio</th></tr>
<tr><td><b>-aio</b></td><td>chi fa un mestiere (spesso vende)</td><td>giornalaio, fornaio</td></tr>
<tr><td><b>-ista</b></td><td>chi fa un mestiere, una professione</td><td>giornalista, dentista</td></tr>
<tr><td><b>-ino</b>, <b>-etto</b></td><td>piccolo, affettuoso</td><td>paesino, vizietto</td></tr>
<tr><td><b>-accio</b>, <b>-astro</b></td><td>brutto, cattivo</td><td>paesaccio, fratellastro</td></tr>
<tr><td><b>-aggio</b></td><td>l'azione di un verbo, o un insieme</td><td>lavaggio, paesaggio</td></tr>
<tr><td><b>-ità</b>, <b>-ezza</b>, <b>-enza</b></td><td>la qualità di un aggettivo</td><td>facilità, bellezza, intelligenza</td></tr>
<tr><td><b>-iero</b></td><td>aggettivo di relazione</td><td>giornaliero</td></tr></table>`
  },
  falsiamici: {
    t: "I falsi amici",
    b: `<p>Parole che sembrano uguali all'inglese ma in italiano vogliono dire un'altra cosa.</p>
<table><tr><th>Inglese</th><th>Italiano giusto</th><th>Attenzione</th></tr>
<tr><td><i>library</i></td><td><b>biblioteca</b></td><td><i>libreria</i> = negozio di libri</td></tr>
<tr><td><i>fabric</i></td><td><b>tessuto</b>, stoffa</td><td><i>fabbrica</i> = <i>factory</i></td></tr>
<tr><td><i>actually</i></td><td><b>in realtà</b>, veramente</td><td><i>attualmente</i> = adesso, oggi</td></tr>
<tr><td><i>eventually</i></td><td><b>alla fine</b></td><td><i>eventualmente</i> = se capita, nel caso</td></tr>
<tr><td><i>sensible</i></td><td><b>sensato</b>, ragionevole</td><td><i>sensibile</i> = <i>sensitive</i></td></tr>
<tr><td><i>to pretend</i></td><td><b>fingere</b></td><td><i>pretendere</i> = esigere, volere a tutti i costi</td></tr>
<tr><td><i>argument</i> (litigio)</td><td><b>discussione</b>, litigio</td><td><i>argomento</i> = il tema di cui si parla</td></tr>
<tr><td><i>to assist</i></td><td><b>aiutare</b></td><td><i>assistere a</i> = essere presente, guardare</td></tr>
<tr><td><i>parents</i></td><td><b>genitori</b></td><td><i>parenti</i> = <i>relatives</i></td></tr>
<tr><td><i>magazine</i></td><td><b>rivista</b></td><td><i>magazzino</i> = deposito di merci</td></tr></table>`
  },
  lessico: {
    t: "La parola esatta",
    b: `<p>Nella prova n. 3 le quattro parole hanno spesso un significato vicino. Per scegliere:</p>
<p>1. <b>Leggi tutta la frase</b>, non solo la parola prima dello spazio.</p>
<p>2. <b>Guarda le parole intorno</b>: articolo e preposizione dicono il genere e la costruzione (<i>un'</i> vuole una parola femminile che comincia per vocale).</p>
<p>3. <b>Cerca la coppia fissa</b>: <i>il locale più gettonato</i>, <i>avere l'abitudine di</i>, <i>essere in ritardo</i>.</p>
<p>4. <b>Elimina</b> le parole che non c'entrano, poi scegli tra quelle che restano.</p>
<p>Nella prova vera l'errore non toglie punti: non lasciare mai uno spazio vuoto.</p>`
  },
  nominale: {
    t: "Dal verbo al nome",
    b: `<p>Nella prova n. 4 spesso si deve trasformare una frase con un verbo in un'espressione con un <b>nome</b>. È lo stile dei testi formali.</p>
<table><tr><th>Con il verbo</th><th>Con il nome</th></tr>
<tr><td>Se piove…</td><td><b>In caso di</b> pioggia…</td></tr>
<tr><td>Benché fosse stanco…</td><td><b>Nonostante</b> la stanchezza…</td></tr>
<tr><td>Perché era malata…</td><td><b>A causa della</b> malattia…</td></tr>
<tr><td>Prima di partire…</td><td><b>Prima della</b> partenza…</td></tr>
<tr><td>Perché glielo aveva chiesto il medico…</td><td><b>Su richiesta del</b> medico…</td></tr>
<tr><td>Il prezzo è aumentato.</td><td>C'è stato un <b>aumento</b> del prezzo.</td></tr></table>
<p>Dopo il nome non c'è più il verbo coniugato: il soggetto diventa un complemento con <b>di</b> (<i>la richiesta <b>del</b> medico</i>).</p>`
  },
  struttura: {
    t: "Cambiare la struttura senza cambiare il senso",
    b: `<p>Nella prova n. 4 si comincia con le parole date e si cambia la costruzione della frase. Le trasformazioni più frequenti:</p>
<table><tr><th>Da</th><th>A</th><th>Esempio</th></tr>
<tr><td>attivo</td><td>passivo</td><td>Il comune approva → è approvato dal comune</td></tr>
<tr><td>verbo</td><td>nome</td><td>se piove → in caso di pioggia</td></tr>
<tr><td>è necessario che</td><td>dovere</td><td>È necessario che tutti rispettino → Tutti devono rispettare</td></tr>
<tr><td>è possibile che</td><td>forse + indicativo</td><td>È possibile che arrivi → Forse arriverà</td></tr>
<tr><td>siccome… (causa prima)</td><td>perché… (causa dopo)</td><td>Siccome non aveva studiato, è stato bocciato → È stato bocciato perché non aveva studiato</td></tr>
<tr><td>se non…</td><td>altrimenti</td><td>Se non ti sbrighi, perderai il treno → Sbrigati, altrimenti perderai il treno</td></tr>
<tr><td>tutti sanno che</td><td>come tutti sanno</td><td>Tutti sanno che Roma è antica → Come tutti sanno, Roma è antica</td></tr>
<tr><td>quando + passato</td><td>appena + participio</td><td>Quando arrivò, telefonò → Appena arrivato, telefonò</td></tr></table>
<p>Il significato deve restare <b>identico</b>: non aggiungere e non togliere informazioni.</p>`
  },
  senza: {
    t: "«Senza», «invece di», «oltre a» + infinito",
    b: `<p>Alcune preposizioni reggono direttamente l'<b>infinito</b>, quando il soggetto è lo stesso della frase principale.</p>
<table><tr><th>Preposizione</th><th>Che cosa dice</th><th>Esempio</th></tr>
<tr><td><b>senza</b></td><td>un'azione che non avviene</td><td>È uscito senza salutare.</td></tr>
<tr><td><b>invece di</b></td><td>un'azione che ne sostituisce un'altra</td><td>Invece di studiare, dorme.</td></tr>
<tr><td><b>oltre a</b></td><td>un'azione che si aggiunge</td><td>Oltre a cantare, suona.</td></tr></table>
<p>Dopo <b>senza</b> la frase è già negativa: si usa <i>nessuno</i>, <i>niente</i>, <i>mai</i>, senza aggiungere <i>non</i> (<i>senza dire niente</i>).</p>
<p>Con un soggetto diverso si usa <b>senza che</b> + congiuntivo: <i>È uscito senza che nessuno lo vedesse.</i></p>`
  },
  aggiunta: {
    t: "I connettivi d'aggiunta",
    b: `<p>Aggiungono un'informazione <b>nella stessa direzione</b> di quella di prima.</p>
<table><tr><th>Connettivo</th><th>Esempio</th></tr>
<tr><td><b>inoltre</b>, <b>per di più</b>, <b>oltre a ciò</b></td><td>Il corso è gratuito. Inoltre, dà crediti.</td></tr>
<tr><td><b>anche</b>, <b>pure</b></td><td>Il corso dà anche crediti.</td></tr>
<tr><td><b>oltre a</b> + nome o infinito</td><td>Oltre a essere gratuito, dà crediti.</td></tr></table>
<p>Se la seconda informazione va <b>contro</b> la prima, non è un'aggiunta ma un contrasto (<i>invece</i>, <i>però</i>).</p>`
  },
  infinito: {
    t: "Infinito, gerundio, participio e «si» impersonale",
    b: `<p>Questi modi del verbo permettono di accorciare una frase, togliendo il connettivo.</p>
<table><tr><th>Forma</th><th>Che cosa sostituisce</th><th>Esempio</th></tr>
<tr><td><b>dopo</b> + infinito passato</td><td>dopo che + verbo</td><td>Dopo <b>aver mangiato</b>, siamo usciti.</td></tr>
<tr><td><b>gerundio</b></td><td>mentre, quando, perché, se</td><td><b>Tornando</b> a casa, ho incontrato Marco.</td></tr>
<tr><td><b>participio passato</b></td><td>dopo che, quando, appena</td><td><b>Finito</b> il lavoro, tornò a casa.</td></tr></table>
<p>L'infinito passato è <i>avere</i> / <i>essere</i> + participio; <i>avere</i> perde spesso la <i>e</i>: <i>aver mangiato</i>.</p>
<p>Con il gerundio e il participio il soggetto deve essere lo stesso della frase principale (o il participio si riferisce al nome che lo segue: <i>finito il lavoro</i>).</p>
<p><b>Si</b> impersonale: <i>si</i> + verbo alla terza persona singolare, per dire «la gente, tutti». <i>Sbagliando si impara.</i></p>
<p><span class="en">EN</span> Il gerundio italiano somiglia alla forma in <i>-ing</i> usata all'inizio della frase: <i>Coming home, I met Marco</i> = <b>Tornando</b> a casa, ho incontrato Marco.</p>`
  },
};

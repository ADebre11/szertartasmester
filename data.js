const SITE_DATA = {
    brand: {
        name: "Debreczeni Anita",
        subtitle: "Okleveles szertartásvezető • Esküvőszervező",
        phone: "+36 70 335 4440",
        phoneHref: "tel:+36703354440",
        email: "anita@szertartasmester.hu",
        facebook: "https://www.facebook.com/szertartasmesteranita",
        instagram: "https://www.instagram.com/szertartasvezeto_anita",
        location: "Budapest, Pest vármegye és országosan",
    },
    nav: [
        { label: "Bemutatkozás", href: "#about-mount" },
        { label: "Szolgáltatások", href: "#services-mount" },
        { label: "Árak", href: "#pricing-mount" },
        { label: "Referenciák", href: "#references-mount" },
        { label: "GYIK", href: "#faq-mount" },
        { label: "Blog", href: "#blog-mount" },
        { label: "Kapcsolat", href: "#contact-mount" },
    ],
    hero: {
        badge: "Okleveles szertartásvezető • 10+ év tapasztalat",
        title: "A Nagy Nap, amely <span>valóban Rólatok szól</span>",
        description:
            "Személyre szabott esküvői szertartásvezetés, fogadalom megújítás és névadó ceremónia Budapesten, országszerte és határon túl – kötöttségek nélkül, szívvel-lélekkel.",
        image: "assets/hero-anita.webp",
        primaryCta: "Hívj most: +36 70 335 4440",
        secondaryCta: "Ajánlatot kérek",
        trust: [
            "Egy nap – egy esküvő elv",
            "Budapest és 20 km-es körzetében díjmentes kiszállás",
            "Korlátlan előzetes egyeztetés",
        ],
    },
    about: {
        eyebrow: "Szeretettel üdvözöllek",
        title: "Debreczeni Anita vagyok",
        lead: "Okleveles szertartásvezető, esküvőszervező és polgári búcsúztató",
        photo: "assets/kepek/fooldal/Anita-eskuvo.webp",
        paragraphs: [
            "Az esküvői szertartás, a házassági évforduló, a fogadalom megújítás, vagy egy kisbaba részére tartott névadó ceremónia – minden esetben különleges, ünnepélyes pillanat.",
            "Magas színvonalú, igényeitekre szabott szertartásvezetési szolgáltatást nyújtok határon innen és túl – több mint 10 éves tapasztalattal.",
            "Megtiszteltetés, ha közreműködésemmel életre szóló és maradandó élményt nyújthatok Nektek. De a főszereplők Ti vagytok, és a tündöklés a Tiétek! Én csak asszisztálok, és segítek álmaitok megvalósításában!",
            "Minden szolgáltatásommal szeretettel állok rendelkezésetekre az év minden napján – az „egy nap – egy esküvő” elvét követve, így a figyelmem kizárólag a Ti napotokra összpontosul.",
        ],
        chips: [
            "10+ év tapasztalat",
            "Magyar & Kétnyelvű ceremónia",
            "Országos lefedettség",
            "Személyre szabott esketőszöveg",
        ],
    },
    quote: {
        text: "„A házasság nem \"elavult\" intézmény. Elavult lehet egy \"modern\" vers, melyet tíz évvel ezelőtt írtak, egy százesztendős törvény, vagy egy ezeresztendős fölfedezés, de olyasmi, ami a Föld teremtése óta mindig és mindenütt szükségszerűen megvolt, nem lehet elavult, mert benne gyökerezik az emberi természetben. Mióta a világ áll, támadják, de eddig nem találtak helyette jobbat. Derék csinálmány, mely ennyi kritikát kiállt. Ne feledjük, hogy Ádám az első férj s Éva az első feleség!”",
        author: "Kosztolányi Dezső",
    },
    services: [
        {
            id: "eskuvoi-szertartas",
            title: "Esküvői szertartásvezetés",
            shortDesc:
                "Akkor, ott és úgy mondjátok ki az igent, ahogyan megálmodtátok – kötött hivatali sablonok nélkül, bármilyen helyszínen.",
            image: "assets/kepek/fooldal/eskuvoi szertartasvezetes.webp",
            modalContent: [
                "Megkérted a kezét, vagy igent mondtál neki? Szeretettel gratulálok! ♥ Tény, hogy a menyasszonyi ruha és a torta is fontos kellékei egy esküvőnek, de a fénypont, az esszenciális eleme mégis a szertartás maga.",
                "Tradicionális és konzervatív szertartás? Vagy bohém és vagány? Vallási elemekkel ötvözött vagy spirituális jellegű? Egymás kezét fogva a természetben, lombos fák alatt, tóparton a stégen naplementekor vagy egy kastély kertjében – nincsenek helyszínnel kapcsolatos korlátok!",
                "Az egy nap – egy esküvő elvét követem, az esketés nálam nem futószalagon történik. Előre leegyeztetünk mindent lépésenként, hangosítástól függetlenül tisztán, érthetően beszélek, így a hátsó sorban ülő vendégek is minden szót élvezhetnek.",
                "Fontos tudnivaló: a szertartásvezető nem hivatalos személy, ezért a ceremóniát megelőzően (akár hétköznap két tanúval) az anyakönyvi hivatalban szükséges aláírni a házassági lapot – ezt követően a szertartásotokat bárhol, akár még aznap megtartom.",
            ],
            gallery: [
                "assets/kepek/eskuvoi-szertartas/eskuvoi-szertartas-oltar.webp",
                "assets/kepek/eskuvoi-szertartas/eskuvoi-szertartas-ifju-par.webp",
                "assets/kepek/eskuvoi-szertartas/eskuvoi-szertartas-ferj-es-feleseg.webp",
                "assets/kepek/eskuvoi-szertartas/eskuvoi-szertartas-orszagszerte.webp",
            ],
        },
        {
            id: "hazassagi-evfordulo",
            title: "Házassági évforduló & Fogadalom megújítás",
            shortDesc:
                "Ünnepeljétek meg az együtt töltött éveket egy meghitt, személyes fogadalom-megújító ceremóniával család és barátok körében.",
            image: "assets/kepek/fooldal/hazassagievfordulo-imagefoto.webp",
            modalContent: [
                "1, 5, 7, 10, 15, 20, 25 vagy 50 év házasság… Örök igazság, hogy házasságot kötni egyszerű, de Márait idézve: „Sokkal nehezebb megőrizni valamit, mint szerezni vagy elpusztítani!”",
                "Sok házaspár a fogadalom megújító szertartás keretében szeretné megünnepelni, hogy többé és értékesebbé vált társa által a közösen bejárt út során. Kiváló alkalom ez köszönetet mondani egymásnak az együtt töltött szép évekért és erőt meríteni a következőkhöz.",
                "Bármely házassági évfordulóra – legyen az gyapjú, bőr, rózsa, porcelán, ezüst, gyöngy, arany vagy rubin – boldogan vállalok szertartásvezetést!",
            ],
            gallery: [
                "assets/kepek/hazassagi-evfordulo/hazassagi-evfordulo-unnep.webp",
                "assets/kepek/hazassagi-evfordulo/hazassagi-evfordulo-50.webp",
                "assets/kepek/hazassagi-evfordulo/hazassagi-evfordulo-csokor.webp",
                "assets/kepek/hazassagi-evfordulo/hazassagi-evfordulo-eljegyzes.webp",
            ],
        },
        {
            id: "azonos-nemu-parok",
            title: "Szertartásvezetés azonos nemű pároknak",
            shortDesc:
                "Elfogadó, ítélkezésmentes, teljes mértékben rólatok szóló ünnepi szertartás – sablonok és korlátok nélkül.",
            image: "assets/kepek/lmbtq/azonos-nemuek-szolgaltatas.webp",
            modalContent: [
                "A szerelem nem sablonra szabott, és nincs forgatókönyve. Legyen szó két nőről, két férfiról, vagy bárkiről, aki megtalálta azt az embert, akivel szeretné leélni az életét – minden szerelem megérdemli, hogy ünnepeljék.",
                "Mivel a bejegyzett élettársi kapcsolat hivatali adminisztrációja kevéssé ünnepélyes, kiemelt jelentősége van a személyes, meghitt ceremóniának, ahol abszolút elfogadó, támogató és ítélkezésmentes légkört teremtek Számotokra.",
                "Őszinte, meghitt, könnyed, bohém vagy végtelenül romantikus – bármely helyszínen, szabadon választott szimbolikus rituálékkal, teljesen a Ti történetetekre szabva.",
            ],
            gallery: [
                "assets/kepek/lmbtq/melegek.webp",
                "assets/kepek/lmbtq/melegek-nok.webp",
                "assets/kepek/lmbtq/montazs-melegek.webp",
            ],
        },
        {
            id: "nevado",
            title: "Névadó szertartás",
            shortDesc:
                "Meghitt, vallási dogmáktól független családi ünnep újszülött gyermeketek köszöntésére és hivatalos nevének átadására.",
            image: "assets/kepek/fooldal/nevado-image foto.webp",
            modalContent: [
                "A névadás az identitás és a családhoz tartozás kifejezése. A névadó ünnepség nem keresztelő, hanem annak polgári alternatívája vagy kiegészítője – egy egyedi, könnyedebb hangulatú, személyre szabott családi ceremónia.",
                "A szülők és a névadó szülők szimbolikus fogadalmakat tesznek, én pedig szertartásvezetőként emléklapot adok át. A ceremóniát igény szerint zenei és szimbolikus elemekkel (gyertyagyújtás, homokceremónia) tesszük még emlékezetesebbé.",
            ],
            gallery: [
                "assets/kepek/nevado/nevado-unnepseg-csalad-egyutt.webp",
                "assets/kepek/nevado/nevado-unnepseg-gyermek-szuletes.webp",
                "assets/kepek/nevado/nevado-unnepseg-gyermek-mosoly-anyukaval.webp",
                "assets/kepek/nevado/nevado-unnepseg-lakodalom.webp",
            ],
        },
        {
            id: "autoberles",
            title: "Esküvői autóbérlés (Audi S8)",
            shortDesc:
                "Elegáns, sötétszürke 1998-as AUDI S8 Quattro 4.2 V8 luxus izomautó sofőrrel – stílusos érkezéshez és kreatív fotózáshoz.",
            image: "assets/kepek/fooldal/autoberles-image foto.webp",
            modalContent: [
                "Az esküvőre mindig kell valami kölcsönbe… Ajánlatunk a Nagy Napra egy elegáns, sötétszürke 1998-as gyártmányú AUDI S8 Quattro 4.2 V8 – igazi luxus izomautó ritkaság.",
                "Érkezzetek stílusosan, vagy fotózkodjatok kreatívan ezzel a különleges autóval! Az autó kizárólag sofőrrel bérelhető. Szertartásvezetés megrendelésével együtt jelentős kedvezményt biztosítok!",
            ],
            gallery: [
                "assets/kepek/autoberles-budapest/eskuvo-szertartasvezeto-referencia-eskuvoikep.webp",
                "assets/kepek/autoberles-budapest/eskuvo-szertartasvezeto-budapest.webp",
                "assets/kepek/autoberles-budapest/eskuvo-szertartasvezeto-referencia.webp",
                "assets/kepek/autoberles-budapest/eskuvo-szertartasvezeto-autoberles-eskuvoikep.webp",
            ],
        },
        {
            id: "polgari-bucsuztatas",
            title: "Polgári búcsúztatás",
            shortDesc:
                "Személyes, méltó és empatikus polgári búcsúbeszédek és szertartások lebonyolítása – önálló weboldalamon.",
            image: "assets/kepek/fooldal/polgaribucsuztatas-imagefoto.webp",
            externalUrl: "https://www.vegsobucsu.hu",
            modalContent: [
                "Polgári búcsúztatással kapcsolatos részletes tájékoztatást, szolgáltatásaimat és elérhetőségeimet a dedikált weboldalamon találjátok: www.vegsobucsu.hu.",
            ],
            gallery: [],
        },
    ],
    pricing: {
        eyebrow: "Átlátható díjazás",
        title: "Szolgáltatások és árak",
        subtitle:
            "Nincs rejtett költség, éjszakai felár vagy vendéglétszámtól függő szorzó. Az alapárakat kizárólag a Budapest 20 km-es körzetén túli kiszállási távolság befolyásolja.",
        items: [
            { name: "Esküvői szertartás magyar nyelven – HÉTKÖZNAP", note: "Bármely napszakban", price: "80.000 Ft", unit: "alapár" },
            { name: "Esküvői szertartás magyar nyelven – HÉTVÉGÉN", note: "Bármely napszakban", price: "100.000 Ft", unit: "irányár" },
            { name: "Esküvői szertartás magyar nyelven – KIEMELT ÜNNEPNAPON", note: "Bármely napszakban", price: "120.000 Ft", unit: "irányár" },
            { name: "KÉTNYELVŰ esküvői szertartás (Magyar & Angol)", note: "Tolmács nélkül – hétköznap, hétvégén vagy ünnepnapon", price: "150.000 Ft", unit: "irányár" },
            { name: "Házassági évforduló / Fogadalom megújítás", note: "Személyre szabott ünnepi ceremónia", price: "50.000 Ft", unit: "fix" },
            { name: "Névadó szertartás, gyermekköszöntő", note: "Emléklappal és szimbolikus rituálékkal", price: "50.000 Ft", unit: "fix" },
            { name: "Szertartás hangosítás", note: "Igény esetén biztosítva", price: "20.000 Ft", unit: "opcionális" },
            { name: "„2 in 1” csomag: Szertartásvezető + Ceremóniamester", note: "Max. 8 órás időtartamra – bármely napon", price: "250.000 Ft-tól", unit: "csomag", featured: true },
        ],
        included: [
            "Budapesten és 20 km-es körzetén belül a kiszállási díj",
            "10+ éves szertartásvezetői tapasztalatom",
            "Korlátlan telefonos, személyes és online egyeztetés",
            "Teljesen személyre szabott esketőszöveg megírása",
            "A szertartás profi, érthető lebonyolítása",
            "Díszes emléklap fakeretben",
            "Kedvesség, figyelem, empátia, pontosság és humor",
            "Ingyenes kellékkölcsönzés (dekoráció, asztaldísz, gyertya, gyűrűpárna/doboz)",
        ],
        wildeQuote: "„Az olcsó dolgoknak van egy szörnyű hibájuk: nem érik meg azt a pénzt, amit fizetsz értük.”",
        wildeAuthor: "Oscar Wilde",
    },
    references: {
        eyebrow: "Párok visszajelzései",
        title: "Akik már nekem is IGEN-t mondtak",
        subtitle: "Igazi történetek, valódi pillanatok az elmúlt évek szertartásaiból.",
        testimonials: [
            {
                couple: "Dalma és Balázs",
                text: "„Csodálatos voltál, fantasztikus és szívmelengető volt a beszéd, mindent teljesítettél, amit szerettünk volna, sőt, még többet is. Könnyeket csaltál a szemünkbe, és széles mosolyt az arcunkra. Mindenki azt kérdezgette, hogy a fenébe találtál Stephen King 'szerelmes' idézetet. Zseniális volt, imádtuk!”",
            },
            {
                couple: "Dana és András",
                text: "„Szuper volt a szombatunk, és a vendégek részéről is az volt a visszajelzés, hogy nagyon tetszett nekik a szertartás – ebben nagy szereped volt Neked is. Többen meg is jegyezték, hogy ennyire kedves, aranyos és szerethető szertartáshoz még nem volt szerencséjük.”",
            },
            {
                couple: "Emese és Gábor",
                text: "„Szerintünk gyönyörű volt, és nagyon szerettük amiket és ahogyan mondtál. Én folyamatosan a könnyeimmel küszködtem, és a szertartás elejétől a végéig meghatódott voltam. Köszönjük Neked ezt a meghatározó élményt.”",
            },
            {
                couple: "Anna és Dani",
                text: "„Nagyon köszönjük a gyönyörű szertartást, minden tökéletesen sikerült! Rengeteg visszajelzést kaptunk, hogy milyen megható és szép volt a beszéd. Az egész nap pont úgy ment, ahogy elképzeltük.”",
            },
            {
                couple: "Tünde és Zsolt",
                text: "„Szeretném még egyszer megköszönni Neked, hogy elvállaltad a házassági évfordulós szertartásunk vezetését. A visszajelzések nagyon dicsértek Téged, mindenkinek tetszett az összeállított beszéded.”",
            },
            {
                couple: "Móni és Gergő",
                text: "„Drága Anita! Nagyon szépen köszönünk mindent még egyszer! Csodálatos volt a beszéded, mindenki imádta!”",
            },
        ],
        photos: [
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-DALMA+BALAZS.webp", label: "Dalma & Balázs" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ANNA+DANI.webp", label: "Anna & Dani" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-EMESE+GABOR.webp", label: "Emese & Gábor" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-DANIELLA+ANDRAS.webp", label: "Daniella & András" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-TUNDE+ZSOLT.webp", label: "Tünde & Zsolt" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-MONI+GERGO.webp", label: "Móni & Gergő" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ANDI+PETI.webp", label: "Andi & Peti" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ANNA+LACI.webp", label: "Anna & Laci" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-TIMI+VIKTOR.webp", label: "Timi & Viktor" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-DOROTTYA+GERGO.webp", label: "Dorottya & Gergő" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-EMESE+JAKAB.webp", label: "Emese & Jakab" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ENIKO+LACKO.webp", label: "Enikő & Lackó" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ENIKO+MATE.webp", label: "Enikő & Máté" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-EVA+TAMAS.webp", label: "Éva & Tamás" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-EVELIN+ATTILA.webp", label: "Evelin & Attila" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-BEKKA+KORNEL.webp", label: "Bekka & Kornél" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-AGI+ANDRAS.webp", label: "Ági & András" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ESZTER+KOSTAS.webp", label: "Eszter & Kostas" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-MADDIE+OLI.webp", label: "Maddie & Oli" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-MARCSI+CSABA.webp", label: "Marcsi & Csaba" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-GABOR+TEREZ.webp", label: "Gábor & Teréz" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-HEDA+GABOR.webp", label: "Héda & Gábor" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-IZA+PETI.webp", label: "Iza & Peti" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-JOHANNA+GABOR.webp", label: "Johanna & Gábor" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-JUDIT+DANI.webp", label: "Judit & Dani" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-KINGA+GERGO.webp", label: "Kinga & Gergő" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-LINDA+MARCI.webp", label: "Linda & Marci" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-MARIANN+DANI.webp", label: "Mariann & Dani" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-MONIKA+ZOLTAN.webp", label: "Mónika & Zoltán" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-REKA+BALINT.webp", label: "Réka & Bálint" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-REKA+TOMI.webp", label: "Réka & Tomi" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-STARWARS-BETTI+BENCE.webp", label: "Betti & Bence" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-SZILVI+ANDRAS.webp", label: "Szilvi & András" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-SZIMI+ZSOLTI.webp", label: "Szimi & Zsolti" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-TIBOR+ZSUZSA.webp", label: "Tibor & Zsuzsa" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-TIMEA+MIKLOS.webp", label: "Tímea & Miklós" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-TIMI+GABOR.webp", label: "Timi & Gábor" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-BEA+ZOLI.webp", label: "Bea & Zoli" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-TIMI+MATYAS.webp", label: "Timi & Mátyás" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-TIMI+TIBI.webp", label: "Timi & Tibi" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-VANDA+LASZLO.webp", label: "Vanda & László" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-VERA+GERGO.webp", label: "Vera & Gergő" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ZITA+KRISTOF.webp", label: "Zita & Kristóf" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ZSANETT+DAVID.webp", label: "Zsanett & Dávid" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-TUNDE+ZOLTAN.webp", label: "Tünde & Zoltán" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ZSANETT+BALAZS.webp", label: "Zsanett & Balázs" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ZSANETT+GABOR.webp", label: "Zsanett & Gábor" },
            { src: "assets/kepek/REFERENCIAK/REFERENCIA-ZSOFI+ZOLI.webp", label: "Zsófi & Zoli" },
        ],
    },
    faqs: [
        {
            q: "Ki az a szertartásvezető?",
            a: "A szertartásvezető az a személy, aki a házasulandók igényeihez igazodva, helyszíni és időbeli kötöttségek nélkül tart személyre szabott ceremóniát. Alapvetően esküvői szolgáltató, de szertartásvezetőként házassági évfordulók, fogadalom-megújítások és névadó szertartások celebrálásában is közreműködöm.",
        },
        {
            q: "Mi a különbség az anyakönyvvezető és a szertartásvezető között?",
            a: "A szertartásvezető nem anyakönyvvezető és nem hivatalos személy, ezért az általa vezetett ceremóniának önmagában nincs jogi hatálya. A hivatalos házasságkötés az anyakönyvvezető előtt történik, a szertartásvezető pedig a pár által megálmodott helyszínen és időpontban tartja meg a személyre szabott ünnepi szertartást.",
        },
        {
            q: "Mit kell tennünk, ha törvényesen szeretnénk összeházasodni, de szertartásvezetőt szeretnénk a nagy napunkra?",
            a: "A hivatalos házasságkötéshez először az anyakönyvvezetőnél kell bejelenteni a házassági szándékot a jogszabály szerinti határidőben. A polgári házasságkötés megtörténte után a szertartásvezető az általatok választott helyszínen, napon és napszakban tarthatja meg az ünnepi ceremóniát.",
        },
        {
            q: "Minek a szertartásvezető, ha az anyakönyvvezető összead minket?",
            a: "Azért, mert így a ceremónia teljes egészében hozzátok alkalmazkodhat: a helyszín, az időpont, a hangulat, a történetetek és a szimbolikus elemek is személyre szabhatók. Külső helyszíni hivatalos házasságkötésnél az anyakönyvvezetőt illetékességi és szervezési korlátok köthetik, míg szertartásvezetőként országosan vállalok megbízást.",
        },
        {
            q: "Van egy álomhelyszínünk, de az anyakönyvvezető nem tud oda kijönni. Mit tegyünk?",
            a: "Keressetek bátran! Rugalmasan vállalok szertartást az általatok választott helyszínen, és együtt megtervezzük, hogyan váljon az elképzelésetekből személyes, méltó és emlékezetes ceremónia.",
        },
        {
            q: "Van egy kedvenc dátumunk, de az anyakönyvvezetőnek nem jó az időpont. Mit tegyünk?",
            a: "Szertartásvezetőként rugalmasan egyeztetek veletek. Hétköznap, hétvégén, ünnepnapon, reggel vagy este is tartható ceremónia, amennyiben az adott időpontom még szabad.",
        },
        {
            q: "Tarthatok esküvőt anyakönyvvezető nélkül is?",
            a: "Ünnepi ceremóniát igen, joghatással járó házasságot azonban nem. A kizárólag szertartásvezető közreműködésével megtartott esketés nem hoz létre hivatalos házasságot. Ha törvényes házasságot szeretnétek, a hivatalos anyakönyvi eljárásra is szükség van.",
        },
        {
            q: "Azonos nemű pár vagyunk. Tartasz nekünk szertartást?",
            a: "Igen, örömmel tartok nektek személyre szabott szertartást. Magyarországon az azonos nemű párok számára a házasság jelenleg nem elérhető, ugyanakkor bejegyzett élettársi kapcsolat létesíthető. A szertartásvezetői ceremóniát az elképzeléseitekhez igazítom.",
        },
        {
            q: "Viselsz nemzetiszínű szalagot munka közben?",
            a: "Általában igen, de ha azt szeretnétek, hogy ne viseljem, természetesen ehhez is alkalmazkodom.",
        },
    ],
    blogs: [
        {
            id: "eskuvoi-divat-3",
            date: "2026. 10. 01.",
            title: "Az esküvői divat változása évszázadokon át – 3. rész (19. századtól napjainkig)",
            excerpt:
                "Viktória királynő fehér ruhájától a hollywoodi elegancián és a hetvenes évek bohém szabadságán át a mai menyasszonyok korlátlan választásáig.",
            cover: "assets/kepek/blog/3-eskuvoi-divat/3.Blog-Foto01.webp",
            gallery: [
                "assets/kepek/blog/3-eskuvoi-divat/3.Blog-Foto02.webp",
                "assets/kepek/blog/3-eskuvoi-divat/3.Blog-Foto05.webp",
                "assets/kepek/blog/3-eskuvoi-divat/3.Blog-Foto08.webp",
                "assets/kepek/blog/3-eskuvoi-divat/3.Blog-Foto11.webp",
            ],
            sections: [
                {
                    heading: "A 19. század – amikor Viktória királynő divatot teremtett",
                    body: "Az első híresség, aki fehérben állt oltár elé, I. Mária skót királynő volt 1558-ban, de a modern fehér menyasszonyi ruha neve elválaszthatatlan Viktória brit királynőtől. Amikor 1840-ben hozzáment Albert herceghez, fehér selyemből készült, csipkével díszített ruhája bejárta a világot, és megmutatta, hogy viselője megengedheti magának ezt a tisztaságot és luxust.",
                },
                {
                    heading: "Az 1920-as évektől Hollywood aranykoráig",
                    body: "Az első világháború után a ruhák lazábbak és rövidebbek lettek, megjelent a flapper stílus. A harmincas években Hollywood beköltözött az esküvőbe a lágyan omló szaténokkal, míg a háborús negyvenes években katonai ejtőernyők selyméből is készültek reményt adó menyasszonyi ruhák. Az 1950-es években aztán Grace Kelly ikonikus csipkeruhája hozta vissza a hercegnős időtálló eleganciát.",
                },
                {
                    heading: "A hatvanas évektől a hetvenes évek bohém szabadságán át napjainkig",
                    body: "A hatvanas években a mini ruha is bekopogtatott az esküvői ajtón, míg a hetvenes években megjelentek a bohém ruhák, horgolt és virágos motívumok. A nyolcvanas évek Diana hercegnő óriási puffos ujjú uszályáról szólt, a kilencvenes évek a letisztult minimalizmusról. Ma már nincsenek kőbe vésett szabályok: legyen elefántcsont, champagne, púder, nadrágkosztüm vagy királynői csipke – a legfontosabb, hogy a tükörben azt érezd: „Igen. Ez vagyok én.”",
                },
            ],
        },
        {
            id: "eskuvoi-divat-2",
            date: "2026. 09. 01.",
            title: "Az esküvői divat változása évszázadokon át – 2. rész (Középkortól rokokóig)",
            excerpt:
                "A középkortól a rokokóig az esküvői ruha jóval többet jelentett egyszerű ünnepi viseletnél: gazdagságot, rangot és színekbe rejtett üzeneteket hordozott.",
            cover: "assets/kepek/blog/2-eskuvoi-divat/kozepkor-kollazs.webp",
            gallery: [
                "assets/kepek/blog/2-eskuvoi-divat/reneszansz-kollazs-menyasszony.webp",
                "assets/kepek/blog/2-eskuvoi-divat/barokk-kollazs-menyasszony.webp",
                "assets/kepek/blog/2-eskuvoi-divat/rokoko-kollazs-menyasszony.webp",
            ],
            sections: [
                {
                    heading: "A középkor – pompa, gazdagság és a 'valami kék' eredete",
                    body: "A középkorban a fehér ruha még egyáltalán nem volt általános. A nemesi menyasszonyok bársonyt, brokátot, damasztot viseltek aranyfonallal és drágakövekkel. A legnépszerűbb szín a kék volt, amely tisztaságot és hűséget jelképezett – sokak szerint innen ered a mai 'valami kék' esküvői hagyomány is.",
                },
                {
                    heading: "Reneszánsz és Barokk – amikor a ruha műalkotás volt",
                    body: "A reneszánsz és barokk korokban a súlyos, akár 8–15 kilós rétegelt kelmék a család rangját hirdették. A színek között a királykék, a mélybordó, az arany, a mélyzöld és a vörös uralkodott, gyöngyökkel és mirtuszkoszorúval ékesítve.",
                },
                {
                    heading: "Rokokó – könnyedség és pasztell árnyalatok",
                    body: "A 18. századi rokokó elhozta a játékos könnyedséget, selyemszalagokat, finom csipkéket és a gyönyörű pasztell színeket: elefántcsontot, halványkéket és púderrózsaszínt, magasra tűzött hajkölteményekkel.",
                },
            ],
        },
        {
            id: "eskuvoi-divat-1",
            date: "2026. 08. 01.",
            title: "Az esküvői divat változása évszázadokon át – 1. rész (Ókor)",
            excerpt:
                "Fehér ruha? Az ókorban ez közel sem volt magától értetődő. Utazzunk vissza Egyiptomba, Görögországba és Rómába több ezer év távlatából.",
            cover: "assets/kepek/blog/eskuvoi-divat-valtozasa-evszazadokon-at-okor/1.OKOR-KOLLAZS.webp",
            gallery: [
                "assets/kepek/blog/eskuvoi-divat-valtozasa-evszazadokon-at-okor/3.EGYIPTOMI.PAR.webp",
                "assets/kepek/blog/eskuvoi-divat-valtozasa-evszazadokon-at-okor/5.GOROGPAROK.webp",
                "assets/kepek/blog/eskuvoi-divat-valtozasa-evszazadokon-at-okor/10.OKORIROMAESKUVO.webp",
            ],
            sections: [
                {
                    heading: "Ókori Egyiptom – finom lenvászon és arany ékszerek",
                    body: "Az ókori Egyiptomban a menyasszony hosszú, fehér vagy törtfehér lenvászon tunikát viselt, amelyet arany nyakláncokkal, lótuszvirágos és ankh motívumokkal díszítettek – sok kutató szerint a karikagyűrű hagyománya is erre az időszakra nyúlik vissza.",
                },
                {
                    heading: "Ókori Görögország – a mai Empire-fazonok őse",
                    body: "A görög menyasszonyok könnyű khitónt viseltek derékövvel, fátyollal és Aphrodité szent növényéből, mirtuszból font koszorúval. A finom redőzés és emelt derékvonal ihlette a mai modern Empire-szabású esküvői ruhákat.",
                },
                {
                    heading: "Ókori Róma – a Herkules-csomó és a sáfrány fátyol",
                    body: "Rómában a tunica recta gyapjúövét – a Herkules-csomót – a hagyomány szerint kizárólag a férj oldhatta ki. A menyasszony fejét pedig szerencsét hozó, élénk narancssárga vagy sáfrányszínű fátyol (flammeum) borította.",
                },
            ],
        },
    ],
    contact: {
        eyebrow: "Kapcsolatfelvétel",
        title: "Beszéljünk a Nagy Napotokról",
        subtitle:
            "„A tökéletes szertartás nem rólam szól, hanem rólatok – rólatok, a ti történetetekről.”",
        photo: "assets/kepek/kapcsolat/KAPCSOLAT-ALLO.webp",
    },
    legal: {
        impresszum: [
            "Weboldal üzemeltetője: Debreczeni Anita",
            "E-mail: anita@szertartasmester.hu | Telefon: +36 70 335 4440",
            "Tárhelyszolgáltató: ATW Internet Kft. (H-1138 Budapest, Esztergomi út 66. fsz. 1., info@atw.co.hu, +36 1 6000 289)",
            "Figyelem! A honlapon található tartalom, szöveg, fotók, grafikák kizárólagosan Debreczeni Anita tulajdonát képezik, és szerzői jogi védelem alatt állnak.",
        ],
        adatkezeles: [
            "A weboldal üzemeltetője tiszteletben tartja a látogatók személyes adatainak védelmét, és az adatkezelést a hatályos jogszabályoknak megfelelően végzi.",
            "Amennyiben e-mailben, telefonon vagy a kapcsolatfelvételi űrlapon keresztül felveszi velünk a kapcsolatot, az Ön által önként megadott adatokat kizárólag a kapcsolatfelvétel, ajánlatadás és a szolgáltatás nyújtása érdekében kezeljük.",
            "Az adatokat csak a szükséges ideig őrizzük meg, és harmadik félnek nem adjuk át. Adatkezelő: Debreczeni Anita (anita@szertartasmester.hu, +36 70 335 4440).",
        ],
    },
};

type ArtistListing = {
  name: string;
  bio?: string;
  isGate: boolean;
  type: "live" | "dj" | "installation" | "workshop";
  imageUrl?: string;
  imageCredit?: string;
};

export const LiveActs: ArtistListing[] = [
  {
    name: "Jena Jang",
    type: "live",
    bio: "Jena Jang is a South Korean audiovisual artist exploring vocal improvisation, experimental music, harsh noise, DIY instruments, and performance art.\n\nCurrently based in Prague, Czechia, they navigate diverse sonic and cultural landscapes on a global scale. Using high-pitched frequencies crafted with hand-built synthesizers, extended vocal improvisation, and power electronics, their work transforms trauma and liberates the mind from anguish.",
    isGate: false,
    imageUrl: "/images/lineup/jenajang.webp",
    imageCredit: "Photo Credit: Verena Mayrhofer",
  },
  {
    name: "Gus Cantor",
    type: "live",
    bio: "",
    isGate: false,
  },
  {
    name: "Jack Dove",
    type: "live",
    bio: "Jack Dove is a musician and artist from London working in performance and composition using primarily pyrotechnics and electrical light to influence and control self devised electronic and electro-mechanical instruments.\n\nHis work makes purposefully ambiguous of what is controlling what, playing between the programmed and the aleatoric.\n\nA recent exploration titled - Exploding Caps - uses both electrical and acoustic sounds from exploding electrolytic capacitors, creating rhythmic patterns by overloading them with high voltage.\n\nHas performed and exhibited at Pochen Beinale 2024, Go!25 Nova Gorica, Cafe Oto and Berlin Atonal 2023. Earlier in 2024 released Music For Fireworks on Loose Trax.",
    isGate: false,
    imageUrl: "/images/lineup/jackdove.webp",
  },
  {
    name: "Mi yá",
    type: "live",
    bio: "Electronic experimental artist, the white cat combination of ambient textures with dub and minimal music. Layering with everyday sounds that surround you with rhythmic complexity.\n\nAnalog music. Future music.\n\nTalk to algorithm 32.",
    isGate: false,
    imageUrl: "/images/lineup/miya.webp",
  },
  {
    name: "Cold Light",
    type: "live",
    bio: "Cold Light are an avant-rap crew featuring members Best Available Technology, Birthmark, CSNL, ELDON & Withdrawn, with a string of releases on labels Felt, Ghost Notes Worldwide, PTP & their own label.",
    isGate: false,
    imageUrl: "/images/lineup/coldlight.webp",
  },
  {
    name: "Seshtan",
    type: "live",
    bio: "Seshtan reimagines the sound of the harp by exploring experimental techniques and diverse physical methods of sound synthesis through her instrument. Drawing inspiration from ceremonial sounds, she creates mesmerising, esoteric soundscapes through a wide range of textures, loops, and effects —from gong-like tones and howling echoes to drone and percussive sounds. ",
    isGate: true,
    imageUrl: "/images/lineup/seshtan.webp",
  },
  {
    name: "Internal Object + Silkenste",
    type: "live",
    bio: "Embodiment of psychophysical inner dialogues traced in space-time through movement. Exploring layers of the subconscious through a reactive chain of repetitive actions led by instinct. An experimental audiovisual game between agency and passivity, dissolving into memory and dreams.",
    isGate: true,
    imageUrl: "/images/lineup/internalobjectsilkenste.webp",
  },
  {
    name: "Lissener",
    type: "live",
    bio: `Lissener hispert me, "What is it? Be they terning be they moving?" \n
I hispert back, "Its broakin machines they aint moving." It wernt nothing like when you dig up old rottin machines out of the groun these wer in ther parper working place nor nothing rottin they wer some kynd of iron dint rot it wer all shyning all catching that shaky glimmer. \n
Lissener hispert, "Whats the matter?"\n
I hispert back, "O what we ben! And what we come to!" Boath of us wer sniffling and snuffling then. Me looking at them jynt machines and him lissening ther sylents. Right then I dint know where I wer with any thing becaws all on a suddn I wernt seeing any thing from where I seen it befor.`,
    isGate: true,
    imageUrl: "/images/lineup/lissener.webp",
  },
];

export const djActs: ArtistListing[] = [
  {
    name: "Proc Fiskal",
    type: "dj",
    bio: ``,
    isGate: false,
  },
  {
    name: "Corefusion",
    type: "dj",
    bio: `Demetzy is the co-founder of Corefusion, London’s only club night devoted to breakcore. Growing up in the free parties of the mountains of North Wales and breakcore squat parties in London, Demetzy is all about the unusual and unexpected.\n\n\Expect the blending of all things fast, broken but always banging. Get ready to answer the call of the weird…`,
    isGate: false,
  },
  {
    name: "Medallion Man",
    type: "dj",
    bio: `Medallion Man is the co-founder and driving force behind Loose Lips, shaping it into a diverse musical platform since 2014. A DJ known for eclectic mixing and rave-inspired sets, he has toured the U.S. and Europe while maintaining a strong UK presence.\n\nPassionate about radio, he founded 199Radio in 2017, which evolved into Threads Radio in 2019. Committed to community-driven projects, he also co-founded the London Promoter Society with Hayley Squires, promoting unity among grassroots event organizers.\n\nThrough events, label releases, and media, he continues to bridge diverse sounds, scenes, and generations in the electronic music landscape.`,
    isGate: false,
  },
  {
    name: "Overneath",
    type: "dj",
    bio: `Fish queen, dubstep fairy, PhDJ. Overneath has escaped the depths of Cambridge to help you all dissociate `,
    isGate: true,
  },
];

export const installationArtists: ArtistListing[] = [
  {
    name: "Tabitha Weddell",
    type: "installation",
    bio: `Tabitha is a visual artist living and working in South London. Their practice’s approach is sustainability conscious - this has led tabitha to digging and foraging wild clay, and using plant, shell, bone and other organic matter to create ash glazes.\m\nTheir work often explores themes of protection and defence, utilising delicate materials in place of traditionally durable ones.\n\nINSTAGRAM: @wabithateddell`,
    isGate: false,
  },
  {
    name: "Baos",
    type: "installation",
    bio: `From an illustrative and visual background Baos has been working as a freelancer in London since 2016. While living and being involved in the organisation of multiple events at the now-defunct warehouse Unit D4 (RIP), Baos had the chance to experiment and evolve his approach to traditionally flat illustrations and visual imagery, experimenting with a more immersive approach.\n\nHis installations reintroduce a visual element to the auditory experience, crafting immersive environments where attendees become key players in the night.\n\nFor the next GATE event, Baos is forging a new installation. Details are hushed for now. Come and be part of something memorable.`,
    isGate: false,
  },
  {
    name: "Martha",
    type: "installation",
    bio: ``,
    isGate: true,
  },
  {
    name: "Ella Ex Machina",
    type: "installation",
    bio: `Ella is a member of GATE and a 3d artist, making both virtual artwork and 3d printed art and fashion. Today she has designed and made custom jewellery for the DJ decks.\n\nHer Instagram is: @ellaexmachina `,
    isGate: true,
  },
];

export const visualsArtists: ArtistListing[] = [
  {
    name: "Visuals Ru",
    type: "installation",
    bio: `Visual Ru is a multi-media visual performer exploring image production and representation through playful kinetic sculptures. Using tactile materials, live-feed video, projectors, and kinetic light installations, Ru creates dynamic hybrid spaces.\n\nHis process embraces real-time improvisation, manipulating forms and light with his hands and motorized platforms to produce immersive, ever-evolving visuals.`,
    isGate: false,
  },
];

export const workshopArtists: ArtistListing[] = [
  {
    name: "Engineer",
    type: "installation",
    bio: `An interactive beginners workshop on modular synthesisers, how they can be used to make music, and improvise live.`,
    isGate: false,
  },
];

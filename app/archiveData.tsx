import { Link } from "./types";
import React, { ReactElement } from "react";

type EventArchiveItem = {
  title: string;
  date: Date | Date[];
  location: string;
  coverImageUrl: string;
  imageUrls: { url: string; credit: string; alt: string }[];
  descriptionMarkup: string;
  contentLinks: Link[];
};

type RadioArchive = {
  mixgate: {
    title: string;
    releaseDate: Date;
    url: string;
    coverUrl: string;
    description: string;
  }[];
  threads: {
    title: string;
    releaseDate: Date;
    url: string;
    coverUrl: string;
    description: string;
  }[];
};

type WorkshopArchive = {
  title: string;
  date: Date;
  coverUrl: string;
  description: string;
  imageUrls: string[];
};

type Archive = {
  events: EventArchiveItem[];
  radio: RadioArchive;
  workshops: WorkshopArchive[];
};

export const ARCHIVE_DATA: Archive = {
  events: [
    {
      title: "GATE Compilation Release",
      date: new Date(2024, 4, 2),
      location: "Mapps Cafe, Hackney Wick",
      coverImageUrl: "/posters/CompilationRelease.jpg",
      imageUrls: [],
      contentLinks: [],
      descriptionMarkup: "<Info Coming Soon>",
    },
    {
      title: "Grab A Tent Everybody Festival",
      date: [new Date(2023, 7, 4), new Date(2023, 7, 6)],
      location: "Secret Location",
      coverImageUrl: "/posters/GRABATENTEVERYBODY.jpg",
      imageUrls: [],
      contentLinks: [],
      descriptionMarkup: `<Info Coming Soon>`,
    },
    {
      title: "GATE - 5",
      date: new Date(2023, 2, 18),
      location: "Algha Works, Fish Island",
      coverImageUrl: "/posters/5.jpg",
      imageUrls: [
        { url: "images/5/1.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/2.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/4.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/3.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/5.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/6.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "images/5/7.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/8.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/9.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/10.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/11.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/12.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/13.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/14.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "images/5/15.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/16.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/17.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/18.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "images/5/19.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "images/5/20.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "images/5/21.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/22.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/23.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/24.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/25.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/26.webp", alt: "image", credit: "Lorella Bianco" },
        { url: "images/5/27.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/28.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "images/5/29.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/30.webp", alt: "image", credit: "Jan Bernet" },
        { url: "images/5/31.webp", alt: "image", credit: "Lorella Bianco" },
        { url: "images/5/32.webp", alt: "image", credit: "Lorella Bianco" },
      ],
      contentLinks: [],
      descriptionMarkup: `<Info Coming Soon>`,
    },
    {
      title: "PROPAGATE Fesival",
      date: [new Date(2022, 6, 5), new Date(2022, 6, 7)],
      location: "Secret Location",
      coverImageUrl: "/posters/PROPAGATE.jpg",
      imageUrls: [],
      contentLinks: [],
      descriptionMarkup: `<Info Coming Soon>`,
    },
    {
      title: "GATE - 4",
      date: new Date(2022, 2, 26),
      location: "UNIT 18, E3",
      coverImageUrl: "/posters/4.jpg",
      imageUrls: [
        { url: "/images/4/1.webp", alt: "image", credit: "GATE" },
        { url: "/images/4/2.webp", alt: "image", credit: "GATE" },
        { url: "/images/4/3.webp", alt: "image", credit: "GATE" },
        { url: "/images/4/4.webp", alt: "image", credit: "GATE" },
        { url: "/images/4/5.webp", alt: "image", credit: "GATE" },
        { url: "/images/4/6.webp", alt: "image", credit: "GATE" },
        { url: "/images/4/7.webp", alt: "image", credit: "GATE" },
        { url: "/images/4/8.webp", alt: "image", credit: "GATE" },
        { url: "/images/4/9.webp", alt: "image", credit: "GATE" },
      ],
      contentLinks: [],
      descriptionMarkup: `
DANALOGUE x U x KENICHI IWASA
An analogue synth bandit from The Comet Is Coming and Soccer96
&nbsp; \n
KIRSTEN
Producer from the Parisian suburbs, Kirsten impregnates himself with horrific, brutal and melancholic sounds inspired by the night by mixing the EBM dark electro genres with beat break percussions.
&nbsp; \n
Georgie McVicar
George McVicar is a producer, DJ and writer working in electronic music. Last year, they released their third full length album (and debut book), 'Tiny Grassland' on Manchester imprint, Mutualism. In the past few months, Georgie has released a trilogy of minimalist 12"s with the label-formerly-known-as 'SM-LL', adopting the label's mantra of 'Repetition, Reduction, Reference'. The last in the trilogy, entitled 'level', was described by BoomKat as a release that "will either push foolhardy types to the precipice of sanity or focus their nerves for the incoming march of robots shooting death rays from googly eyes."`,
    },
    {
      title: "GATE - 3",
      date: new Date(2023, 1, 19),
      location: "Unit D1, Fish Island",
      coverImageUrl: "/posters/3.jpg",
      imageUrls: [
        { url: "/images/3/1.webp", alt: "image", credit: "GATE" },
        { url: "/images/3/2.webp", alt: "image", credit: "GATE" },
        { url: "/images/3/3.webp", alt: "image", credit: "GATE" },
        { url: "/images/3/4.webp", alt: "image", credit: "GATE" },
        { url: "/images/3/5.webp", alt: "image", credit: "GATE" },
        { url: "/images/3/6.webp", alt: "image", credit: "GATE" },
        { url: "/images/3/7.webp", alt: "image", credit: "GATE" },
        { url: "/images/3/8.webp", alt: "image", credit: "GATE" },
        { url: "/images/3/9.webp", alt: "image", credit: "GATE" },
      ],
      contentLinks: [],
      descriptionMarkup: `
LIVE ELECTRONIC PERFORMANCES FROM:
&nbsp; \n
ex.sses
ex.sses is an experimental sound artist and producer. Her works are placed between broken dubstep, techno, dark textural noise and cinematic atmospheres.
&nbsp; \n
Autoregressive
Live set & field recordings - perversive sounds of dark ambient industrial drone. Translating functional magnetic resonance imaging (fMRI) brain images into an audible score.
&nbsp; \n
Psychiceyeclix
Psychiceyeclix has a fluid approach to creation, never settling on any particular style or setup constantly experimenting with sound & visuals.
Using circuit bent toys/devices & diy electronics to create anything from glitch, harsh noise to drum & bass.
&nbsp; \n
The Loose Association of Cinema and Sound
Hey hey hey ✨ We are the Loose Association of Cinema and Sound, an audiovisual performance collective bringing together musicians from the band Los Capivaras, the audio-visual collective SENSE and the underground film club Cinniclub 15.

For the love of experimental soundscapes and moving images, our practice unfolds through improvisation, multilayered storytelling and collective immersion.

The core of our group is composed of Patricia Puertas; Xuân Sinden; Bernardo Varela; Manon Schwich; Lala Padula; Giovanna Busato; and Denise Padrón Benítez - but we are ever so often joined by friends and allies.

We are the same in different shapes and we play around with electric waves, sound and video frequencies since 2018.
&nbsp; \n
BART
Live modular mayhem
&nbsp; \n
TROJΛNOVSKX
techno/ritualistic/ambient/drone/IDM live & DJ project
(pronounce tro-ya-noff-ski)
`,
    },
    {
      title: "GATE - 2",
      date: new Date(2021, 11, 11),
      location: "Oslo House, Hackney Wick",
      coverImageUrl: "/posters/2.jpg",
      imageUrls: [
        { url: "/images/2/1.webp", alt: "image", credit: "GATE" },
        { url: "/images/2/2.webp", alt: "image", credit: "GATE" },
        { url: "/images/2/3.webp", alt: "image", credit: "GATE" },
        { url: "/images/2/4.webp", alt: "image", credit: "GATE" },
      ],
      contentLinks: [],
      descriptionMarkup: `
LIVE ELECTRONIC PERFORMANCES from:
&nbsp; \n
UKAEA
Techno weirdness and relentless third eye opening rhythms
&nbsp; \n
ALÉM
Elektrooooo
&nbsp; \n
T.V.I.D.
Structurally sound melodic noise brutalists
&nbsp; \n
ELLA EX MACHINA
Experimental beat driven music inspired by sample heavy electronic music from the past 30 years
&nbsp; \n
DJ SETS from
GAPTOOTH
SINNY
ODDMAN
      `,
    },
    {
      title: "GATE",
      date: new Date(2021, 9, 23),
      location: "Unit A12, Fish Island",
      coverImageUrl: "/posters/1.jpg",
      imageUrls: [
        { url: "/images/1/1.webp", alt: "image", credit: "GATE" },
        { url: "/images/1/2.webp", alt: "image", credit: "GATE" },
      ],
      contentLinks: [],
      descriptionMarkup: `<Info Coming Soon>`,
    },
  ],
  radio: {
    mixgate: [
      {
        title: "SKIDOOJACKET - 003",
        url: "https://soundcloud.com/gate-987374437/mixgate-003-skidoojacket",
        releaseDate: new Date(2023, 8, 1),
        coverUrl: "/MIXGATE003.jpg",
        description: `
For the 3rd edition of MIXGATE, SKIDOOJACKET takes us on an ELEKTRO excursion straight back across the Atlantic to his island domain.
&nbsp; \n
Stranded in a land without snow, SKIDOOJACKET substitutes his adrenalized winter endeavours for an outlet of equal haste.
&nbsp; \n
“b’ys dis is da closest you’ll git to havin a go on me ELAN 250”
        `,
      },
      {
        title: "GAPTOOTH - 002",
        url: "https://soundcloud.com/gate-987374437/mixgate-002-gaptooth",
        releaseDate: new Date(2022, 5, 16),
        coverUrl: "/MIXGATE002.jpg",
        description: `
In our neck of the woods, a party worth its salt would never subside before an essential dose of sweat inducers from GAPTOOTH.
&nbsp; \n
A bastion of pink crocs and 150bpm ghettotek remix’s of Fergie. They recently co-founded the new LGBTQIA+ elektro night ‘Coinpurse’, a platform for queer DJs to play sillier tunes.
&nbsp; \n
GAPTOOTH takes us through a blinding run of elektro, techno, ghettotek, and booty for the second instalment of MIXGATE        
`,
      },
      {
        title: "ODDMAN - 001",
        url: "https://soundcloud.com/gate-987374437/gatemix001-oddman",
        releaseDate: new Date(2022, 4, 25),
        coverUrl: "/MIXGATE001.jpg",
        description: `
Oddman brings together a selection of dub influenced tracks, crumpled scraps of paper reading ‘PASTORAL ENGLISH MYSTICISM’ and ‘INESCAPABLE URBAN MONOCULTURE’.
&nbsp; \n
Scrunched and puckered in hand, the scraps debatably read: ‘ESCAPE ENGLISH CULTURE’.        
`,
      },
    ],
    threads: [
      {
        title: "Gather All The Electronics w/ Gina Prat Lilly",
        url: "https://soundcloud.com/threadsradio/gather-all-the-electronics-w-gina-prat-lilly-hackney-wick-03-oct-23",
        releaseDate: new Date(2023, 9, 3),
        coverUrl: "/THREADSG.jpg",
        description: `Beckett & P-Orridge`,
      },
    ],
  },
  workshops: [
    {
      title: "Dub Siren Building Workshop",
      coverUrl: "/DUBSIRENWORKSHOP.jpg",
      date: new Date(2024, 8, 24),
      description: `⚡️ GATE presents it's first pedagogical exploration 🔌
&nbsp; \n
Come learn how to build a dub siren from scratch with the GATE crew. Complete with 4 LFO controls and a delay chip.
&nbsp; \n
Included is a fresh PCB and all electronic components. Not included are an enclosure and 9V power supply, altho these can be sourced on request.
&nbsp; \n
We'll go through basic through-hole soldering, reading resistors and capacitors and everything else needed to assemble the kit.
&nbsp; \n
£60. East London. 24th Aug 11am - Late.
&nbsp; \n
7 spots available. DM for more details and to sign up.
&nbsp; \n
Credit for PCB design to: [https://www.instructables.com/Dub-Siren-DelayReverb-2-in-1-Synth-Little-Synths-W/]`,
      imageUrls: [],
    },
  ],
};

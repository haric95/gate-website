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
      imageUrls: [
        {
          url: "/images/MAPPS/Harri/1.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/2.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/3.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/4.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/5.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/6.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/7.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/8.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/9.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/10.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/11.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/12.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/13.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/14.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/15.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/16.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/17.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/18.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/19.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/20.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/21.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/22.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/23.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/24.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/25.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/26.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/27.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/28.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/29.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/30.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Harri/31.webp",
          alt: "image",
          credit: "Harri Sharpe",
        },
        {
          url: "/images/MAPPS/Jamie/1.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
        {
          url: "/images/MAPPS/Jamie/2.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
        {
          url: "/images/MAPPS/Jamie/3.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
        {
          url: "/images/MAPPS/Jamie/4.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
        {
          url: "/images/MAPPS/Jamie/5.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
        {
          url: "/images/MAPPS/Jamie/6.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
        {
          url: "/images/MAPPS/Jamie/7.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
        {
          url: "/images/MAPPS/Jamie/8.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
        {
          url: "/images/MAPPS/Jamie/9.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
        {
          url: "/images/MAPPS/Jamie/10.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
        {
          url: "/images/MAPPS/Jamie/11.webp",
          alt: "image",
          credit: "Jamie Goring",
        },
      ],
      contentLinks: [],
      descriptionMarkup: `
Hidden under a jumper and smuggled up the ladder,&nbsp; \n 
out of a colossal network of caverns and tunnels beneath the city.&nbsp; \n
Elicited from hushed assemblies in makeshift psychomanteums.&nbsp; \n
Drawn on scraps of cardboard, scattered into the River Lea.&nbsp; \n
&nbsp; \n
The canary flies,&nbsp; \n
Its wings slicked and faltering&nbsp; \n
Orange cool technology.&nbsp; \n
&nbsp; \n
&nbsp; \n
The GATE Executants have been busy excavating waveforms from the depths of their synthetic conscience. In an aggregated body, ripe for your consumption, this is their first contribution to the sphere of downloadable audio files. Many thanks to H and everyone else down at Mapps Cafe for letting us push aside the ketchup and mayonnaise for a few hours to host one of the more special evenings we’ve had in a while, with live performances by Bubble People, Ella Ex Machina, Oluwafunmilayo & Xuân perform: Triskele, Roberta Von & Internal Object."`,
    },
    {
      title: "Grab A Tent Everybody Festival",
      date: [new Date(2023, 7, 4), new Date(2023, 7, 6)],
      location: "Secret Location",
      coverImageUrl: "/posters/GRABATENTEVERYBODY.jpg",
      imageUrls: [
        {
          url: "/images/GRABATENTEVERYBODY/Isntses/1.webp",
          alt: "image",
          credit: "Isn'tses",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Isntses/2.webp",
          alt: "image",
          credit: "Isn'tses",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Isntses/3.webp",
          alt: "image",
          credit: "Isn'tses",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Isntses/4.webp",
          alt: "image",
          credit: "Isn'tses",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Isntses/5.webp",
          alt: "image",
          credit: "Isn'tses",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Isntses/6.webp",
          alt: "image",
          credit: "Isn'tses",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Isntses/7.webp",
          alt: "image",
          credit: "Isn'tses",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Isntses/8.webp",
          alt: "image",
          credit: "Isn'tses",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Isntses/9.webp",
          alt: "image",
          credit: "Isn'tses",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Maxime/1.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Maxime/2.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Maxime/3.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Maxime/4.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Maxime/5.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Maxime/6.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Maxime/7.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Maxime/8.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Maxime/9.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Maxime/10.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Dario/1.webp",
          alt: "image",
          credit: "Dario Mongiardi",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Dario/2.webp",
          alt: "image",
          credit: "Dario Mongiardi",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Dario/3.webp",
          alt: "image",
          credit: "Dario Mongiardi",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Dario/4.webp",
          alt: "image",
          credit: "Dario Mongiardi",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/1.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/2.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/3.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/4.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/5.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/6.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/7.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/8.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/9.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/10.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/11.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/12.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/13.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/14.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/15.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/16.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/17.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/18.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/19.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/20.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/GRABATENTEVERYBODY/Colin/21.webp",
          alt: "image",
          credit: "GATE",
        },
      ],
      contentLinks: [],
      descriptionMarkup: `
INDOORS//OUTDOORS
LIVE//DJ//PERFORMANCE//INSTALLATIONS
2 SOUND SYSTEMS
A FIELD AND A BARN
120 PEOPLE
SECRET LOCATION
&nbsp; \n
devout to our principles
we brave the next stimulus
of what is now tradition
&nbsp; \n
well rehearsed
and unequipped beyond instinct
let us converge
upon the granted terrain
&nbsp; \n
The second instalment of the GATE experimental music and arts festival, with live sets, performances, DJs, workshops and installations drawn from the GATE gestalt consciousness and exciting artists from the London, UK and European scene, on a top-class Turbosoud rig. Each ticket included four home-cooked meals cooked up by our resident flavourblazers, as well as access to an installation of soft pillows and curated zine library, a subconscious drawing workshop with Buket Yenidoğan, a durational performance by Olive Hardy involving petroleum jelly. Sokora Mortal eased us into things with a noise, lounge and spoken word set, followed by ex.sses with their mind-bending hauntological live set. Boundary-pushing, high-energy duo Torn Relics drew to a close the first night of outdoor programming, accompanied by a 6-metre-tall pole performance. scary hari’s [GATE] live set got us going in the Barn, featuring three dimensions you did not even know about. Ignominious Canadian sensation SKIDOOJACKET [GATE] led us straight into an electro-frenzy, before the dance-floor selections and sprawling dubbed vocals of Waxwing + Rex Domino. We had dubstep slammers from proto//spacer [GATE], and mashed rhythms from Ab Ru, MOB’s own lover-of-ze-sub. Lewi Boome’s dizzying rhythms and warped textures took us to 5am through a range of off-kilter club tracks. A rare daylight excursion by Dome Zero, whose off-guard abrasiveness and rhythmic inventiveness only whetted our palates for that which was to come. Then, Laboranta and Neo Fung’s secret cabbage performance took place, before a live IDM set from our resident organ-grinder Bubble People [GATE]. Left-field antics: ritualistic rhythms from Seshtan [GATE] and a live set from Craft Ebbing [GATE] that you can only describe as sheet music going through a paper shredder. Ella Ex Machina [GATE] treated the masses to live coded electronic hardcore. We were spellbound by Fiesta Soundsystem’s jungle-techno rhythmic recursions and Nosewise’s new incursion into hypnotic, richly-textured jazz and new-wave. Psychogeographic synthesiser circuits were provided by the duo Isn’tses, and a hardcore noise meditation from chief whip Internal Object [GATE]. Everyone was gassed to hear Spiral Tribe legend Kim Cosmik, LNR's wonky controlled chaos. Two belting sets from sinny [GATE] and Oddman [GATE] carried us through to the end of Saturday night. On Sunday, a harp and flute live set from Marysia Osu + YUIS soothed our haggard souls, as did Hidden Sounds’ own Frankie Bubblegum presents Planet Panama. Drawing the festival to a close was the most awaited DJ set of the DJ season: DJ Sean Davies.

      `,
    },
    {
      title: "GATE - 5",
      date: new Date(2023, 2, 18),
      location: "Algha Works, Fish Island",
      coverImageUrl: "/posters/5.jpg",
      imageUrls: [
        { url: "/images/5/1.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/2.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/4.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/3.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/5.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/6.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "/images/5/7.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/8.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/9.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/10.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/11.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/12.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/13.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/14.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "/images/5/15.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/16.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/17.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/18.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "/images/5/19.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "/images/5/20.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "/images/5/21.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/22.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/23.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/24.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/25.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/26.webp", alt: "image", credit: "Lorella Bianco" },
        { url: "/images/5/27.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/28.webp", alt: "image", credit: "Isaac Griffiths" },
        { url: "/images/5/29.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/30.webp", alt: "image", credit: "Jan Bernet" },
        { url: "/images/5/31.webp", alt: "image", credit: "Lorella Bianco" },
        { url: "/images/5/32.webp", alt: "image", credit: "Lorella Bianco" },
      ],
      contentLinks: [],
      descriptionMarkup: `the hiatus has ceased
we appear underground
charting the path of the orb
&nbsp; \n
ground level window
into varied expressions
&nbsp; \n
experience at your leisure
challenged
yet galvanised `,
    },
    {
      title: "PROPAGATE Festival",
      date: [new Date(2022, 6, 5), new Date(2022, 6, 7)],
      location: "Secret Location",
      coverImageUrl: "/posters/PROPAGATE.jpg",
      imageUrls: [
        {
          url: "/images/PROPAGATE/Euan/1.webp",
          alt: "image",
          credit: "Euan McGinty",
        },
        {
          url: "/images/PROPAGATE/Euan/2.webp",
          alt: "image",
          credit: "Euan McGinty",
        },
        {
          url: "/images/PROPAGATE/Euan/3.webp",
          alt: "image",
          credit: "Euan McGinty",
        },
        {
          url: "/images/PROPAGATE/Euan/4.webp",
          alt: "image",
          credit: "Euan McGinty",
        },
        {
          url: "/images/PROPAGATE/Euan/5.webp",
          alt: "image",
          credit: "Euan McGinty",
        },
        {
          url: "/images/PROPAGATE/Euan/6.webp",
          alt: "image",
          credit: "Euan McGinty",
        },
        {
          url: "/images/PROPAGATE/Euan/7.webp",
          alt: "image",
          credit: "Euan McGinty",
        },
        {
          url: "/images/PROPAGATE/Euan/8.webp",
          alt: "image",
          credit: "Euan McGinty",
        },
        {
          url: "/images/PROPAGATE/Jan/1.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/2.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/3.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/4.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/5.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/6.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/7.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/8.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/9.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/10.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/11.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/12.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/13.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/14.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/15.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/16.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Jan/17.webp",
          alt: "image",
          credit: "Jan Bernet",
        },
        {
          url: "/images/PROPAGATE/Hari/1.webp",
          alt: "image",
          credit: "GATE",
        },

        {
          url: "/images/PROPAGATE/Maxime/1.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/2.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/3.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/4.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/5.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/6.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/7.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/8.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/9.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/10.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/11.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/12.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/13.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/14.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/15.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/16.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/17.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/18.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/19.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/20.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/21.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/22.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/23.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/24.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/25.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Maxime/26.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Hari/2.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Hari/3.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Hari/4.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Hari/5.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/1.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/2.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/3.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/4.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/5.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/6.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/7.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/8.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/9.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/10.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/11.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/12.webp",
          alt: "image",
          credit: "GATE",
        },
        {
          url: "/images/PROPAGATE/Colin/13.webp",
          alt: "image",
          credit: "GATE",
        },
      ],
      contentLinks: [],
      descriptionMarkup: `our recognition
of resources and purpose
fortifies a sense of belonging
against forced autonomy
&nbsp; \n
this is an exposition
a result of community
&nbsp; \n
an extension of prior motives
beyond familiar enclosures
&nbsp; \n
INDOORS//OUTDOORS
LIVE//DJ//PERFORMANCE//SAUNA
2 SOUND SYSTEMS
A FIELD AND A BARN
120 PEOPLE
SECRET FARM LOCATION`,
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
      descriptionMarkup: `It Begins`,
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
      {
        title: "Gather All The Electronics w/ Kung Fu Kick Drum",
        url: "https://www.mixcloud.com/ThreadsRadio/23-jan-24-gate-w-kung-fu-kick-drum-hackney-wick/",
        releaseDate: new Date(2024, 0, 23),
        coverUrl: "/THREADSKFKD.jpg",
        description: ``,
      },
      {
        title: "Gather All The Electronics w/ Overneath",
        url: "https://soundcloud.com/threadsradio/gate-w-overneath-hackney-wick-14-may-24",
        releaseDate: new Date(2024, 5, 14),
        coverUrl: "/THREADSOVERNEATH.jpg",
        description: ``,
      },
      {
        title: "Gather All The Electronics w/ Bart, Seshtan and Craft Ebbing",
        url: "https://soundcloud.com/threadsradio/gate-w-bart-seshtan-and-craft-ebbing-hackney-wick-09-jul-24",
        releaseDate: new Date(2024, 6, 9),
        coverUrl: "/THREADSBSCE.jpg",
        description: ``,
      },
      {
        title: "Gather All The Electronics w/ Internal Object",
        url: "https://soundcloud.com/threadsradio/gate-w-internal-object-hackney-wick-19-mar-24-jingle",
        releaseDate: new Date(2024, 2, 19),
        coverUrl: "/THREADSIO.jpg",
        description: ``,
      },
      {
        title: "Gather All The Electronics w/ Seshtan",
        url: "https://soundcloud.com/seshtan/threads-radio-gate-w-seshtan-21-feb-23",
        releaseDate: new Date(2023, 1, 21),
        coverUrl: "/THREADSSESH.jpg",
        description: ``,
      },
      {
        title: "Gather All The Electronics w/ proto//spacer",
        url: "https://soundcloud.com/mirlomirlo/gate-w-protospacer-hackney-wick-13-jun-threads",
        releaseDate: new Date(2023, 5, 13),
        coverUrl: "/THREADSPROTO.jpg",
        description: ``,
      },
      {
        title: "Gather All The Electronics w/ Scary Hari",
        url: "https://www.mixcloud.com/ThreadsRadio/gate-w-scary-hari-fish-island-18-apr-23/",
        releaseDate: new Date(2023, 3, 18),
        coverUrl: "/THREADSSH.jpg",
        description: ``,
      },
      {
        title: "Gather All The Electronics w/ Bubble People",
        url: "https://www.mixcloud.com/ThreadsRadio/gate-w-jasper-drifts-27-dec-22/",
        releaseDate: new Date(2022, 5, 22),
        coverUrl: "/THREADSBP.jpg",
        description: ``,
      },
      {
        title: "We Appreciate Power w/ Nathan Lusty (GATE)",
        url: "https://www.mixcloud.com/ThreadsRadio/we-appreciate-power-w-nathan-lusty-gate-hackney-wick-01-nov-22/",
        releaseDate: new Date(2022, 10, 1),
        coverUrl: "/THREADSNL.jpg",
        description: ``,
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

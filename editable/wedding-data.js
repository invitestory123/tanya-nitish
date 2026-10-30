/**
 * wedding-data.js — Customer-facing editable data layer for midnight-stargaze
 * Edit this file to update couple names, parents, date, venue, events, itinerary, verse, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Tanya",
    groom: "Nitish",
    brideFull: "Tanya Sharma",
    groomFull: "Nitish Dhiman",
    brideParents: "",
    groomParents: "",
    hashtag: "#TanyaWedsNitish",
    monogram: "T · N",
  },

  wedding: {
    dateISO: "2026-11-21T19:00:00+05:30",
    dateLabel: "Saturday, 21st November 2026",
    timeLabel: "7:00 PM onwards",
  },

  venue: {
    name: "Master Farm Resort",
    address: "Zirakpur, Punjab",
    mapsQuery: "Master Farm Resort Zirakpur",
  },

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Together with their families, request the honour of your presence as two souls become one under a sky full of stars.",
  },

  events: [
    {
      name: "Engagement",
      icon: "ring",
      date: "Friday, 20th November 2026",
      dayLabel: "Friday",
      dayNum: "20",
      monthLabel: "November 2026",
      time: "4:00 PM ONWARDS",
      venue: "Master Farm Resort, Zirakpur",
      note: "The beginning of forever — exchange of rings and blessings.",
    },
    {
      name: "Mehandi & Sangeet",
      icon: "music",
      date: "Friday, 20th November 2026",
      dayLabel: "Friday",
      dayNum: "20",
      monthLabel: "November 2026",
      time: "6:30 PM ONWARDS",
      venue: "Master Farm Resort, Zirakpur",
      note: "An evening of vibrant henna, melodious music, and joyous dance.",
    },
    {
      name: "Haldi",
      icon: "sparkles",
      date: "Saturday, 21st November 2026",
      dayLabel: "Saturday",
      dayNum: "21",
      monthLabel: "November 2026",
      time: "9:00 AM ONWARDS",
      venue: "Master Farm Resort, Zirakpur",
      note: "A sunlit celebration of auspicious turmeric, laughter, and love.",
    },
    {
      name: "Wedding",
      icon: "heart",
      date: "Saturday, 21st November 2026",
      dayLabel: "Saturday",
      dayNum: "21",
      monthLabel: "November 2026",
      time: "7:00 PM ONWARDS",
      venue: "Master Farm Resort, Zirakpur",
      note: "Baraat, pheras & the sacred vows — the moment two souls become one.",
    },
  ],

  program: [
    { name: "Engagement", time: "4:00 PM onwards (20th Nov)" },
    { name: "Mehandi & Sangeet", time: "6:30 PM onwards (20th Nov)" },
    { name: "Haldi", time: "9:00 AM onwards (21st Nov)" },
    { name: "Wedding", time: "7:00 PM onwards (21st Nov)" },
  ],

  music: {
    src: "./editable/assets/bg-music.mp3",
  },

  sections: {
    events: true,
    venue: true,
    countdown: true,
  },

  images: {
    couple: "",
    venue: "./editable/assets/venue-palace.webp",
    ganesha: "./editable/assets/ganesha.png",
    bride: "./editable/assets/bride.webp",
    groom: "./editable/assets/groom.webp",
  },
};

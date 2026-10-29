# Customer Editing Guide — midnight-stargaze

This template is an Udaipur starry night Hindu wedding invitation featuring dynamic star fields, Lord Ganesha blessing, couple portrait, countdown timer, event itinerary, and venue details.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/midnight-stargaze/editable/wedding-data.js)

### Couple Profiles & Family
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `bride`: First names (e.g. `"Shubham"`, `"Sheetal"`)
- `groomFull` & `brideFull`: Full ceremonial names
- `groomParents` & `brideParents`: Family / parentage lines
- `hashtag`: Wedding hashtag (e.g. `"#SheetalWedsShubham"`)
- `monogram`: Monogram initials (e.g. `"S · S"`)

### Wedding Date & Schedule
Edit `wedding`, `events`, and `program` in `editable/wedding-data.js`:
- `dateISO`: ISO 8601 date string driving the live countdown and calendar exports
- `dateLabel`: Display date string (e.g. `"Saturday, 6th February 2027"`)
- `timeLabel`: Muhurat time string (e.g. `"Muhurat at 7:00 PM"`)
- `events[]`: Wedding celebration events
- `program[]`: Day-of itinerary / timeline (Baraat, Jaimala, Pheras, Vidaai)

### Verse & Venue
Edit `verse` and `venue` in `editable/wedding-data.js`:
- `verse.hindi` & `verse.text`: Deity invocation / invitation quote
- `venue.name`: e.g. `"The Royal Orchid Palace"`
- `venue.address`: Postal address
- `venue.mapsQuery`: Location query for Google Maps embed and directions

### Images & Media
Replace files directly in `editable/assets/` or update paths in `editable/wedding-data.js`:
- Couple portrait: `editable/assets/couple.webp`
- Bride portrait: `editable/assets/bride.webp`
- Groom portrait: `editable/assets/groom.webp`
- Functions & ceremonies card: `editable/assets/events-card.webp`
- Palace venue photo: `editable/assets/venue-palace.webp`
- Ganesha icon: `editable/assets/ganesha.png`
- Background music: `editable/assets/bg-music.mp3` (configured in `wedding-data.js` under `music.src`)

---

## Special Sections & Features

- **Star Field & Constellation Animations**: Glowing background stars and subtle night sky movement.
- **Countdown**: Real-time counter to the wedding muhurat.
- **Calendar Export**: Automatically generates Google Calendar link and downloadable `.ics` file.

---

## Rules for Future Agents

1. Make edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless structural changes are explicitly requested.
3. Verify syntax with `node --check editable/wedding-data.js` after making edits.

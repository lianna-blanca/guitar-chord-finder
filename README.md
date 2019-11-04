# guitar-hero-ku

A visual guide to playing guitar. 


## Reference

* Tonal module docs: https://www.npmjs.com/package/tonal


# Origins

Guitar HeroKu began as a student project at Enspiral Dev Academy, Wellington, September 2018, created by @lianna-blanca, @zanelkt and @WinstonItiDev. This version is improved and expanded (and currently in progress) by @lianna-blanca.


# Project Progress

## Latest updates:

* Adjusted CSS to keep chord selection buttons together

* Fret 13 added

* Frontend JavaScript connecting to (internal) API, frets lighting up as they were with external API

* Backend routes and functions connecting to database

* Database built

* Connection to external API severed

## To Do: 

* Clear lit chord button

* Analyse cause of lit notes not displaying fret text.

* Look into auto-generating the frets rather than hardcoding each div 

  * How many IDs are being used? scinotes could be skipped

  * Will the note letters be useful in the future? Probably, if features such as "light up all C# notes" are implemented.

## Known problems

* Not all lit frets get text when chord is selected, e.g.:
  * C#, D#, F#, Bb, Db, Fb
  * (is this a problem?)

* Fretboard click lights up fret space but does not add text
  * Exceptions: when chord (e.g. Baug) is already selected. Does not apply to all chords, pattern to be investigated

* If tone is clicked without a chord, it defaults to C, which is fine but unclear; could update defaults
  * could add button light-ups to make it clear. There is also already the "Selected Chord" text

* Fret text does not show double sharps or flats, e.g.:
  * Baug: F## text is G
  * Cbm7: Bbb text is A, Ebb text is D, Cb text is B

* Test suite is not running; seems to be due to a Jest update. 

* Button to clear fretboard sharps and flats sometimes does not work; unclear why

* [unconfirmed] Chord Notes text sometimes does not update / display correct note names.

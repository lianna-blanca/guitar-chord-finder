# guitar-hero-ku

A visual guide to playing guitar. 


## Reference

* Tonal module docs: https://www.npmjs.com/package/tonal


# Origins

Guitar HeroKu began as a student project at Enspiral Dev Academy, Wellington, September 2018, created by @lianna-blanca, @zanelkt and @WinstonItiDev. This version is improved and expanded (and currently in progress) by @lianna-blanca.


# Project Progress

## Latest updates:

* Fret 13 added

* Frontend JavaScript connecting to (internal) API, frets lighting up as they were with external API

* Backend routes and functions connecting to database

* Database built

* Connection to external API severed

## To Do: 

* Analyse cause of lit notes not displaying fret text.

* Look into generating the frets rather than hardcoding each div 

  * How many IDs are being used? 

  * Will the note letters be useful in the future? Probably, if features such as "light up all C# notes" are implemented.

## Known problems

* Not all lit frets get text when chord is selected, e.g.:
  * C#, D#, F#, Bb, Db, Fb

* Fretboard click lights up fret space but does not add text
  * Exceptions: when chord (e.g. Baug) is already selected. Does not apply to all chords, pattern to be investigated

* If tone is clicked without a chord, it defaults to C, which is fine but unclear.

* Fret text does not show double sharps or flats, e.g.:
  * Baug: F## text is G
  * Cbm7: Bbb text is A, Ebb text is D, Cb text is B



Pray!
===========

A Web Game in JS, where you click on a Cross to generate Pray-Points. Like Cookie Clicker
This is the SOurce-Code for the WebApp hosted @ WebDaD.eu

The Cross is the main button and gets you prayerpoints (PP)
You may buy Modules or Buffers for PP
- Modules create PP per Second
- Buffers modify PP gaining

Another possibily to gain PP is by typing bibleverses.
- The Verse of the day
- Random Verses

# Legend
- + = Added
- - = Removed
- % = Changed (eg bugfix)
- ? = To be discussed

# MileStones

## 1 (Alpha) YYYY-MM-DD:
- [ ] Basic Framework
- [ ] Basic Design
- [ ] JS FrameWork for Mods and Buffs (timeout 100ms)
- [X] Basic First Button
- [ ] Module "People"
- [ ] Buffer "Beliving"
- [ ] Buffer "Bible"
- [ ] Save AllTime-PP of all via AJAX on server

## 2 (Beta) YYYY-MM-DD:
- [ ] More Modules
- [ ] More Buffers
- [ ] Design Update
- [ ] Achievement FrameWork
- [ ] Achievement "Starter"
- [ ] Save Game-Data in Cookie
- [ ] Load Game-Data from Cookie
- [ ] Export Game-Data
- [ ] Import Game-Data

## 3 (Release) YYYY-MM-DD
- [ ] Typing Module
- [ ] More Modules
- [ ] More Buffers
- [ ] More Achievements
- [ ] Design Update

# Modules
These create PP per Second and can be bought unlimited

## People
- Cost: 10 PP + (People.count * 10)
- PPs : 0.1

# Buffers
These modify PP gaining and may be bougth once

## Believing
- Cost: 50 PP
- Mods: Cross.Click * 2

## Bible
- Cost: 100 PP
- Mods: People.PPs * 5

# Achievements
Achievements mark special Events in your Game

## Starter
- You have player a while
- All-Time-PP >= 100, People > 1, Bible

# Bibleverses
Type them to gain pp (each char is a click)

## verse of the day

## random verse

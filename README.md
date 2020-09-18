# Whack-a-Bara

[Live Site](https://alexbpbdroid.github.io/whack-a-bara/)

![mainpage](https://github.com/alexbpbdroid/whack-a-bara/blob/master/screenshot.png?raw=true)

## About

Whack-a-Bara is a simple javascript game inspired by my favorite childhood carnival game: whack-a-mole.  The objective is to hit as many capybaras that pop out as possible within the
time limit, in an attempt to save the earth from imminent doom as a result of the capybara invasion.

## Technologies

Javascript, HTML, CSS

## Features

### Capybaras appear above ground randomly

Capybaras randomly pop out of their holes for varying amounts of time and players are able to hit as many as they can within the time limit.

![filter](https://github.com/alexbpbdroid/whack-a-bara/blob/master/capygif.gif?raw=true)

### Hit capybara in order to gain coins, increasing score

Players can use their mallet to hit the capybaras that appear on screen and increase their score.

```Javascript
  function hit(e) {
    score++;
    this.style.backgroundImage = 'url("starcoin.png")';
    this.style.pointerEvents = 'none';
    setTimeout(() => {
      this.style.backgroundImage = 'url("capybara.png")';
      this.style.pointerEvents = 'all';
    }, 800);
    scoreBoard.textContent = score;
    hitsound.play();
  }
```

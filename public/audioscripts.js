/**
* @Author: John Isaacs <john>
* @Date:   02-Nov-162016
* @Filename: audioscripts.js
* @Last modified by:   john
* @Last modified time: 21-Nov-162016
*/



var notes = [];

var C3 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 130.81
    }
});

var D3 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 146.83
    }
});

var E3 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 164.81
    }
});

var G3 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 196.00
    }
});
var C4S = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'sine',
        frequency: 277.18
    }
});

var D4 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 293.66
    }
});

var E4 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 329.63
    }
});

var G4 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 392
    }
});

var C5S = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'sine',
        frequency: 554.37
    }
});

var D5 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 587.33
    }
});

var E5 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 659.25
    }
});

var G5 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 783.99
    }
});

var C6S = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 1108.73
    }
});

var D6 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 1174.66
    }
});

var E6 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 1318.51
    }
});

var G6 = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 1567.98
    }
});

var C7H = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
        frequency: 2217.46
    }
});






var flanger = new Pizzicato.Effects.Flanger({
    time: 0.45,
    speed: 0.2,
    depth: 0.1,
    feedback: 0.1,
    mix: 0.5
});

var reverb = new Pizzicato.Effects.Reverb({
    time: 0.5,
    decay: 2.45,
    reverse: false,
    mix: 0.5
});
var tremolo = new Pizzicato.Effects.Tremolo({
    speed: 7,
    depth: 0.8,
    mix: 0.8
});

notes.push(C3);
notes.push(D3);
notes.push(E3);
notes.push(G3);
notes.push(C4S);
notes.push(D4);
notes.push(E4);
notes.push(G4);
notes.push(C5S);
notes.push(D5);
notes.push(E5);
notes.push(G5);
notes.push(C6S);
notes.push(D6);
notes.push(E6);
notes.push(G6);
notes.push(C7H);



for (var i =0; i<notes.length; i++)
{
  notes[i].attack = 0.01;
  notes[i].release = 2;
  notes[i].addEffect(reverb);
  //notes[i].addEffect(flanger);
  //notes[i].addEffect(tremolo);
}

//C5.attack = 0.1;
//C5.release = 2;
for (var i =0; i<notes.length; i++)
{
  play(notes[i],i);

}

function play(note,i){
  setTimeout(function(){note.play(); note.stop();},100+(100*i));
}

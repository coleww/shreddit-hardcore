(function(root){
  "use strict";

  Array.prototype.sample = function(){
    return this[Math.floor(Math.random() * this.length)];
  };
  Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if (i === 0) return this;
    while (--i) {
       j = Math.floor( Math.random() * ( i + 1 ) );
       temp = this[i];
       this[i] = this[j];
       this[j] = temp;
    }
    return this;
  };

  var Shreddit = root.Shreddit = (root.Shreddit || {});

  var Sequencer = Shreddit.Sequencer = function(){
    var controller = new Shreddit.Controller(this);
    KeyboardUI.installListeners(controller);
    this.$keys = KeyboardUI.$keys;
//THESE BROS SHOULD BE OWN OBJECT, FOR AND BY THEMSELVES.
    this.samples = {
      kick: new Wad({source: 'samples/kick.wav'}),
      hat: new Wad({source: 'samples/chh.wav'}),
      snare: new Wad({source: 'samples/snare.wav'}),
      bass: new Wad({source: 'square', volume: 0.1,
        filter: {
          type: 'lowpass',
          frequency: 600,
          q: 10,
          env: {
            frequency: 800,
            attack: 0.5
          }
        },
        env: {
          attack: 0.0,
          decay: 0.0,
          sustain: 1.0,
          hold: 0.5,
          release: 0
        }
      }),
      arp: new Wad({source: 'sawtooth', volume: 0.3,
        filter: {
          type: 'lowpass',
          frequency: 600,
          q: 10,
          env: {
            frequency: 800,
            attack: 0.5
          }
        },
        env: {
          attack: 0.0,
          decay: 0.0,
          sustain: 1.0,
          hold: 0.5,
          release: 0
        }
      })
    };
    this.position = 0;
    this.lastPads = [];
  this.basslines = [
    ["E2", "F#2", "G#2", "A2", "B2", "C#3", "D#3"],
    ["E1", "G#1", "B1", "D#1", "E2", "F#2", "A2"],
    ["E1", "E2", "G#1", "G#2", "B1", "B2", "E3"],
    ["B1", "C#2", "D#1", "F#2", "G#1", "A2", "E1"]
  ];
    this.notes = ["E2", "F#2", "G#2", "A2", "B2", "C#3", "D#3"];
    this.currentNote = 0;
    this.randomBass = false;
//SOMETHING THAT USES the WAD note object to make scales?
    this.arpNotes = ["E2", "G#3", "D#4", "F#2",  "A2", "C#3", "B2", "D#3", "E3", "G#2", "C#4", "F#3", "D#2", "E4", "A3", "B3"];
    this.currentArpNote = 0;
    this.arpOn = false;
    this.bpm = 120;
    this.interval = null;
    this.installMixer();
  };



  Sequencer.prototype.installMixer = function(){
    var that = this;
    $("#arpVol").change(function(e) {
      that.samples.arp.volume = $(e.target).val();
      console.log($(e.target).val());
    });

    $("#bassVol").change(function(e) {
      that.samples.bass.volume = $(e.target).val();
    });

    $("#snareVol").change(function(e) {
      that.samples.snare.volume = $(e.target).val();
    });

    $("#hatVol").change(function(e) {
      that.samples.hat.volume = $(e.target).val();
    });

    $("#kickVol").change(function(e) {
      that.samples.kick.volume = $(e.target).val();
    });
  };


  Sequencer.prototype.startSeq = function(){
    var that = this;
    if(this.interval) clearInterval(this.interval);
    var beat = 60000.0 / this.bpm;
    this.interval = window.setInterval(function(){
      that.play();
    }, beat);
  };

  Sequencer.prototype.play = function(){
    this.advance();
//HANDLING UI HERE
    this.lastPads.forEach(function(pad){
      pad.removeClass("beat");
    });
    this.lastPads = this.gridCol(this.position);
    this.lastPads.forEach(function(pad){
      pad.addClass("beat");
    });
//PLAYING SOUNDS
    if(this.arpOn){
      this.samples.arp.play({pitch: this.arpNotes[this.currentArpNote], volume: this.samples.arp.volume});
    }
    if (this.lastPads[0].hasClass("active")){
      var currentNote = (this.randomBass) ? this.notes.sample() : this.notes[this.currentNote];
      this.samples.bass.play({pitch: currentNote, volume: this.samples.bass.volume});
    }

    if (this.lastPads[1].hasClass("active")){
      this.samples.snare.play({volume: this.samples.snare.volume});
    }

    if (this.lastPads[2].hasClass("active")){
      this.samples.hat.play({volume: this.samples.hat.volume});
    }

    if (this.lastPads[3].hasClass("active")){
      this.samples.kick.play({volume: this.samples.kick.volume});
    }
  };

  Sequencer.prototype.advance = function(){
    this.position += 1;
    this.currentArpNote += 1;
    if (this.position > 7) this.position = 0;//MAGIC NUMBERS
    if (this.currentArpNote > 15) this.currentArpNote = 0;//MAGIC NUMBERS
  };

  Sequencer.prototype.randomize = function(){
    var keys = $(".grid-key");
    for (var i = 0; i < keys.length; i++){
      $(keys[i]).removeClass("active");
      if (Math.random() < 0.5) $(keys[i]).addClass("active");
    }
    this.bpm = Math.floor(Math.random() * 550) + 50;
    this.startSeq();
  };

  Sequencer.prototype.gridCol = function(position){
    var $k = this.$keys;
    switch(position){
    case 0:
      return [$k.$one, $k.$q, $k.$a, $k.$z, $k.$beat1];
    case 1:
      return [$k.$two, $k.$w, $k.$s, $k.$x, $k.$beat2];
    case 2:
      return [$k.$three, $k.$e, $k.$d, $k.$c, $k.$beat3];
    case 3:
      return [$k.$four, $k.$r, $k.$f, $k.$v, $k.$beat4];
    case 4:
      return [$k.$five, $k.$t, $k.$g, $k.$b, $k.$beat5];
    case 5:
      return [$k.$six, $k.$y, $k.$h, $k.$n, $k.$beat6];
    case 6:
      return [$k.$seven, $k.$u, $k.$j, $k.$m, $k.$beat7];
    case 7:
      return [$k.$eight, $k.$i, $k.$k, $k.$comma, $k.$beat8];
    }
  };
})(this);

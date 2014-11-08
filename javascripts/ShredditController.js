(function(root){
  "use strict";
  var Shreddit = root.Shreddit = (root.Shreddit || {});

  var Controller = Shreddit.Controller = function(sequencer){
    this.sequencer = sequencer;
    this.$msg = $("#msgSpace");
    this.$msg.text("SHRED THAT GNAR GNAR");
  };


  Controller.prototype.toggle = function($key){
    $key.toggleClass("active");
  };

  Controller.prototype.flash = function($key){
    $key.addClass("active");
    window.setTimeout(function(){
      $key.removeClass("active");
    }, 100);
  };

  Controller.prototype.log = function(msg){
    this.$msg.text(msg);
  };

  // Controller.prototype.f1 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f2 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f3 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f4 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f5 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f6 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f7 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f8 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f9 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f10 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f11 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.f12 = function($key){
  //   this.toggle($key);
  // };

  // Controller.prototype.backTick = function($key){
  //   this.toggle($key);
  // };

  Controller.prototype.one = function($key){
    this.toggle($key);
  };

  Controller.prototype.two = function($key){
    this.toggle($key);
  };

  Controller.prototype.three = function($key){
    this.toggle($key);
  };

  Controller.prototype.four = function($key){
    this.toggle($key);
  };

  Controller.prototype.five = function($key){
    this.toggle($key);
  };

  Controller.prototype.six = function($key){
    this.toggle($key);
  };

  Controller.prototype.seven = function($key){
    this.toggle($key);
  };

  Controller.prototype.eight = function($key){
    this.toggle($key);
  };

  Controller.prototype.nine = function($key){
    this.flash($key);
    this.sequencer.notes = this.sequencer.basslines.sample();
    this.log("picked new bassline");
  };

  Controller.prototype.zero = function($key){
    this.toggle($key);
    this.sequencer.randomBass = !this.sequencer.randomBass;
    if(this.sequencer.randomBass) {
      this.log("random bass");
    } else {
      this.log("ordered bass");
    }
  };

  Controller.prototype.minus = function($key){
    if(!this.sequencer.randomBass){
      this.flash($key);
      this.sequencer.currentNote -= 1;
      if(this.sequencer.currentNote < 0){
        this.sequencer.currentNote = 6;
      }
      this.log("bass: " + this.sequencer.notes[this.sequencer.currentNote]);
    } else {
      this.log("on random mode, press 0 to exit");
    }
  };

  Controller.prototype.equals = function($key){
    if(!this.sequencer.randomBass){
      this.flash($key);
      this.sequencer.currentNote += 1;
      if(this.sequencer.currentNote > 6){
        this.sequencer.currentNote = 0;
      }
      this.log("bass: " + this.sequencer.notes[this.sequencer.currentNote]);
    } else {
      this.log("on random mode still, press 0 to exit");
    }
  };

  Controller.prototype.q = function($key){
    this.toggle($key);
  };

  Controller.prototype.w = function($key){
    this.toggle($key);
  };

  Controller.prototype.e = function($key){
    this.toggle($key);
  };

  Controller.prototype.r = function($key){
    this.toggle($key);
  };

  Controller.prototype.t = function($key){
    this.toggle($key);
  };

  Controller.prototype.y = function($key){
    this.toggle($key);
  };

  Controller.prototype.u = function($key){
    this.toggle($key);
  };

  Controller.prototype.i = function($key){
    this.toggle($key);
  };

  Controller.prototype.o = function($key){
    this.flash($key);
    this.sequencer.samples.bass.filter.frequency -= 25;
    this.log("bassFilterFreq: " + this.sequencer.samples.bass.filter.frequency);
  };

  Controller.prototype.p = function($key){
    this.flash($key);
    this.sequencer.samples.bass.filter.frequency += 25;
    this.log("bassFilterFreq: " + this.sequencer.samples.bass.filter.frequency);
  };

  Controller.prototype.openBracket = function($key){
    this.flash($key);
    this.sequencer.samples.bass.filter.env.frequency -= 25;
    this.log("bassFilterENVFreq: " + this.sequencer.samples.bass.filter.env.frequency);
  };

  Controller.prototype.closeBracket = function($key){
    this.flash($key);
    this.sequencer.samples.bass.filter.env.frequency += 25;
    this.log("bassFilterENVFreq: " + this.sequencer.samples.bass.filter.env.frequency);
  };

  Controller.prototype.a = function($key){
    this.toggle($key);
  };

  Controller.prototype.s = function($key){
    this.toggle($key);
  };

  Controller.prototype.d = function($key){
    this.toggle($key);
  };

  Controller.prototype.f = function($key){
    this.toggle($key);
  };

  Controller.prototype.g = function($key){
    this.toggle($key);
  };

  Controller.prototype.h = function($key){
    this.toggle($key);
  };

  Controller.prototype.j = function($key){
    this.toggle($key);
  };

  Controller.prototype.k = function($key){
    this.toggle($key);
  };

  Controller.prototype.l = function($key){
    this.flash($key);
    this.sequencer.randomize();
    this.log("RANDOMIZED SEQUENCER");
  };

  Controller.prototype.semicolon = function($key){
    this.flash($key);
    this.sequencer.arpNotes = this.sequencer.arpNotes.shuffle();
    this.log("randomized arpeggio order");
  };

  Controller.prototype.apostrophe = function($key){
    this.toggle($key);
    this.sequencer.arpOn = !this.sequencer.arpOn;
    var arpState = (this.sequencer.arpOn) ? "on" : "off";
    this.log("arpeggio " + arpState);
  };

  Controller.prototype.z = function($key){
    this.toggle($key);
  };

  Controller.prototype.x = function($key){
    this.toggle($key);
  };

  Controller.prototype.c = function($key){
    this.toggle($key);
  };

  Controller.prototype.v = function($key){
    this.toggle($key);
  };

  Controller.prototype.b = function($key){
    this.toggle($key);
  };

  Controller.prototype.n = function($key){
    this.toggle($key);
  };

  Controller.prototype.m = function($key){
    this.toggle($key);
  };

  Controller.prototype.comma = function($key){
    this.toggle($key);
  };

  Controller.prototype.period = function($key){
    this.flash($key);
    this.sequencer.bpm -= 5;
    if(this.sequencer.bpm < 1) this.sequencer.bpm = 1;
    this.sequencer.startSeq();
    this.log("bpm" + this.sequencer.bpm);
  };

  Controller.prototype.slash = function($key){
    this.flash($key);
    this.sequencer.bpm += 5;
    if(this.sequencer.bpm > 600) this.sequencer.bpm = 600;
    this.sequencer.startSeq();
    this.log("bpm" + this.sequencer.bpm);
  };

  Controller.prototype.up = function($key){
    this.flash($key);
    this.sequencer.samples.arp.filter.frequency += 25;
    this.log("arpFilterFreq: " + this.sequencer.samples.arp.filter.frequency);
  };

  Controller.prototype.left = function($key){
    this.flash($key);
    this.sequencer.samples.arp.filter.env.frequency -= 25;
    this.log("arpFilterToFreq: " + this.sequencer.samples.arp.filter.env.frequency);
  };

  Controller.prototype.down = function($key){
    this.flash($key);
    this.sequencer.samples.arp.filter.frequency -= 25;
    this.log("arpFilterFreq: " + this.sequencer.samples.arp.filter.frequency);
  };

  Controller.prototype.right = function($key){
    this.flash($key);
    this.sequencer.samples.arp.filter.env.frequency += 25;
    this.log("arpFilterToFreq: " + this.sequencer.samples.arp.filter.env.frequency);
  };
})(this);

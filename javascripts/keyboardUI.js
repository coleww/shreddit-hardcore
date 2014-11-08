(function(root){
  "use strict";
  var KeyboardUI = root.KeyboardUI = (root.KeyboardUI || {});

//uses keymaster.js to bind each key press to a function on a controller.
//the function is passed the jQuery element for that key.
//controller deals with "lighting up" the pad and making noise or whateer
  KeyboardUI.installListeners = function(controller){
    var $keys = this.$keys;

    key('`', function(){controller.backTick($keys.$backTick);});
    $keys.$backTick.on("click", function(){controller.backTick($keys.$backTick);});
    key('1', function(){controller.one($keys.$one);});
    $keys.$one.on("click", function(){controller.one($keys.$one);});
    key('2', function(){controller.two($keys.$two);});
    $keys.$two.on("click", function(){controller.two($keys.$two);});
    key('3', function(){controller.three($keys.$three);});
    $keys.$three.on("click", function(){controller.three($keys.$three);});
    key('4', function(){controller.four($keys.$four);});
    $keys.$four.on("click", function(){controller.four($keys.$four);});
    key('5', function(){controller.five($keys.$five);});
    $keys.$five.on("click", function(){controller.five($keys.$five);});
    key('6', function(){controller.six($keys.$six);});
    $keys.$six.on("click", function(){controller.six($keys.$six);});
    key('7', function(){controller.seven($keys.$seven);});
    $keys.$seven.on("click", function(){controller.seven($keys.$seven);});
    key('8', function(){controller.eight($keys.$eight);});
    $keys.$eight.on("click", function(){controller.eight($keys.$eight);});
    key('9', function(){controller.nine($keys.$nine);});
    $keys.$nine.on("click", function(){controller.nine($keys.$nine);});
    key('0', function(){controller.zero($keys.$zero);});
    $keys.$zero.on("click", function(){controller.zero($keys.$zero);});
    key('-', function(){controller.minus($keys.$minus);});
    $keys.$minus.on("click", function(){controller.minus($keys.$minus);});
    key('=', function(){controller.equals($keys.$equals);});
    $keys.$equals.on("click", function(){controller.equals($keys.$equals);});

    key('q', function(){controller.q($keys.$q);});
    $keys.$q.on("click", function(){controller.q($keys.$q);});
    key('w', function(){controller.w($keys.$w);});
    $keys.$w.on("click", function(){controller.w($keys.$w);});
    key('e', function(){controller.e($keys.$e);});
    $keys.$e.on("click", function(){controller.e($keys.$e);});
    key('r', function(){controller.r($keys.$r);});
    $keys.$r.on("click", function(){controller.r($keys.$r);});
    key('t', function(){controller.t($keys.$t);});
    $keys.$t.on("click", function(){controller.t($keys.$t);});
    key('y', function(){controller.y($keys.$y);});
    $keys.$y.on("click", function(){controller.y($keys.$y);});
    key('u', function(){controller.u($keys.$u);});
    $keys.$u.on("click", function(){controller.u($keys.$u);});
    key('i', function(){controller.i($keys.$i);});
    $keys.$i.on("click", function(){controller.i($keys.$i);});
    key('o', function(){controller.o($keys.$o);});
    $keys.$o.on("click", function(){controller.o($keys.$o);});
    key('p', function(){controller.p($keys.$p);});
    $keys.$p.on("click", function(){controller.p($keys.$p);});
    key('[', function(){controller.openBracket($keys.$openBracket);});
    $keys.$openBracket.on("click", function(){controller.openBracket($keys.$openBracket);});
    key(']', function(){controller.closeBracket($keys.$closeBracket);});
    $keys.$closeBracket.on("click", function(){controller.closeBracket($keys.$closeBracket);});
    key('\\', function(){controller.backSlash($keys.$backSlash);});
    $keys.$backSlash.on("click", function(){controller.backSlash($keys.$backSlash);});

    key('a', function(){controller.a($keys.$a);});
    $keys.$a.on("click", function(){controller.a($keys.$a);});
    key('s', function(){controller.s($keys.$s);});
    $keys.$s.on("click", function(){controller.s($keys.$s);});
    key('d', function(){controller.d($keys.$d);});
    $keys.$d.on("click", function(){controller.d($keys.$d);});
    key('f', function(){controller.f($keys.$f);});
    $keys.$f.on("click", function(){controller.f($keys.$f);});
    key('g', function(){controller.g($keys.$g);});
    $keys.$g.on("click", function(){controller.g($keys.$g);});
    key('h', function(){controller.h($keys.$h);});
    $keys.$h.on("click", function(){controller.h($keys.$h);});
    key('j', function(){controller.j($keys.$j);});
    $keys.$j.on("click", function(){controller.j($keys.$j);});
    key('k', function(){controller.k($keys.$k);});
    $keys.$k.on("click", function(){controller.k($keys.$k);});
    key('l', function(){controller.l($keys.$l);});
    $keys.$l.on("click", function(){controller.l($keys.$l);});
    key(';', function(){controller.semicolon($keys.$semicolon);});
    $keys.$semicolon.on("click", function(){controller.semicolon($keys.$semicolon);});
    key('\'', function(){controller.apostrophe($keys.$apostrophe);});
    $keys.$apostrophe.on("click", function(){controller.apostrophe($keys.$apostrophe);});

    key('z', function(){controller.z($keys.$z);});
    $keys.$z.on("click", function(){controller.z($keys.$z);});
    key('x', function(){controller.x($keys.$x);});
    $keys.$x.on("click", function(){controller.x($keys.$x);});
    key('c', function(){controller.c($keys.$c);});
    $keys.$c.on("click", function(){controller.c($keys.$c);});
    key('v', function(){controller.v($keys.$v);});
    $keys.$v.on("click", function(){controller.v($keys.$v);});
    key('b', function(){controller.b($keys.$b);});
    $keys.$b.on("click", function(){controller.b($keys.$b);});
    key('n', function(){controller.n($keys.$n);});
    $keys.$n.on("click", function(){controller.n($keys.$n);});
    key('m', function(){controller.m($keys.$m);});
    $keys.$m.on("click", function(){controller.m($keys.$m);});
    key(',', function(){controller.comma($keys.$comma);});
    $keys.$comma.on("click", function(){controller.comma($keys.$comma);});
    key('.', function(){controller.period($keys.$period);});
    $keys.$period.on("click", function(){controller.period($keys.$period);});
    key('/', function(){controller.slash($keys.$slash);});
    $keys.$slash.on("click", function(){controller.slash($keys.$slash);});

    key('space', function(){controller.space($keys.$space);});
    $keys.$space.on("click", function(){controller.space($keys.$space);});
    key('up', function(){controller.up($keys.$up);});
    $keys.$up.on("click", function(){controller.up($keys.$up);});
    key('left', function(){controller.left($keys.$left);});
    $keys.$left.on("click", function(){controller.left($keys.$left);});
    key('down', function(){controller.down($keys.$down);});
    $keys.$down.on("click", function(){controller.down($keys.$down);});
    key('right', function(){controller.right($keys.$right);});
    $keys.$right.on("click", function(){controller.right($keys.$right);});

    $('body').on('mousewheel', function(event) {
      controller.scrollin(event.deltaY);
    });

    if($('.filterSet')){
      $('.filterSet').draggable({
        containment: "parent",
        drag: function(event, ui) {
          var $pad = $(event.target);
          var x = ui.offset.top - $pad.parent().offset().top;
          var y = ui.offset.left - $pad.parent().offset().left;
          controller.padChange($pad.attr("id"), [x, y]);
        }
      });
    }
  };
})(this);

// 배경 그라디언트
var str = 0;
    var num = 100;
    var porcents = 100;
   
        for (let i = 0; i < 101; i++) {

            console.log(""+ porcents +"% { background-image: radial-gradient(circle at top left, rgb(236, 183, 16) 0%, rgba(225, 243, 97,0) "+ num +"%),radial-gradient(circle at bottom right, rgb(114, 215, 52) 0%, rgba(204, 104, 119, 0) "+ num +"%),radial-gradient(circle at top right, rgb(255, 255, 255) 0%, rgba(155, 221, 240,0) "+ num +"%),radial-gradient(ellipse at bottom center, rgb(232, 186, 186) 0%, rgba(254, 43, 0, 0) "+ num +"%);}");

            str = str + i;
            num = num - 0.5;
            porcents = porcents -1;
    }
// 배경 그라디언트




// 이모지 레인
    var container = document.getElementById('animate');
    var emoji = ['🍹', '🐻', '✌', '🍒', '🥕', '🎸', '🍭', '💖', '🥰', '🎵', '🌏', '🍰', '🎃', '🎅', '🌈', '🌷', '🥳', '🦄', '🍀', '👻', '🌴', '🐬', '🎁'];
    var circles = [];

    for (var i = 0; i < 15; i++) {
    addCircle(i * 150, [10 + 0, 300], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 + 0, -300], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 - 200, -300], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)]);
    }



    function addCircle(delay, range, color) {
    setTimeout(function() {
        var c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
        x: -0.15 + Math.random() * 0.3,
        y: 1 + Math.random() * 1
        }, range);
        circles.push(c);
    }, delay);
    }

    function Circle(x, y, c, v, range) {
    var _this = this;
    this.x = x;
    this.y = y;
    this.color = c;
    this.v = v;
    this.range = range;
    this.element = document.createElement('span');
    /*this.element.style.display = 'block';*/
    this.element.style.opacity = 0;
    this.element.style.position = 'absolute';
    this.element.style.fontSize = '26px';
    this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
    this.element.innerHTML = c;
    container.appendChild(this.element);

    this.update = function() {
        if (_this.y > 800) {
        _this.y = 80 + Math.random() * 4;
        _this.x = _this.range[0] + Math.random() * _this.range[1];
        }
        _this.y += _this.v.y;
        _this.x += _this.v.x;
        this.element.style.opacity = 1;
        this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
        this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
        this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    };
    }

    function animate() {
    for (var i in circles) {
        circles[i].update();
    }
    requestAnimationFrame(animate);
    }

    animate();
// 이모지 레인

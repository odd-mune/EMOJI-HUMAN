//the only purpose of this is to generate the CSS keyframes

var str = 0;
    var num = 100;
    var porcents = 100;
   
        for (let i = 0; i < 101; i++) {

            console.log(""+ porcents +"% { background-image: radial-gradient(circle at top left, rgb(236, 183, 16) 0%, rgba(225, 243, 97,0) "+ num +"%),radial-gradient(circle at bottom right, rgb(114, 215, 52) 0%, rgba(204, 104, 119, 0) "+ num +"%),radial-gradient(circle at top right, rgb(255, 255, 255) 0%, rgba(155, 221, 240,0) "+ num +"%),radial-gradient(ellipse at bottom center, rgb(232, 186, 186) 0%, rgba(254, 43, 0, 0) "+ num +"%);}");

            str = str + i;
            num = num - 0.5;
            porcents = porcents -1;
    }
console.log("Check script");

const canvas =   document.getElementById("myCanvas");

canvas.width=500;
canvas.height=500;

const CANVAS_WIDTH=canvas.width;
const CANVAS_HEIGHT=canvas.height;

var character_W=50;

const   ctx  =   canvas.getContext("2d");

var hero={
        x:0,
        y:0,
        speed:10,
        w:50,
        h:70,
    };

var monsters=[
    {x:10,y:20,w:10,h:15,speed:3},
    {x:50,y:30,w:20,h:25,speed:2},
    {x:75,y:40,w:30,h:40,speed:1}
]

var gameState={
    isOVer:false,
    level:1
};


function update() {
    if (keysPressed["ArrowUp"]) {
        hero.y-=hero.speed;
    }
    if (keysPressed["ArrowDown"]) {
        hero.y+=hero.speed;
    }
    if (keysPressed["ArrowLeft"]) {
        hero.x-=hero.speed;
    }
    if (keysPressed["ArrowRight"]) {
        hero.x+=hero.speed;
    }
    
    monsters.forEach(function (singleMonster) {
        singleMonster.y+=gameState.level*singleMonster.speed;
            if (singleMonster.y===CANVAS_HEIGHT) {
                singleMonster.y=0;
                singleMonster.x=Math.floor((Math.random()*(CANVAS_WIDTH-singleMonster.w)) );
            }
        }
    )
}


function draw() {
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        ctx.fillStyle="grey";
        ctx.fillRect(hero.x,hero.y,hero.w,hero.h);

        function drawSingleMonster(singleMonster) {
            ctx.fillStyle="pink";
            ctx.fillRect(singleMonster.x,singleMonster.y,singleMonster.w,singleMonster.h);    
        }
        monsters.forEach(drawSingleMonster);
    }

function main() {
    if (!gameState.isOver) {
        update();
        draw();    
        requestAnimationFrame(main);
    }   
}

function name(params) {
    
}

var keysPressed={};

function setKeyListener() {
    function handleKeydown(keyInfo) {
        console.log("Handle key down",keyInfo);
        keysPressed[keyInfo.key]=true;
    }

    function handleKeyup(keyInfo) {
        console.log("Handle key up",keyInfo);
        keysPressed[keyInfo.key]=false;
    }
        document.addEventListener("keydown",handleKeydown,false);
        document.addEventListener("keyup",handleKeyup,false);
    
}
    

setKeyListener();
main();

var w=window;
requestAnimationFrame=w.requestAnimationFrame||w.webkitrequestAnimationFrame||w.msrequestAnimationFrame||w.mozRequestAnimationFrame;
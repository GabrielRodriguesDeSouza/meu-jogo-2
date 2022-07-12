class Game {
  constructor() {
    
  }



  start() {
    // form = new Form();
    // form.display();
    // player = new Player();
    // playerCount = player.getCount()
    blocos = new Group()
    racao = new Group()

    var blocosPositions = [
      { x:250, y:750,w:700,h:50,image: blocoImage2,scale:1.5},
      { x:1400, y:670,w:400,h:50,image: blocoImage2,scale:1},
      { x:750, y:600,w:100,h:50,image: blocoImage2,scale:0.3},
      { x:920, y:480,w:200,h:50,image: blocoImage2,scale:0.3},
      { x:680, y:330,w:100,h:50,image: blocoImage2,scale:0.3},
      { x:420, y:280,w:100,h:50,image: blocoImage2,scale:0.3},
      { x:120, y:240,w:300,h:50,image: blocoImage2,scale:0.3},
      { x:0, y:120,w:200,h:50,image: blocoImage2,scale:0.3},
      { x:290, y:77,w:200,h:50,image: blocoImage2,scale:0.3},
      { x:600, y:100,w:200,h:50,image: blocoImage2,scale:0.3},
      
    ];

    var racaoPositions = [
      {x:120,y:190,image:racaoImg,scale:0.8},
      {x:600,y:60,image:racaoImg,scale:0.8},
      {x:680,y:290,image:racaoImg,scale:0.8},
    ]
    this.addSprite(blocos,blocosPositions.length,blocoImage1,1,blocosPositions)
    this.addSprite(racao,racaoPositions.length,racaoImg,0.8,racaoPositions)

    romeu = createSprite(400,650)
    romeu.shapeColor = "blue"
    romeu.addImage(romeuImg)
    romeu.scale = 0.4

    chegada = createSprite(1400,570)
    chegada.addImage(chegadaImg)
    chegada.scale = 0.4


  }
  addSprite(spriteGroup,numberOfSprites,spriteImage,spriteScale,positions = []){
    for (let i = 0; i < numberOfSprites; i++) {
      var x,y,w,h
      if (positions.length > 0) {
        x = positions [i].x
        y = positions [i].y
        w = positions [i].w
        h = positions [i].h
        spriteScale = positions [i].scale
        spriteImage =  positions[i].image

      }
      
      var sprite = createSprite(x,y,w,h)
      sprite.addImage(spriteImage)
      sprite.scale = spriteScale
      spriteGroup.add(sprite)
      sprite.shapeColor = "blue"
      
    }
    
  }

  romeuMove(){
    romeu.collide(blocos)
    if (keyDown("right")) {
      romeu.position.x += 5
    }
    if (keyDown("left")) {
      romeu.position.x -= 5

    }
    if (keyDown("up")) {
      romeu.velocityY = -12
    }
    romeu.velocityY +=1.5
    
  }
  play(){
    this.romeuMove()
    gameState = 1
    fill("black")
    text("X: "+mouseX+" / Y: "+mouseY,mouseX,mouseY)

    if (romeu.isTouching(chegada)) {
      gameState = 2
      this.Stage2()
    }
    
    drawSprites()
  }
  play2() {
    text("fase 2",width/2,height/2)
    
  }
  Stage2() {
    swal({
      //title: `Incrível!${"\n"}Rank${"\n"}${player.rank}`,
      title: `Incrível,$º lugar`,
      text: "Você alcançou a linha de chegada com sucesso!",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    },function (isConfirm){
      if (isConfirm) {
        location.reload()
      }
    });
  }

  gameOver() {
    swal({
      title: `Fim de Jogo`,
      text: "Oops você perdeu a corrida!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Obrigado por jogar"
    });
  }
  
  
}

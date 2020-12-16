function preload(){
a1 = loadSound("sounds/Piano.mf.A3.mp3")
a2 = loadSound("sounds/Piano.mf.A4.mp3")
b1 = loadSound("sounds/Piano.mf.B3.mp3")
b2 = loadSound("sounds/Piano.mf.B4.mp3")
c1 = loadSound("sounds/Piano.mf.C3.mp3")
c2 = loadSound("sounds/Piano.mf.C4.mp3")
d1 = loadSound("sounds/Piano.mf.D3.mp3")
d2 = loadSound("sounds/Piano.mf.D4.mp3")
e1 = loadSound("sounds/Piano.mf.E3.mp3")
e2 = loadSound("sounds/Piano.mf.E4.mp3")
f1 = loadSound("sounds/Piano.mf.F3.mp3")
f2 = loadSound("sounds/Piano.mf.F4.mp3")
g1 = loadSound("sounds/Piano.mf.G3.mp3")
g2 = loadSound("sounds/Piano.mf.G4.mp3")
g_1 = loadSound("sounds/Piano.mf.Ab3.mp3")
g_2 = loadSound("sounds/Piano.mf.Ab4.mp3")
a_1 = loadSound("sounds/Piano.mf.Bb3.mp3")
a_2 = loadSound("sounds/Piano.mf.Bb4.mp3")
c_1 = loadSound("sounds/Piano.mf.Db3.mp3")
c_2 = loadSound("sounds/Piano.mf.Db4.mp3")
d_1 = loadSound("sounds/Piano.mf.Eb3.mp3")
d_2 = loadSound("sounds/Piano.mf.Eb4.mp3")
f_1 = loadSound("sounds/Piano.mf.Gb3.mp3")
f_2 = loadSound("sounds/Piano.mf.Gb4.mp3")
}
function setup(){
  createCanvas(1510,500)
  wkey1 = createSprite(75,250,100,400)
  wkey1.shapeColor = "white"
  wkey2 = createSprite(180,250,100,400)
  wkey2.shapeColor = "white"
  wkey3 = createSprite(285,250,100,400)
  wkey3.shapeColor = "white"
  wkey4 = createSprite(390,250,100,400)
  wkey4.shapeColor = "white"
  wkey5 = createSprite(495,250,100,400)
  wkey5.shapeColor = "white"
  wkey6 = createSprite(600,250,100,400)
  wkey6.shapeColor = "white"
  wkey7 = createSprite(705,250,100,400)
  wkey7.shapeColor = "white"
  bkey1 = createSprite(127,185,50,270)
  bkey1.shapeColor = "black"
  bkey2 = createSprite(232,185,50,270)
  bkey2.shapeColor = "black"
  bkey3 = createSprite(652,185,50,270)
  bkey3.shapeColor = "black"
  bkey4 = createSprite(442,185,50,270)
  bkey4.shapeColor = "black"
  bkey5 = createSprite(547,185,50,270)
  bkey5.shapeColor = "black"


  wkey8 = createSprite(810,250,100,400)
  wkey8.shapeColor = "white"
  wkey9 = createSprite(915,250,100,400)
  wkey9.shapeColor = "white"
  wkey10 = createSprite(1020,250,100,400)
  wkey10.shapeColor = "white"
  wkey11 = createSprite(1125,250,100,400)
  wkey11.shapeColor = "white"
  wkey12 = createSprite(1230,250,100,400)
  wkey12.shapeColor = "white"
  wkey13 = createSprite(1335,250,100,400)
  wkey13.shapeColor = "white"
  wkey14 = createSprite(1440,250,100,400)
  wkey14.shapeColor = "white"
  bkey6 = createSprite(862,185,50,270)
  bkey6.shapeColor = "black"
  bkey7 = createSprite(967,185,50,270)
  bkey7.shapeColor = "black"
  bkey8 = createSprite(1177,185,50,270)
  bkey8.shapeColor = "black"
  bkey9 = createSprite(1282,185,50,270)
  bkey9.shapeColor = "black"
  bkey10 = createSprite(1387,185,50,270)
  bkey10.shapeColor = "black"
}
function draw(){
background("red")

if(mousePressedOver(wkey1)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
&& !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
&& !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
a1.play()
}
if(mousePressedOver(wkey2)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
&& !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
&& !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
  b1.play()
  }
  if(mousePressedOver(wkey3)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
  && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
  && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
    c1.play()
    }
    if(mousePressedOver(wkey4)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
    && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
    && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
      d1.play()
      }
      if(mousePressedOver(wkey5)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
      && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
      && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
        e1.play()
        }
        if(mousePressedOver(wkey6)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
        && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
        && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
          f1.play()
          }
          if(mousePressedOver(wkey7)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
          && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
          && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
            g1.play()
            }
            if(mousePressedOver(wkey8)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
            && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
            && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
              a2.play()
              }
              if(mousePressedOver(wkey9)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
              && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
              && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
                b2.play()
                }
                if(mousePressedOver(wkey10)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
                && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
                && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
                  c2.play()
                  }
                  if(mousePressedOver(wkey11)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
                  && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
                  && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
                    d2.play()
                    }
                    if(mousePressedOver(wkey12)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
                    && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
                    && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
                      e2.play()
                      }
                      if(mousePressedOver(wkey13)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
                      && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
                      && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
                        f2.play()
                        }
                        if(mousePressedOver(wkey14)&& !mousePressedOver(bkey1)&& !mousePressedOver(bkey2)&& !mousePressedOver(bkey3)
                        && !mousePressedOver(bkey4)&& !mousePressedOver(bkey5)&& !mousePressedOver(bkey6)&& !mousePressedOver(bkey7)
                        && !mousePressedOver(bkey8)&& !mousePressedOver(bkey9)&& !mousePressedOver(bkey10)){
                          g2.play()
                          }
                          if(mousePressedOver(bkey1)){
                            c_1.play()
                            }
                            if(mousePressedOver(bkey2)){
                              d_1.play()
                              }
                              if(mousePressedOver(bkey4)){
                                f_1.play()
                                }
                                if(mousePressedOver(bkey5)){
                                  g_1.play()
                                  }
                                  if(mousePressedOver(bkey3)){
                                    a_1.play()
                                    }
                                    if(mousePressedOver(wkey6)){
                                      f1.play()
                                      }
                                      if(mousePressedOver(wkey7)){
                                        g1.play()
                                        }
                                        if(mousePressedOver(wkey8)){
                                          a2.play()
                                          }
                                          if(mousePressedOver(wkey9)){
                                            b2.play()
                                            }
                                            if(mousePressedOver(wkey10)){
                                              c2.play()
                                              }
                                              if(mousePressedOver(wkey11)){
                                                d2.play()
                                                }
                                                if(mousePressedOver(wkey12)){
                                                  e2.play()
                                                  }
                                                  if(mousePressedOver(wkey13)){
                                                    f2.play()
                                                    }
                                                    if(mousePressedOver(wkey14)){
                                                      g2.play()
                                                      }           
drawSprites()
}
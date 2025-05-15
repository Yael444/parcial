
function setup() {
  let lz =createCanvas(600,3600);
  background(100);
  lz.parent('lienzo');
  background('steelblue');

  // grosor de linea
  strokeWeight(3);
  noStroke();

  //  CUADRADO AMARILLO FELIZ
  fill(255,215,0);
  square(0, 0, 600); 
  //boca
  fill(0,0,0);
  ellipse(300, 350, 120, 120);
  fill(255,215,0);
  rect(200, 250, 200, 100);
  //FIN FELIZ

  //  CUADRADO AZUL TRISTE
  fill(30,144,255);
  square(0, 600, 600);
  //Boca
  fill(0,0,0);
  rect(240,1000,120,10);
  //Cejas
  push()
  translate(200, 750);
  fill(0,0,0);
  rectMode(CENTER);
  rotate(radians(-25));  
  rect(0,0,150,10);
  pop();

  push()
  translate(400, 750);
  fill(0,0,0);
  rotate(radians(25));   
  rectMode(CENTER); 
  rect(0,0,150,10);
  pop();
  //FIN TRISTE


 //  CUADRADO ROJO IRA
  fill(220,20,60);
  square(0, 1200, 600);
  //Boca
  fill(0,0,0);
  rect(240, 1600, 120, 10);
  //Cejas
  push()
  translate(200, 1350);
  fill(0,0,0);
  rectMode(CENTER);
  rotate(radians(25));  
  rect(0,0,150,10);
  pop();

  push()
  translate(400, 1350);
  fill(0,0,0);
  rotate(radians(-25));   
  rectMode(CENTER); 
  rect(0,0,150,10);
  pop();
  //FIN IRA

 
  //  CUADRADO VIOLETA MIEDO
  fill(153,50,204);
  square(0, 1800, 600);

 //Boca
  push();
  translate(0, 1800);
  fill(0,0,0);
  ellipse(300, 390, 120, 120);
  fill(153,50,204);
  rect(200, 380, 200, 100);
  pop();
  //Cejas
  push()
  translate(200, 1895);
  fill(0,0,0);
  rectMode(CENTER);
  rotate(radians(-20));  
  rect(0,0,150,10);
  pop();

  push()
  translate(400, 1895);
  fill(0,0,0);
  rotate(radians(20));   
  rectMode(CENTER); 
  rect(0,0,150,10);
  pop();
  //FIN MIEDO


  //  CUADRADO VERDE ASCO
  fill(0,100,0);
  square(0, 2400, 600);

  //Boca
  push();
  translate(0, 2400);
  fill(0,0,0);
  rectMode(CENTER);
  rotate(radians(5));
  rect(300,380,120,10);
  pop();
  //Cejas
  push()
  translate(200, 2560);
  fill(0,0,0);
  rectMode(CENTER);
  rotate(radians(20));  
  rect(0,0,150,10);
  pop();

  push()
  translate(400, 2490);
  fill(0,0,0);
  rotate(radians(-20));   
  rectMode(CENTER); 
  rect(0,0,150,10);
  pop();
  //FIN ASCO


  //  CUADRADO ROSA VERGUENSA
  fill(255,182,193);
  square(0, 3000, 600);

  //Boca
  push();
  translate(0, 3000);
  fill(0,0,0);
  rect(240, 400, 120, 10);
  pop();
  //Cejas
  push()
  translate(200, 3120);
  fill(0,0,0);
  rectMode(CENTER);
  rotate(radians(-20));  
  rect(0,0,150,10);
  pop();

  push()
  translate(400, 3120);
  fill(0,0,0);
  rotate(radians(20));   
  rectMode(CENTER); 
  rect(0,0,150,10);
  pop();

  //circulos
  push()
  translate(300, 3000);
  fill(255,105,180);
  ellipse(-150, 400, 70, 70);
  pop();

  push()
  translate(300, 3000);
  fill(255,105,180);
  ellipse(150, 400, 70, 70);
  pop();
  //FIN VERGUIENZA
}



//TODOS LOS OJOS
function draw() {
  stroke(0); 
  // CARA FELIZ 

   // Dibujo ojo izquierdo
    let leftX = 200;
    let leftY = 250;

    // Calculate angle between left eye and mouse
    let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

   push();
   translate(leftX, leftY);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(leftAngle);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();

   // Dibujo ojo Derecho
   let rightX = 400;
   let rightY = 250;

   // Calculate angle between right eye and angle
   let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

   push();
   translate(rightX, rightY);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(rightAngle);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();
  // FIN CARA FELIZ


   // CARA TRISTE

  // Dibujo ojo izquierdo
   let leftX2 = 200;
   let leftY2 = 850;

   // Calculate angle between left eye and mouse
   let leftAngle2 = atan2(mouseY - leftY2, mouseX - leftX2);

   push();
   translate(leftX2, leftY2);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(leftAngle2);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();

   // Dibujo ojo Derecho
   let rightX2 = 400;
   let rightY2 = 850;

   // Calculate angle between right eye and angle
   let rightAngle2 = atan2(mouseY - rightY2, mouseX - rightX2);

   push();
   translate(rightX2, rightY2);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(rightAngle2);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();



// CARA ENOJADA

  // Dibujo ojo izquierdo
   let leftX3 =200;
   let leftY3 = 1450;

   // Calculate angle between left eye and mouse
   let leftAngle3= atan2(mouseY - leftY3, mouseX - leftX3);

   push();
   translate(leftX3, leftY3);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(leftAngle3);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();

   // Dibujo ojo Derecho
   let rightX3 = 400;
   let rightY3 = 1450;

   // Calculate angle between right eye and angle
   let rightAngle3 = atan2(mouseY - rightY3, mouseX - rightX3);

   push();
   translate(rightX3, rightY3);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(rightAngle3);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();


  // CARA ENOJADA

  // Dibujo ojo izquierdo
   let leftX4 =200;
   let leftY4 = 2050;

   // Calculate angle between left eye and mouse
   let leftAngle4= atan2(mouseY - leftY4, mouseX - leftX4);

   push();
   translate(leftX4, leftY4);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(leftAngle4);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();

   // Dibujo ojo Derecho
   let rightX4 = 400;
   let rightY4 = 2050;

   // Calculate angle between right eye and angle
   let rightAngle4 = atan2(mouseY - rightY4, mouseX - rightX4);

   push();
   translate(rightX4, rightY4);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(rightAngle4);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();
  

    // CARA DESGUSTO

  // Dibujo ojo izquierdo
   let leftX5 =200;
   let leftY5 = 2650;

   // Calculate angle between left eye and mouse
   let leftAngle5= atan2(mouseY - leftY5, mouseX - leftX5);

   push();
   translate(leftX5, leftY5);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(leftAngle5);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();

   // Dibujo ojo Derecho
   let rightX5 = 400;
   let rightY5 = 2650;

   // Calculate angle between right eye and angle
   let rightAngle5 = atan2(mouseY - rightY5, mouseX - rightX5);

   push();
   translate(rightX5, rightY5);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(rightAngle5);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();




  // CARA VERGUENZA

  // Dibujo ojo izquierdo
   let leftX6 =200;
   let leftY6 = 3250;

   // Calculate angle between left eye and mouse
   let leftAngle6= atan2(mouseY - leftY6, mouseX - leftX6);

   push();
   translate(leftX6, leftY6);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(leftAngle6);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();

   // Dibujo ojo Derecho
   let rightX6 = 400;
   let rightY6 = 3250;

   // Calculate angle between right eye and angle
   let rightAngle6 = atan2(mouseY - rightY6, mouseX - rightX6);

   push();
   translate(rightX6, rightY6);
   fill(255);
   ellipse(0, 0, 160, 160);
   rotate(rightAngle6);
   fill(0);
   ellipse(35, 0, 25, 25);
   pop();

}


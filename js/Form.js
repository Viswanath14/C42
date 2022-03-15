class Form {
  constructor() {
    this.input = createInput("");
    this.playbutton = createButton("Play");
    this.titleimg  = createImg("assets/title.png");
    this.greeting = createElement("h4");
  }
 setElementPosition()
 {
   this.titleimg.position(120,80);
   this.input.position(width/2-110,height/2-80);
   this.playbutton.position(width/2-90,height/2-20);
   this.greeting.position(width/2-300,height/2-100);
 }
 handheldmousepressed()
   {
     this.playbutton.mousePressed(()=>{
      this.input.hide()
      this.playbutton.hide();
      var message = ` Hello ${this.input.value()} </br>wait for another player to join...`;
       this.greeting.html(message);
     })

   }
 
display()
{
  this.setElementPosition();
  this.handheldmousepressed();

}
}

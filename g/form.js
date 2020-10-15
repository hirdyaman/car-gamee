class Form{
constructor(){
this.input=createInput("enter your name")
this.button=createButton("play")
this.title=createElement("h2","car racing game")
}
 display(){
this.input.position(130,160)
this.button.position(250,200)
this.title.position(130,0)
this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
player.name =this.input.value()
playercount=playercount+1
player.update(player.name)
player.updatecount(playercount)

})

 }











}

class Game{
constructor(){


}
getstate(){



    database.ref('gamestate').on("value",function(data){
        gamestate=data.val()
    })
}
updatestate(state){
    database.ref("/").update({
    gamestate:state
    })

}start(){
if(gamestate===0)
{
player=new Player()
player.getcount()
form=new Form()
form.display()
}
}
play(){
if(3<2){} 
}
}

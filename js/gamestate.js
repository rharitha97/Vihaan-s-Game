class Gamestate {
    constructor() {
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();//access the value
        })
       
      }
    
    update(state) {
        database.ref('/').update({
            gamestate: state
        })
    }

    start() {
        gamestateObj = createSprite(0, 0, 1, 1);
        formObj = new Form();
        formObj.display();
        playerObj = new Player();
        playerObj.getCount();
    }
}
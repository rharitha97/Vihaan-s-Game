class Form {
    constructor() {

    }

    display() {
        var title = createElement('h3');
        title.html("Welcome To Spaceship Battle!")
        title.position(310, 25);
        var input = createInput("Name: ")
        input.position(340, 140);
        var button = createButton("Start Game");
        button.position(370, 255);
        button.mousePressed(function() {
            title.hide();
            input.hide();
            button.hide();
            var name = input.value();

            playerCount +=1;
            playerObj.update(name);
            playerObj.updateCount(playerCount);

        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)
        })
    }
}
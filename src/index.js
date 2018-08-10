import * as pixi from 'pixi.js'

//Aliases
let Application = pixi.Application,
    loader = pixi.loader,
    resources = pixi.loader.resources,
    Sprite = pixi.Sprite;

let app = new Application({
    width: 256,
    height: 256,
})

document.getElementById('index').appendChild(app.view)

loader
    .add("../assets/carsCop.png")
    .load(setup);

function setup() {
    let cop = new Sprite(resources["../assets/carsCop.png"].texture);
    app.stage.addChild(cop);
}
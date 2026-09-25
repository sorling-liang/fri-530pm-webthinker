// write your codes here
let NounInput;
let VerbInput;
let AdjectiveInput;
let AdverbInput;
let PlaceInput;

// let colorInput;
let myStory;
let someButton;

let storyTemplates;
let template;

function setup() {

    storyTemplates = [
        "The {adj} {noun} decided to {verb} {adv} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
        "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}?",
        "In the {place}, a {adj} {noun} is {verb} {adv} on the floor."
    ];

    

    createCanvas(600,400);
    background(220);
    fill("black");
    NounInput = createInput();
    NounInput.position(width/2+20,      35);

    VerbInput = createInput();
    VerbInput.position(width/2+20,      65);

    AdjectiveInput = createInput();
    AdjectiveInput.position(width/2+20, 95);

    AdverbInput = createInput();
    AdverbInput.position(width/2+20,    125);

    PlaceInput = createInput();
    PlaceInput.position(width/2+20,     155);

    // textInput.input(changedText);

    someButton = createButton("Create a Story!");
    someButton.position(width/2+20,     195);
    someButton.mousePressed(updateText);

    // colorInput = createColorPicker("black");
    // colorInput.position(50,50);


    let oneSentence = "Mary had a little lamb.";
    oneSentence = oneSentence.replace("l", "X");
    print(oneSentence);
}
function draw() {
    background(220); // erase
    // fill(colorInput.value());
    fill("black");
    textAlign(RIGHT,CENTER);
    textSize(18);
    text("Enter a noun, e.g. a dog",       width/2,  45);
    text("Enter a verb, e.g. jump",        width/2,  75);
    text("Enter an adjective, e.g. funny", width/2, 105);
    text("Enter an adverb, e.g. angrily",  width/2, 135);
    text("Enter a place, e.g. Ang Mo Kio", width/2, 165);

    textAlign(CENTER, CENTER);
    fill("red");
    text(myStory, width/2, height/2+200);
}
// function changedText() {
//     someText = NounInput.value();
// }
function updateText() {
    // when button is pressed, always choose a different story
    template = random(storyTemplates);
    template = template.replace("{noun}", NounInput.value());
    template = template.replace("{verb}", VerbInput.value());
    template = template.replace("{adj}",  AdjectiveInput.value());
    template = template.replace("{adv}",  AdverbInput.value());
    template = template.replace("{place}", PlaceInput.value());

    myStory = template;

    // someText = NounInput.value();
    // print(NounInput.value());
    // print(VerbInput.value());
    // print(AdjectiveInput.value());
    // print(AdverbInput.value());
    // print(PlaceInput.value());

    // print("my story is generated");
    print(myStory);
}
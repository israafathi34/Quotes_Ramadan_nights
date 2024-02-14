
var Name = window.prompt('enter you name please .. ');

document.getElementById('name').innerHTML= Name;




var qoutes = [
    {
        text : "“ When the month of Ramadan arrives, the door of mercy are opened. ” ",
        author : "― Holy Prophet Muhammad"

    },
    {
        text : "“Fasting is shield it will protect you from the hell-fire and prevent you from sins.”  ",
        author : "― Holy Prophet Muhammad"

    },
    {
        text : " “Ramadan is the month whose beginning is mercy, whose middle is forgiveness and whose end is freedom from fire.” ",
        author : "― "

    },
    {
        text : " “And it is the month of sabr (patience); for sabr the reward is paradise.” — Ibn Khuzaima",
        author : "— Ibn Khuzaima"

    },
    {
        text : "“If any Muslim comes out of Ramadan without gaining forgiveness and goodness, he is a real loser.” ",
        author : "— Ibn Hibban And Al-Tabarani"

    }

];

function display() {

    var cartona = 0;
    var text = '' ;
    var author= '' ;

    do {
        
        cartona= Math.floor(Math.random()*qoutes.length) 

        text = qoutes[cartona].text; 
        author = qoutes[cartona].author;
    }
    while( document.getElementById("text").innerHTML.includes(text));


    document.getElementById("text").innerHTML=text
    document.getElementById("author").innerHTML=author

}





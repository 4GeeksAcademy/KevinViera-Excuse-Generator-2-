import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
    document.querySelector('#Excuse').innerHTML = generateExcuse();
};

let generateExcuse = () => {

    let noun = ['Kevin', 'A gigant', 'A spaceship', 'A dragon'];
    let verb = ['destroyed', 'stepped on', 'blasted', 'kicked'];
    let subject = ['my house', 'my phone', 'my car', 'my pc'];
    let time = ['while I was sleeping', 'while I was having breakfast', 'while I was at the gym', 'while I was fishing outside'];
    
    let nindex = Math.floor(Math.random() * 4);
    let vindex = Math.floor(Math.random() * 4);
    let sindex = Math.floor(Math.random() * 4);
    let tindex = Math.floor(Math.random() * 4);

    return noun[nindex] + ' ' + verb[vindex] + ' ' + subject[sindex] + ' ' + time[tindex];
}

//MODEL
const appDiv = document.getElementById('app');
// let userdmg = [0, 10, 20, 30];
// let cmpudmg = [0, 10, 20, 30];
const boss = {healthPoints: 100, firstName: 'Bowser', dmg: [0, 10, 20, 30]};
const player = {healthPoints: 100, firstName: 'Sverre', dmg: [0, 10, 20, 30]};
let Winner = '';
let knapp = '';
let sverre = ['sverrevinner.png',
'taper.png'];

//VIEW
show();
function show(){ 
    appDiv.innerHTML = ` 
    
    <div class="a">
    <h1>Velkommen til Team 3 Boss Fight</h1>
    <p>I denne kampen skal du se om du klarer å slå Bowser!</p>
    </div>
   
    <div id=container>
    <div id=bowser>${boss.firstName}</br>${boss.healthPoints} </div>
    <button onclick="attackBowser()" id="attack" ${knapp}>attack</button>
    <div id="superMario">${player.firstName}</br>${player.healthPoints} </div>
 </div>
    <div id=sevinner>${Winner}</div>
    `;
    
}


//CONTROLLER
function attackBowser() {
  let skade = player.dmg[Math.floor(Math.random() * player.dmg.length)];
        console.log(skade)
    if (skade !== 0) {
        boss.healthPoints = boss.healthPoints - skade;
        attackSverre();
        vinner();
        show();
    } 
}

function attackSverre() {
    let comskade = boss.dmg[Math.floor(Math.random() * boss.dmg.length)];
    if (comskade !== 0) {
        player.healthPoints = player.healthPoints - comskade;
        }  
    }

function vinner() {
    if (player.healthPoints <= 0) {
        player.healtPoints = 0;
        Winner = 'Du tapte dette spillet';
        knapp = 'disabled';
        show();
    }
    if (boss.healthPoints <= 0) {
        boss.healthPoints = 0;
        Winner = 'Du vant dette spillet';
        knapp = 'disabled';
        show();
    } 
    if (boss.healthPoints <= 0 && player.healthPoints <= 0) {
        boss.healthPoints = 0;
        player.healtPoints = 0;
        winner = 'draw'; 
        knapp = 'disabled';
    }
        show();
    }

// function bilder() {
//     if (Winner == 'Du tapte dette spillet') {return `
//     <div id="sevinner" style="
//     display=true;
//     height: 200px; 
//     width: 856px;
//     border: solid black 2px;
//     text-align: center;
//     padding-top: 100px;
//     font-family: arial black;
//     font-size: 200%;
//     background-image: url(sverrevinner.png);
//     background-image: cover;">${Winner}</div>`}
//     show();

//     if (winner == 'Du vant dette spillet') {return `
//     <div id="sevinner" style="
//     display=true;
//     height: 200px; 
//     width: 856px;
//     border: solid black 2px;
//     text-align: center;
//     padding-top: 100px;
//     font-family: arial black;
//     font-size: 200%;
//     background-image: url(taper.png);
//     background-image: cover;">${Winner}</div>`}

//     show();
// }


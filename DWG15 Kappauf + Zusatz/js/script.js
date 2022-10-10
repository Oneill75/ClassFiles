let Kugeln = [];
for (let i = 1; i < 50; i++) {
    Kugeln.push(i);    
}

Kugeln.sort((a, b) => {return Math.random() - 0.5});

let Ziehung = Kugeln.slice(0,6).sort((a, b) => {return a - b});

document.querySelector('p').innerText = Ziehung;

document.querySelector('input').valueAsNumber = 100000;

document.querySelector('input').addEventListener('input', (ev) => {
    console.log("A")
    document.querySelectorAll('*').forEach((ele) => {
        ele.style.fontSize = (ev.target.valueAsNumber/1000) + "%"        
    });
    document.querySelectorAll('div.hamburg').forEach((ele) =>{
        ele.style.width = 40 * Math.pow((ev.target.valueAsNumber/100000),5.25) + "px";
        ele.style.height = 40 * Math.pow((ev.target.valueAsNumber/100000),5.25) + "px";
    })
});


let vertBox = document.createElement('div');
vertBox.classList.add("flexVertical");

document.body.appendChild(vertBox);

let anzahlGewaehlt = 0;

for (let i = 0; i < 7; i++) {
    let horiBox = document.createElement('div');
    horiBox.classList.add("flexHorizontal");
    document.querySelector('div').appendChild(horiBox);
    for (let j = 0; j < 7; j++) {
        let burgerBox = document.createElement('div');        
        burgerBox.classList.add("hamburg");
        burgerBox.onclick = function () {
            if (anzahlGewaehlt >= 6){
                if (this.classList.contains("checked")){                    
                    this.classList.toggle ("checked");
                    anzahlGewaehlt -= 1;
                }
            }else{
                this.classList.toggle ("checked");
                anzahlGewaehlt += this.classList.contains("checked")?1:-1;
            }
        }
        burgerBox.innerHTML = "<p>" + (1+i*7+j) + "</p>";
        document.querySelector('div').lastChild.appendChild(burgerBox);  
        for (let k = 0; k < 2; k++) {
            let line = document.createElement('span');      
            line.classList.add("line");            
            document.querySelector('div').lastChild.lastChild.lastChild.appendChild(line);            
        }     
    }
}

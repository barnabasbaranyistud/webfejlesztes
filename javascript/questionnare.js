function days_wasted() {
    //Létrehozzuk a változókat, bekérjük az adatokat, ezeket átváltjuk napokba és kiírjunk egy specifikus választ az alapján, hogy hány napot "pazarolt el" a felhasználó a játékra.
    let days;
    let msg;
    let hrs = 1;
    do {hrs = prompt("How many hours have you played? (Must be a positive number)", "0")}
    while (isNaN(hrs) || hrs<0);
    days = Math.round(hrs/24);
    if (days == 0) {
        msg = "Try the game out today!";
    }
    else if (days == 1) {
        msg = `That is about ${days} day.`;
    }
    else if (days<=7) {
        msg = `You've played about ${days} days, that's not even a week.`;
    }
    else if (days>=30) {
        msg = `Woah, really ${hrs} hours?<br> That is ${days} days wasted on this game! Get a life. `;
    }
    else {
        msg = `That is ${days} days spent on Counter-Strike!`;
    }
    document.getElementById("asd").innerHTML = msg;
}

function type() {
    //Bekérjük a checkboxokat, be vannk-e pipálva?
    const awp = document.getElementById("awp").checked;
    const scout = document.getElementById("scout").checked;
    const ak = document.getElementById("ak").checked;
    const m4 = document.getElementById("m4").checked;
    const m4s = document.getElementById("m4s").checked;
    const famas = document.getElementById("famas").checked;
    const galil = document.getElementById("galil").checked;
    const p90 = document.getElementById("p90").checked;
    const negev = document.getElementById("negev").checked;
    const knife = document.getElementById("knife").checked;
    const zeus = document.getElementById("zeus").checked;
    const deagle = document.getElementById("deagle").checked;
    const dualies = document.getElementById("dualies").checked;
    const cz = document.getElementById("cz").checked;
    const glock = document.getElementById("glock").checked;
    const usp = document.getElementById("usp").checked;
    let t_szamlalo = 0;
    let ct_szamlalo = 0;
    // Meg kell számolni, hogy a felhasználó a "T" vagy "CT" fegyverekből választott ki többet
    t_lista = [scout, ak, galil, p90, knife, deagle, dualies, glock];
    ct_lista = [awp, m4, m4s, famas, negev, zeus, cz, usp];
    for(let x, a=0, b=t_lista, c=b.length; a<c; a++){
        x=b[a]
        if(x==1){
            t_szamlalo = t_szamlalo + 1
     }
    }
     for(let y, a=0, b=ct_lista, c=b.length; a<c; a++){
        y=b[a]
        if(y==1){
            ct_szamlalo = ct_szamlalo + 1
     }
    }
    //Kiírjuk, hogy melyik oldalt preferálja fegyverek alapján a felhasználó
    if(t_szamlalo == 0 && ct_szamlalo == 0) window.alert("Please select a weapon from the options above.")
    else{
        if(t_szamlalo==ct_szamlalo){
            window.alert(`You like the CT side just as much as the T side, you selected ${t_szamlalo} weapons from both sides.`)
        }
        else{
            if(t_szamlalo>=ct_szamlalo){
                window.alert(`You like the T side more. You selected ${t_szamlalo} T weapons and ${ct_szamlalo} CT weapons.`)
            }
            else{
                if(ct_szamlalo>=t_szamlalo){
                    window.alert(`You like the CT side more. You selected ${ct_szamlalo} CT weapons and ${t_szamlalo} T weapons.`)
                }
            }
        }
}
}
document.getElementById("wasted").addEventListener("click",days_wasted)
document.getElementById("type").addEventListener("click", type)
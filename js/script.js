let zak = [
    {
        Jmeno: "Petr",
        Prijmeni: "Kostka",
        Vek: 15,
        Rocnik: 1,
        Obor: "IT",
        Typ: "Maturitní",
        Typ_studia: "Prezenční"
    },
    {
        Jmeno: "Klement",
        Prijmeni: "Gottwald",
        Vek: 15,
        Rocnik: 3,
        Obor: "IT",
        Typ: "Maturitní",
        Typ_studia: "Dálkové"
    }
];

document.getElementById("output").innerHTML += zak[0].Jmeno + " " + zak[0].Prijmeni + ", " + zak[0].Vek + " let, " + zak[0].Rocnik + ". ročník" + ", Obor: " + zak[0].Obor
document.getElementById("output").innerHTML += "<br>"
document.getElementById("output").innerHTML += zak[1].Jmeno + " " + zak[1].Prijmeni + ", " + zak[1].Vek + " let, " + zak[1].Rocnik + ". ročník" + ", Obor: " + zak[1].Obor

console.log(zak[0].Jmeno, zak[0].Prijmeni + ",", zak[0].Vek,"let,", zak[0].Rocnik + ". ročník", ", Obor", zak[0].Obor,);
console.log(zak[1].Jmeno, zak[1].Prijmeni + ",", zak[1].Vek,"let,", zak[1].Rocnik + ". ročník", ", Obor", zak[1].Obor,);


setInterval(DomChange, 1);


function DomChange() {
    const font = document.querySelector("#font").value;
    const FontColor = document.querySelector("#Fcolor").value;
    const BackColor = document.querySelector("#Bcolor").value;
    const fontSize = document.querySelector("#fontSize").value;
    const radius = document.querySelector("#radius").value;


    // console.log(font);
    // // console.log(radius);
    // // console.log(BackColor);
    document.querySelector("#FontColor").value = FontColor;
    document.querySelector("#BackColor").value = BackColor;
    document.querySelector("#fontValue").value = fontSize;
    document.querySelector("#radiusValue").value = radius;



    document.querySelector(".btn").style.fontFamily = font;
    document.querySelector(".btn").style.color = FontColor;
    document.querySelector(".btn").style.backgroundColor = BackColor;
    document.querySelector(".btn").style.fontSize = fontSize+"px";
    document.querySelector(".btn").style.borderRadius = radius+"px";

    document.querySelector("#Cfont").textContent = font;
    document.querySelector("#Ccolor").textContent = FontColor;
    document.querySelector("#Cbcolor").textContent = BackColor;
    document.querySelector("#Cfsize").textContent = fontSize;
    document.querySelector("#Cbradius").textContent = radius;


}


const main = document.getElementById("main")
const content = document.createElement("div")
const footer = document.createElement("div")

document.body.style.margin = "0px"
document.body.style.padding = "0px"
document.body.style.boxSizing = "border-box"
document.body.style.width = "auto"
document.body.style.fontFamily = "montserrat"
document.body.style.fontWeight = "700"
document.body.style.display = "flex"
document.body.style.flexDirection = "column"
document.body.style.justifyContent = "center"
document.body.style.background = " #252B42"



content.style.width = "100%"
content.style.height = "auto"
content.style.display = "flex"
content.style.flexDirection = "column"
content.style.alignItems = "center"
content.style.justifyContent = "center"
content.style.gap = "40px"
content.style.paddingTop = "180px"


const welcome = document.createElement("h3")
    welcome.innerHTML = "Welcome"
    welcome.style.color = "#23A6F0"
    welcome.style.fontSize = "16px"


const title = document.createElement("h1")
title.innerHTML = "Selling on the internet like a pro"
title.style.color = "white"
title.style.fontSize = "58px"
title.style.textAlign = "center"
title.style.width = "35%"

const paragraph = document.createElement("p")
paragraph.innerHTML = "We know how large objects will act, but things on a small scale just do not act that way."
paragraph.style.color = "white"
paragraph.style.fontSize = "20px"
paragraph.style.fontWeight = "400"
paragraph.style.textAlign = "center"
paragraph.style.width = "30%"

const btndiv = document.createElement("div")
btndiv.style.display = "flex"
btndiv.style.justifyContent = "center"

function buttons(width, background, text, color){

    const btn1 = document.createElement("button")
    btn1.style.width = width
    btn1.style.height = "52px"
    btn1.style.borderColor = "#23A6F0"
    btn1.style.borderRadius = "5px"
    btn1.style.backgroundColor = background
    btn1.innerHTML = text
    btn1.style.color = color
    btn1.style.margin = "5px"
    btndiv.appendChild(btn1)
}
buttons("193px", "#23A6F0",  "Get Quote Now", "white")
buttons("162px","#252B42","Learn More", "#23A6F0")


const container = document.createElement("div")
container.style.display = "flex"
container.style.alignItems = "center"
container.style.gap = "30px"
container.style.marginTop = "80px"
container.style.marginBottom = "80px"



function boxes(color,icon,colors,text,fontc, line, pcolor,ptext){
    const box = document.createElement("div")
    box.style.width = "328px"
    box.style.height = "292px"
    box.style.backgroundColor = color
    box.style.padding = "35px 40px"
    box.style.gap = "20px"
    box.style.display = "flex"
    box.style.flexDirection = "column"
    box.style.justifyContent = "center"
    box.style.alignItems = "start"
    box.style.color = fontc
    container.appendChild(box)

    function icons(svg, bcolor){
        const div = document.createElement("div")
        div.innerHTML = `<img src="${svg}">`
        div.style.width = "70px"
        div.style.height = "70px"
        div.style.display = "flex"
        div.style.alignItems = "center"
        div.style.justifyContent = "center"
        div.style.backgroundColor = bcolor 
        box.appendChild(div)
    }
    icons(icon, colors)


    function title(text){
        const h4 = document.createElement("h4")
        h4.style.fontSize = "16px"
        h4.innerHTML = text
        box.appendChild(h4)
    }
    title(text)

    function lines(line){
        const l = document.createElement("div")
        l.style.width = "50px"
        l.style.height = "2px"
        l.style.backgroundColor = line
        box.appendChild(l)
    }
    lines(line)

    function paragraph(pcolor,ptext){
       const p = document.createElement("p")
       p.style.fontSize = "14px"
        p.style.color = pcolor
        p.innerHTML = ptext
        p.style.lineHeight = "20px"
        p.style.width = "222px"
        box.appendChild(p)
    }
    paragraph(pcolor,ptext)
}


boxes("white", "./icons/smile.svg", "#FFDCD1", "training Courses","black", "#E74040", "#737373", "The gradual accumulation of information about atomic and small-scale behaviour...")
boxes("white","./icons/vv.svg", "#B9EAA8", "2,769 online courses","black", "#E74040", "#737373", "The gradual accumulation of information about atomic and small-scale behaviour...")
boxes("#23A6F0","./icons/card.svg", "#fff", "training Courses","white", "white", "white", "The gradual accumulation of information about atomic and small-scale behaviour...")







content.appendChild(welcome)
content.appendChild(title)
content.appendChild(paragraph)
content.appendChild(btndiv)
content.appendChild(container)
main.appendChild(content)


footer.style.width = "100%"
footer.style.height = "auto"
footer.style.display = "flex"
footer.style.flexDirection = "column"
footer.style.alignItems = "center"
footer.style.justifyContent = "center"
footer.style.backgroundColor = "white"
footer.style.paddingTop = "160px"
footer.style.gap = "10px"

const advice = document.createElement("h3")
    advice.innerHTML = "Practice Advice"
    advice.style.color = "#23A6F0"
    advice.style.fontSize = "16px"

    const title1 = document.createElement("h1")
    title1.innerHTML = "Featured Products"
    title1.style.color = "black"
    title1.style.fontSize = "40px"
    title1.style.textAlign = "center"
    title1.style.width = "542px"
    
    const paragraph1 = document.createElement("p")
    paragraph1.innerHTML = "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
    paragraph1.style.color = "#737373"
    paragraph1.style.fontSize = "20px"
    paragraph1.style.fontWeight = "400"
    paragraph1.style.textAlign = "center"
    paragraph1.style.width = "27%"


    const input = document.createElement("div")
    input.style.margin = "80px"
    input.style.display = "flex"
    input.style.alignItems = "center"
    input.style.borderRadius = "5px"
    input.style.border = "1px solid #737373"
    const inp = document.createElement("input")
    inp.style.width = "570px"
    inp.style.height = "58px"
    inp.style.border = "none"
    inp.style.fontSize = "14px"
    inp.placeholder = "Your Mail"
    inp.style.paddingLeft = "20px"

    const subbutton = document.createElement("button")
    subbutton.style.width = "117px"
    subbutton.style.height = "60px"
    subbutton.style.background = "#23A6F0"
    subbutton.style.border = "#23A6F0"
    subbutton.innerHTML = "Subscribe"
    subbutton.style.fontsize = "14px"
    subbutton.style.color = "white"

input.appendChild(inp)
input.appendChild(subbutton)
footer.appendChild(advice)
footer.appendChild(title1)
footer.appendChild(paragraph1)
footer.appendChild(input)
main.appendChild(footer)
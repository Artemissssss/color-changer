function randomNumberRGBA() {
    let first = 0 + Math.random() * (255 + 1 - 0);
    let second = 0 + Math.random() * (255 + 1 - 0);
    let third = 0 + Math.random() * (255 + 1 - 0);
    let four = function(){
        let numberChange = [Math.random(),1]
        return numberChange[Math.round(Math.random())];
    }
    return `${Math.floor(first)},${Math.floor(second)},${Math.floor(third)},${four()}`;
}
//!first===============================================
document.getElementById("first-btn").addEventListener("click", colorChanger)
function colorChanger() {
    document.getElementById("first-p").style.color = `rgba(${randomNumberRGBA()})`;
}
//?second============================================
document.getElementById("second-btn").addEventListener("click", secondP)
function secondP(){
    let a = randomNumberRGBA();
    let b  =randomNumberRGBA();
    if(a !== b){
    document.getElementById("second-p").style.color = `rgba(${a})`;
    document.getElementById("third-p").style.color = `rgba(${b})`;
    }else{
        while(a==b){
        a = randomNumberRGBA();
        b = randomNumberRGBA();
        }
        document.getElementById("second-p").style.color = `rgba(${a})`;
        document.getElementById("third-p").style.color = `rgba(${b})`;
    }
}

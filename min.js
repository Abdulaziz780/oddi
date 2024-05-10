let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let number = document.querySelector('.number')

let Num = 0

    let nmadur = () => {
    number.innerHTML = Num
}

minus.addEventListener("click", () =>{
    --Num
    nmadur()
});

plus.addEventListener("click", () =>{
    ++Num
    nmadur()
});
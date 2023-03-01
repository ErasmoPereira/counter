//inicial da conta
let count = 0;

// Ao selecionar os botões
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++
        }
        else (styles.contains("reset"), count = 0)
        value.textContent = count;

    })
})
var switchInput = document.getElementById("switch-input")
switchInput.addEventListener("change",function(e){
    if(e.target.checked){
        document.body.classList.add("dark");
    }else{
        document.body.classList.remove("dark");
    }
});
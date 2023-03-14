
function register(){
    const uInput = document.querySelector("#uInput").value
    const pInput = document.querySelector("#pInput").value
    const pInput2 = document.querySelector("#pInput2").value
    if(uInput=="" || pInput=="" || pInput2==""){
        const error = document.querySelector("#error")
        error.innerHTML = `
            YOU MUST FILL ALL THE BLANKS TO PROCEED
        `
    } else if(pInput2!==pInput){
        const error = document.querySelector("#error")
        error.innerHTML = `
            YOUR PASSWORDS MUST MATCH!
        `
    } else if(uInput!== "" && pInput!== "" && pInput2==pInput){
        swal.fire({
            title: "Welcome",
            text: uInput,
            icon: "success",
            confirmbuttontext: "Ok"
        })
        const error = document.querySelector("#error")
        error.innerHTML = `
            
        `
        localStorage.setItem(uInput, pInput2)
        sessionStorage.setItem(uInput, pInput2)
        setTimeout(()=>{
            window.location = `../index.html`
        },  5000)
    }
}

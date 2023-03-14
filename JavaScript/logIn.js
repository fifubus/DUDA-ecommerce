
function login(){
    const uInput = document.querySelector("#uInput").value
    const pInput = document.querySelector("#pInput").value
    if(uInput=="" || pInput==""){
        const error = document.querySelector("#error")
        error.innerHTML = `
            YOU MUST FILL ALL THE BLANKS TO PROCEED
        `
    } else if(asd){
        swal.fire({
            title: "Welcome",
            text: uInput,
            icon: "success",
            confirmbuttontext: "Ok"
        })
        const error = document.querySelector("#error")
        error.innerHTML = `
            
        `
        sessionStorage.setItem(uInput, pInput)
        setTimeout(()=>{
            window.location = `../index.html`
        },  5000)
    }
}



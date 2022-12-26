let uname=document.getElementById('uname')
let email=document.getElementById('email')
let password=document.getElementById('password')
let cpassword=document.getElementById('cpassword')
let tandc=document.getElementById('tc')
let form=document.getElementById('form')
form.addEventListener('submit',(e)=>{
e.preventDefault()
validate()
})
function validate() { 
    let unameValue=uname.value.trim()
    console.log(unameValue);
    let emailValue=email.value.trim()
    let passwordValue=password.value.trim()
    let cpasswordValue=cpassword.value.trim()
    let tandcValue=tandc.value.trim()

    // uname
    if (unameValue==='') {
        setError(uname,'username cant be empty')
    }
    else if (unameValue.length<3) {
        setError(uname,'username is too short')
        
    } else {
        setSuccess(uname)
    }
    // email
    if (emailValue==='') {
        setError(email,'email cant be empty')
    }
    else if (!emailCheck(emailValue)) {
        setError(email,'invalid email')
        
    } else {
        setSuccess(email)
    }
    // passsowrd
    if (passwordValue==='') {
        setError(password,'password cant be empty')
    }
    else if (passwordValue.length<8) {
        setError(password,'password is too short')
        
    } else {
        setSuccess(password)
    }
    // cpasssowod
    if (cpasswordValue==='') {
        setError(cpassword,'cpassword cant be empty')
    }
    else if (cpasswordValue!==passwordValue) {
        setError(cpassword,'cpassword is too short')
        
    } else {
        setSuccess(cpassword)
    }
    // checkbox
if (!tandcValue.checked) {
    setError(tc,'')
}
else{
    setSuccess(tc)
}
    
}
function setError(input,message){
        let parent=input.parentElement
        let small=parent.querySelector('small')
        small.innerText=message
        parent.classList.add('error')
        parent.classList.remove('success')
        
    }
    function setSuccess(input) {
        let parent=input.parentElement
        parent.classList.add('success')
        parent.classList.remove('error')
    }
    function emailCheck(input) {
    let emailReg=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
let valid=emailReg.test(input)
return valid
}

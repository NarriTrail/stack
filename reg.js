const form=document.getElementById("form")
const uname=document.getElementById("uname")
const email=document.getElementById("email")
const password=document.getElementById("password")
const cpassword=document.getElementById("cpassword")
const tandc=document.getElementById("tc")
form.addEventListener('submit',(e)=>{
e.preventDefault()
validate()

})
function validate() {
    // console.log(uname);
    let nameValue=uname.value.trim()
    let emailValue=email.value.trim()
    let passwordValue=password.value.trim()
    let cpasswordValue=cpassword.value.trim()
    let tandcValue=tandc.value.trim()
// username
    if (nameValue==='') {
        setError(uname,'username cant be empty')
    }else if (nameValue.length<3) {
        setError(uname,'username is too short')
        
    } else {
        setSuccess(uname)
    }
// email
if (emailValue==='') {
    setError(email,'email cant be empty')
}else if (!emailCheck(emailValue)) {
    setError(email,' enter a valid email ')
    
} else {
    setSuccess(email)
}
// password
if (passwordValue==='') {
    setError(password,'password cant be empty')
}else if (passwordValue.length<8) {
    setError(password,'password is too short')
    
} else {
    setSuccess(password)
}
// confirm password
if (cpasswordValue==='') {
    setError(cpassword,'password cant be empty')
}else if (cpasswordValue !==passwordValue) {
    setError(cpassword,'password not matched')
    
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
// functions
}
function setError(input,message){
let parent=input.parentElement;
let small=parent.querySelector('small')
small.innerText=message
parent.classList.add('error')
parent.classList.remove('success')
}
function setSuccess(input) {
    let parent=input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}
function emailCheck(input) {
    let emailReg=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
let valid=emailReg.test(input)
return valid
}
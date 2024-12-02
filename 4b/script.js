document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('Form');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const username=document.getElementById('username');
    const ef=document.getElementById('emailFeedback');
    const pf=document.getElementById('passwordFeedback');
    const uf=document.getElementById('usernameFeedback');


email.addEventListener('input',()=>{
    if(email.validity.valid){
        ef.textContent = 'valid email';
        ef.className='valid';
    }else{
        ef.textContent='invalid email';
        ef.className='error';
    }
});


password.addEventListener('input',()=>{
    if(password.value.length>=8){
        pf.textContent = 'Password is valid';
        pf.className='valid';
    }else{
        pf.textContent='Password must be atleast 8 characters';
        pf.className='error';
    }
});


username.addEventListener('input',()=>{
    if(username.value.length>=3){
        uf.textContent = 'Username is good';
        uf.className='valid';
    }else{
        uf.textContent='Username must be atleast 3 characters';
        uf.className='error';
    }
});

form.addEventListener('submit',(event)=>{
    if(!email.validity.valid||password.value.length<8||username.value.length<3){
        event.preventDefault();
        alert("please fill out the form correctly before submitting");
    }
});
});



const signupaFormEL=document.getElementById("singupform")


signupaFormEL.addEventListener('submit',(e)=>{

    e.preventDefault();
    // console.log("Submit Clicked");

    const input1=document.querySelector('#username');
     const input2=document.querySelector('#email');
      const input3=document.querySelector('#password');


      let newUser={
        username:input1.value,
        Email:input2.value,
        PassWord:input3.value

      }

    //   console.log(newUser);

      const singupuser=JSON.parse(localStorage.getItem("user"))||[]
      console.log(singupuser);

      singupuser.push(newUser)
      console.log(singupuser);

          localStorage.setItem("user",JSON.stringify(singupuser));


})
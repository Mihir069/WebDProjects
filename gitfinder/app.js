//initializ Github
const github = new GitHub;

//initialize profile
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup',(e)=>{
    //Get input text
    const userText = e.target.value;

    if(userText !== ''){
        //MAKE HTTP CALL
        github.getUser(userText)
          .then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
            }
            else{
                //show profile
                ui.showProfile(data.profile);
            }
            console.log(data);
          })
        //console.log(userText);
    }
});

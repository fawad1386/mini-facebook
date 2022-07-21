var database=[
    {
        username:"fawad1386",
        password:"123"
    },
    {
        username:"ammad1386",
        password:"1234"
    },
    {
        username:"ali1386",
        password:"12345"
    }
];
var newsFeed=[

    {
        user: "fawad1386",
        timeline:"Hi, Web Developer is here!"
    },
    {
        user: "ammad1386",
        timeline:"Hi, Mobile Developer is here!"
    },
    {
        user: "ali1386",
        timeline:"Hi, Java Developer is here!"
    }
];
var userNamePrompt= prompt("Enter your username: ");
var passwordPrompt=prompt("Enter your password: ");

function userIsValid(userName,passWord){
    for(var i=0;i<database.length;i++){
    if(database[i].username===userName && database[i].password===passWord)
    {
        return true;
    }
}
    return false;
}
function signIn(user,pass)
{
    if(userIsValid(user,pass))
    {
        console.log(newsFeed)
    }
    else {
        alert("Sorry, UserName or Password is incorrect. Try again!")
    }
}
signIn(userNamePrompt,passwordPrompt);

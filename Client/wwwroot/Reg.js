

function setItem(name, surname, username)
{
    window.sessionStorage["Name"] = name;
    window.sessionStorage["Surname"] = surname;
    window.sessionStorage["Username"] = username;
}


function getItem(Username)
{
    return window.sessionStorage[Username];
}

/*
function setItem2(Surname, value)
    {
        window.sessionStorage[Surname] = value;
    }

function setItem3(Username, value)
    {
        window.sessionStorage[Username] = value;
    }

function getItemname(Name)
    {
        return window.sessionStorage[Name];
    }

function getItemsurname(Surname)
    {
        return window.sessionStorage[Surname];
    }

function getItemusername(Username) {
        return window.sessionStorage[Username];
    }
*/
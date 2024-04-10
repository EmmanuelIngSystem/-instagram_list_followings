// variables globales
var list_followings = [];
var ul;

function getContainer()
{
    return document.getElementsByClassName("container_data_following")
}

function addFollowings(array)
{
    for (const [key, value] of Object.entries(array)) {
        list_followings.push(value.querySelector("div a div div span").textContent);
    }
}

function createTitle()
{
    let p = document.createElement("p");
    p.textContent = "Total de personas que estoy siguiendo en isntagram: " + list_followings.length;
    document.body.appendChild(p);
}

function createUl()
{
    ul = document.createElement("ul");
    document.body.appendChild(ul);
}

function insertUlTag()
{
    list_followings.forEach(function(element){
        let li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    });
}

// llamamos a cada funcion respectivamente
addFollowings(getContainer());
createTitle();
createUl();
insertUlTag();
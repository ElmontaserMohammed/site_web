document.getElementById("save").addEventListener("click",function(event)
{
    var vide=false;
    var form=document.getElementById("form");

    for(var i=1;i<form.length-2;i++)
    {
        if(form.elements[i].value === "")
        {
            vide=true;
            form.elements[i].style.border="1px solid Blue";
            
        }
        else
        {
            form.elements[i].style.border="1px solid red";

        }
    }
    if(vide)
    {
        alert("remplir tous les champs!");
        event.preventDefault();

    }

});
document.getElementById("reset").addEventListener("click",function(){

    var form=document.getElementById("form");

    for(var i=1;i<form.length-2;i++)
    {
        
            form.elements[i].style.border="1px solid grey";
    }
   


});

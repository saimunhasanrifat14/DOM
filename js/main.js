// const google = document.links[1];
// google.style.color = "white ";
// google.style.textDecoration = "none";
// google.style.backgroundColor = "black"

// const forms = document.forms[0].children[0].nextElementSibling.previousElementSibling.style.backgroundColor = "red";
// forms.style.backgroundColor = 'red'
// console.log(forms);

// let doc = window.document;
// let allChildren = doc.body.children;
// console.log(allChildren[6].children[1]);


// ---------- js secectors "teg Name", "Id", "Class name"
const h1 = document.getElementsByTagName("h1");
Array.from(h1).forEach((item, index)=> {
    console.log(item, index);
    if(index % 2 == 0){
        item.style.background = "green";
    }else{
        item.style.background = "red";
    }
    
})


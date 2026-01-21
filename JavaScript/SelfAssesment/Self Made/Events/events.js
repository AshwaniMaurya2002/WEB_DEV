let h1Tag=document.createElement("h1")
h1Tag.textContent="hello"
h1Tag.style.backgroundColor="cyan"
h1Tag.style.textAlign="center"
h1Tag.style.border="solid"
h1Tag.style.borderWidth="10px"
h1Tag.style.padding="20px"
h1Tag.style.marginTop="50%"



let pTag=document.createElement("p")
pTag.innerHTML="loream"
console.log(h1Tag);
document.body.appendChild(h1Tag)

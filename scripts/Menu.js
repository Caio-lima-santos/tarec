

    function insertAfter(newElement,reference){
        reference.parentNode.insertBefore(newElement, reference.nextSibling);

    }

   




function create_comp(width,height,colums,name,labelN){
    
   var estado;
   var labelD=labelN;

   const input=document.createElement("input")
   const divM=document.createElement("div")

    const button=document.createElement("button")
   
    
    button.textContent=name

    const div=document.createElement("div");
    const divL=document.createElement("div")
    divL.style.width="80px"

    div.style.width=width
    div.style.height=height
    div.className="div"

    const labels=[]
    for(let i=0;i<colums;i++){
    labels[i]=document.createElement("a");

    labels[i].textContent=labelN[i] ==null ? "  label "+i :labelN[i]
    labels[i].className="labels"
    
    labels[i].href=" "
    divL.appendChild(labels[i])
    }

    button.addEventListener("click",()=>{

        if(estado){
            
   div.appendChild(divL)
   insertAfter(input,button)
   insertAfter(div,input);
   estado=false
        }else{
      input.remove()
      div.remove()
      estado=true
        }

    })

    divM.appendChild(button)
   
    document.body.appendChild(divM)
    var apended={input,divM,button}
    let obj={apended,div,labels,labelD,estado}
    return obj
}




function inputProcure(menu){
    

menu.apended.input.addEventListener("input",()=>{




    var found_label=menu.labelD.find((pr)=>{
        var i=`${menu.apended.input.value}`
            let regex= new RegExp(i,'')

       
        return pr.match(regex)
       
        })
menu.labels[0].textContent= found_label? found_label: ""//limpa(menu,true)

for(var i=0;i<menu.labels.lenght;i++){
    menu.labels[i].remove()

}
console.log(found_label)
})
}


export {create_comp,insertAfter,inputProcure}
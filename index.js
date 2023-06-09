
 let myLeads=[]

 const inputEl = document.getElementById("input-el")
 const buttonEl=document.getElementById("input-button")
 const ulEl =document.getElementById("ul-el")
 const deleteBtn=document.getElementById("delete-button")
 const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
 const tabBtn=document.getElementById("save-tab")
     console.log(leadsFromLocalStorage)

     if (leadsFromLocalStorage){
        myLeads=leadsFromLocalStorage
        render(myLeads)
     }   
  tabBtn.addEventListener("click", function(){    
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)  //url must be small
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
              render(myLeads)
          })
      })

  function render(Leads){
  let item="" //next best way
  for(let i=0; i<Leads.length; i++){ //next best way
            
            item+= `<li> 
              <a target='_blank' href=' ${Leads[i]}' >  
              ${Leads[i]}
              </a>   
                   </li>` 
          }
          ulEl.innerHTML=item //next best
          
          }
          
         
     
   deleteBtn.addEventListener("dblclick",function(){
   console.log("double clicked");
   localStorage.clear()
   myLeads=[]
   render(myLeads)
     })

    buttonEl.addEventListener('click',function(){ //when button is clicked this event will fire
        
        myLeads.push(inputEl.value)  // here inputed value by user is stored inside array name myLeads
        inputEl.value=""
       
        localStorage.setItem("myLeads",JSON.stringify(myLeads)) //here it takes value from myLeads (value that is given by user) and converts into string using stringify and stores in local storage
        render(myLeads)
        //to verify it works
     //    console.log(localStorage.getItem("myLeads")) //here it takes value and displays in console
        }) 

       

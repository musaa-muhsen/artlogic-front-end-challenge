
const dataFunc = async () => {
    try {
        const response = await fetch(`http://localhost:3333/api/`);
        const json = await response.json();
        console.log(json.rows);  
        formatData(json.rows);
    } catch(err) {
        console.log(err)
    }
  }
  
  dataFunc();

  

  // button and panel 
function formatData(data) {
    
    for (let i = 0; i < data.length; i++) {

        let d = data[i]
        
        const btn = document.createElement('BUTTON');
        btn.classList.add('accordian-btn');
        btn.innerHTML = (parseInt(i)+1)+ '. ' + d.title; // number and title
        document.getElementById('accordian-wrapper').appendChild(btn);
       
        const panelDiv = document.createElement("div");
        const panelP = document.createElement('p');
        const textNode = document.createTextNode(d.content);
        panelP.appendChild(textNode)
        panelDiv.appendChild(panelP)
        console.log(panelP)
        panelDiv.classList.add('panel');
        document.getElementById('accordian-wrapper').appendChild(panelDiv);

        //btn.insertBefore()    
    }
    // so we need a closure
    let buttons = document.querySelectorAll(".accordian-btn");
  
   const buttonsArr = Array.from(buttons)
   //console.log(buttonsArr);
    for (let i = 0; i < buttonsArr.length; i++) {
        buttonsArr[i].addEventListener('click', function(e) {
            e.preventDefault;
            const currentlyActiveAccordionItemHeader = document.querySelector('.accordian-btn.active'); // so we are selecting the accordion item header which currently has the class active 
            if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== this) {
              //is header active and also want to check if it's different to the clicked element 
                 currentlyActiveAccordionItemHeader.classList.toggle('active'); // remove class active
                 currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = null;
            }

            this.classList.toggle("active");
            let currentBtnPanel = this.nextElementSibling;
            if (currentBtnPanel .style.maxHeight) { 
                currentBtnPanel .style.maxHeight = null; 
              } else {
                currentBtnPanel.style.maxHeight = currentBtnPanel.scrollHeight + "px";
              } 
        });
    }
}


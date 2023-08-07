// Code Here
// API Link: -https://test-data-gules.vercel.app/data.json

//dark and light hteme
var themeicon = document.getElementsByClassName('sunicon')[0];
themeicon.onclick = function(){
   document.body.classList.toggle('light');
   if(themeicon.classList.contains('fa-sun')){
      themeicon.classList.remove('fa-sun');
      themeicon.classList.remove('fa-regular');
      themeicon.classList.add('fa-solid');
      themeicon.classList.add('fa-moon');
   }
   else{
      themeicon.classList.add('fa-sun');
      themeicon.classList.add('fa-regular');
      themeicon.classList.remove('fa-solid');
      themeicon.classList.remove('fa-moon');
   }
}


var savedquestion = []; var noofquestionsdone=0; var total=0;



async function fetchQuestionDetailsJSON() {
  const response = await fetch('https://test-data-gules.vercel.app/data.json');
  const wholedata = await response.json();
  const {data} = wholedata;
  return data;
}

fetchQuestionDetailsJSON().then(listofques => {
    var temp=1;
 listofques.forEach(user => {
    const e1 = document.createElement('div');
    e1.classList.add('c');
    const tempp='faq-' + temp;
    const inp=document.createElement('input');
    inp.setAttribute('type', 'checkbox');
    inp.setAttribute('id', tempp);
    inp.classList.add('onlyforthis')
    e1.appendChild(inp);

    const hone = document.createElement('h1');
    const label = document.createElement('label');
    label.classList.add('onlyforhis')
    
   
    label.setAttribute('for', tempp);
    const parag = document.createElement('p');
    parag.classList.add(tempp)
    const text = document.createTextNode(temp+". "+user.title);
    parag.appendChild(text);
    label.appendChild(parag);
    hone.appendChild(label);
    e1.appendChild(hone);

    const deev = document.createElement('div');
    deev.classList.add('p');

  
    
    
    
    const content = document.createElement('p');
    
    const leest=document.createElement('div'); leest.classList.add('leest');
    content.appendChild(leest);

    const centerbring = document.createElement('div'); centerbring.classList.add('centerbring');
    leest.appendChild(centerbring);

    const stronger = document.createElement('strong'); stronger.classList.add('stronger');
    const titlee =document.createTextNode("List of questions with links");
   stronger.appendChild(titlee);

   centerbring.appendChild(stronger);

   deev.appendChild(content);
   e1.appendChild(deev);


   const ol = document.createElement('ol'); 
   var temp2=1;
   total+=user.ques.length;
   
   //console.log(total);
   user.ques.forEach((questions)=>{
     

      
      const {id, p1_link, p2_link, tags,title,yt_link} = questions;
     
      const li = document.createElement('li');
      const strongg = document.createElement('strong'); strongg.classList.add('strongg'); strongg.classList.add('key-'+temp2);
      strongg.appendChild(document.createTextNode(title));
      const inpu = document.createElement('input');
      inpu.classList.add('forprogressbar')
      inpu.setAttribute('type', 'checkbox'); inpu.setAttribute('id', 'faq-'+temp+'faaq-' + temp2); 
      inpu.setAttribute('onclick', 'progress_bar()');
      const labe = document.createElement('label'); labe.setAttribute('for', 'faq-'+temp+'faaq-' + temp2);
      li.appendChild(inpu);
      li.appendChild(labe);
      labe.appendChild(strongg);


      const para = document.createElement('p');
      if(tags!=0){
      para.appendChild(document.createTextNode("Tags: " + tags));
   para.appendChild(document.createElement('hr'))}
      if(yt_link !=0){
         const ytlogo = document.createElement('i');
         ytlogo.classList.add('fa-brands'); ytlogo.classList.add('fa-youtube');  ytlogo.classList.add('fa-xl');
         const anchor = document.createElement('a');
         anchor.setAttribute('href', yt_link);
         anchor.appendChild(ytlogo);
         para.appendChild(document.createTextNode("YouTube: "));
         para.appendChild(anchor)
         para.appendChild(document.createElement('hr'))

        
         //para.appendChild(document.createTextNode("YouTube: " + yt_link));  para.appendChild(ytlogo)
      }
      if(p1_link !=null){
         const p1logo = document.createElement('i');
         p1logo.classList.add('fa-solid'); p1logo.classList.add('fa-terminal');  p1logo.classList.add('fa-xl');
         const anchor = document.createElement('a');
         anchor.setAttribute('href', p1_link);
         anchor.appendChild(p1logo);
         para.appendChild(document.createTextNode("Platform Link: "));
         para.appendChild(anchor)
         para.appendChild(document.createElement('hr'))

        
         //para.appendChild(document.createTextNode("YouTube: " + yt_link));  para.appendChild(ytlogo)
      }
      if(p2_link !=null){
         const p2logo = document.createElement('i');
         p2logo.classList.add('fa-solid'); p2logo.classList.add('fa-terminal');  p2logo.classList.add('fa-xl');
         const anchor = document.createElement('a');
         anchor.setAttribute('href', p2_link);
         anchor.appendChild(p2logo);
         para.appendChild(document.createTextNode("Platform Link: "));
         para.appendChild(anchor)
         para.appendChild(document.createElement('hr'))

        
         //para.appendChild(document.createTextNode("YouTube: " + yt_link));  para.appendChild(ytlogo)
      }
     

      labe.appendChild(para);
      li.appendChild(labe);
      
   

      
      ol.appendChild(li);
      temp2++;
   });
   leest.appendChild(ol);
   
  

    
    temp++;
    
    document.getElementsByClassName('accordion')[0].appendChild(e1)
   
 })
 const progbar = document.createElement('h1');
   progbar.classList.add('toggle');
   
   const strifng = "Number of questions attempted: " + noofquestionsdone + " out of " + total;
   progbar.appendChild(document.createTextNode(strifng));
   document.getElementById('progressbar').appendChild(progbar);

});

function search_question() {
   let input = document.getElementById('searchbar').value
   input=input.toLowerCase();
   let x = document.getElementsByClassName('strongg');
     
   for (i = 0; i < x.length; i++) { 
       if (!x[i].innerHTML.toLowerCase().includes(input) || input==="") {
           x[i].style.background='none';
       }
       else {
         x[i].style.background='yellow';                 
       }
   }
}



function progress_bar(){
   noofquestionsdone=0;
   var inpt = document.getElementsByClassName('forprogressbar');
  for(var i=0;i<inpt.length;i++){
   if(inpt[i].checked) {noofquestionsdone++;}}
      document.getElementsByClassName('toggle')[0].remove();
      const progbar = document.createElement('h1');
progbar.classList.add('toggle');
const percentage = noofquestionsdone/total * 100;
const strifng = "Number of questions attempted: " + noofquestionsdone + " out of " + total + " ("+percentage+"% )";
progbar.appendChild(document.createTextNode(strifng));
document.getElementById('progressbar').appendChild(progbar);

   }
  
var whichques=1;

document.addEventListener('keyup', (e)=>{
   if(e.keyCode===78){
      const allques = document.getElementsByClassName('strongg');
      for(var i=0;i<allques.length;i++){
         allques[i].style.background='';
      }
      const classofques="key-"+whichques;
      const questions = document.getElementsByClassName(classofques);
      for(var i=0;i<questions.length;i++){
         questions[i].style.background='orange'
      }
      whichques++;
   }
   else if(e.keyCode===80){
      console.log('p pressed');
      whichques--;
      if(whichques>=1){
    const allques = document.getElementsByClassName('strongg');
      for(var i=0;i<allques.length;i++){
         allques[i].style.background='';
      }
      const classofques="key-"+whichques;
      const questions = document.getElementsByClassName(classofques);
      for(var i=0;i<questions.length;i++){
         questions[i].style.background='orange'
      }
   }
   }
   
})



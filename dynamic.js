function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.education);
  skills(data.skills);
  hobbies(data.hobbies);
})
var get=document.querySelector(".get");
function profile(p) {
  var image=document.createElement("img");
  image.src=p.image;
  get.append(image);
  var h2=document.createElement("h2");
  h2.textContent=p.name;
  get.append(h2);
  var h3=document.createElement("h3");
  h3.textContent=p.Desig;
  get.append(h3);
  var h4=document.createElement("h4");
  h4.textContent=p.mobile;
  get.append(h4);
  var h5=document.createElement("h5");
  h5.textContent=p.email;
  get.append(h5);
}
var pan=document.querySelector(".pan");
function career(c){
  var h1=document.createElement("h1");
  h1.textContent="Career Objective";
  pan.append(h1);
  var hr=document.createElement("hr");
  pan.append(hr);
  var pr=document.createElement("pr");
  pr.textContent=c.info;
  pan.append(pr);
}
// EducationalDetails
var pan=document.querySelector(".pan");
function education(e){
  var h1=document.createElement("h1");
  h1.textContent="Educational Details";
  pan.append(h1);
  var hr=document.createElement("hr");
  pan.append(hr);
  var table=document.createElement("table");
  table.border="2";
  var tr1="<tr><th>sno</th><th>institute</th><th>percentage</th><th>Qualification</th></tr>";
  var tr2="";
  for(i=0;i<e.length;i++){
    tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].institute+"</td><td>"+e[i].percentage+"</td><td>"+e[i].qualification+"</td></tr>";
  }
  table.innerHTML=tr1+tr2;
  // table.textContent="tr1+tr2";
  pan.append(table);
  }
  var pan=document.querySelector(".pan");
  function skills(s){
    var h1=document.createElement("h1");
    h1.textContent="Skills";
    pan.append(h1);
    var hr=document.createElement("hr");
    pan.append(hr);
    var ul=document.createElement("ul");
    for(var i in s){
      var li=document.createElement("li");
      li.innerHTML=s[i].name+":"+s[i].info;
      ul.append(li);
    }
    pan.append(ul);
    }

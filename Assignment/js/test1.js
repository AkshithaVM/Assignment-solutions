
var ele=document.getElementById('forms');
ele.onclick= function() {
    var pipelineName=document.getElementById("pipeline").value;
    var projectName=document.getElementById("project").value;
    var bucketName=document.getElementById("bucket").value;
    var cloudFile=document.getElementById("cloud").value;
    var credentials=document.getElementById("credent").value;
    var run=document.forms.getElementById("runn").value;
  
    if(checkValidation(pipelineName)==1)
      alert("Length should be minimum 5");
    else if(checkValidation(pipelineName)==2)
      alert("cannot start with that letter");
    else if(checkValidation(pipelineName)==3)
      alert("special  character not allowed");

      
    if(checkValidation(projectName)==1)
      alert("Length should be minimum 5");
    else if(checkValidation(projectName)==2)
      alert("cannot start with that letter");
    else if(checkValidation(projectName)==3)
      alert("special  character not allowed");

      if(checkValidation(bucketName)==1)
      alert("Length should be minimum 5");
    else if(checkValidation(bucketName)==2)
      alert("cannot start with that letter");
    else if(checkValidation(bucketName)==3)
      alert("special  character not allowed");

      if(checkValidation(cloudFile)==1)
      alert("Length should be minimum 5");
    else if(checkValidation(cloudFile)==2)
      alert("cannot start with that letter");
    else if(checkValidation(cloudFile)==3)
      alert("special  character not allowed");
     
      if(checkValidation(credentials)==1)
      alert("Length should be minimum 5");
    else if(checkValidation(credentials)==2)
      alert("cannot start with that letter");
    else if(checkValidation(credentials)==3)
      alert("special  character not allowed");
      
      if(checkValidation(run)==1)
      alert("Length should be minimum 5");
    else if(checkValidation(run)==2)
      alert("cannot start with that letter");
    else if(checkValidation(run)==3)
      alert("special  character not allowed");


}

function checkValidation(name){
    if(name.length<5)
      return 1;
    if(name[0]=='+' || name[0]=='-' || name[0]=='_')
      return 2;
    if(/[^a-zA-Z0-9\-\/]/.test(name))
      return 3;
   return 0;
}
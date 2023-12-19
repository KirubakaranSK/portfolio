
// validation

var form = document.getElementById("form");

var ename = document.getElementById("ename");

var email = document.getElementById("email")

var msg = document.getElementById("msg");


form.addEventListener('submit',(e) => {

    e.preventDefault();
    validate()
    
})

function validate(){
    
    var count=0;

    var nameval = ename.value.trim();

    var emailval = email.value.trim();

    var msgval = msg.value.trim();

    if(nameval == '' || nameval == null){
        count-=1;
        seterror(ename,'*name is required');
    }
    else{
        count+=1;
        setsuccess(ename);
    }

    if(emailval === ''){
        count -=1;
        seterror(email,'*email is required')
    }
    else if(!ValidateEmail(emailval)){
        count -=1;
        seterror(email,'*enter the valid email');
    }
    else{
        count+=1;
        setsuccess(email);
    }

    if(msgval == '' || msgval == null){
        count-=1;
        seterror(msg,'*message is required');
        
    }
    else{
        count+=1;
        setsuccess(msg);
        
    }
    console.log(count);

    if(count == 3 )
        list()
}

function list(){
    document.getElementById("con_img").id='con_icon'
}

function seterror(e,msg){
    var inner = e.parentElement;
    var error = inner.querySelector('.errors');
    error.innerText = msg;
    inner.classList.add('error');
    inner.classList.remove('success');
}

function setsuccess(e){
    var inner = e.parentElement;
    var error = inner.querySelector('.errors');
    error.innerText = '';
    inner.classList.add('success');
    inner.classList.remove('error');
}

function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
  {
    return (true);
  }
    return (false);
}

// contas us in sheet refer link https://www.apispreadsheets.com/tutorials/save-web-form-data.html
function SubForm (){
    if(count == 3 ){
        $.ajax({
            url:'https://api.apispreadsheets.com/data/W93bAfOLvdtNKQm6/',
            type:'post',
            data:$("#form").serializeArray(),
            success: function(){
              alert("Form Data Submitted :)")
            },
            error: function(){
              alert("There was an error :(")
            }
        });
    }
    
}

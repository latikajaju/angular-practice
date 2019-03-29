console.log(console)
console.log(document)
/*console.log(document.getElementById('android'))
document.getElementById('android').style.border = '1px solid red'

document.getElementById()
function popDv(val, dv){ 
   dv.innerHTML = val
}
*/


function add(text1,text2)
    {
        return(text1+text2);
    }
function sub(text1,text2)
    {
        return(text1-text2);
    }
function mul(text1,text2)
    {
        return(text1*text2);
    }    
function div(text1,text2)
    {
        return(text1/text2);
    }    

function calculations(){
    let a = parseFloat(document.getElementById("text1").value);
    let b = parseFloat(document.getElementById("text2").value);
   // var c = document.getElementById("result").value;
    var dropdownOption = document.getElementById("dropdownId").value;

    switch(dropdownOption)
    {
        case '1': c = add(a,b);
                break;

        case '2': c = sub(a,b);
                break;

        case '3': c = mul(a,b);
                break;
        
        case '4': c = div(a,b);
                break;
            
        default: c = "don't know...";
    }
    document.getElementById("result").value = c;
}
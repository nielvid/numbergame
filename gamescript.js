function generateRandomNum(number){

    number = document.getElementById('number').value;
    if(number ==""){
        let  errorbox = document.getElementById('error')
        errorbox.textContent = 'Enter a valid number'

        setTimeout((function(){ location.reload()}
        ), 1000)
    }else{

        console.log(number) 

    let ans = Math.fround(Math.random()*8)
    //console.log(ans)
 
    let san = ans.toFixed(3)
    //console.log(san)
 
    let regex = /\./g
    let nas = san.replace(regex, '')
    //console.log(nas)
    
    
 
 let show = document.getElementsByTagName('span')
 
 show[0].style.backgroundColor = 'black'

show[1].style.backgroundColor = 'green'
show[2].style.backgroundColor = 'blue'
show[3].style.backgroundColor = 'red'


 show[0].innerHTML = nas[0]
 show[1].innerHTML = nas[1]
 show[2].innerHTML = nas[2]
 show[3].innerHTML = nas[3]
}
 
}
 let btn = document.getElementById('btn')
 
 btn.addEventListener('click', generateRandomNum)

 
   
 
 
window.onload=function(){
    let bin=document.getElementById('binid')
    let bot=document.getElementById('bnt')
    let dec=document.getElementById('dec')
    let binval
    let arraybin=[]
    let actualbin
    let sum=0


    bin.oninput=function(){
        binval=bin.value
        arraybin=binval.split('')
        arraybin.reverse()
        bot.onclick=function(){
            sum=0
            arraybin.forEach((index,arraybin) => {
                actualbin=index*(Math.pow(2,arraybin))
                sum+=actualbin
                dec.value=sum
            });
            
        }
    }  
}





    



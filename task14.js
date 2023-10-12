num=prompt(parseInt("ededi daxil edin"))
sum=0
sum1=0
for(let i=0;i<num.length;i++){
    if(i%2==0){
        sum+=parseInt(num[i])
    }
    else if  (i%2==1){
        sum1+=parseInt(num[i])
    }
}
console.log(sum*sum1);
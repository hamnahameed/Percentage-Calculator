function calculate(){
    let sub1=parseInt(document.querySelector("#sub1").value)
    let total1=parseInt(document.querySelector("#tot1").value)

    let sub2=parseInt(document.querySelector("#sub2").value)
    let total2=parseInt(document.querySelector("#tot2").value)

    let sub3=parseInt(document.querySelector("#sub3").value)
    let total3=parseInt(document.querySelector("#tot3").value)


    let total=total1+total2+total3

    let subjects=sub1+sub2+sub3

    let result=subjects/total*100

    document.querySelector("#per").value=`${result.toFixed(2)} % ` //ES6

    //grade
    if(result>=80){
        document.querySelector("#grade").value=`A+`;
        document.querySelector("#remark").value=`Brilliant`
    }
    else if (result>=70) {
      document.querySelector("#grade").value=` A`;
      document.querySelector("#remark").value=`Excellent`
      
    } else if(result>=60){
      document.querySelector("#grade").value=`B`;
      document.querySelector("#remark").value=`Good efforts`
    }
    else if(result>=50){
      document.querySelector("#grade").value=`C`;
      document.querySelector("#remark").value=`You can try more`
    }
    else if(result>=40){
      document.querySelector("#grade").value=`D`;
      document.querySelector("#remark").value=`Needs Hardwork`
    }
    else{
        document.querySelector("#grade").value=`Fail`;
        document.querySelector("#remark").value=`Better luck next time, try more`
    }
}
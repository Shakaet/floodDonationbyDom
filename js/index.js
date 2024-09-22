
document.getElementById("first-btn").addEventListener("click",function(){



   

    let main_amount =document.getElementById("main-amount").innerText
    let main_amount_f =parseFloat(main_amount)

    let first_input=document.getElementById("first-input").value

    let first_input_N =parseFloat(first_input)

    let first_donate=document.getElementById("first-donate").innerText

    let first_donate_N=parseFloat(first_donate)

    if(first_input_N <=0 || isNaN(first_input_N)){

        alert("Please give here a valid input")
        return
    }

    let sum_f= first_input_N+first_donate_N

    document.getElementById("first-donate").innerText=sum_f

    let new_main_amount= main_amount_f-sum_f

    document.getElementById("main-amount").innerText=new_main_amount



    


})



document.getElementById("sec-btn").addEventListener("click",function(){



   

    let main_amount =document.getElementById("main-amount").innerText
    let main_amount_f =parseFloat(main_amount)

    let sec_input=document.getElementById("sec-input").value

    let sec_input_N =parseFloat(sec_input)

    let sec_donate=document.getElementById("sec-donate").innerText

    let sec_donate_N=parseFloat(sec_donate)

    if(sec_input_N <=0 || isNaN(sec_input_N)){

        alert("Please give here a valid input")
        return
    }

    let sum_f_2= sec_input_N+sec_donate_N

    document.getElementById("sec-donate").innerText=sum_f_2

    let new_main_amount_2= main_amount_f-sum_f_2

    document.getElementById("main-amount").innerText=new_main_amount_2



    


})



document.getElementById("th-btn").addEventListener("click",function(){



   

    let main_amount =document.getElementById("main-amount").innerText
    let main_amount_f =parseFloat(main_amount)

    let th_input=document.getElementById("th-input").value

    let th_input_N =parseFloat(th_input)

    let th_donate=document.getElementById("th-donate").innerText

    let th_donate_N=parseFloat(th_donate)

    if(th_input_N <=0 || isNaN(th_input_N)){

        alert("Please give here a valid input")
        return
    }

    let sum_f_3= th_input_N+th_donate_N

    document.getElementById("th-donate").innerText=sum_f_3

    let new_main_amount_3= main_amount_f-sum_f_3

    document.getElementById("main-amount").innerText=new_main_amount_3



    


})
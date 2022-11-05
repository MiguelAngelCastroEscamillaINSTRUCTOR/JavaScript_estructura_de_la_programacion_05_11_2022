addEventListener("DOMContentLoaded", (e)=>{

   $edad = 17; 

    if($edad==18){ //si
        console.log("Usted cumplio la mayoria de edad");
    }else if($edad>=20 && $edad<=30){ // sino
        console.log("Usted es una persona adulta joven");
    }else{ //no
        if($edad==19){
            console.log("Usted es mayor de edad");
        }else{
            console.log("....");
        }
    }
    


})
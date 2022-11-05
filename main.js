addEventListener("DOMContentLoaded", (e)=>{

   $edad = 18; 

    if($edad==18){ //si
        console.log("Usted cumplio la mayoria de edad");
        console.log(":)");
    }else if($edad>=20 && $edad<=30){ // sino
        console.log("Usted es una persona adulta joven");
    }else{ //no
        if($edad==19){
            console.log("Usted es mayor de edad");
        }else{
            console.log("....");
        }
    }
    
    let fn = ()=>{ 
        console.warn("Usted cumplio la mayoria de edad");
        return ":)";
    }
    $res = ($edad==18) ? fn()
           :($edad>=20 && $edad<=30)? "Usted es una persona adulta joven"
           :($edad==19) ? "Usted es mayor de edad"
           : "....";
    
    console.warn($res)


})
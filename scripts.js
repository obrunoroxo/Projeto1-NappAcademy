// // while loop

// x = 0;

// while(x < 11){
//     document.write("<br/> O Valor de X é: " + x);
//     x++;
// }

// x = 16;

// document.write("<br/> <br/> O X está valendo: " + x + "<br/>");

// // for loop 

// for(a = 0; a < x; a++){

//     document.write("<br/> O Valor de A é: " + a);

// }

// Switch

document.write("</br> Escolha seu pedido: <br/>")
document.write("</br> 0 - Sorvete | 1 - Suco <br/>")
document.write("</br> 2 - Refrigerente | 3 - Agua gelada <br/>")
document.write("</br> 4 - P.P. | 5 - P.G. <br/><br/>")

function pedir() {
    x = prompt("O que deseja pedir?");

    switch (x) {

        case "0":
            alert("Você pediu sorvete!")
            break; //Colocado para executar somente esse case.

        case "1":
            alert("Você pediu suco!")
            break;

        case "2":
            alert("Você pediu refrigerente!")
            break;

        case "3":
            alert("Você pediu água gelada!")
            break;

        case "4":
            alert("Você pediu um pau tamanho pequeno!")
            break;

        case "5":
            alert("Você pediu um pau tamanho grande!")
            break;

        default:
            alert("Ops, não temos essa opcão!")
            break;
    }

}
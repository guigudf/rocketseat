/*

90 ~ 100 => SS
70 ~ 89  => MS
50 ~ 69  => MM
30 ~ 49  => MI
0  ~ 19  => II

*/




const mencao = function(aluno, nota){
    var nome = document.getElementById(aluno).value;
	var score = parseInt(document.getElementById(nota).value);
    var mencao = "error" 

    switch (true) {
        case (score >= 90 && score <= 100) :
            mencao = "SS"
            break;
        
        case (score >= 70 && score <= 89):
            mencao = "MS"
            break;
        
        case (score >= 50 && score <= 69):
            mencao = "MM"
            break;

        case (score >= 30 && score <= 49):
            mencao = "MI"
            break;
        
        case (score >= 0 && score <= 29):
            mencao = "II"
            break;
        
        default:
            mencao = "error" 
    }
    if (mencao=="error"){
        document.write("Menção não pôde ser calculada.");
    }
    else{
        document.write('O aluno ' + nome.toUpperCase() + ' teve menção: ' + mencao)
    }
}

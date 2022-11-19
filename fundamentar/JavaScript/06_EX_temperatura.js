function transformTemp(transformar){
    var temperature = document.getElementById(transformar).value;
    const isCelsius = temperature.toUpperCase().includes('C')
    const isFahrenheit = temperature.toUpperCase().includes('F')
    let temp = 0

    if(isCelsius){
        let numberTemp = Number(temperature.toUpperCase().replace('C', ""))
        temp = numberTemp * (9/5) + 32 
        document.write(temp + 'F')
    }
    else{
        if(isFahrenheit){
            let numberTemp = Number(temperature.toUpperCase().replace('F', ""))
            temp = (numberTemp - 32) * (5/9) 
            document.write(temp + 'C')
        }
        else{
            document.write('Grau não identificado <br> Coloque apenas C para celsius ou F para Fahrenheit')
        } 
    }

    
}

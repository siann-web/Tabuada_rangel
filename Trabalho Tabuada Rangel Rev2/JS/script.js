import {rbs_numbers, rbs_operations, rbs_result, rbs_clear, rbs_display, rbs_deleteLast, rbs_DisplayResult} from './QuerySelector.js';

rbs_numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if(rbs_display.textContent === "0"){
            rbs_display.textContent = "";
        }
        rbs_display.textContent += number.textContent;
    });
});    
;
  rbs_operations.forEach((op) => {
    op.addEventListener("click", () => {
        rbs_display.textContent += op.textContent;
    }) 
});

rbs_result.addEventListener("click", () => {
    let rbs_tabuada = "";
    
    let rbs_operationIndice = rbs_display.textContent.indexOf('+');
    if(rbs_operationIndice !== -1){
        let rbs_number = parseInt(rbs_display.textContent.slice(0, rbs_operationIndice));
        for(let i = 1; i <= 10; i++){
            rbs_tabuada += `${parseFloat(rbs_number)} + ${i} = ${rbs_number + i}<br>`;
            rbs_DisplayResult.innerHTML = rbs_tabuada;
        }
    }

    rbs_operationIndice = rbs_display.textContent.indexOf('-');
    if(rbs_operationIndice !== -1){
        let rbs_number = parseInt(rbs_display.textContent.slice(0, rbs_operationIndice));
        for(let i = 1; i <= 10; i++){
            rbs_tabuada += `${parseFloat(rbs_number)} - ${i} = ${rbs_number - i}<br>`;
            rbs_DisplayResult.innerHTML = rbs_tabuada;
        }
    }

    rbs_operationIndice = rbs_display.textContent.indexOf('*');
    if(rbs_operationIndice !== -1){
        let rbs_number = parseInt(rbs_display.textContent.slice(0, rbs_operationIndice));
        for(let i = 1; i <= 10; i++){
            rbs_tabuada += `${parseFloat(rbs_number)} * ${i} = ${rbs_number * i}<br>`;
            rbs_DisplayResult.innerHTML = rbs_tabuada;
        }
    }

    rbs_operationIndice = rbs_display.textContent.indexOf('/');
    if(rbs_operationIndice !== -1){
        let rbs_number = parseInt(rbs_display.textContent.slice(0, rbs_operationIndice));
        for(let i = 1; i <= 10; i++){
            rbs_tabuada += `${parseFloat(rbs_number)} / ${i} = ${rbs_number / i}<br>`;
            rbs_DisplayResult.innerHTML = rbs_tabuada;
        }
    }
});

rbs_clear.addEventListener("click", () => {
    if(rbs_display.textContent !== ""){
        rbs_display.textContent = "";
        rbs_DisplayResult.innerHTML = "0";
    }

});

rbs_deleteLast.addEventListener("click", () => {
    if(rbs_display.textContent !== ""){
        let rbs_clearOne = rbs_display.textContent.length;
        rbs_display.textContent = rbs_display.textContent.slice(0, rbs_clearOne - 1);
    }
});
document.getElementById("calc-ugl").addEventListener("click", handleClickCalcugl);

function handleClickCalcugl(){
  var v_weight = document.getElementById("weight-ugl").value;
  document.getElementById("labcalc").innerHTML = (v_weight * 3).toFixed(1) + " г/д";
}

document.getElementById("calc-fat").addEventListener("click", handleClickCalcfat);

function handleClickCalcfat(){
  var v_weight_fat = document.getElementById("weight-fat").value;
  document.getElementById("labcalc-fat").innerHTML = (v_weight_fat * 1).toFixed(1) + " г/д";
}

document.getElementById("calc-bel").addEventListener("click", handleClickCalcbel);

function handleClickCalcbel(){
  var v_weight_bel = document.getElementById("weight-bel").value;
  document.getElementById("labcalc-bel").innerHTML = (v_weight_bel * 0.8).toFixed(1) + " г/д";
}
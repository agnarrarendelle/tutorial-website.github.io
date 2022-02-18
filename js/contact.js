///////////////////////////////  check if all inputs have been filled below
function isAllInputDone() {
    // an empty input has value of '', so use a variable to store for checking input validation
    const emptyInputs = ''
    // get all input files 
    let allInputFiles = document.getElementsByTagName("input");
    // loop over all input, and return false if any of them is unfilled
    for(let i = 0; i < allInputFiles.length; i++){
        if(allInputFiles[i].value === emptyInputs){
            return false
        }
    }
    // get all text area
    let allTextAreaInputs = document.getElementsByTagName("textarea")
    // loop over all text area, and return false if any of them is unfilled
    for(let i = 0; i < allTextAreaInputs.length; i++){
        if(allTextAreaInputs[i].value === emptyInputs){
            return false
        }
    }
    // return true if all files have been filled
    return true
}
///////////////////////////////


/////////////////////////////// check if all inputs have been filled ends
function checkValidation() {
    // get the validation message
    let validationMessage = document.getElementById("check-validation")
    //display the validation message if any of the field is unfilled
    if(!isAllInputDone()){
        validationMessage.style.display = 'block'
    }else{
        validationMessage.style.display = 'none'
    }
}
///////////////////////////////
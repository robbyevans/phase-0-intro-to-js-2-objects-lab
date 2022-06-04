// Write your solution in this file!
let employee={
    name:'robby',
    streetAddress:'7528-Eldoret',
}

function  updateEmployeeWithKeyAndValue(employee,key,value){
    return{...employee,[key]:value,}
}
updateEmployeeWithKeyAndValue(employee,'name','Sam')

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,'streetAddress', '11 Broadway')

function deleteFromEmployeeByKey(employee,key){
    let newEmployee={...employee,};
    delete newEmployee[key];
    return newEmployee;
}
deleteFromEmployeeByKey(employee,'name');

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee,'name');
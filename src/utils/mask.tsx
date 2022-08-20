function maskCep(value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  //00000-000
return value;
}
function maskPhone(value:string) {
value = value.replace(/\D/g, "");
value = value.replace(/^(\d{2})(\d)/g, "($1)$2");
value = value.replace(/(\d{1})(\d{4})(\d{4})$/, "$1 $2-$3");
  //(00) 99999-9999
return value;
}
function maskCurrency(value:string) {
value = value.replace(/\D/g, "");
value = value.replace(/(\d)(\d{2})$/, "$1,$2");
value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  //23,00
return value;
}
export {
maskCep,
maskPhone,
maskCurrency
};
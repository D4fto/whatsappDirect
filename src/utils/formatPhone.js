export default function formatPhone(str){
  // Mantém só números
  let digits = str.replace(/\D/g, '');
  
  // Se estiver vazio mantém vazio
  if (digits.length === 0) return '';
  
  // Se tiver menos que 3 digitos (xx
  if (digits.length <= 2) {
    return `(${digits}`;
  }
  
  // Se tiver menos que 7 dígitos (xx) xxxx
  if (digits.length <= 6) {
    return digits.replace(/(\d{2})(\d+)/, '($1) $2');
  }
  
  // Se tiver menos que 11 digitos (xx) xxxx-xxxx
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
  }
  
  // Se tiver 11 digitos ou mais (xx) xxxxx-xxxx
  return digits.slice(0, 11).replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

}
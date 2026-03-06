export function calcularAno(idade, dia, mes) {

  if (!idade || !dia || !mes) return ""

  const hoje = new Date()

  const anoAtual = hoje.getFullYear()
  const mesAtual = hoje.getMonth() + 1
  const diaAtual = hoje.getDate()

  let anoNascimento = anoAtual - idade

  if (mes > mesAtual || (mes == mesAtual && dia > diaAtual)) {
    anoNascimento--
  }

  return anoNascimento
}
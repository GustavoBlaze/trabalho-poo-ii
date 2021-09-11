import { PessoaFisica, PessoaJuridica } from "../classes/imposto-de-renda";

export default function fn() {
  const pessoaFisica = new PessoaFisica("Maria", 10_000, 2000);
  const pessoaJuridica = new PessoaJuridica("Empresa", 400_000, 25);
  console.log({
    "Imposto pessoa física": pessoaFisica.calcularImposto().toFixed(2),
    "Imposto pessoa jurídica": pessoaJuridica.calcularImposto().toFixed(2),
  });
}

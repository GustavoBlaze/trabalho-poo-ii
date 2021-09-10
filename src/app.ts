import Pessoa from "./classes/pessoa";
import Veiculo from "./classes/veiculo";
import Fatura from "./classes/fatura";
import { PessoaFisica, PessoaJuridica } from "./classes/imposto-de-renda";

export function run() {
  /*
   * Questão 1
   */

  const pessoa = new Pessoa("João", "Masculino", 5);
  [15, 18].forEach((n) => Pessoa.verificarIdade(n));

  /*
   * Questão 2
   */

  const veiculo = new Veiculo("Fusca", "Volkswagen", 1998, 250, 30);
  const valorDaLocacao = Veiculo.calcularValorLocacao(250.5, 90);
  console.log("Valor da locacão: ", valorDaLocacao);

  /*
   * Questão 3
   */

  const fatura = new Fatura("12345678912345789", "Fatura de maio", 45, 12.5);
  console.log("Valor total da fatura", fatura.valorTotal);

  /*
   * Questão 4
   */
  const pessoaFisica = new PessoaFisica("Maria", 50_000, 2000);
  const pessoaJuridica = new PessoaJuridica("Empresa", 400_000, 25);

  console.log({
    "Imposto pessoa física": pessoaFisica.calcularImposto().toFixed(2),
    "Imposto pessoa jurídica": pessoaJuridica.calcularImposto().toFixed(2),
  });
}

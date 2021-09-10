import Pessoa from "./classes/pessoa";
import Veiculo from "./classes/veiculo";
import Fatura from "./classes/fatura";
import { PessoaFisica, PessoaJuridica } from "./classes/imposto-de-renda";
import { Vendedor, VendedorPF, VendedorPJ } from "./classes/vendedores";
import IEndereco from "./interfaces/endereco";

export function run() {
  /*
   * Questão 1
   */

  // const pessoa = new Pessoa("João", "Masculino", 5);
  // [15, 18].forEach((n) => Pessoa.verificarIdade(n));

  /*
   * Questão 2
   */

  // const veiculo = new Veiculo("Fusca", "Volkswagen", 1998, 250, 30);
  // const valorDaLocacao = Veiculo.calcularValorLocacao(250.5, 90);
  // console.log("Valor da locacão: ", valorDaLocacao);

  /*
   * Questão 3
   */

  // const fatura = new Fatura("12345678912345789", "Fatura de maio", 45, 12.5);
  // console.log("Valor total da fatura", fatura.valorTotal);

  /*
   * Questão 4
   */

  // const pessoaFisica = new PessoaFisica("Maria", 50_000, 2000);
  // const pessoaJuridica = new PessoaJuridica("Empresa", 400_000, 25);

  // console.log({
  //   "Imposto pessoa física": pessoaFisica.calcularImposto().toFixed(2),
  //   "Imposto pessoa jurídica": pessoaJuridica.calcularImposto().toFixed(2),
  // });

  /*
   * Questão 5
   */

  // const vendedor = new Vendedor("Joao", 2500, 50);
  // console.log({ desconto: vendedor.desconto() });

  // const vendedorPF = new VendedorPF("Maria", 2500, 50, "sul");
  // console.log({
  //   comissao: vendedorPF.calcularComissao(),
  //   salarioTotal: vendedorPF.calcularSalarioTotal(),
  // });

  // const vendedorPJ = new VendedorPJ("Jonatas", 2500, 10000, "Jonatas LTDA", 15);
  // console.log({
  //   comissao: vendedorPJ.calcularComissao(),
  //   salarioTotal: vendedorPJ.calcularSalarioTotal(),
  // });

  /*
   * Questão 6
   */

  const endereco: IEndereco = {
    rua: "Rua dos Bobos",
    numero: "123",
    bairro: "Centro",
    cidade: "São Paulo",
  };

  console.log(endereco);
}

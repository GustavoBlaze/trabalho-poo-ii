import Veiculo from "../classes/veiculo";

export default function fn() {
  const veiculo = new Veiculo("Fusca", "Volkswagen", 2000, 250, 30);
  const valorDaLocacao = Veiculo.calcularValorLocacao(100, 2);
  console.log("Valor da locacão: ", valorDaLocacao);
}

import IEndereco from "../interfaces/endereco";

export default function fn() {
  const endereco: IEndereco = {
    rua: "Rua dos Bobos",
    numero: "123",
    bairro: "Centro",
    cidade: "São Paulo",
  };
  console.log(endereco);
}

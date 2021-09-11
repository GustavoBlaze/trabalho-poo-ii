import Pessoa from "../classes/pessoa";

export default function fn() {
  const pessoa = new Pessoa("João", "Masculino", 18);
  [15, 18].forEach((n) => Pessoa.verificarIdade(n));
}

export default class Pessoa {
  private _nome: string = "";
  private _sexo: string = "";
  private _idade: number = 0;

  static SEXOS = ["Masculino", "Feminino"];

  constructor(nome: string, sexo: string, idade: number) {
    this.nome = nome;
    this.sexo = sexo;
    this.idade = idade;
  }

  public set nome(value: string) {
    if (!value) throw new Error("Nome inválido");

    this._nome = value;
  }

  public get nome() {
    return this.nome;
  }

  public set sexo(value: string) {
    if (!Pessoa.SEXOS.includes(value)) throw new Error("Sexo inválido");

    this._sexo = value;
  }

  public get sexo() {
    return this._sexo;
  }

  public set idade(value: number) {
    if (value <= 0) throw new Error("Idade inválida");

    this._idade = value;
  }

  public get idade() {
    return this._idade;
  }

  static verificarIdade(idade: number) {
    console.log(
      idade >= 18 ? "Pessoa maior de idade" : "Pessoa menor de idade"
    );
  }
}

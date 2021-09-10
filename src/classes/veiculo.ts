export default class Veiculo {
  private _modelo: string = "";
  private _marca: string = "";
  private _ano: number = 0;
  private _valorLocacao: number = 0;
  private _quantidadeDias: number = 0;

  constructor(
    modelo: string,
    marca: string,
    ano: number,
    valorLocacao: number,
    quantidadeDias: number
  ) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.valorLocacao = valorLocacao;
    this.quantidadeDias = quantidadeDias;
  }

  public get modelo(): string {
    return this._modelo;
  }

  public set modelo(modelo: string) {
    if (!modelo) throw new Error("O modelo não pode ser vazio");

    this._modelo = modelo;
  }

  public get marca(): string {
    return this._marca;
  }

  public set marca(marca: string) {
    if (!marca) throw new Error("A marca não pode ser vazia");
    this._marca = marca;
  }

  public get ano(): number {
    return this._ano;
  }

  public set ano(ano: number) {
    if (ano <= 0) throw new Error("O ano não pode ser menor ou igual a 0");
    this._ano = ano;
  }

  public get valorLocacao(): number {
    return this._valorLocacao;
  }

  public set valorLocacao(valorLocacao: number) {
    if (valorLocacao <= 0)
      throw new Error("O valor da locação não pode ser menor ou igual a 0");
    this._valorLocacao = valorLocacao;
  }

  public get quantidadeDias(): number {
    return this._quantidadeDias;
  }

  public set quantidadeDias(quantidadeDias: number) {
    if (quantidadeDias <= 0)
      throw new Error("A quantidade de dias não pode ser menor ou igual a 0");
    this._quantidadeDias = quantidadeDias;
  }

  static calcularValorLocacao(valorLocacao: number, quantidadeDias: number) {
    return valorLocacao * quantidadeDias;
  }
}

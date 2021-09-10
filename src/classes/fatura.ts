export default class Fatura {
  private _numeros: string = "";
  private _descricao: string = "";
  private _quantidade: number = 0;
  private _preco: number = 0;

  constructor(
    numeros: string,
    descricao: string,
    quantidade: number,
    preco: number
  ) {
    this.numeros = numeros;
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.preco = preco;
  }

  public get numeros(): string {
    return this._numeros;
  }

  public set numeros(value: string) {
    this._numeros = value;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(value: string) {
    this._descricao = value;
  }

  public get quantidade(): number {
    return this._quantidade;
  }

  public set quantidade(value: number) {
    this._quantidade = value;
  }

  public get preco(): number {
    return this._preco;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public get valorTotal(): number {
    return this.quantidade * this.preco;
  }
}

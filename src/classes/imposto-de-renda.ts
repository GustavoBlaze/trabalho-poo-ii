export class ImpostoDeRenda {
  private _nome: string = "";
  private _rendaAnual: number = 0;

  constructor(nome: string, rendaAnual: number) {
    this.nome = nome;
    this.rendaAnual = rendaAnual;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    if (!value) {
      throw new Error("Nome não pode ser vazio");
    }

    this._nome = value;
  }

  public get rendaAnual(): number {
    return this._rendaAnual;
  }

  public set rendaAnual(value: number) {
    if (value < 0) {
      throw new Error("Renda não pode ser negativa");
    }

    this._rendaAnual = value;
  }
}

export class PessoaFisica extends ImpostoDeRenda {
  private _gastosSaude: number = 0;

  constructor(nome: string, rendaAnual: number, gastosSaude: number) {
    super(nome, rendaAnual);
    this.gastosSaude = gastosSaude;
  }

  public get gastosSaude(): number {
    return this._gastosSaude;
  }

  public set gastosSaude(value: number) {
    if (value < 0) {
      throw new Error("Gastos de saúde não podem ser negativos");
    }

    this._gastosSaude = value;
  }

  public calcularImposto(): number {
    const descontoSaude = this.gastosSaude * 0.5;
    const impostoSobreRenda =
      this.rendaAnual * (this.rendaAnual < 20_000 ? 0.15 : 0.25);

    return impostoSobreRenda - descontoSaude;
  }
}

export class PessoaJuridica extends ImpostoDeRenda {
  private _numeroFuncionarios: number = 0;

  constructor(nome: string, rendaAnual: number, numeroFuncionarios: number) {
    super(nome, rendaAnual);
    this.numeroFuncionarios = numeroFuncionarios;
  }

  public get numeroFuncionarios(): number {
    return this._numeroFuncionarios;
  }

  public set numeroFuncionarios(value: number) {
    if (value < 0) {
      throw new Error("Número de funcionários não pode ser negativo");
    }

    this._numeroFuncionarios = value;
  }

  public calcularImposto(): number {
    const impostoSobreRenda =
      this.rendaAnual * (this.numeroFuncionarios < 10 ? 0.16 : 0.14);

    return impostoSobreRenda;
  }
}

export class Vendedor {
  private _nome: string = "";
  private _salario: number = 0;
  private _valorDaVenda: number = 0;

  constructor(nome: string, salario: number, valorDaVenda: number) {
    this.nome = nome;
    this.salario = salario;
    this.valorDaVenda = valorDaVenda;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    if (!nome) {
      throw new Error("Nome não pode ser vazio");
    }

    this._nome = nome;
  }

  public get salario(): number {
    return this._salario;
  }

  public set salario(salario: number) {
    if (salario <= 0) {
      throw new Error("Salário inválido");
    }

    this._salario = salario;
  }

  public get valorDaVenda(): number {
    return this._valorDaVenda;
  }

  public set valorDaVenda(valorDaVenda: number) {
    if (valorDaVenda <= 0) {
      throw new Error("Valor da venda inválido");
    }

    this._valorDaVenda = valorDaVenda;
  }

  public desconto(): number {
    return this.salario * 0.08;
  }
}

/*
Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a
região for sul a comissão será de 10% sobre o valor da venda. Se a região for
sudeste a comissão será de 12% sobre o valor da venda, se a região for centro-
oeste a comissão será de 14% sobre o valor da venda, se a região for norte a
comissão será de 15% sobre o valor da venda, Se a região for nordeste a comissão
será de 17% sobre o valor da venda. Crie o método para calcular o salário total que
será o salario mais a comissão
*/

export class VendedorPF extends Vendedor {
  private _regiao: string = "";
  static REGIOES = ["sul", "sudeste", "centro-oeste", "norte", "nordeste"];

  constructor(
    nome: string,
    salario: number,
    valorDaVenda: number,
    regiao: string
  ) {
    super(nome, salario, valorDaVenda);
    this.regiao = regiao;
  }

  public get regiao(): string {
    return this._regiao;
  }

  public set regiao(regiao: string) {
    if (!regiao) {
      throw new Error("Região não pode ser vazia");
    }

    if (!VendedorPF.REGIOES.includes(regiao)) {
      throw new Error("Região inválida");
    }

    this._regiao = regiao;
  }

  public calcularComissao(): number {
    switch (this.regiao) {
      case "sul":
        return this.valorDaVenda * 0.1;
      case "sudeste":
        return this.valorDaVenda * 0.12;
      case "centro-oeste":
        return this.valorDaVenda * 0.14;
      case "norte":
        return this.valorDaVenda * 0.15;
      case "nordeste":
        return this.valorDaVenda * 0.17;
      default:
        return 0;
    }
  }

  public calcularSalarioTotal(): number {
    return this.salario + this.calcularComissao();
  }
}

/*
Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa,
total de funcionários, crie os getters, setters e as suas validações. Crie um método
para calcular a comissão. Se o valor da venda for menor que 5.000,00 o valor da
comissão será de 2% sobre o valor da venda. Se o valor da venda for maior ou igual
a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da
venda. Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será
de 6% sobre o valor da venda. Crie um método salario Total que será a soma do
salario mais comissão e mais R$ 200,00 se o número de funcionários for menor que
100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100.
*/

export class VendedorPJ extends Vendedor {
  private _nomeDaEmpresa: string = "";
  private _totalDeFuncionarios: number = 0;

  constructor(
    nome: string,
    salario: number,
    valorDaVenda: number,
    nomeDaEmpresa: string,
    totalDeFuncionarios: number
  ) {
    super(nome, salario, valorDaVenda);
    this.nomeDaEmpresa = nomeDaEmpresa;
    this.totalDeFuncionarios = totalDeFuncionarios;
  }

  public get nomeDaEmpresa(): string {
    return this._nomeDaEmpresa;
  }

  public set nomeDaEmpresa(nomeDaEmpresa: string) {
    if (!nomeDaEmpresa) {
      throw new Error("Nome da empresa não pode ser vazio");
    }

    this._nomeDaEmpresa = nomeDaEmpresa;
  }

  public get totalDeFuncionarios(): number {
    return this._totalDeFuncionarios;
  }

  public set totalDeFuncionarios(totalDeFuncionarios: number) {
    if (totalDeFuncionarios <= 0) {
      throw new Error("Total de funcionários inválido");
    }

    this._totalDeFuncionarios = totalDeFuncionarios;
  }

  public calcularComissao(): number {
    if (this.valorDaVenda < 5000) {
      return this.valorDaVenda * 0.02;
    } else if (this.valorDaVenda >= 5000 && this.valorDaVenda < 10000) {
      return this.valorDaVenda * 0.04;
    }
    return this.valorDaVenda * 0.06;
  }

  public calcularSalarioTotal(): number {
    if (this.totalDeFuncionarios < 100) {
      return this.salario + this.calcularComissao() + 200;
    } else {
      return this.salario + this.calcularComissao() + 300;
    }
  }
}

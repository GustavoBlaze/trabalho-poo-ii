import { Vendedor, VendedorPF, VendedorPJ } from "../classes/vendedores";

export default function fn() {
  const vendedor = new Vendedor("Joao", 1000, 50);
  console.log({ desconto: vendedor.desconto() });

  const vendedorPF = new VendedorPF("Maria", 1000, 10000, "norte");
  console.log({
    comissao: vendedorPF.calcularComissao(),
    salarioTotal: vendedorPF.calcularSalarioTotal(),
  });

  const vendedorPJ = new VendedorPJ("Jonatas", 1000, 10000, "Jonatas LTDA", 15);
  console.log({
    comissao: vendedorPJ.calcularComissao(),
    salarioTotal: vendedorPJ.calcularSalarioTotal(),
  });
}

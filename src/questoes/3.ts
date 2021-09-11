import Fatura from "../classes/fatura";

export default function fn() {
  const fatura = new Fatura("12345678912345789", "Fatura de maio", 45, 12.5);

  console.log("Valor total da fatura", fatura.valorTotal);
}

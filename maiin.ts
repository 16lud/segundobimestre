
import  empresa  from "./empresa";
import funcionarios from "./funcionarios";
import gerente  from "./gerentes";

const empresa = new Empresa("tech soluçoes");

const funcionario01 = new funcionarios("joão",30000,"desenvolvedor",500);
const funcionario02 = new funcionarios("lucia",3040,"analista",2000);
const gerente1 = new gerente("gabriel","gerente",4000,1000);
const gerente2 = new gerente("ana","gerente",13000,6600);

empresa.adicionarFuncionarios(funcionario01);
empresa.adicionarFuncionarios(funcionario02);
empresa.adicionarFuncionarios(gerente1);
empresa.adicionarFuncionarios(gerente2);

console.log("funcionarios antes do aumento:");
empresa.listarFuncionarios();

funcionario01.aplicarAumento(10);
funcionario02.aplicarAumento(15);
gerente1.aplicarAumento(10);
gerente2.aplicarAumento(400);

console.log("\nfuncionarios apos o aumento:");
empresa.listarFuncionarios();


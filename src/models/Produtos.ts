import Categorias from './Categorias';

interface Produtos{
    id: number;
    nome: string
    descricao: string
    preco: number
    embalagem: string
    dicasPlantacao: string
    regiao: string
    categorias: Categorias | null
}

export default Produtos
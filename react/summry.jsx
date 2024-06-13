import { useProduct } from 'vtex.product-context';
export default function Summary() {
    const { product } = useProduct();

    return (
        <h2>Carregando Produtos</h2>
    )
}
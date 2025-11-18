import { useContext } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import BudgetContext from "../contexts/BudgetContext";

export default function ProductsPage() {
    const { budgetMode } = useContext(BudgetContext);

    // Se budgetMode === true allora mostro solo prodotti con prezzo <= 30
    const filteredProducts = budgetMode
        ? products.filter((p) => p.price <= 30)
        : products;

    return (
        <div className="products-page">
            <h1 className="products-title">Prodotti</h1>

            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <Link
                        to={`/prodotti/${product.id}`}
                        key={product.id}
                        className="product-card-link"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div className="product-card">
                            <h2 className="product-name">{product.title}</h2>

                            <img
                                src={product.image}
                                alt={product.title}
                                className="product-image"
                            />

                            <p className="product-price">
                                <strong>Prezzo:</strong> {product.price} €
                            </p>

                            <p className="product-category">
                                <strong>Categoria:</strong> {product.category}
                            </p>

                            <p className="product-description">
                                {product.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
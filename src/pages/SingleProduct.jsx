import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import products from "../data/products";

export default function SingleProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const productId = Number(id);
    const product = products.find((p) => p.id === productId);


    useEffect(() => {
        if (!product) {
            navigate("/prodotti");
        }
    }, [product, navigate]);

    if (!product) {
        return (
            <div className="single-product-page">
                <h1 className="single-product-title">Prodotto non trovato</h1>
            </div>
        );
    }

    return (
        <div className="single-product-page">
            <div className="single-product-box">
                <h1 className="single-product-title">{product.title}</h1>

                <img
                    src={product.image}
                    alt={product.title}
                    className="single-product-image"
                />

                <p className="single-product-price">
                    <strong>Prezzo:</strong> {product.price} €
                </p>

                <p className="single-product-category">
                    <strong>Categoria:</strong> {product.category}
                </p>

                <p className="single-product-description">
                    {product.description}
                </p>
            </div>
        </div>
    );
}
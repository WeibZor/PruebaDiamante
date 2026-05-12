import ProductImage from "../atoms/product/ProductImage";
import ProductTitle from "../atoms/product/ProductTitle";
import ProductRate from "../atoms/product/ProductRate";
import ProductPrice from "../atoms/product/ProductPrice";
import { imageMap } from "../../assets/imageMap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const resolvedImage = imageMap[product.image] ?? product.image;

    return (
        <Link to={`/product/${product.id}`} className="group block w-full max-w-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-soft transition hover:-translate-y-1 hover:bg-slate-900/95">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-3">
                <img src={resolvedImage} alt={product.title} className="h-44 w-full object-contain transition duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-black/20">
                    {product.category}
                </span>
            </div>
            <div className="mt-4 space-y-3">
                <div>
                    <ProductTitle title={product.title} />
                    <p className="mt-2 text-sm leading-6 text-slate-300 line-clamp-3">{product.description}</p>
                </div>
                <div className="flex items-center justify-between gap-3">
                    <ProductPrice price={product.price} />
                    <ProductRate rate={product.rating?.rate ?? product.rate} />
                </div>
            </div>
        </Link>
    );
}
export default ProductCard;


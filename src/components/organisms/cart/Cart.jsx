import { Link } from "react-router-dom";
import useCartStore from "../../../store/cartStore";
import { imageMap } from "../../../assets/imageMap";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="glass-panel mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-white">Carrito vacío</h2>
          <p className="mt-4 text-slate-300">
            Agrega productos desde la galería para comenzar tu compra.
          </p>
          <Link
            to="/gallery"
            className="mt-8 inline-flex brand-button"
          >
            Ir a la galería
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="glass-panel flex-1 p-6">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">Compra</p>
              <h2 className="text-3xl font-bold text-white">Tu carrito</h2>
            </div>
            <p className="rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
              {items.length} producto(s)
            </p>
          </div>
          <div className="space-y-4">
            {items.map(({ product, quantity }) => {
              const resolvedImage = imageMap[product.image] ?? product.image;
              const itemSubtotal = Number(product.price) * Number(quantity);
              return (
                <article key={product.id} className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-950/90 p-4 sm:flex-row sm:items-center">
                  <img
                    src={resolvedImage}
                    alt={product.title}
                    className="h-28 w-28 rounded-3xl object-cover border border-slate-700"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white truncate">{product.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">${Number(product.price).toFixed(2)} cada uno</p>
                    <p className="mt-1 text-sm text-slate-300">Subtotal: <span className="font-semibold text-white">${itemSubtotal.toFixed(2)}</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => decrementItem(product.id)}
                      className="h-10 w-10 rounded-3xl border border-slate-700 bg-slate-900 text-white transition hover:bg-slate-800"
                    >
                      -
                    </button>
                    <span className="min-w-[2rem] text-center text-white">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => incrementItem(product.id)}
                      className="h-10 w-10 rounded-3xl border border-slate-700 bg-slate-900 text-white transition hover:bg-slate-800"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="text-sm font-medium text-fuchsia-400 transition hover:text-fuchsia-300"
                  >
                    Eliminar
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="glass-panel w-full max-w-md p-6">
          <div className="mb-4 rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
            <h3 className="text-xl font-semibold text-white">Resumen de compra</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <div className="flex justify-between text-sm">
                <span>Productos</span>
                <span>{items.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Link
            to="/checkout"
            className="block text-center brand-button"
          >
            Ir a checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}

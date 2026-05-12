import { useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../../../store/cartStore";

export default function Checkout() {
  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
  });

  const total = getTotalPrice();

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearCart();
    setSuccess(true);
  };

  if (success) {
    return (
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="glass-panel mx-auto max-w-3xl text-center p-10">
          <div className="mb-6 inline-flex rounded-full bg-fuchsia-500/15 px-4 py-2 text-sm text-fuchsia-200">
            Pago simulado
          </div>
          <h2 className="text-3xl font-semibold text-white">Compra confirmada</h2>
          <p className="mt-4 text-slate-300">
            Gracias por usar Neyndra Commerce. El carrito fue procesado en modo de prueba.
          </p>
          <Link
            to="/gallery"
            className="mt-8 inline-flex brand-button"
          >
            Volver a la galería
          </Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="glass-panel mx-auto max-w-3xl text-center p-10">
          <h2 className="text-3xl font-semibold text-white">No hay productos en el carrito</h2>
          <p className="mt-4 text-slate-300">Agrega artículos desde la galería antes de continuar al checkout.</p>
          <Link
            to="/gallery"
            className="mt-8 inline-flex brand-button"
          >
            Ir a productos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="glass-panel p-8">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-300">Checkout</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Información del comprador</h2>
            <p className="mt-3 text-slate-400">
              Completa los datos para finalizar tu pago en el entorno simulado.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block text-sm text-slate-300">
              Nombre completo
              <input
                required
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950 px-5 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                placeholder="Ej. Ana Martínez"
              />
            </label>
            <label className="block text-sm text-slate-300">
              Email
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950 px-5 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                placeholder="correo@ejemplo.com"
              />
            </label>
            <label className="block text-sm text-slate-300">
              Dirección de entrega
              <input
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950 px-5 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                placeholder="Calle 123, Ciudad"
              />
            </label>
            <button
              type="submit"
              className="brand-button w-full"
            >
              Confirmar compra simulada
            </button>
          </form>
        </div>

        <aside className="glass-panel p-8">
          <h3 className="text-2xl font-semibold text-white">Resumen de pedido</h3>
          <div className="mt-6 space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-4">
                <div>
                  <p className="text-sm text-slate-300">{product.title}</p>
                  <p className="text-xs text-slate-500">Cantidad: {quantity}</p>
                </div>
                <p className="font-semibold text-white">${(Number(product.price) * Number(quantity)).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between text-slate-400">
              <span>Total</span>
              <span className="text-xl font-semibold text-white">${total.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

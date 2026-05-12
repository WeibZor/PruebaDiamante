import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerFullUser } from "../../../services/authService";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cellphone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    const response = await registerFullUser(formData);
    if (response.success) {
      navigate('/login');
    } else {
      setError(response.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 px-4 py-12">
      <div className="w-full max-w-6xl grid gap-8 lg:grid-cols-[1fr_1.1fr] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-950/40 bg-slate-900/90 border border-white/10 backdrop-blur-xl">
        <div className="flex flex-col justify-center p-10 sm:p-14 bg-slate-900/80">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Crea tu acceso</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Regístrate con estilo</h1>
          <p className="mt-4 max-w-md text-slate-300 leading-7">
            Completa pocos pasos para acceder a la plataforma con una experiencia más segura y profesional.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-slate-400">
            <div className="rounded-3xl border border-slate-700 bg-slate-950/70 p-4">
              <span className="font-semibold text-white">Protección</span>
              <p className="mt-1 text-slate-400">Tu contraseña se almacena de forma segura.</p>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-950/70 p-4">
              <span className="font-semibold text-white">Soporte</span>
              <p className="mt-1 text-slate-400">Podrás comprar y gestionar tu carrito con facilidad.</p>
            </div>
          </div>
        </div>

        <div className="px-8 py-10 sm:px-12 sm:py-12 bg-slate-950">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Sign up</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Abrir nueva cuenta</h2>
            <p className="mt-2 text-sm text-slate-400">
              Llena los datos para comenzar a comprar con una apariencia moderna.
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-3xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                Nombre completo
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                  placeholder="Juan Pérez"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Correo electrónico
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                  placeholder="correo@ejemplo.com"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                Teléfono
                <input
                  type="tel"
                  name="cellphone"
                  value={formData.cellphone}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                  placeholder="+57 300 123 4567"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Dirección
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                  placeholder="Calle 123"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-slate-300">
                Contraseña
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                  placeholder="••••••••"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Confirmar contraseña
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                  placeholder="••••••••"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 rounded-3xl bg-gradient-to-r from-fuchsia-500 via-purple-600 to-slate-700 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-0.5"
            >
              Crear cuenta
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="font-semibold text-white hover:text-fuchsia-300">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

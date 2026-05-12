import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import smile from "../../../assets/smile.png";
import { loginUser } from "../../../services/authService";

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const DEMO_USERS = [
    { name: 'Andrés', email: 'andres@example.com', password: 'password123' },
    { name: 'Beatriz', email: 'beatriz@example.com', password: 'securePass456' },
    { name: 'Carlos', email: 'carlos@example.com', password: 'devUser789' },
  ];

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const result = await loginUser(formData.email, formData.password);
    if (result.success) {
      navigate('/gallery');
    } else {
      setError(result.error);
    }
  };

  const handleDemoLogin = async (demoUser) => {
    setError('');
    const result = await loginUser(demoUser.email, demoUser.password);
    if (result.success) {
      navigate('/gallery');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 px-4 py-12">
      <div className="w-full max-w-5xl grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-950/30 bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-700 to-fuchsia-600 p-10 sm:p-14 text-white">
          <div className="absolute left-0 top-0 h-full w-full opacity-40 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_35%)]" />
          <div className="relative z-10 space-y-6">
            <img src={smile} alt="Neyndra icon" className="w-16 h-16 rounded-3xl bg-white/10 p-3 shadow-lg shadow-black/20" />
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-200/70">Welcome back</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight">Neyndra Commerce</h1>
              <p className="mt-3 max-w-sm text-slate-200/80 leading-7">
                Ingresa de forma segura y sigue explorando nuestro catálogo premium con diseño limpio y experiencia profesional.
              </p>
            </div>
          </div>
        </div>

        <div className="px-8 py-10 sm:px-12 sm:py-12 bg-slate-950">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Sign in</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Acceder a tu cuenta</h2>
            <p className="mt-2 text-sm text-slate-400">
              Usa tu correo registrado y contraseña para entrar.
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-3xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}

          <div className="mb-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-slate-200">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Usuarios de prueba</p>
                <p className="text-xs text-slate-400">Usa cualquiera de estas credenciales para entrar rápido.</p>
              </div>
              <button
                type="button"
                onClick={() => handleDemoLogin(DEMO_USERS[0])}
                className="rounded-full bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
              >
                Demo rápida
              </button>
            </div>
            <div className="grid gap-3">
              {DEMO_USERS.map((user) => (
                <div key={user.email} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4">
                  <p className="text-sm font-semibold text-white">{user.name}</p>
                  <p className="text-xs text-slate-400">Email: {user.email}</p>
                  <p className="text-xs text-slate-400">Contraseña: {user.password}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block text-sm font-medium text-slate-300">
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

            <label className="block text-sm font-medium text-slate-300">
              Contraseña
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
                placeholder="********"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-400">
              <label className="inline-flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-fuchsia-500 focus:ring-fuchsia-500" />
                <span>Recordarme</span>
              </label>
              <button type="button" className="font-medium text-fuchsia-400 hover:text-fuchsia-300 transition">
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-3xl bg-gradient-to-r from-fuchsia-500 via-purple-600 to-slate-700 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-0.5"
            >
              Iniciar sesión
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            ¿No tienes cuenta?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="font-semibold text-white hover:text-fuchsia-300"
            >
              Crea una ahora
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

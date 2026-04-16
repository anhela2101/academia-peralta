import React from 'react'
import { useLocation } from 'react-router-dom'
import { Play, Youtube, Clock, Video, Users, FileCheck, Download, MonitorPlay, Award, ShieldCheck, Star, StarHalf, CircleArrowOutUpRight, MoveUpRight, Calendar, FileDown, FilePenLine, CircleCheck } from 'lucide-react'
import Button from '../components/generals/Button'
import PaymentMethod from '../components/courseDetails/paymentMethod'
import FreeMethod from '../components/courseDetails/freeMethod'

// Ítems incluidos adaptados a un curso virtual de matemáticas
const includedItems = [
  { label: 'Clases teóricas y prácticas 24/7', icon: Youtube },
  { label: 'Acceso al módulo por 6 meses', icon: Calendar },
  { label: 'Separatas y solucionarios en PDF', icon: FileDown },
  { label: 'Constancia de participación', icon: Award },
  { label: 'Simulacros de admisión online', icon: FilePenLine }
]

// Respaldos o convenios de la academia
const endorsements = [
  'Asociación de Matemáticos del Perú',
  'Convenio Universitario GenioMath'
]


const CourseDetailPage = () => {
  const location = useLocation()
  const tag = location?.state?.tag

  const isFree = tag === 'Gratuito'

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
      <section className="space-y-6">
        <header className="space-y-3">
          <div>
            <h1 className="text-3xl font-black text-[#0033A0] uppercase">ÁLGEBRA BÁSICA Y AVANZADA</h1>
            <p className="text-lg font-bold text-[#00843D]">Domina las ecuaciones y asegura tu ingreso a la universidad</p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#0033A0] border-4 border-[#0033A0]/10 shadow-lg">
            <div className="relative h-72 w-full">
              <video
                className="h-full w-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80"
              >
                {/* Puedes cambiar la URL del video de muestra */}
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0033A0]/50 to-transparent" />
            </div>
          </div>

          <div className="flex justify-between items-center text-sm font-bold text-[#0033A0] w-full gap-4 flex-wrap sm:flex-nowrap bg-gray-50 p-4 rounded-xl border-l-4 border-[#D22027]">
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#D22027]" />
              45 horas
            </span>
            <span className="flex items-center gap-2">
              <Video className="w-5 h-5 text-[#D22027]" />
              24 videos
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00843D]" />
              Todos los niveles
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#00843D]" />
              +500 Alumnos
            </span>
          </div>
        </header>

        <article className="space-y-6 rounded-3xl bg-white p-8 shadow-md border-t-8 border-[#0033A0]">
          <p className="text-base text-gray-700 font-medium leading-relaxed">
            Este módulo está diseñado para estudiantes de secundaria, egresados y postulantes a la universidad que desean dominar el álgebra desde sus fundamentos hasta el nivel más exigente (tipo UNI/San Marcos).
          </p>

          <div className="space-y-6 text-sm text-gray-700">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h3 className="text-lg font-black text-[#D22027] mb-1">Instructor Principal:</h3>
              <p className="font-bold text-[#0033A0] text-base">Mg. Luis García Pimentel</p>
              <p className="font-medium text-gray-600">Magíster en Matemáticas Puras</p>
              <p className="text-xs text-gray-500 mt-1">Más de 15 años de experiencia dictando en academias preuniversitarias.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-black text-[#0033A0] flex items-center gap-2">
                <span className="w-2 h-6 bg-[#00843D] rounded-full"></span> Objetivos del Módulo
              </h3>
              <ul className="list-disc space-y-2 pl-6 font-medium text-gray-600">
                <li>Construir una base sólida en las leyes fundamentales del álgebra.</li>
                <li>Desarrollar la capacidad de abstracción para el planteo de ecuaciones.</li>
                <li>Aprender artificios matemáticos para resolver problemas en tiempo récord.</li>
                <li>Preparar al estudiante para enfrentar con seguridad cualquier examen de admisión.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-black text-[#0033A0] flex items-center gap-2">
                <span className="w-2 h-6 bg-[#00843D] rounded-full"></span> Temario Principal
              </h3>
              <ul className="list-disc space-y-2 pl-6 font-medium text-gray-600">
                <li>Leyes de exponentes y radicales.</li>
                <li>Polinomios y productos notables.</li>
                <li>Factorización y fracciones algebraicas.</li>
                <li>Ecuaciones e inecuaciones de 1° y 2° grado.</li>
                <li>Sistemas de ecuaciones lineales y no lineales.</li>
                <li>Funciones, dominio y rango.</li>
                <li>Logaritmos y sus aplicaciones.</li>
              </ul>
            </div>

            <div className="space-y-3 bg-[#00843D]/5 p-5 rounded-xl border border-[#00843D]/20">
              <h3 className="text-lg font-black text-[#00843D] flex items-center gap-2">
                <Award className="w-5 h-5" /> ¿Por qué estudiar con GenioMath?
              </h3>
              <ul className="list-disc space-y-2 pl-6 font-medium text-gray-700">
                <li>Metodología directa: menos teoría aburrida, más práctica enfocada al examen.</li>
                <li>Resolución de exámenes de admisión de años anteriores paso a paso.</li>
                <li>Foro de consultas exclusivo donde los profesores responden tus dudas.</li>
                <li>Simulacros cronometrados para medir tu velocidad y precisión.</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      {/* Sidebar DERECHA */}
      <aside
        className="rounded-3xl p-8 shadow-xl border-t-8 border-[#D22027]"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <div className="space-y-6">
          <div className="pb-6 border-b-2 border-gray-200">
            <h3 className="text-xl font-black text-[#0033A0] mb-4">Inversión del Módulo</h3>
            {!isFree && (
              <>
                <PaymentMethod />
              </>
            )}

            {isFree && (
              <FreeMethod />
            )}

            <div className="mt-8 space-y-4">
              <h4 className="text-md font-bold text-[#0033A0] uppercase tracking-wider">¿Qué incluye tu matrícula?</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-700">
                {includedItems.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3">
                    <div className="p-2 bg-[#0033A0]/10 rounded-lg">
                      <Icon className="w-5 h-5 text-[#0033A0]" />
                    </div>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-2">
            {/* Respaldo oficial */}
            <div className="pb-6 border-b-2 border-gray-200">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Respaldo Académico</h4>
              <ul className="space-y-3 text-sm font-bold text-[#0033A0]">
                {endorsements.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CircleCheck className="w-5 h-5 text-[#00843D]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ellos ya se capacitaron */}
            <div className="pt-6">
              <h4 className="text-md font-black text-[#0033A0]">Nuestros futuros cachimbos</h4>
              <p className="text-xs font-bold text-[#00843D] uppercase tracking-widest mt-1">+ 500 ALUMNOS SATISFECHOS</p>

              <div className="mt-4 flex items-start gap-8 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-3xl font-black text-[#D22027]">4.8</p>
                    <Star className="w-5 h-5 text-[#F5A623] fill-[#F5A623] mb-1" />
                  </div>
                  <p className="text-xs font-bold text-gray-500 uppercase">245 reseñas</p>
                </div>
                <div className="border-l-2 border-gray-100 pl-6">
                  <p className="text-3xl font-black text-[#00843D]">95%</p>
                  <p className="text-xs font-bold text-gray-500 uppercase">Aprobados</p>
                </div>
              </div>

              {/* Barras de calificación (Diseño limpio) */}
              <div className="mt-6 space-y-3 text-sm font-bold text-gray-600">
                {[
                  { star: 5, pct: '85%', fill: 'w-[85%]' },
                  { star: 4, pct: '10%', fill: 'w-[10%]' },
                  { star: 3, pct: '3%', fill: 'w-[3%]' },
                  { star: 2, pct: '1%', fill: 'w-[1%]' },
                  { star: 1, pct: '1%', fill: 'w-[1%]' }
                ].map((item) => (
                  <div key={item.star} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-8">
                      <span>{item.star}</span>
                      <Star className="w-3 h-3 text-gray-400" />
                    </div>
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                      <div className={`h-full rounded-full bg-[#F5A623] ${item.fill}`} />
                    </div>
                    <span className="w-8 text-right text-xs">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default CourseDetailPage
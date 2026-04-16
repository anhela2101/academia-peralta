import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Clock, CirclePlay, ChartColumnBig, Unlock } from 'lucide-react'
import Button from '../generals/Button'
import certificado from '../../assets/img/certificado.svg'

const MyCoursesCard = ({ course }) => {
  const navigate = useNavigate()

  if (!course) return null

  const {
    id,
    title,
    description,
    duration,
    lessons,
    level,
    image,
    modulesText,
    progress,
    tag,
    tagColor,
    daysLabel,
    cta
  } = course

  return (
    <article className="rounded-2xl border-2 border-[#0033A0]/10 bg-white shadow-md transition-all hover:shadow-xl hover:border-[#00843D]/50 flex flex-col h-full">
      <div className="relative h-44 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0033A0]/90 via-[#0033A0]/40 to-transparent" />

        {tag && (
          <span
            className="absolute top-0 left-0 rounded-br-xl px-4 py-2 text-xs font-black text-white uppercase tracking-wider shadow-md"
            style={{ backgroundColor: tagColor || '#0033A0' }}
          >
            {tag}
          </span>
        )}

        <div className="absolute inset-x-4 bottom-4 text-white">
          <h3 className="text-xl font-black">{title}</h3>
          <p className="text-xs text-white/90 font-medium line-clamp-1">{description}</p>

          {modulesText && typeof progress === 'number' && (
            <div className="mt-3">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/30">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, backgroundColor: '#00843D' }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs font-bold text-white">
                <span>{modulesText}</span>
                <span>{progress}% completado</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 px-6 py-6 space-y-5">
        {/* Metadatos del curso */}
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 text-xs font-bold text-[#D22027]">
          {duration && (
            <span className="flex items-center gap-1.5 bg-[#D22027]/10 px-2 py-1 rounded">
              <Clock className="h-4 w-4" />
              {duration}
            </span>
          )}
          {lessons && (
            <span className="flex items-center gap-1.5 bg-[#D22027]/10 px-2 py-1 rounded">
              <CirclePlay className="h-4 w-4" />
              {lessons}
            </span>
          )}
          {level && (
            <span className="flex items-center gap-1.5 bg-[#D22027]/10 px-2 py-1 rounded">
              <ChartColumnBig className="h-4 w-4" />
              {level}
            </span>
          )}
        </div>

        {/* Descripción general predefinida */}
        <p className="text-sm font-medium text-[#0033A0]/80 leading-relaxed flex-1">
          Prepárate para dominar las matemáticas y enfrentar los exámenes de admisión más exigentes con agilidad y precisión analítica.
        </p>

        {/* Acciones y Estado */}
        <div className="mt-auto pt-4 border-t border-[#0033A0]/10 flex flex-wrap items-center justify-between gap-4">
          
          {/* Etiqueta de días restantes / acceso */}
          {daysLabel && (
            <div className="flex items-center gap-2 text-sm font-bold text-[#00843D]">
              <Unlock className="h-5 w-5" />
              {daysLabel} restantes
            </div>
          )}

          {/* Etiqueta de finalizado */}
          {!daysLabel && tag === 'Módulo finalizado' && (
            <div className="flex items-center gap-2 text-sm font-black text-[#0033A0]">
              <span className="flex items-center justify-center bg-[#0033A0]/10 p-1.5 rounded-full">
                <img src={certificado} alt="Certificado" className="h-5 w-5" />
              </span>
              <span>¡Finalizado!</span>
            </div>
          )}

          {/* Botón de Acción Principal (CTA) */}
          {cta && (
            <Button
              variant="primary"
              className="ml-auto bg-[#D22027] hover:bg-[#00843D] text-white font-bold border-none transition-colors shadow-md px-6 py-2"
              onClick={() => navigate(`/course-start/${id}`)}
            >
              {cta}
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

export default MyCoursesCard
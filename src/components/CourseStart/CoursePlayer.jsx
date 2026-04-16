import React, { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, SkipBack, SkipForward, MessageSquare } from 'lucide-react'

const CoursePlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [progress, setProgress] = useState(35) // Mock progress

    const togglePlay = () => setIsPlaying(!isPlaying)
    const toggleMute = () => setIsMuted(!isMuted)

    return (
        <div className="space-y-6">
            {/* Video Container */}
            <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-[#0033A0] shadow-lg border-2 border-[#0033A0]/10">
                {/* Placeholder Image (Imagen de pizarra o matemáticas) */}
                <img
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Video thumbnail"
                    className="h-full w-full object-cover opacity-70 mix-blend-overlay"
                />

                {/* Big Play Button (Centered) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                    <button
                        onClick={togglePlay}
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D22027] text-white shadow-[0_0_20px_rgba(210,32,39,0.5)] backdrop-blur-sm transition-transform hover:scale-110 hover:bg-[#A81A1F]"
                    >
                        {isPlaying ? <Pause className="h-10 w-10 fill-current" /> : <Play className="h-10 w-10 fill-current ml-2" />}
                    </button>
                </div>

                {/* Controls Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 py-4 opacity-0 transition-opacity group-hover:opacity-100">
                    {/* Progress Bar */}
                    <div className="mb-4 h-1.5 w-full cursor-pointer rounded-full bg-white/30">
                        <div
                            className="h-full rounded-full bg-[#00843D] relative"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Punto indicador de progreso */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-3 w-3 bg-white rounded-full shadow" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-4">
                            <button onClick={togglePlay} className="hover:text-[#00843D] transition-colors">
                                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                            </button>

                            <button className="hover:text-[#00843D] transition-colors">
                                <SkipBack className="h-5 w-5" />
                            </button>

                            <button className="hover:text-[#00843D] transition-colors">
                                <SkipForward className="h-5 w-5" />
                            </button>

                            <div className="flex items-center gap-2 group/volume">
                                <button onClick={toggleMute} className="hover:text-[#00843D] transition-colors">
                                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                                </button>
                                <div className="w-0 overflow-hidden transition-all group-hover/volume:w-20">
                                    <div className="h-1 w-20 rounded-full bg-white/30">
                                        <div className="h-full w-3/4 rounded-full bg-[#00843D]" />
                                    </div>
                                </div>
                            </div>

                            <span className="text-xs font-bold font-mono">04:20 / 12:30</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="hover:text-[#00843D] transition-colors" title="Dudas al profesor">
                                <MessageSquare className="h-5 w-5" />
                            </button>
                            <button className="hover:text-[#00843D] transition-colors" title="Configuración">
                                <Settings className="h-5 w-5" />
                            </button>
                            <button className="hover:text-[#00843D] transition-colors" title="Pantalla completa">
                                <Maximize className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Info */}
            <div className="space-y-4 bg-gray-50 p-6 rounded-xl border-l-4 border-[#0033A0]">
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#D22027] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Teoría + Ejercicios</span>
                </div>
                <h2 className="text-2xl font-black text-[#0033A0]">Descripción de la Clase</h2>
                <p className="text-gray-700 font-medium leading-relaxed">
                    Aprende los componentes esenciales de las <strong className="text-[#0033A0]">Leyes de Exponentes y Radicales</strong>. 
                    Este módulo cubre la teoría fundamental, demostración de propiedades y resolución de problemas tipo admisión paso a paso. 
                    Ideal para construir una base sólida antes de avanzar a ecuaciones complejas.
                </p>
            </div>
        </div>
    )
}

export default CoursePlayer
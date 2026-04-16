import React, { useState } from 'react'
import { CheckCircle2, Circle, PlayCircle, FileText, ChevronDown, ChevronUp, X, FileCheck, Trophy } from 'lucide-react'

// Simulación de datos provenientes de una base de datos para GenioMath
const courseData = {
    modules: [
        {
            id: 1,
            title: 'Módulo 1: Fundamentos de Álgebra',
            duration: '45 min',
            completed_items: 2,
            total_items: 3,
            lessons: [
                {
                    id: 101,
                    title: 'Leyes de Exponentes y Radicales',
                    type: 'video',
                    duration: '20 min',
                    completed: true,
                    current: false
                },
                {
                    id: 102,
                    title: 'Ecuaciones Lineales y Cuadráticas',
                    type: 'video',
                    duration: '15 min',
                    completed: true,
                    current: false
                },
                {
                    id: 103,
                    title: 'Ejercicios Resueltos (Nivel UNI)',
                    type: 'pdf',
                    duration: 'Lectura y Práctica',
                    completed: false,
                    current: true
                }
            ]
        },
        {
            id: 2,
            title: 'Módulo 2: Geometría Plana',
            duration: '50 min',
            completed_items: 1,
            total_items: 2,
            lessons: [
                {
                    id: 201,
                    title: 'Triángulos: Propiedades Fundamentales',
                    type: 'video',
                    duration: '25 min',
                    completed: true,
                    current: false
                },
                {
                    id: 202,
                    title: 'Congruencia y Semejanza',
                    type: 'video',
                    duration: '25 min',
                    completed: false,
                    current: false
                }
            ]
        },
        {
            id: 3,
            title: 'Módulo 3: Trigonometría Analítica',
            duration: '40 min',
            completed_items: 0,
            total_items: 1,
            lessons: []
        },
        {
            id: 4,
            title: 'Módulo 4: Funciones Reales',
            duration: '60 min',
            completed_items: 0,
            total_items: 1,
            lessons: []
        },
        {
            id: 5,
            title: 'Módulo 5: Límite y Continuidad',
            duration: '55 min',
            completed_items: 0,
            total_items: 1,
            lessons: []
        },
        {
            id: 6,
            title: 'Módulo 6: Derivadas y Aplicaciones',
            duration: '70 min',
            completed_items: 0,
            total_items: 1,
            lessons: []
        }
    ],
    exam: {
        id: 'exam',
        title: 'Simulacro de Admisión (Matemáticas)',
        status: 'pending', // pending, passed, failed
        min_score: 80,
        attempts: 0,
        last_attempt_date: null,
        details: [
            'Apruebas con un 80% de respuestas correctas.',
            'Consta de 50 preguntas tipo examen de admisión.',
            'Tienes un límite de 2 horas continuas.',
            'Al finalizar, tendrás el solucionario detallado.'
        ]
    },
    results: {
        id: 'results',
        title: 'Resultados del Simulacro',
        available: true,
        last_exam_date: '25 de Septiembre de 2025',
        attempts: 1,
        status: 'En proceso de mejora',
        score_text: '35 de 50 respuestas correctas.'
    }
}

const CourseSidebar = () => {
    // Estado para manejar qué secciones están abiertas
    const [openSections, setOpenSections] = useState({ 'module-1': true })

    const toggleSection = (sectionKey) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionKey]: !prev[sectionKey]
        }))
    }

    const renderIcon = (type) => {
        switch (type) {
            case 'video':
                return <PlayCircle className="h-3.5 w-3.5" />
            case 'pdf':
            case 'reading':
                // Rojo para los PDFs/Documentos
                return <FileText className="h-3.5 w-3.5 text-[#D22027]" />
            default:
                return <Circle className="h-3.5 w-3.5" />
        }
    }

    return (
        <div className="flex h-full flex-col bg-white rounded-xl shadow-md border-2 border-[#0033A0]/10 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#0033A0] px-6 py-4 text-white border-b-4 border-[#00843D]">
                <h3 className="font-black tracking-wide">Plan de Estudios</h3>
                <button className="rounded-full p-1 hover:bg-[#D22027] transition-colors">
                    <X className="h-5 w-5" />
                </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto">
                {/* Modules */}
                {courseData.modules.map((module, index) => {
                    const isOpen = openSections[`module-${module.id}`]

                    return (
                        <div key={module.id} className="border-b border-[#0033A0]/10 last:border-0">
                            <button
                                onClick={() => toggleSection(`module-${module.id}`)}
                                className={`flex w-full items-start justify-between bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50 ${isOpen ? 'bg-[#0033A0]/5' : ''}`}
                            >
                                <div className="flex gap-3">
                                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white transition-colors ${isOpen ? 'bg-[#D22027]' : 'bg-[#0033A0]'}`}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-[#0033A0]">{module.title}</h4>
                                        <p className="mt-1 text-xs font-medium text-[#00843D]">
                                            {module.completed_items}/{module.total_items} • {module.duration}
                                        </p>
                                    </div>
                                </div>
                                {isOpen ? (
                                    <ChevronUp className="h-5 w-5 text-[#D22027]" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-[#0033A0]/50" />
                                )}
                            </button>

                            {/* Lessons */}
                            {isOpen && module.lessons.length > 0 && (
                                <div className="bg-white border-t border-[#0033A0]/5">
                                    {module.lessons.map((lesson) => (
                                        <div
                                            key={lesson.id}
                                            className={`relative flex gap-4 px-6 py-4 transition-colors hover:bg-gray-50 ${lesson.current ? 'bg-[#00843D]/5' : ''
                                                }`}
                                        >
                                            {/* Indicador de lección actual (Verde) */}
                                            {lesson.current && (
                                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#00843D]" />
                                            )}

                                            <div className="mt-1 shrink-0">
                                                {lesson.completed ? (
                                                    <CheckCircle2 className="h-5 w-5 text-[#00843D]" />
                                                ) : (
                                                    <Circle className={`h-5 w-5 ${lesson.current ? 'text-[#00843D]' : 'text-gray-300'}`} />
                                                )}
                                            </div>

                                            <div className="flex-1 space-y-1">
                                                <p className={`text-sm font-bold ${lesson.current ? 'text-[#00843D]' : 'text-[#0033A0]/80'}`}>
                                                    {lesson.title}
                                                </p>
                                                <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                                    {renderIcon(lesson.type)}
                                                    <span>{lesson.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                })}

                {/* Exam Section */}
                <div className="border-b border-[#0033A0]/10">
                    <button
                        onClick={() => toggleSection('exam')}
                        className={`flex w-full items-center justify-between px-6 py-4 text-left hover:bg-gray-50 ${openSections['exam'] ? 'bg-[#0033A0]/5' : ''}`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-6 w-6 items-center justify-center">
                                <FileCheck className="h-5 w-5 text-[#D22027]" />
                            </div>
                            <span className="text-sm font-bold text-[#0033A0]">{courseData.exam.title}</span>
                        </div>
                        {openSections['exam'] ? (
                            <ChevronUp className="h-5 w-5 text-[#D22027]" />
                        ) : (
                            <ChevronDown className="h-5 w-5 text-[#0033A0]/50" />
                        )}
                    </button>

                    {openSections['exam'] && (
                        <div className="bg-[#D22027]/5 px-6 py-6 space-y-6">
                            <ul className="space-y-4 text-sm font-medium text-[#0033A0]">
                                {courseData.exam.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D22027]" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#D22027] px-4 py-3 text-sm font-bold text-white transition-all shadow-md hover:bg-[#A81A1F] hover:shadow-lg">
                                <span>Iniciar Simulacro</span>
                                <ChevronDown className="h-4 w-4 -rotate-90" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Results Section */}
                <div>
                    <button
                        onClick={() => toggleSection('results')}
                        className={`flex w-full items-center justify-between px-6 py-4 text-left hover:bg-gray-50 ${openSections['results'] ? 'bg-[#0033A0]/5' : ''}`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-6 w-6 items-center justify-center">
                                <Trophy className="h-5 w-5 text-[#00843D]" />
                            </div>
                            <span className="text-sm font-bold text-[#0033A0]">{courseData.results.title}</span>
                        </div>
                        {openSections['results'] ? (
                            <ChevronUp className="h-5 w-5 text-[#00843D]" />
                        ) : (
                            <ChevronDown className="h-5 w-5 text-[#0033A0]/50" />
                        )}
                    </button>

                    {openSections['results'] && (
                        <div className="bg-[#00843D]/5 px-6 py-6 space-y-6">
                            <p className="text-xs font-bold text-[#00843D]/80 uppercase tracking-wide">
                                Último intento: {courseData.results.last_exam_date}
                            </p>

                            <div className="space-y-3 text-sm border-l-2 border-[#00843D] pl-4">
                                <div className="flex gap-2">
                                    <span className="font-bold text-[#0033A0]">Intentos:</span>
                                    <span className="font-medium text-gray-700">{courseData.results.attempts}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-bold text-[#0033A0]">Estado:</span>
                                    <span className="font-medium text-[#D22027]">{courseData.results.status}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-bold text-[#0033A0]">Resultado:</span>
                                    <span className="font-medium text-gray-700">{courseData.results.score_text}</span>
                                </div>
                            </div>

                            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00843D] px-4 py-3 text-sm font-bold text-white transition-all shadow-md hover:bg-[#006A31] hover:shadow-lg">
                                <span>Ver Solucionario</span>
                                <ChevronDown className="h-4 w-4 -rotate-90" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CourseSidebar
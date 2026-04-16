import React, { useState } from 'react';
import {
  CircleArrowOutUpRight,
  Clock,
  Video,
  BarChart,
  CheckCircle2,
  Quote,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/generals/Button';

// Importación de activos locales
import Banner from '../assets/img/Banner.png';
import loginImage from '../assets/img/login.png'
import logoBlanco from "../assets/img/LogoBlanco.png";
import bgFeatures from '../assets/img/Banner2.png';
import medicosExperiencia from '../assets/img/Banner3.png';
import logoDrVigo from '../assets/img/parche.jpg'; 
import fondoCurvo from '../assets/img/fondoT.png'; 
import pieImage from '../assets/img/pie.png'; 

// Logos de certificación (o universidades objetivo)
import img1 from '../assets/img/img1.jpg'; 
import img2 from '../assets/img/img2.jpg'; 
import img3 from '../assets/img/img3.jpg'; 
import img4 from '../assets/img/img4.jpg'; 
import img5 from '../assets/img/img5.jpg'; 
import img6 from '../assets/img/img6.jpg';

// Fotos de instructores / profesores
import dr1 from '../assets/img/dr1.webp';
import dr2 from '../assets/img/dr2.avif';
import dr3 from '../assets/img/dr3.avif';

/* --- SUB-COMPONENTES AUXILIARES --- */

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl shadow-[#0033A0]/10 flex flex-col items-center text-center border-t-4 border-[#D22027] hover:border-[#00843D] hover:shadow-[#00843D]/20 transition-all group">
    <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform bg-[#D22027]/10 p-4 rounded-full text-[#D22027] group-hover:bg-[#00843D]/10 group-hover:text-[#00843D]">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#0033A0] mb-4">{title}</h3>
    <p className="text-[#0033A0]/70 leading-relaxed text-sm font-medium">{desc}</p>
  </div>
);

const TestimonialCard = ({ data, isActive, onClick }) => {
  const { name, role, text, imageUrl } = data;
  return (
    <div
      onClick={onClick}
      className={`bg-white p-8 rounded-[2.5rem] shadow-2xl transition-all duration-500 cursor-pointer flex flex-col text-left border-2
        ${isActive ? 'scale-105 z-10 border-[#00843D] md:flex-[1.5]' : 'scale-95 opacity-80 border-transparent md:flex-1'}`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="text-left">
          <h4 className="text-[#0033A0] font-bold text-xl leading-tight">{name}</h4>
          <p className="text-[#00843D] text-sm font-bold mt-1">{role}</p>
        </div>
        {!isActive && <Quote size={32} className="text-[#D22027] opacity-40 transform rotate-180" />}
      </div>
      {isActive && imageUrl && (
        <div className="relative mb-6 rounded-2xl overflow-hidden h-48 bg-[#0033A0] animate-in fade-in zoom-in duration-700 border-b-4 border-[#D22027]">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover opacity-70" />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0033A0] to-transparent flex justify-between items-end">
            <div className="text-white">
              <p className="font-bold text-lg leading-none">{name}</p>
              <p className="text-[10px] text-[#00843D] font-bold uppercase tracking-tighter bg-white px-2 py-0.5 rounded mt-2 inline-block">{role}</p>
            </div>
            <Quote size={24} className="text-[#D22027] transform rotate-180" />
          </div>
        </div>
      )}
      <p className={`text-[#0033A0]/80 leading-relaxed italic text-left font-medium transition-all duration-300 ${isActive ? 'text-base opacity-100' : 'text-sm opacity-60 line-clamp-3'}`}>
        "{text}"
      </p>
    </div>
  );
};

const CourseCard = ({ tag, title, subtitle, level, desc, price, imageUrl }) => (
  <div className="bg-white rounded-2xl shadow-lg border-2 border-[#0033A0]/10 overflow-hidden hover:border-[#D22027] transition-all group flex flex-col h-full text-left">
    <div className="h-52 relative overflow-hidden bg-[#0033A0]">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-110" />
      {tag && <span className="absolute top-4 left-4 bg-[#00843D] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow-md">{tag}</span>}
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-[#0033A0] mb-1">{title}</h3>
      <p className="text-[10px] font-bold text-[#00843D] mb-4 uppercase tracking-widest">{subtitle}</p>
      <div className="flex gap-4 text-[11px] text-[#D22027] mb-5 font-bold">
        <span className="flex items-center gap-1.5"><Clock size={14} /> 5 horas</span>
        <span className="flex items-center gap-1.5"><Video size={14} /> 8 videos</span>
        <span className="flex items-center gap-1.5"><BarChart size={14} /> {level}</span>
      </div>
      <p className="text-[#0033A0]/70 font-medium text-sm mb-6 line-clamp-3 leading-relaxed">{desc}</p>
      <div className="mt-auto pt-5 border-t border-[#0033A0]/10 flex justify-between items-center">
        <button className="text-[#D22027] font-bold text-sm flex items-center gap-2 hover:text-[#00843D] transition-colors group/btn">Saber más <CircleArrowOutUpRight size={16} /></button>
        {price && <span className="text-lg font-black text-[#0033A0]">{price}</span>}
      </div>
    </div>
  </div>
);

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const testimonials = [
    { name: "José Luis Ramírez", role: "Ingresante UNI", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcfU_IasEP4H6oL6hUEacimm0ytuABZhP9A&s", text: "La academia superó mis expectativas. La resolución de problemas es clara y los simulacros ayudaron mucho." },
    { name: "Miguel Angel García", role: "Estudiante de Ingeniería", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFK2yUOq5H3qDxBEuiBJJN9e-qqU-dWztLQ&s", text: "Los módulos de cálculo y álgebra están muy bien estructurados y los profesores tienen un gran nivel." },
    { name: "Carmen Torres", role: "Ingresante San Marcos", imageUrl: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D", text: "La metodología es práctica y directa, ideal para dominar los ejercicios más complejos del examen." }
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md border-b-4 border-[#00843D] sticky top-0 z-50">
        {/* LOGO AGRANDADO */}
        <img src={logo} alt="GenioMath" className="h-16 md:h-20 transition-all duration-300 object-contain" /> 
        <div className="flex gap-4">
          <Button variant="outline" className="border-2 border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white font-bold" onClick={() => navigate('/login')}>Iniciar sesión</Button>
          <Button variant="primary" className="bg-[#D22027] hover:bg-[#00843D] text-white font-bold flex items-center gap-2 transition-colors duration-300" onClick={() => navigate('/register')}>Registrarse <CircleArrowOutUpRight size={18} /></Button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative bg-[#0033A0] text-white min-h-[600px] flex items-center overflow-hidden border-b-8 border-[#D22027]"
        style={{ backgroundImage: `url(${Banner})`, backgroundSize: '85%', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0033A0] via-[#0033A0]/90 to-[#00843D]/40"></div>
        <div className="container mx-auto px-8 relative z-10 text-left">
          <div className="max-w-2xl">
            <span className="bg-[#00843D] text-white text-[11px] font-black px-4 py-1.5 rounded uppercase tracking-widest shadow-lg">Preparación preuniversitaria de élite</span>
            <h1 className="text-5xl md:text-6xl font-black mt-6 leading-tight text-white drop-shadow-md">Domina los números y asegura tu ingreso: empieza con Álgebra</h1>
            <p className="mt-6 text-lg text-white/90 font-medium max-w-xl leading-relaxed">Regístrate y accede sin costo a nuestro primer módulo de preparación intensiva.</p>
            <Button onClick={() => navigate('/register')} className="mt-8 px-8 py-4 bg-[#D22027] hover:bg-[#00843D] flex items-center gap-2 text-lg font-bold border-none text-white shadow-[0_0_15px_rgba(210,32,39,0.5)] hover:shadow-[0_0_15px_rgba(0,132,61,0.5)] transition-all">Inscríbete gratis y prepárate <CircleArrowOutUpRight size={20} /></Button>
          </div>
        </div>
      </header>

      {/* --- BENEFICIOS --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-black text-[#0033A0] mb-16 text-left border-l-8 border-[#00843D] pl-4">Tu camino a la universidad, en un solo lugar</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <FeatureCard icon="📐" title="Aprende de expertos" desc="Clases dictadas por ingenieros y matemáticos con experiencia preuniversitaria." />
            <FeatureCard icon="🏆" title="Simulacros de examen" desc="Mide tu rendimiento constantemente con pruebas tipo admisión." />
            <FeatureCard icon="💻" title="Estudia a tu ritmo" desc="Repasa la teoría y resolución de problemas desde cualquier dispositivo." />
          </div>
        </div>
      </section>

      {/* --- VIDEO CARACTERÍSTICAS --- */}
      {/* --- VIDEO CARACTERÍSTICAS --- */}
      <section 
        className="relative min-h-[600px] flex items-center bg-[#0033A0] py-20 overflow-hidden border-y-8 border-[#00843D]" 
        style={{ 
          backgroundImage: `url(${bgFeatures})`, 
          backgroundBlendMode: 'overlay',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center text-left">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6 text-left">Métodos de enseñanza que marcan la diferencia</h2>
            <ul className="grid gap-y-6 mb-10 text-left font-bold text-lg">
              {["Ejercicios resueltos paso a paso", "Clases teóricas y prácticas en video 24/7", "Asesoría continua en foros"].map((feature, index) => (
                <li key={index} className="flex items-center gap-4 bg-[#00843D]/20 p-3 rounded-lg"><CheckCircle2 className="text-[#D22027] w-8 h-8" />{feature}</li>
              ))}
            </ul>
            <Button className="bg-[#D22027] hover:bg-white hover:text-[#D22027] text-white font-black border-none px-10 py-4 shadow-xl" onClick={() => navigate('/register')}>Únete de manera gratuita</Button>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(210,32,39,0.3)] bg-black border-4 border-[#D22027]">
              {/* AQUÍ SE ACTUALIZÓ EL ENLACE DEL VIDEO */}
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/0d5VWxcSUIk" title="1. ESTO ES LO QUE DEBES SABER DE MATEMÁTICAS ANTES DE ENTRAR A LA UNIVERSIDAD." allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- NUESTROS CURSOS --- */}
      <section className="py-24 bg-[#00843D]/5 text-left">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-black text-[#D22027] mb-4 text-left drop-shadow-sm">Nuestros Módulos</h2>
          <p className="text-[#0033A0] font-bold text-lg mb-16 text-left">Encuentra el nivel ideal para potenciar tus habilidades matemáticas.</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 text-left">
            <CourseCard tag="Gratuito" title="Álgebra Básica" subtitle="Fundamentos y Ecuaciones" level="Básico" imageUrl="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=2070" desc="Aprende las bases fundamentales para resolver cualquier tipo de ecuación." />
            <CourseCard title="Geometría Analítica" subtitle="Vectores y Cónicas" level="Intermedio" price="s/.20,00" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5wiv8P4xWcj6_eWItyuj9oCsW6_s85K-5A&s" desc="Comprende el espacio y las formas con un enfoque analítico y preciso." />
            <CourseCard title="Cálculo Diferencial" subtitle="Límites y Derivadas" level="Avanzado" price="s/.20,00" imageUrl="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070" desc="Prepárate para los retos universitarios con nuestro módulo de cálculo avanzado." />
          </div>
        </div>
      </section>

      {/* --- NOSOTROS (Fondo Verde Predominante) --- */}
      <section 
        className="relative min-h-[600px] flex items-center bg-[#00843D] py-20 border-t-8 border-[#D22027]" 
        style={{ 
          backgroundImage: `url(${medicosExperiencia})`, 
          backgroundBlendMode: 'soft-light',
          backgroundSize: 'contain', /* Muestra la imagen completa sin hacer zoom/recorte */
          backgroundRepeat: 'no-repeat', /* Evita que la imagen se duplique */
          backgroundPosition: 'center' /* Centra la imagen en la sección */
        }}
      >
        <div className="container mx-auto px-8 relative z-10 flex justify-end text-left">
          <div className="lg:w-1/2 text-left bg-[#00843D]/90 p-10 rounded-3xl shadow-2xl backdrop-blur-sm border-2 border-white/20">
            <span className="bg-[#D22027] text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded">Nosotros</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mt-6 mb-8 text-left leading-tight">Calidad respaldada por nuestra experiencia docente</h2>
            <p className="text-white/90 text-lg mb-12 text-left font-medium leading-relaxed">GenioMath se distingue por su compromiso en la formación de estudiantes analíticos y preparados para el éxito universitario.</p>
            <div className="flex gap-12 pt-8 border-t border-white/30 text-left">
              <div className="flex flex-col"><span className="text-5xl font-black text-[#0033A0] drop-shadow-md">+ 10</span><span className="text-white font-bold text-xs mt-2 uppercase tracking-wider text-left">Años educando</span></div>
              <div className="flex flex-col"><span className="text-5xl font-black text-[#0033A0] drop-shadow-md">+1000</span><span className="text-white font-bold text-xs mt-2 uppercase tracking-wider text-left">Alumnos ingresantes</span></div>
            </div>
          </div>
        </div>
      </section>

       {/* --- TESTIMONIOS --- */}
      <section className="py-28 bg-[#0033A0]/5 text-center">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-[#00843D] mb-20 text-center drop-shadow-sm">Experiencias de nuestros futuros cachimbos</h2>
          <div className="flex flex-col md:flex-row gap-6 items-stretch max-w-7xl mx-auto min-h-[500px] text-center">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} data={t} isActive={activeTestimonial === index} onClick={() => setActiveTestimonial(index)} />
            ))}
          </div>
        </div>
      </section>

     {/* --- SECCIÓN: PREPARACIÓN CON RESPALDO --- */}
      <section 
        className="w-full relative overflow-hidden flex items-center justify-center text-center bg-[#0033A0]/5"
        style={{ 
          backgroundImage: `url(${fondoCurvo})`, 
          backgroundSize: '100% 100%', 
          backgroundPosition: 'center',
          minHeight: '950px', 
          paddingTop: '280px', 
          paddingBottom: '100px'
        }}
      >
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-[#D22027] text-5xl lg:text-7xl font-black mb-10 text-center drop-shadow-md">Preparación con respaldo</h2>
          <p className="text-[#0033A0] text-lg lg:text-2xl mb-28 max-w-3xl mx-auto text-center font-bold">Nuestros alumnos logran ingresar a las mejores universidades del país gracias a nuestra currícula actualizada.</p>
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 lg:gap-6 w-full max-w-6xl text-center">
            {[
              { name: "UNMSM", url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/UNMSM_coatofarms_seal.svg" },
              { name: "UNI", url: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Uni-logo_transparente_granate.png" },
              { name: "UNAC", url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Universidad-nacional-del-callao.png" },
              { name: "UNALM", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Unalm_logo.png" },
              { name: "La Cantuta", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Escudo_UNE.png" }
            ].map((uni, index) => (
              <div key={index} className="bg-white p-4 rounded-[2rem] shadow-[0_15px_40px_rgba(0,51,160,0.15)] flex-1 min-w-[150px] max-w-[200px] h-36 lg:h-40 flex flex-col items-center justify-center transform hover:-translate-y-3 transition-all duration-500 border-b-8 border-[#00843D] hover:border-[#D22027]">
                {/* Imagen del logo de la universidad */}
                <img src={uni.url} alt={`Logo ${uni.name}`} className="w-full h-16 object-contain mb-3" />
                {/* Texto de respaldo */}
                <span className="text-[#0033A0] font-black text-sm uppercase text-center tracking-wider">{uni.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
 {/* --- INSTRUCTORES --- */}
      <section className="py-24 bg-white text-left">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-[#0033A0] mb-20 text-left border-l-8 border-[#D22027] pl-4">Formación impartida por expertos en ciencias exactas</h2>
          
          <div className="grid md:grid-cols-3 gap-16 text-left">
            {[
              {
                nombre: "Mg. Luis García",
                especialidad: "Magíster en Matemáticas Puras",
                descripcion: "Especialista en Álgebra Avanzada y resolución de problemas tipo admisión UNI.",
                foto: "https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2024/12/06/17335130482947.jpg"
              },
              {
                nombre: "Ing. Elena Rivas",
                especialidad: "Ingeniera Civil / Trigonometría",
                descripcion: "Experta en Geometría y Trigonometría con más de 10 años preparando postulantes a San Marcos.",
                foto: "https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2024/12/06/17335130482947.jpg"
              },
              {
                nombre: "Prof. Carlos Huamán",
                especialidad: "Especialista en Raz. Matemático",
                descripcion: "Creador de métodos de resolución rápida para exámenes de admisión de alta exigencia.",
                foto: "https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2024/12/06/17335130482947.jpg"
              }
            ].map((instructor, i) => (
              <div key={i} className="flex flex-col items-start group">
                <div className="relative mb-8">
                  {/* Círculo verde de fondo en hover */}
                  <div className="absolute inset-0 bg-[#00843D] rounded-full scale-110 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Imagen del instructor desde URL */}
                  <img 
                    src={instructor.foto} 
                    alt={instructor.nombre} 
                    className="relative z-10 w-40 h-40 rounded-full object-cover border-4 border-[#0033A0] shadow-xl group-hover:border-[#D22027] transition-all duration-300" 
                  />
                </div>
                
                <h3 className="text-2xl font-black text-[#0033A0] mb-1">{instructor.nombre}</h3>
                
                <p className="text-[#00843D] font-bold text-sm mb-4 uppercase tracking-wider bg-[#00843D]/10 px-3 py-1 rounded">
                  {instructor.especialidad}
                </p>
                
                <p className="text-[#0033A0]/80 font-medium text-sm leading-relaxed text-left">
                  {instructor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
     

      {/* --- IMAGEN PIE --- */}

      {/* --- FOOTER FINAL --- */}
      <footer className="bg-[#0033A0] pt-16 pb-12 text-white text-center border-t-8 border-[#00843D]">
        <div className="container mx-auto px-10 text-center">
          {/* LOGO AGRANDADO */}
          <div className="flex justify-center mb-14 text-center">
            <img src={logo} alt="GenioMath Logo" className="h-32 md:h-40 bg-white/10 p-4 rounded-xl backdrop-blur-sm object-contain transition-all duration-300" />
          </div>
          <div className="w-full h-[2px] bg-gradient-to-r from-[#D22027] via-[#00843D] to-[#D22027] mb-10 text-center"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center">
            <div className="text-sm font-bold opacity-90 flex flex-wrap justify-center gap-2 text-center">
              <span>Copyright © 2025 GenioMath. Todos los derechos reservados</span>
              <span className="hidden md:inline text-[#00843D]">•</span>
              <a href="/terminos" className="hover:text-[#D22027] transition-colors">Términos y condiciones</a>
            </div>
            <div className="flex items-center gap-6 text-center">
              <a href="#" className="bg-[#D22027] p-2 rounded-full hover:bg-[#00843D] transition-colors"><Facebook size={20} fill="white" strokeWidth={0} /></a>
              <a href="#" className="bg-[#D22027] p-2 rounded-full hover:bg-[#00843D] transition-colors"><Instagram size={20} color="white" /></a>
              <a href="#" className="bg-[#D22027] p-2 rounded-full hover:bg-[#00843D] transition-colors"><Linkedin size={20} fill="white" strokeWidth={0} /></a>
              <a href="#" className="bg-[#D22027] p-2 rounded-full hover:bg-[#00843D] transition-colors"><Youtube size={20} fill="white" strokeWidth={0} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
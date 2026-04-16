import React from 'react'

const VARIANT_STYLES = {
    // Azul institucional (#0033A0) con hover más oscuro
    primary: 'bg-[#0033A0] hover:bg-[#002880] text-white focus:ring-[#0033A0]', 
    
    // El secundario lo mantenemos neutral para no saturar la interfaz
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400', 
    
    // Verde institucional (#00843D) con hover más oscuro
    success: 'bg-[#00843D] hover:bg-[#006A31] text-white focus:ring-[#00843D]', 
    
    // Rojo institucional (#D22027) con hover más oscuro
    danger: 'bg-[#D22027] hover:bg-[#A81A1F] text-white focus:ring-[#D22027]', 
    
    // Borde y texto en azul institucional, con un fondo muy suave al hacer hover
    outline: 'bg-transparent border border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10 focus:ring-[#0033A0]' 
}

const Button = ({
    label,
    children,
    variant = 'primary',
    className = '',
    style,
    type = 'button',
    onClick,
    ...props
}) => {
    const content = children ?? label
    const variantClass = VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary
    const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variantClass} ${className}`.trim()}
            style={style}
            {...props}
        >
            {content}
        </button>
    )
}

export default Button
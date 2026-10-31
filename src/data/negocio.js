// ============================================
// DATOS DEL NEGOCIO
// Estudio Kaze · Peluquería de autor
// ============================================

export const negocio = {
    negocio: {
        nombre: "Estudio Kaze",
        tipo: "Peluquería de autor y estética sostenible",
        eslogan: "Tu estilo en calma, respetando la salud de tu cabello.",
        descripcionCorta: "Peluquería orgánica, tratamientos capilares de autor y estilismo neutro en Candelaria del Monte.",
        descripcionLarga: "Estudio Kaze nace para romper con el ruido de las peluquerías tradicionales. En un espacio luminoso y minimalistamente diseñado, ofrecemos cortes de precisión, coloración 100% vegana a base de barros y plantas, y rituales de hidratación natural. Atendemos con cita previa individualizada para garantizar que cada cliente viva una experiencia relajante y verdaderamente personalizada.",
        añoFundacion: 2023,
        ciudad: "Candelaria del Monte",
        provincia: "Girona"
    },
    contacto: {
        direccion: "Calle de la Font, 8, Bajo B, 17820 Candelaria del Monte, Girona",
        telefono: "+34 972 88 19 04",
        email: "hola@estudiokaze.es",
        redesSociales: {
            instagram: "@estudiokaze.hair",
            facebook: "",
            tiktok: "@estudiokaze"
        },
        horario: {
            lunes: "Cerrado por descanso",
            martes: "10:00 - 19:00",
            miercoles: "10:00 - 19:00",
            jueves: "10:00 - 20:00",
            viernes: "09:30 - 20:00",
            sabado: "09:00 - 15:00",
            domingo: "Cerrado"
        },
        googleMaps: {
            latitud: 42.1183,
            longitud: 2.7541,
            enlace: "https://maps.google.com/?q=Calle+de+la+Font+8+Candelaria+del+Monte"
        }
    },
    diseno: {
        colores: {
            primario: "#1F221E",
            secundario: "#A4B097",
            fondo: "#F5F3EF",
            texto: "#2B2B2B"
        },
        tipografia: {
            titulos: "Syne",
            cuerpo: "Plus Jakarta Sans"
        },
        estiloVisual: "Estética 'Japandi' y escandinava contemporánea. Espacios limpios, tonos salvia y piedra, tipografía moderna con personalidad, fotografías editoriales y uso sutil de espacios en blanco.",
        referencias: [
            "Salón de belleza escandinavo o japonés",
            "Marcas de cosmética vegana y clean beauty",
            "Minimalismo contemporáneo"
        ]
    },
    contenido: {
        hero: {
            titulo: "Tu cabello, tu identidad. Sin artificios.",
            subtitulo: "Peluquería de autor y coloración orgánica en un espacio diseñado para desconectar.",
            textoBoton: "Reserva tu cita online",
            imagenDescripcion: "Plano medio editorial de una persona con corte de pelo bob texturizado, mirando hacia una luz natural suave, dentro de un salón minimalista con plantas de interior y paredes de microcemento."
        },
        sobreNosotros: {
            titulo: "Una visión consciente de la peluquería",
            texto: "Huimos de las prisas y de los productos químicos agresivos. Creemos en realzar la belleza natural de cada textura capilar mediante técnicas de corte en seco y tintes vegetales respetuosos con el cuero cabelludo y el medio ambiente.",
            imagenDescripcion: "Primer plano estilizado de unas manos aplicando un tratamiento capilar cremoso sobre un mechón de cabello, rodeado de frascos de cristal ámbar."
        },
        productos: [
            {
                nombre: "Champú Sólido Purificante Kaze",
                descripcion: "Elaborado con arcilla verde, té matcha y aceite de jojoba. Sin sulfatos ni plásticos, ideal para cuero cabelludo sensible.",
                precio: "16,00 €",
                imagenDescripcion: "Pastilla de champú sólido verde oliva sobre un jabonero de piedra caliza con gotas de agua."
            },
            {
                nombre: "Sérum Nutritivo Botánico 50ml",
                descripcion: "Mezcla de aceites prensados en frío (argán, camelia y maracuyá) para sellar puntas y aportar brillo natural sin apelmazar.",
                precio: "28,50 €",
                imagenDescripcion: "Botella de cristal ámbar con cuentagotas sobre un fondo neutro de lino beige."
            }
        ],
        servicios: [
            {
                nombre: "Corte de Autor & Styling",
                descripcion: "Diagnóstico capilar previo, lavado con masaje craneal relajante, corte adaptado a tu morfología y peinado natural.",
                precio: "Desde 42,00 €"
            },
            {
                nombre: "Coloración Botánica con Barros",
                descripcion: "Tinte a base de plantas y arcillas 100% orgánicas que aporta reflejos luminosos, cubre canas y engrosa la fibra capilar.",
                precio: "Desde 65,00 €"
            },
            {
                nombre: "Ritual Detox & Hidratación Profunda",
                descripcion: "Exfoliación suave del cuero cabelludo combinada con mascarilla de vapor de aceites esenciales para regenerar el cabello dañado.",
                precio: "50,00 €"
            }
        ],
        galeria: [
            { descripcion: "Zona de lavado del salón con lavacabezas ergonómicos y luz cálida indirecta." },
            { descripcion: "Detalle de una melena con ondas naturales y balayage sutil en tonos avellana." },
            { descripcion: "Estantería de madera clara con productos de cosmética botánica en frascos de vidrio." }
        ],
        testimonios: [
            {
                nombre: "Sofía Ribas",
                texto: "Un oasis en el pueblo. Es la primera vez que un estilista entiende mi rizo natural sin querer alisarlo a toda costa. El trato es impecable.",
                valoracion: 5
            },
            {
                nombre: "Lucas Marcet",
                texto: "Iba buscando un cambio de look moderno pero discreto y acertaron de lleno. El local es impresionante y la tranquilidad que se respira no tiene precio.",
                valoracion: 5
            }
        ],
        preguntasFrecuentes: [
            {
                pregunta: "¿Es necesario pedir cita previa?",
                respuesta: "Sí, trabajamos exclusivamente con cita previa para dedicar a cada persona el tiempo y la atención que merece sin esperas ni aglomeraciones."
            },
            {
                pregunta: "¿La coloración vegetal cubre bien las canas?",
                respuesta: "Sí, los barros orgánicos pigmentan la cana integrándola como un reflejo natural hiperrealista, aportando mucho más brillo y cuerpo que un tinte convencional."
            }
        ]
    },
    equipo: [
        {
            nombre: "Aina Font",
            rol: "Fundadora y Directora Creativa",
            descripcion: "Especialista en cortes en seco y técnicas de coloración orgánica con más de 10 años de experiencia en estudios boutique de Barcelona.",
            imagenDescripcion: "Retrato moderno de una joven con peinado corto contemporáneo, camiseta negra básica y tijeras en la mano."
        },
        {
            nombre: "Pol Terradas",
            rol: "Estilista y Especialista en Tricología",
            descripcion: "Experto en diagnóstico del cuero cabelludo, masajes capilares y texturizado natural para cabellos rizados y ondulados.",
            imagenDescripcion: "Chico joven vistiendo un delantal de lino verde oliva, sonriendo frente al espejo del estudio."
        }
    ],
    legal: {
        avisoLegal: "En cumplimiento de la LSSI-CE, se informa que Estudio Kaze S.L. es titular del presente sitio web. Contacto administrativo disponible en el apartado de contacto.",
        politicaPrivacidad: "Tus datos personales y de reserva serán tratados respetando el RGPD exclusivamente para la prestación del servicio de cita previa y comunicaciones del estudio.",
        politicaCookies: "Utilizamos cookies analíticas anónimas y funcionales para asegurar la mejor experiencia de usuario en nuestra plataforma de reservas."
    },
    extras: {
        logoDescripcion: "Logotipo tipográfico moderno en minúsculas 'kaze' con tipografía sans-serif geométrica y de trazo ancho, acompañado de la coletilla 'estudio capilar' en letras finas.",
        faviconDescripcion: "Monograma abstracto con la letra 'k' estilizada en un círculo de color verde salvia (#A4B097).",
        imagenesNecesarias: [
            "Hero: Retrato editorial de corte bob en salón de microcemento",
            "Sobre nosotros: Manos aplicando tratamiento sobre melena",
            "Productos: Champú sólido sobre piedra",
            "Productos: Frasco ámbar de sérum en lino",
            "Servicios: Detalle de coloración en tonos avellana",
            "Galería: Zona de lavado minimalista",
            "Equipo: Retratos individuales de Aina y Pol"
        ]
    }
};
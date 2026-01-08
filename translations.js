// =====================================================
// SARBAXIO - Multi-Language System
// Languages: English (US), Greek, Spanish
// =====================================================

const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            services: "Services",
            landingpage: "Landing Page",
            ai: "AI Application",
            about: "About",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            title: "Welcome to",
            brand: "SARBAXIO",
            subtitle: "A Dynamic Group of Expert Developers",
            description: "We're a network of specialized freelance developers working together to deliver exceptional digital solutions. From websites to social media platforms, we've got you covered.",
            cta1: "Our Services",
            cta2: "Meet the Team"
        },
        
        // Services Section
        services: {
            title: "Our Services",
            subtitle: "Comprehensive solutions for your digital presence",
            items: {
                webdev: {
                    title: "Website Development",
                    description: "Custom websites tailored to your needs. Responsive design, modern frameworks, and pixel-perfect execution.",
                    features: ["Custom Design", "Responsive Layout", "SEO Optimized", "Fast Loading"]
                },
                wordpress: {
                    title: "WordPress Service & Support",
                    description: "Complete WordPress solutions. From setup to maintenance, we handle everything WordPress-related.",
                    features: ["Theme Development", "Plugin Integration", "Security & Updates", "Performance Optimization"]
                },
                socialmedia: {
                    title: "Social Media Development",
                    description: "Build engaging social platforms and communities. Custom features, scalable architecture, real-time interactions.",
                    features: ["Platform Development", "Real-time Features", "User Management", "Analytics Integration"]
                },
                ai: {
                    title: "AI Applications",
                    description: "Cutting-edge AI solutions that automate and optimize your business processes. Custom AI development for your needs.",
                    features: ["Chatbots & Assistants", "Predictive Analytics", "Machine Learning", "AI Integration"]
                },
                marketing: {
                    title: "Digital Marketing",
                    description: "Strategic marketing that increases your online presence. Campaign management, social media marketing, and content strategy.",
                    features: ["Social Media Marketing", "Content Marketing", "PPC Campaigns", "Analytics & Reporting"]
                },
                seo: {
                    title: "SEO Optimization",
                    description: "Search engine optimization that brings organic traffic. Technical SEO, on-page optimization, and link building strategies.",
                    features: ["Keyword Research", "Technical SEO Audit", "On-Page Optimization", "Link Building"]
                },
                email: {
                    title: "Email Marketing",
                    description: "Personalized email campaigns that convert. Automation, segmentation, and A/B testing for optimal results.",
                    features: ["Email Automation", "Newsletter Design", "List Segmentation", "Performance Tracking"]
                }
            },
            cta: "Learn More"
        },
        
        // Professional Landing Page Section
        landingpage: {
            title: "Professional Landing Page",
            subtitle: "Your Custom Website in 24 Hours",
            description: "Get a professionally designed landing page tailored to your needs. Perfect for freelancers, businesses, artists, or product launches. Custom domain support included. Everything you need to establish your online presence.",
            features: {
                custom: "Custom Design",
                fast: "24-Hour Delivery",
                domain: "Custom Domain Support",
                responsive: "Mobile Responsive"
            },
            viewdemos: "View Live Demos",
            cta: "Get Started Now"
        },
        
        // About Section
        about: {
            title: "Why Choose SARBAXIO?",
            lead: "We're not just a company - we're a dynamic group of freelance professionals collaborating to provide you with the best solutions!",
            description: "Our model is simple and effective: We receive your project, assign it to the most suitable specialized developer, complete it with speed and quality, and deliver it with full guarantee. This ensures fast delivery, expertise, and competitive prices.",
            workflow: {
                step1: { title: "Receive", description: "Your project and requirements" },
                step2: { title: "Assign", description: "To the specialist with the right expertise" },
                step3: { title: "Complete", description: "With fast and quality results" },
                step4: { title: "Deliver", description: "With full guarantee and support" }
            },
            features: {
                speed: { title: "Fast Delivery", description: "Our network of specialists ensures quick results" },
                guarantee: { title: "Full Guarantee", description: "We provide complete guarantee and support for every project" },
                network: { title: "Expert Network", description: "We work with the best freelancers in the market" },
                support: { title: "Permanent Support", description: "Whatever happens in the future, we'll always be here for you" }
            }
        },
        
        // Contact Section
        contact: {
            title: "Get In Touch",
            subtitle: "We're here to help you achieve your goals",
            info: {
                phone: { title: "Phone / Telegram", value: "+520 994 8857" },
                email: { title: "Email", value: "info@sarbaxio.com" }
            },
            social: "Follow Us",
            form: {
                name: "Name",
                email: "Email",
                phone: "Phone",
                service: "Select Service",
                message: "Your message",
                submit: "Send Message",
                services: [
                    { value: "", text: "Select Service" },
                    { value: "webdev", text: "Website Development" },
                    { value: "wordpress", text: "WordPress Service" },
                    { value: "socialmedia", text: "Social Media Development" },
                    { value: "ai", text: "AI Applications" },
                    { value: "marketing", text: "Digital Marketing" },
                    { value: "seo", text: "SEO Optimization" },
                    { value: "email", text: "Email Marketing" }
                ]
            },
            notifications: {
                success: "Your message was sent successfully! We'll contact you soon.",
                error: "Please fill in all required fields",
                emailError: "Please enter a valid email address"
            }
        },
        
        // Footer
        footer: {
            copyright: "All rights reserved."
        },
        
        // Stats
        stats: {
            clients: "Satisfied Clients",
            projects: "Completed Projects",
            support: "Hours Support",
            awards: "Awards"
        }
    },
    
    gr: {
        // Navigation
        nav: {
            home: "Αρχική",
            services: "Υπηρεσίες",
            landingpage: "Landing Page",
            ai: "Εφαρμογή AI",
            about: "Σχετικά",
            contact: "Επικοινωνία"
        },
        
        // Hero Section
        hero: {
            title: "Καλώς ήρθατε στην",
            brand: "SARBAXIO",
            subtitle: "Ένα Δυναμικό Group Ειδικών Προγραμματιστών",
            description: "Είμαστε ένα δίκτυο εξειδικευμένων freelance προγραμματιστών που συνεργάζονται για να παρέχουν εξαιρετικές ψηφιακές λύσεις. Από websites έως social media platforms, σας καλύπτουμε.",
            cta1: "Οι Υπηρεσίες μας",
            cta2: "Γνωρίστε την Ομάδα"
        },
        
        // Services Section
        services: {
            title: "Οι Υπηρεσίες μας",
            subtitle: "Ολοκληρωμένες λύσεις για την ψηφιακή σας παρουσία",
            items: {
                webdev: {
                    title: "Κατασκευή Ιστοσελίδων",
                    description: "Προσαρμοσμένα websites για τις ανάγκες σας. Responsive σχεδιασμός, σύγχρονα frameworks, και άψογη εκτέλεση.",
                    features: ["Προσαρμοσμένο Design", "Responsive Layout", "SEO Βελτιστοποίηση", "Γρήγορη Φόρτωση"]
                },
                wordpress: {
                    title: "WordPress Service & Support",
                    description: "Ολοκληρωμένες λύσεις WordPress. Από εγκατάσταση έως συντήρηση, χειριζόμαστε τα πάντα.",
                    features: ["Ανάπτυξη Θεμάτων", "Ενσωμάτωση Plugins", "Ασφάλεια & Updates", "Βελτιστοποίηση"]
                },
                socialmedia: {
                    title: "Ανάπτυξη Social Media",
                    description: "Δημιουργία engaging social platforms και κοινοτήτων. Custom χαρακτηριστικά, scalable αρχιτεκτονική.",
                    features: ["Ανάπτυξη Πλατφόρμας", "Real-time Features", "Διαχείριση Χρηστών", "Analytics"]
                },
                ai: {
                    title: "AI Εφαρμογές",
                    description: "Καινοτόμες λύσεις AI που αυτοματοποιούν τις επιχειρηματικές διαδικασίες. Custom AI development.",
                    features: ["Chatbots & Assistants", "Predictive Analytics", "Machine Learning", "AI Integration"]
                },
                marketing: {
                    title: "Digital Marketing",
                    description: "Στρατηγικό μάρκετινγκ που αυξάνει την online παρουσία σας. Διαχείριση campaigns και content strategy.",
                    features: ["Social Media Marketing", "Content Marketing", "PPC Campaigns", "Analytics & Reporting"]
                },
                seo: {
                    title: "SEO Optimization",
                    description: "Βελτιστοποίηση για μηχανές αναζήτησης που φέρνει οργανική επισκεψιμότητα.",
                    features: ["Keyword Research", "Technical SEO Audit", "On-Page Optimization", "Link Building"]
                },
                email: {
                    title: "Email Marketing",
                    description: "Προσωποποιημένες email καμπάνιες που μετατρέπουν. Automation, segmentation και A/B testing.",
                    features: ["Email Automation", "Newsletter Design", "List Segmentation", "Performance Tracking"]
                }
            },
            cta: "Μάθετε Περισσότερα"
        },
        
        // Professional Landing Page Section
        landingpage: {
            title: "Professional Landing Page",
            subtitle: "Η Δική σας Ιστοσελίδα σε 24 Ώρες",
            description: "Αποκτήστε μια επαγγελματικά σχεδιασμένη landing page προσαρμοσμένη στις ανάγκες σας. Ιδανική για freelancers, επιχειρήσεις, καλλιτέχνες ή product launches. Υποστήριξη custom domain. Όλα όσα χρειάζεστε για να δημιουργήσετε την online παρουσία σας.",
            features: {
                custom: "Προσαρμοσμένο Design",
                fast: "Παράδοση σε 24 Ώρες",
                domain: "Υποστήριξη Custom Domain",
                responsive: "Mobile Responsive"
            },
            viewdemos: "Δείτε Live Demos",
            cta: "Ξεκινήστε Τώρα"
        },
        
        // About Section
        about: {
            title: "Γιατί να επιλέξετε την SARBAXIO?",
            lead: "Είμαστε ένα δυναμικό group ελεύθερων επαγγελματιών που συνεργάζονται!",
            description: "Το μοντέλο μας είναι απλό και αποτελεσματικό: Παραλαμβάνουμε την εργασία σας, την αναθέτουμε στον πιο κατάλληλο εξειδικευμένο προγραμματιστή, ολοκληρώνουμε με ταχύτητα και ποιότητα, και παραδίδουμε με πλήρη εγγύηση.",
            workflow: {
                step1: { title: "Παραλαμβάνουμε", description: "Την εργασία και τις απαιτήσεις" },
                step2: { title: "Προωθούμε", description: "Στον ειδικό με την κατάλληλη εξειδίκευση" },
                step3: { title: "Ολοκληρώνουμε", description: "Με γρήγορα και ποιοτικά αποτελέσματα" },
                step4: { title: "Παραδίδουμε", description: "Με πλήρη εγγύηση και υποστήριξη" }
            },
            features: {
                speed: { title: "Ταχύτητα Παράδοσης", description: "Το δίκτυο ειδικών εξασφαλίζει γρήγορα αποτελέσματα" },
                guarantee: { title: "Πλήρης Εγγύηση", description: "Παρέχουμε πλήρη εγγύηση και υποστήριξη για κάθε project" },
                network: { title: "Δίκτυο Ειδικών", description: "Συνεργαζόμαστε με τους καλύτερους freelancers" },
                support: { title: "Μόνιμη Υποστήριξη", description: "Οτιδήποτε συμβεί, θα είμαστε πάντα εδώ" }
            }
        },
        
        // Contact Section
        contact: {
            title: "Επικοινωνήστε μαζί μας",
            subtitle: "Είμαστε εδώ να σας βοηθήσουμε",
            info: {
                phone: { title: "Τηλέφωνο / Telegram", value: "+520 994 8857" },
                email: { title: "Email", value: "info@sarbaxio.com" }
            },
            social: "Ακολουθήστε μας",
            form: {
                name: "Όνομα",
                email: "Email",
                phone: "Τηλέφωνο",
                service: "Επιλέξτε Υπηρεσία",
                message: "Το μήνυμά σας",
                submit: "Αποστολή Μηνύματος",
                services: [
                    { value: "", text: "Επιλέξτε Υπηρεσία" },
                    { value: "webdev", text: "Κατασκευή Ιστοσελίδων" },
                    { value: "wordpress", text: "WordPress Service" },
                    { value: "socialmedia", text: "Social Media Development" },
                    { value: "ai", text: "AI Εφαρμογές" },
                    { value: "marketing", text: "Digital Marketing" },
                    { value: "seo", text: "SEO Optimization" },
                    { value: "email", text: "Email Marketing" }
                ]
            },
            notifications: {
                success: "Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε σύντομα.",
                error: "Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία",
                emailError: "Παρακαλώ εισάγετε έγκυρη διεύθυνση email"
            }
        },
        
        // Footer
        footer: {
            copyright: "Όλα τα δικαιώματα κατοχυρωμένα."
        },
        
        // Stats
        stats: {
            clients: "Ικανοποιημένοι Πελάτες",
            projects: "Ολοκληρωμένα Projects",
            support: "Ώρες Υποστήριξη",
            awards: "Βραβεία"
        }
    },
    
    es: {
        // Navigation
        nav: {
            home: "Inicio",
            services: "Servicios",
            landingpage: "Landing Page",
            ai: "Aplicación AI",
            about: "Acerca",
            contact: "Contacto"
        },
        
        // Hero Section
        hero: {
            title: "Bienvenido a",
            brand: "SARBAXIO",
            subtitle: "Un Grupo Dinámico de Desarrolladores Expertos",
            description: "Somos una red de desarrolladores freelance especializados trabajando juntos para ofrecer soluciones digitales excepcionales. Desde sitios web hasta plataformas de redes sociales, te tenemos cubierto.",
            cta1: "Nuestros Servicios",
            cta2: "Conoce al Equipo"
        },
        
        // Services Section
        services: {
            title: "Nuestros Servicios",
            subtitle: "Soluciones integrales para tu presencia digital",
            items: {
                webdev: {
                    title: "Desarrollo de Sitios Web",
                    description: "Sitios web personalizados adaptados a tus necesidades. Diseño responsive, frameworks modernos y ejecución perfecta.",
                    features: ["Diseño Personalizado", "Layout Responsive", "SEO Optimizado", "Carga Rápida"]
                },
                wordpress: {
                    title: "Servicio y Soporte WordPress",
                    description: "Soluciones WordPress completas. Desde configuración hasta mantenimiento, manejamos todo lo relacionado con WordPress.",
                    features: ["Desarrollo de Temas", "Integración de Plugins", "Seguridad y Actualizaciones", "Optimización"]
                },
                socialmedia: {
                    title: "Desarrollo de Redes Sociales",
                    description: "Construye plataformas sociales y comunidades atractivas. Características personalizadas, arquitectura escalable.",
                    features: ["Desarrollo de Plataforma", "Características en Tiempo Real", "Gestión de Usuarios", "Analytics"]
                },
                ai: {
                    title: "Aplicaciones de IA",
                    description: "Soluciones de IA de vanguardia que automatizan y optimizan tus procesos empresariales. Desarrollo personalizado de IA.",
                    features: ["Chatbots y Asistentes", "Analytics Predictivo", "Machine Learning", "Integración de IA"]
                },
                marketing: {
                    title: "Marketing Digital",
                    description: "Marketing estratégico que aumenta tu presencia online. Gestión de campañas, marketing en redes sociales y estrategia de contenido.",
                    features: ["Marketing en Redes Sociales", "Marketing de Contenido", "Campañas PPC", "Analytics e Informes"]
                },
                seo: {
                    title: "Optimización SEO",
                    description: "Optimización de motores de búsqueda que trae tráfico orgánico. SEO técnico, optimización on-page y estrategias de link building.",
                    features: ["Investigación de Palabras Clave", "Auditoría SEO Técnica", "Optimización On-Page", "Link Building"]
                },
                email: {
                    title: "Email Marketing",
                    description: "Campañas de email personalizadas que convierten. Automatización, segmentación y pruebas A/B para resultados óptimos.",
                    features: ["Automatización de Email", "Diseño de Newsletter", "Segmentación de Listas", "Seguimiento de Rendimiento"]
                }
            },
            cta: "Saber Más"
        },
        
        // Professional Landing Page Section
        landingpage: {
            title: "Professional Landing Page",
            subtitle: "Tu Sitio Web Personalizado en 24 Horas",
            description: "Obtén una landing page diseñada profesionalmente y adaptada a tus necesidades. Perfecta para freelancers, empresas, artistas o lanzamientos de productos. Soporte de dominio personalizado incluido. Todo lo que necesitas para establecer tu presencia online.",
            features: {
                custom: "Diseño Personalizado",
                fast: "Entrega en 24 Horas",
                domain: "Soporte de Dominio Personalizado",
                responsive: "Responsive Mobile"
            },
            viewdemos: "Ver Demos en Vivo",
            cta: "Comienza Ahora"
        },
        
        // About Section
        about: {
            title: "¿Por Qué Elegir SARBAXIO?",
            lead: "¡Somos un grupo dinámico de profesionales freelance colaborando para brindarte las mejores soluciones!",
            description: "Nuestro modelo es simple y efectivo: Recibimos tu proyecto, lo asignamos al desarrollador especializado más adecuado, lo completamos con rapidez y calidad, y lo entregamos con garantía completa.",
            workflow: {
                step1: { title: "Recibimos", description: "Tu proyecto y requisitos" },
                step2: { title: "Asignamos", description: "Al especialista con la experiencia adecuada" },
                step3: { title: "Completamos", description: "Con resultados rápidos y de calidad" },
                step4: { title: "Entregamos", description: "Con garantía completa y soporte" }
            },
            features: {
                speed: { title: "Entrega Rápida", description: "Nuestra red de especialistas asegura resultados rápidos" },
                guarantee: { title: "Garantía Completa", description: "Proporcionamos garantía completa y soporte para cada proyecto" },
                network: { title: "Red de Expertos", description: "Trabajamos con los mejores freelancers del mercado" },
                support: { title: "Soporte Permanente", description: "Pase lo que pase en el futuro, siempre estaremos aquí" }
            }
        },
        
        // Contact Section
        contact: {
            title: "Ponte en Contacto",
            subtitle: "Estamos aquí para ayudarte a alcanzar tus objetivos",
            info: {
                phone: { title: "Teléfono / Telegram", value: "+520 994 8857" },
                email: { title: "Email", value: "info@sarbaxio.com" }
            },
            social: "Síguenos",
            form: {
                name: "Nombre",
                email: "Email",
                phone: "Teléfono",
                service: "Seleccionar Servicio",
                message: "Tu mensaje",
                submit: "Enviar Mensaje",
                services: [
                    { value: "", text: "Seleccionar Servicio" },
                    { value: "webdev", text: "Desarrollo de Sitios Web" },
                    { value: "wordpress", text: "Servicio WordPress" },
                    { value: "socialmedia", text: "Desarrollo de Redes Sociales" },
                    { value: "ai", text: "Aplicaciones de IA" },
                    { value: "marketing", text: "Marketing Digital" },
                    { value: "seo", text: "Optimización SEO" },
                    { value: "email", text: "Email Marketing" }
                ]
            },
            notifications: {
                success: "¡Tu mensaje fue enviado exitosamente! Te contactaremos pronto.",
                error: "Por favor completa todos los campos requeridos",
                emailError: "Por favor ingresa una dirección de email válida"
            }
        },
        
        // Footer
        footer: {
            copyright: "Todos los derechos reservados."
        },
        
        // Stats
        stats: {
            clients: "Clientes Satisfechos",
            projects: "Proyectos Completados",
            support: "Horas de Soporte",
            awards: "Premios"
        }
    }
};

// Developer profiles (multilingual)
const developers = [
    {
        id: 1,
        name: "Alex Martinez",
        role: { en: "Full Stack Developer", gr: "Full Stack Developer", es: "Desarrollador Full Stack" },
        specialties: ["React", "Node.js", "MongoDB"],
        image: "placeholder", // Will use placeholder gradient
        description: {
            en: "10+ years of experience building scalable web applications",
            gr: "10+ χρόνια εμπειρίας στην κατασκευή scalable web εφαρμογών",
            es: "10+ años de experiencia construyendo aplicaciones web escalables"
        }
    },
    {
        id: 2,
        name: "Maria Papadopoulos",
        role: { en: "WordPress Specialist", gr: "WordPress Specialist", es: "Especialista en WordPress" },
        specialties: ["WordPress", "PHP", "WooCommerce"],
        image: "placeholder",
        description: {
            en: "Expert in WordPress customization and optimization",
            gr: "Ειδικός στην προσαρμογή και βελτιστοποίηση WordPress",
            es: "Experta en personalización y optimización de WordPress"
        }
    },
    {
        id: 3,
        name: "David Chen",
        role: { en: "AI/ML Engineer", gr: "AI/ML Engineer", es: "Ingeniero de IA/ML" },
        specialties: ["Python", "TensorFlow", "NLP"],
        image: "placeholder",
        description: {
            en: "Specialized in machine learning and AI integration",
            gr: "Εξειδίκευση σε machine learning και AI integration",
            es: "Especializado en machine learning e integración de IA"
        }
    },
    {
        id: 4,
        name: "Sofia Rodriguez",
        role: { en: "UI/UX Designer & Frontend Dev", gr: "UI/UX Designer & Frontend Dev", es: "Diseñadora UI/UX y Dev Frontend" },
        specialties: ["Figma", "React", "CSS/SASS"],
        image: "placeholder",
        description: {
            en: "Creating beautiful and intuitive user experiences",
            gr: "Δημιουργία όμορφων και intuitive user experiences",
            es: "Creando experiencias de usuario hermosas e intuitivas"
        }
    },
    {
        id: 5,
        name: "John Thompson",
        role: { en: "Social Media Platform Developer", gr: "Social Media Platform Developer", es: "Desarrollador de Plataformas Sociales" },
        specialties: ["Vue.js", "WebSocket", "Redis"],
        image: "placeholder",
        description: {
            en: "Building real-time social platforms and communities",
            gr: "Κατασκευή real-time social platforms και κοινοτήτων",
            es: "Construyendo plataformas sociales en tiempo real"
        }
    },
    {
        id: 6,
        name: "Elena Petrova",
        role: { en: "Digital Marketing & SEO Expert", gr: "Digital Marketing & SEO Expert", es: "Experta en Marketing Digital y SEO" },
        specialties: ["SEO", "Google Ads", "Analytics"],
        image: "placeholder",
        description: {
            en: "Driving traffic and conversions through strategic marketing",
            gr: "Αύξηση traffic και conversions με στρατηγικό marketing",
            es: "Impulsando tráfico y conversiones con marketing estratégico"
        }
    }
];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, developers };
}

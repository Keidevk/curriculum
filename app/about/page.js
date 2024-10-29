import Nav from "../components/nav.component";


export default function About() {
    return (
    <main className="text-white">
        <h2 className="font-semibold text-center mt-4 pb-4 text-2xl sm:mt-12 sm:pb-5 sm:text-5xl">Keinner Vera: Desarrollador Web Full-Stack</h2>
        <p className=" mx-4 sm:mx-6 sm:text-2xl">
        ¡Hola! Soy Keinner Vera, un apasionado desarrollador web con un fuerte enfoque en la creación de aplicaciones web innovadoras y funcionales. Mi experiencia abarca tanto el desarrollo frontend como backend, utilizando una variedad de tecnologías modernas para ofrecer soluciones eficientes y efectivas.
        </p>
        <h2 className="text-center font-semibold mt-4 pb-2 text-2xl  sm:mt-10 sm:pb-5 sm:text-5xl">Tecnologías y Herramientas</h2>
        <ul>
            <li className=" text-xl sm:text-2xl"><strong>Frontend:</strong>
                <ul className="text-left my-4">
                    <li>Reactjs y Nextjs: Especializado en la creación de interfaces de usuario dinámicas y optimizadas.</li>
                    <li>HTML5, CSS3, JavaScript: Dominio de los lenguajes fundamentales para la estructura y el estilo de la web.</li>
                    <li>Tailwind CSS: Experiencia en el uso de este framework para crear interfaces responsivas y personalizadas.</li>
                </ul>
            </li>
            <li className="text-xl sm:text-2xl"><strong>Backend:</strong>
                <ul className="text-left my-4">
                    <li>NestJs y Express: Desarrollo de robustas APIs RESTful y gestión de datos.</li>
                    <li>MongoDB: Manejo de bases de datos NoSQL para almacenamiento y recuperación eficiente de datos.</li>
                </ul>
            </li>
            <li className="text-xl sm:text-2xl"><strong>Herramientas y Pruebas:</strong>
                <ul className="text-left mt-4 mb-6">
                    <li>Vitest y Postman: Para pruebas automatizadas y manuales de APIs, asegurando la calidad y funcionalidad.</li>
                    <li>Node.js: Integración del backend con frontend para aplicaciones completas y funcionales.</li>
                </ul>
            </li>
        </ul>
    </main>
    )
}
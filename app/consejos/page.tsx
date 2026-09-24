import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consejos para jugar, aprender e imprimir | La Familia Etapeya',
  description: 'Ideas prácticas para organizar tardes sin pantallas, imprimir actividades infantiles y aprovechar cada juego en familia.',
  alternates: { canonical: '/consejos/' },
};

export default function ConsejosPage() {
  return <main className="content-page">
    <nav className="shell content-nav"><a className="brand" href="/"><span>LA FAMILIA</span><strong>ETAPEYA</strong></a><a href="/">← Volver a los packs</a></nav>
    <article className="content-wrap">
      <span className="eyebrow">GUÍA PARA FAMILIAS</span>
      <h1>Ideas para disfrutar más tiempo juntos</h1>
      <p>Las actividades imprimibles funcionan mejor cuando se convierten en una experiencia compartida. Estas recomendaciones están pensadas para madres, padres y cuidadores que buscan momentos entretenidos, sencillos y con menos pantallas.</p>
      <nav className="article-nav" aria-label="Contenido de la guía"><a href="#imprimir">Imprimir bien</a><a href="#sin-pantallas">Tarde sin pantallas</a><a href="#acompanar">Acompañar sin resolver</a></nav>

      <section id="imprimir"><h2>Cómo imprimir actividades infantiles en casa</h2><p>Antes de imprimir todo el archivo, prueba una sola página. Selecciona papel A4, escala al 100 % y orientación automática. Una prueba evita recortes inesperados y permite comprobar que los dibujos se ven claros.</p><h3>El papel adecuado</h3><p>El papel común de 75 u 80 gramos funciona para sopas de letras, retos y páginas de lectura. Para colorear con marcadores, puedes usar papel de mayor grosor y colocar una hoja de descarte debajo para proteger la mesa.</p><h3>Organiza el material</h3><p>No es necesario imprimir el pack completo de una vez. Escoge de tres a cinco páginas para cada sesión y guarda el resto para otra tarde. Puedes separar las actividades en sobres: colorear, pensar, leer y jugar.</p><h3>Reutiliza cuando sea posible</h3><p>Las páginas de retos pueden colocarse dentro de fundas transparentes y resolverse con marcadores borrables. Así varios integrantes de la familia pueden intentarlo y comparar sus soluciones sin gastar más papel.</p></section>

      <section id="sin-pantallas"><h2>Cómo preparar una tarde divertida sin pantallas</h2><p>No hace falta organizar un evento complicado. Reserva un espacio de 30 a 60 minutos, prepara lápices, colores y una bebida, y deja que cada persona elija una actividad. El objetivo no es terminar muchas páginas: es conversar y disfrutar el proceso.</p><h3>Empieza con una elección</h3><p>Cuando los niños pueden escoger entre colorear, resolver un reto o leer el cómic, sienten que la actividad también les pertenece. Ofrece pocas opciones claras para evitar que decidir se vuelva más difícil que jugar.</p><h3>Crea pequeños rituales</h3><p>Una canción al comenzar, una fotografía del resultado o una ronda para contar qué fue lo más divertido convierte una actividad sencilla en un recuerdo. Repetir el ritual cada semana ayuda a establecer un momento familiar esperado.</p><h3>Combina movimiento y mesa</h3><p>Después de una actividad sentada, incluye cinco minutos de movimiento: representar un personaje, buscar objetos de un color o inventar una pose. Alternar ritmos ayuda a conservar la atención y evita que la experiencia se sienta como una tarea escolar.</p></section>

      <section id="acompanar"><h2>Acompañar sin resolver por ellos</h2><p>En los retos de ingenio, la tentación de dar la respuesta es grande. En lugar de resolver, formula preguntas: “¿Qué información ya tenemos?”, “¿Qué ocurriría si probamos otra opción?” o “¿Qué parte parece más sencilla?”.</p><h3>Valora el intento</h3><p>Reconoce estrategias concretas, no solamente resultados: haber probado una idea nueva, pedir ayuda con claridad o volver a empezar. Esto enseña que equivocarse es parte natural del juego.</p><h3>Adapta sin presionar</h3><p>Las edades y ritmos son diferentes. Puedes leer instrucciones en voz alta, reducir la cantidad de palabras por buscar o trabajar en equipo. La adaptación no quita valor al reto; permite que todos participen con confianza.</p><h3>Cierra con una conversación</h3><p>Al terminar, pregunta qué actividad repetirían y cuál cambiarían. Sus respuestas ayudan a elegir las próximas páginas y también convierten a los niños en colaboradores de la experiencia familiar.</p></section>

      <div className="content-footer"><a href="/privacidad/">Política de privacidad</a><a href="/terminos/">Términos de uso</a><a href="https://www.facebook.com/Lafamiliaetapeya" target="_blank" rel="noreferrer">Contactar a la familia ↗</a></div>
    </article>
  </main>;
}

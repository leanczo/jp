export default function Cronograma() {
  const schedule = [
    {
      time: '10:00',
      title: 'Llegada de invitados',
      desc: 'Musica tranquila de fondo. Bebidas disponibles. Algunos sanguches de miga en la mesa.'
    },
    {
      time: '11:30',
      title: 'Picada / comida liviana',
      desc: 'Sacar empanadas, sandwich de miga y papas fritas. La gente empieza a comer algo.'
    },
    {
      time: '13:30',
      title: 'Comida principal - Pernil',
      desc: 'Servir el pernil con panes y aderezos. Mesa con pan, bandeja con carne y salsa criolla. Cada uno arma su sandwich.'
    },
    {
      time: '15:00',
      title: 'Juegos y entretenimiento',
      desc: 'Preguntas sobre el cumpleanero, verdadero o falso, competencia de baile. Duracion: 30-40 min.'
    },
    {
      time: '16:00',
      title: 'Segunda comida',
      desc: 'Sacar pizzas calientes y choripanes (si se decidio hacerlos). Funciona como merienda salada.'
    },
    {
      time: '17:30',
      title: 'Mesa dulce',
      desc: 'Sacar masas dulces, torta y candy bar. Momento ideal para fotos en el sector de fotos.'
    },
    {
      time: '18:00',
      title: 'Torta y fotos',
      desc: 'Cantar el feliz cumpleanos. Fotos con amigos y familia. Momento especial de la fiesta.'
    },
    {
      time: '19:00',
      title: 'Fin de la fiesta',
      desc: 'Despedida de invitados. Comenzar a ordenar y limpiar el salon.'
    },
  ]

  return (
    <div>
      <h2 className="section-title">⏰ Cronograma del dia</h2>

      <div className="card" style={{ marginBottom: 20, borderLeft: '4px solid var(--accent)' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          La clave es servir la comida por etapas para que no se termine todo al principio y la mesa siempre se vea llena.
        </p>
      </div>

      <div className="timeline">
        {schedule.map((item, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-time">{item.time} hs</div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-desc">{item.desc}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 16, borderLeft: '4px solid var(--warning)' }}>
        <h4 style={{ fontSize: '0.9rem', marginBottom: 8 }}>💡 Tips para el dia</h4>
        <ul style={{ paddingLeft: 18, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <li>No poner toda la comida junta - sacar de a poco</li>
          <li>Sacar gaseosas de a 10-12 botellas, no todas juntas</li>
          <li>Los juegos no deben durar mas de 30-40 minutos</li>
          <li>Tener musica tranquila al inicio y mas movida despues de comer</li>
          <li>Alguien debe encargarse del celular y la musica</li>
        </ul>
      </div>

      <div className="card" style={{ borderLeft: '4px solid var(--success)' }}>
        <h4 style={{ fontSize: '0.9rem', marginBottom: 8 }}>👥 Roles sugeridos (3-4 personas)</h4>
        <ul style={{ paddingLeft: 18, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <li><strong>Persona 1:</strong> Parrilla / comida caliente</li>
          <li><strong>Persona 2:</strong> Mesa de comida fria</li>
          <li><strong>Persona 3:</strong> Bebidas (reponer gaseosas, hielo)</li>
          <li><strong>Persona 4:</strong> Ayuda general / pizzas / horno</li>
        </ul>
      </div>
    </div>
  )
}

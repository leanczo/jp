export default function Recomendaciones() {
  const tips = [
    {
      icon: '❄️',
      title: 'Sin heladera: como mantener todo frio',
      items: [
        'Llevar 2-3 conservadoras grandes (una para bebidas, una para comida, una para hielo)',
        'Congelar botellas de agua y usarlas como hielo reutilizable',
        'Enfriar todas las gaseosas la noche anterior',
        'Armar una "pileta de hielo" con un fuenton grande: hielo + agua + botellas',
        'Las bebidas se enfrian mas rapido en hielo con agua que solo en hielo',
        'Usar el freezer SOLO para pizzas congeladas y bolsas de hielo'
      ]
    },
    {
      icon: '🍔',
      title: 'Cocina pequena: como organizarse',
      items: [
        'Llevar la mayor cantidad de comida ya preparada',
        'Solo calentar pizzas y empanadas en el horno',
        'El pernil puede ir ya cocido, solo calentar',
        'Si hacen choripanes, la parrilla esta afuera (no necesita cocina)',
        'Papas fritas: mejor llevarlas ya fritas o usar congeladas al horno'
      ]
    },
    {
      icon: '🎵',
      title: 'Sin DJ: como resolver la musica',
      items: [
        'Parlante grande con buena bateria (o extension)',
        'Playlist de Spotify de 6-7 horas preparada con anticipacion',
        'Musica tranquila al inicio (cumbia suave, pop)',
        'Musica mas movida despues de comer (reggaeton, cumbia)',
        'Musica divertida para los juegos',
        'Designar a alguien que controle la musica'
      ]
    },
    {
      icon: '📸',
      title: 'Sector de fotos economico',
      items: [
        'Arco de globos en una pared o arbol',
        'Cortina de luces calidas de fondo',
        'Cartel con "18" o el nombre de Juan Pablo',
        'Plantas o flores como decoracion',
        'Aprovechar el jardin para fotos con luz natural',
        'Las fotos al atardecer (17-18hs) quedan espectaculares'
      ]
    },
    {
      icon: '🚻',
      title: 'Solo 2 banos: como manejarlo',
      items: [
        'Asegurarse de que funcionen bien antes del evento',
        'Tener papel higienico extra preparado',
        'Poner un cartel amable pidiendo cuidar los banos',
        'Para fiesta de dia y tranquila, 2 banos pueden funcionar'
      ]
    },
    {
      icon: '🌧️',
      title: 'Plan B por lluvia',
      items: [
        'Preguntar si hay espacio cubierto (galeria, quincho)',
        'Tener un gazebo o toldo por si acaso',
        'Si llueve, la comida y bebida van adentro',
        'Los juegos pueden hacerse bajo techo',
        'Las luces quedan igual de lindas adentro'
      ]
    },
    {
      icon: '💰',
      title: 'Desglose de costos del salon',
      items: [
        'Salon: $320.000',
        'Decoracion + candy bar: $120.000',
        'Juegos: $50.000',
        'Total salon: $490.000',
        'Aprox $7.000 por persona solo por el lugar',
        'Recordar: la comida, bebida y extras son aparte'
      ]
    },
    {
      icon: '📦',
      title: 'Caja de emergencia (no olvidar!)',
      items: [
        'Encendedor',
        'Cinta adhesiva',
        'Tijera',
        'Servilletas extra',
        'Bolsas de basura',
        'Papel aluminio',
        'Marcador',
        'Pinzas para servir',
        'Repasadores'
      ]
    },
    {
      icon: '🎮',
      title: 'Ideas de juegos para 70 personas',
      items: [
        'Preguntas sobre Juan Pablo (amigos responden cosas divertidas)',
        'Verdadero o falso con historias del cumpleanero',
        'Competencia de baile',
        'No durar mas de 30-40 minutos para que no se cansen',
        'Tener premios chicos para los ganadores'
      ]
    }
  ]

  return (
    <div>
      <h2 className="section-title">💡 Recomendaciones y tips</h2>

      {tips.map((tip, i) => (
        <div key={i} className="rec-card">
          <h4>{tip.icon} {tip.title}</h4>
          <ul>
            {tip.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

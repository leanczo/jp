import { useLocalStorage } from '../hooks/useLocalStorage'
import { Calendar, MapPin, Users, Clock, DollarSign } from 'lucide-react'

const defaultTareas = [
  { id: '1', text: 'Confirmar salon (San Luis km 5)', done: false, category: 'Lugar' },
  { id: '2', text: 'Pedir pernil para 60 personas', done: false, category: 'Comida' },
  { id: '3', text: 'Comprar carbon para parrilla', done: false, category: 'Comida' },
  { id: '4', text: 'Encargar empanadas (12 docenas)', done: false, category: 'Comida' },
  { id: '5', text: 'Comprar pizzas congeladas (16-18)', done: false, category: 'Comida' },
  { id: '6', text: 'Comprar sandwich de miga (150)', done: false, category: 'Comida' },
  { id: '7', text: 'Comprar 200 masas dulces', done: false, category: 'Comida' },
  { id: '8', text: 'Comprar 7 fardos de gaseosa', done: false, category: 'Bebidas' },
  { id: '9', text: 'Comprar botellas de Freze (6-8)', done: false, category: 'Bebidas' },
  { id: '10', text: 'Comprar hielo (10-12 bolsas)', done: false, category: 'Bebidas' },
  { id: '11', text: 'Conseguir conservadoras (2-3)', done: false, category: 'Logistica' },
  { id: '12', text: 'Armar playlist larga (6-7 hs)', done: false, category: 'Musica' },
  { id: '13', text: 'Conseguir parlante grande', done: false, category: 'Musica' },
  { id: '14', text: 'Organizar juegos para la fiesta', done: false, category: 'Entretenimiento' },
  { id: '15', text: 'Designar 3-4 personas de ayuda', done: false, category: 'Logistica' },
  { id: '16', text: 'Comprar papas (8-10 kg)', done: false, category: 'Comida' },
  { id: '17', text: 'Armar sector de fotos', done: false, category: 'Decoracion' },
  { id: '18', text: 'Comprar guirnaldas de luces', done: false, category: 'Decoracion' },
]

export default function Resumen() {
  const [tareas] = useLocalStorage('jp-tareas', defaultTareas)
  const [compras] = useLocalStorage('jp-compras', [])

  const tareasCompletadas = tareas.filter(t => t.done).length
  const comprasCompletadas = compras.filter(c => c.done).length

  return (
    <div>
      <h2 className="section-title">📊 Resumen del evento</h2>

      <div className="card">
        <div className="info-row">
          <span className="info-label"><Calendar size={16} style={{verticalAlign: 'middle'}} /> Evento</span>
          <span className="info-value">Cumple de 18 - Juan Pablo</span>
        </div>
        <div className="info-row">
          <span className="info-label"><MapPin size={16} style={{verticalAlign: 'middle'}} /> Salon</span>
          <span className="info-value">San Luis, km 5 (Salta)</span>
        </div>
        <div className="info-row">
          <span className="info-label"><Users size={16} style={{verticalAlign: 'middle'}} /> Invitados</span>
          <span className="info-value">70 personas</span>
        </div>
        <div className="info-row">
          <span className="info-label"><Clock size={16} style={{verticalAlign: 'middle'}} /> Horario</span>
          <span className="info-value">10:00 a 19:00 hs</span>
        </div>
        <div className="info-row">
          <span className="info-label"><DollarSign size={16} style={{verticalAlign: 'middle'}} /> Costo salon</span>
          <span className="info-value">$490.000</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{tareasCompletadas}/{tareas.length}</div>
          <div className="stat-label">Tareas completadas</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{comprasCompletadas}/{compras.length}</div>
          <div className="stat-label">Compras realizadas</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">70</div>
          <div className="stat-label">Invitados</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">9 hs</div>
          <div className="stat-label">Duracion fiesta</div>
        </div>
      </div>

      <h3 className="section-title" style={{fontSize: '1rem', marginTop: '8px'}}>Progreso general</h3>

      <div className="card">
        <div style={{marginBottom: 12}}>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom: 4}}>
            <span style={{fontSize:'0.85rem', color:'var(--text-secondary)'}}>Tareas pendientes</span>
            <span style={{fontSize:'0.85rem', fontWeight: 600}}>{Math.round((tareasCompletadas/Math.max(tareas.length,1))*100)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${(tareasCompletadas/Math.max(tareas.length,1))*100}%`}} />
          </div>
        </div>
        <div>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom: 4}}>
            <span style={{fontSize:'0.85rem', color:'var(--text-secondary)'}}>Compras</span>
            <span style={{fontSize:'0.85rem', fontWeight: 600}}>{compras.length > 0 ? Math.round((comprasCompletadas/compras.length)*100) : 0}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${compras.length > 0 ? (comprasCompletadas/compras.length)*100 : 0}%`, background: 'var(--success)'}} />
          </div>
        </div>
      </div>

      <div className="card" style={{borderLeft: '4px solid var(--accent)'}}>
        <h4 style={{fontSize:'0.9rem', marginBottom: 8}}>📍 Incluye el salon</h4>
        <ul style={{paddingLeft: 18, fontSize: '0.85rem', color: 'var(--text-secondary)'}}>
          <li>Mesas, sillas y vajilla para 70 personas</li>
          <li>Decoracion y candy bar ($120.000)</li>
          <li>2 juegos ($50.000)</li>
          <li>Freezer (sin heladera)</li>
          <li>Cocina pequena</li>
          <li>2 banos</li>
          <li>Jardin amplio</li>
        </ul>
      </div>

      <div className="card" style={{borderLeft: '4px solid var(--warning)'}}>
        <h4 style={{fontSize:'0.9rem', marginBottom: 8}}>⚠️ Tener en cuenta</h4>
        <ul style={{paddingLeft: 18, fontSize: '0.85rem', color: 'var(--text-secondary)'}}>
          <li>No hay heladera, solo freezer - llevar conservadoras</li>
          <li>Cocina pequena - llevar comida preparada</li>
          <li>Solo 2 banos para 70 personas</li>
          <li>No se permite DJ - llevar parlante + playlist</li>
          <li>Verificar espacio cubierto por si llueve</li>
        </ul>
      </div>
    </div>
  )
}

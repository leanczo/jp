import { useState } from 'react'
import { Check, Trash2, Pencil, Plus } from 'lucide-react'
import { useLocalStorage } from '../hooks/useLocalStorage'

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
  { id: '19', text: 'Comprar agua (10-12 botellas 2L)', done: false, category: 'Bebidas' },
  { id: '20', text: 'Comprar servilletas y descartables', done: false, category: 'Logistica' },
  { id: '21', text: 'Comprar bolsas de basura', done: false, category: 'Logistica' },
  { id: '22', text: 'Comprar aderezos (mayo, ketchup, mostaza)', done: false, category: 'Comida' },
  { id: '23', text: 'Preparar caja de emergencia (cinta, tijera, encendedor)', done: false, category: 'Logistica' },
  { id: '24', text: 'Congelar botellas de agua para conservadoras', done: false, category: 'Logistica' },
  { id: '25', text: 'Comprar panes para pernil (70)', done: false, category: 'Comida' },
  { id: '26', text: 'Comprar chorizos (40-50) si se hacen choripanes', done: false, category: 'Comida' },
  { id: '27', text: 'Comprar panes para choripanes (40-50)', done: false, category: 'Comida' },
]

const categories = ['Todas', 'Comida', 'Bebidas', 'Logistica', 'Musica', 'Decoracion', 'Entretenimiento', 'Lugar']

export default function Tareas() {
  const [tareas, setTareas] = useLocalStorage('jp-tareas', defaultTareas)
  const [newText, setNewText] = useState('')
  const [newCategory, setNewCategory] = useState('Logistica')
  const [filter, setFilter] = useState('Todas')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')
  const [editCategory, setEditCategory] = useState('')

  const addTarea = () => {
    if (!newText.trim()) return
    setTareas([...tareas, {
      id: Date.now().toString(),
      text: newText.trim(),
      done: false,
      category: newCategory
    }])
    setNewText('')
  }

  const toggleDone = (id) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

  const startEdit = (tarea) => {
    setEditingId(tarea.id)
    setEditText(tarea.text)
    setEditCategory(tarea.category)
  }

  const saveEdit = () => {
    if (!editText.trim()) return
    setTareas(tareas.map(t => t.id === editingId ? { ...t, text: editText.trim(), category: editCategory } : t))
    setEditingId(null)
  }

  const filtered = filter === 'Todas' ? tareas : tareas.filter(t => t.category === filter)
  const completadas = tareas.filter(t => t.done).length
  const progress = tareas.length > 0 ? (completadas / tareas.length) * 100 : 0

  return (
    <div>
      <h2 className="section-title">📋 Tareas pendientes</h2>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="progress-text">{completadas} de {tareas.length} completadas</div>
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTarea()}
        />
        <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
          {categories.filter(c => c !== 'Todas').map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <button className="btn-add" onClick={addTarea}>
          <Plus size={18} />
        </button>
      </div>

      <div className="category-filter">
        {categories.map(c => (
          <button
            key={c}
            className={`category-btn ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c} {c !== 'Todas' && `(${tareas.filter(t => t.category === c).length})`}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No hay tareas en esta categoria</p>
        </div>
      ) : (
        <>
          {filtered.filter(t => !t.done).map(tarea => (
            <div key={tarea.id} className="item-row">
              <button
                className="item-checkbox"
                onClick={() => toggleDone(tarea.id)}
              >
              </button>
              <div className="item-content">
                <div className="item-text">{tarea.text}</div>
                <div className="item-meta">{tarea.category}</div>
              </div>
              <div className="item-actions">
                <button className="btn-icon edit" onClick={() => startEdit(tarea)}>
                  <Pencil size={16} />
                </button>
                <button className="btn-icon danger" onClick={() => deleteTarea(tarea.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
          {filtered.filter(t => t.done).length > 0 && (
            <>
              <div style={{fontSize: '0.8rem', color: 'var(--text-muted)', margin: '16px 0 8px', fontWeight: 600}}>
                Completadas ({filtered.filter(t => t.done).length})
              </div>
              {filtered.filter(t => t.done).map(tarea => (
                <div key={tarea.id} className="item-row completed">
                  <button
                    className="item-checkbox checked"
                    onClick={() => toggleDone(tarea.id)}
                  >
                    <Check size={14} />
                  </button>
                  <div className="item-content">
                    <div className="item-text">{tarea.text}</div>
                    <div className="item-meta">{tarea.category}</div>
                  </div>
                  <div className="item-actions">
                    <button className="btn-icon danger" onClick={() => deleteTarea(tarea.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}

      {editingId && (
        <div className="edit-overlay" onClick={() => setEditingId(null)}>
          <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Editar tarea</h3>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
              autoFocus
            />
            <select value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
              {categories.filter(c => c !== 'Todas').map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <div className="edit-modal-actions">
              <button className="btn-cancel" onClick={() => setEditingId(null)}>Cancelar</button>
              <button className="btn-save" onClick={saveEdit}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

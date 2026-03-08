import { useState } from 'react'
import { Check, Trash2, Pencil, Plus, ShoppingCart } from 'lucide-react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const defaultCompras = [
  { id: '1', text: 'Pernil grande (8-10 kg)', qty: '1', category: 'Carne', done: false, estimado: '' },
  { id: '2', text: 'Carbon', qty: '10 kg', category: 'Parrilla', done: false, estimado: '' },
  { id: '3', text: 'Chorizos', qty: '40-50', category: 'Carne', done: false, estimado: '' },
  { id: '4', text: 'Panes para pernil', qty: '70', category: 'Panaderia', done: false, estimado: '' },
  { id: '5', text: 'Panes para choripan', qty: '40-50', category: 'Panaderia', done: false, estimado: '' },
  { id: '6', text: 'Empanadas (carne, pollo, JyQ)', qty: '12 docenas', category: 'Comida', done: false, estimado: '' },
  { id: '7', text: 'Pizzas congeladas', qty: '16-18', category: 'Comida', done: false, estimado: '' },
  { id: '8', text: 'Sandwich de miga', qty: '150', category: 'Comida', done: false, estimado: '' },
  { id: '9', text: 'Papas para fritas', qty: '8-10 kg', category: 'Comida', done: false, estimado: '' },
  { id: '10', text: 'Masas dulces', qty: '200', category: 'Mesa dulce', done: false, estimado: '' },
  { id: '11', text: 'Gaseosa cola', qty: '3 fardos', category: 'Bebidas', done: false, estimado: '' },
  { id: '12', text: 'Gaseosa naranja', qty: '2 fardos', category: 'Bebidas', done: false, estimado: '' },
  { id: '13', text: 'Gaseosa lima limon', qty: '2 fardos', category: 'Bebidas', done: false, estimado: '' },
  { id: '14', text: 'Agua mineral 2L', qty: '10-12', category: 'Bebidas', done: false, estimado: '' },
  { id: '15', text: 'Freze', qty: '6-8 botellas', category: 'Bebidas', done: false, estimado: '' },
  { id: '16', text: 'Hielo', qty: '10-12 bolsas', category: 'Bebidas', done: false, estimado: '' },
  { id: '17', text: 'Mayonesa', qty: '2', category: 'Aderezos', done: false, estimado: '' },
  { id: '18', text: 'Ketchup', qty: '2', category: 'Aderezos', done: false, estimado: '' },
  { id: '19', text: 'Mostaza', qty: '2', category: 'Aderezos', done: false, estimado: '' },
  { id: '20', text: 'Salsa criolla', qty: '2 kg', category: 'Aderezos', done: false, estimado: '' },
  { id: '21', text: 'Servilletas', qty: '3 paquetes', category: 'Descartables', done: false, estimado: '' },
  { id: '22', text: 'Vasos descartables', qty: '100', category: 'Descartables', done: false, estimado: '' },
  { id: '23', text: 'Bolsas de basura', qty: '1 rollo grande', category: 'Descartables', done: false, estimado: '' },
  { id: '24', text: 'Papel aluminio', qty: '2 rollos', category: 'Descartables', done: false, estimado: '' },
  { id: '25', text: 'Bandejas grandes', qty: '4-5', category: 'Descartables', done: false, estimado: '' },
  { id: '26', text: 'Guirnaldas de luces', qty: '2-3', category: 'Decoracion', done: false, estimado: '' },
  { id: '27', text: 'Globos', qty: '1 paquete', category: 'Decoracion', done: false, estimado: '' },
  { id: '28', text: 'Encendedor', qty: '2', category: 'Varios', done: false, estimado: '' },
  { id: '29', text: 'Cinta adhesiva', qty: '1', category: 'Varios', done: false, estimado: '' },
  { id: '30', text: 'Tijera', qty: '1', category: 'Varios', done: false, estimado: '' },
]

const categories = ['Todas', 'Carne', 'Parrilla', 'Panaderia', 'Comida', 'Mesa dulce', 'Bebidas', 'Aderezos', 'Descartables', 'Decoracion', 'Varios']

export default function Compras() {
  const [compras, setCompras] = useLocalStorage('jp-compras', defaultCompras)
  const [newText, setNewText] = useState('')
  const [newQty, setNewQty] = useState('')
  const [newCategory, setNewCategory] = useState('Comida')
  const [filter, setFilter] = useState('Todas')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')
  const [editQty, setEditQty] = useState('')
  const [editCategory, setEditCategory] = useState('')

  const addCompra = () => {
    if (!newText.trim()) return
    setCompras([...compras, {
      id: Date.now().toString(),
      text: newText.trim(),
      qty: newQty.trim(),
      category: newCategory,
      done: false,
      estimado: ''
    }])
    setNewText('')
    setNewQty('')
  }

  const toggleDone = (id) => {
    setCompras(compras.map(c => c.id === id ? { ...c, done: !c.done } : c))
  }

  const deleteCompra = (id) => {
    setCompras(compras.filter(c => c.id !== id))
  }

  const startEdit = (compra) => {
    setEditingId(compra.id)
    setEditText(compra.text)
    setEditQty(compra.qty)
    setEditCategory(compra.category)
  }

  const saveEdit = () => {
    if (!editText.trim()) return
    setCompras(compras.map(c => c.id === editingId ? { ...c, text: editText.trim(), qty: editQty.trim(), category: editCategory } : c))
    setEditingId(null)
  }

  const filtered = filter === 'Todas' ? compras : compras.filter(c => c.category === filter)
  const completadas = compras.filter(c => c.done).length
  const progress = compras.length > 0 ? (completadas / compras.length) * 100 : 0

  return (
    <div>
      <h2 className="section-title"><ShoppingCart size={22} /> Lista de compras</h2>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%`, background: 'var(--success)' }} />
        </div>
        <div className="progress-text">{completadas} de {compras.length} compradas</div>
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Producto..."
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addCompra()}
          style={{flex: 2}}
        />
        <input
          type="text"
          placeholder="Cant."
          value={newQty}
          onChange={(e) => setNewQty(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addCompra()}
          style={{flex: 1, maxWidth: 80}}
        />
        <button className="btn-add" onClick={addCompra}>
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
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No hay compras en esta categoria</p>
        </div>
      ) : (
        <>
          {filtered.filter(c => !c.done).map(compra => (
            <div key={compra.id} className="item-row">
              <button
                className="item-checkbox"
                onClick={() => toggleDone(compra.id)}
              >
              </button>
              <div className="item-content">
                <div className="item-text">{compra.text}</div>
                <div className="item-meta">{compra.category}</div>
              </div>
              {compra.qty && <span className="qty-badge">{compra.qty}</span>}
              <div className="item-actions">
                <button className="btn-icon edit" onClick={() => startEdit(compra)}>
                  <Pencil size={16} />
                </button>
                <button className="btn-icon danger" onClick={() => deleteCompra(compra.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
          {filtered.filter(c => c.done).length > 0 && (
            <>
              <div style={{fontSize: '0.8rem', color: 'var(--text-muted)', margin: '16px 0 8px', fontWeight: 600}}>
                Compradas ({filtered.filter(c => c.done).length})
              </div>
              {filtered.filter(c => c.done).map(compra => (
                <div key={compra.id} className="item-row completed">
                  <button
                    className="item-checkbox checked"
                    onClick={() => toggleDone(compra.id)}
                  >
                    <Check size={14} />
                  </button>
                  <div className="item-content">
                    <div className="item-text">{compra.text}</div>
                    <div className="item-meta">{compra.category}</div>
                  </div>
                  {compra.qty && <span className="qty-badge">{compra.qty}</span>}
                  <div className="item-actions">
                    <button className="btn-icon danger" onClick={() => deleteCompra(compra.id)}>
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
            <h3>Editar compra</h3>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              placeholder="Producto"
              autoFocus
            />
            <input
              type="text"
              value={editQty}
              onChange={(e) => setEditQty(e.target.value)}
              placeholder="Cantidad"
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

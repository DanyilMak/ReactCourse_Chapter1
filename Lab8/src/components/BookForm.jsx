import React, { useState, useEffect } from 'react'

const BookForm = ({ onAdd, onUpdate, editId, contacts }) => {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '' })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (editId !== null) {
      const contact = contacts.find((contact) => contact.id === editId)
      if (contact) setForm(contact)
    }
  }, [editId, contacts])

  const validateForm = () => {
    const newErrors = {}
    if (!form.firstName) newErrors.firstName = 'The first name is required'
    if (!form.lastName) newErrors.lastName = 'The last name is required'
    if (!form.phone) newErrors.phone = 'The phone is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const newContact = { id: editId !== null ? editId : Date.now(), ...form }

    if (editId !== null) {
      onUpdate(newContact)
    } else {
      onAdd(newContact)
    }

    setForm({ firstName: '', lastName: '', phone: '' })
    setErrors({})
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div style={{ width: '100%', marginBottom: '10px' }}>
        <label>First Name:</label>
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          style={{width: '100%',
            padding: '8px',
            boxSizing: 'border-box'}}
        />
        {errors.firstName && (
          <span style={{color: 'red'}}>{errors.firstName}</span>
        )}
      </div>
      <div style={{ width: '100%', marginBottom: '10px' }}>
        <label>Last Name:</label>
        <input
          type="text"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          style={{width: '100%',
            padding: '8px',
            boxSizing: 'border-box'}}
        />
        {errors.lastName && (
          <span style={{ color: 'red' }}>{errors.lastName}</span>
        )}
      </div>
      <div style={{ width: '100%', marginBottom: '10px' }}>
        <label>Phone:</label>
        <input
          type="text"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{width: '100%',
            padding: '8px',
            boxSizing: 'border-box'}}
        />
        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
      </div>
      <button type="submit">{editId !== null ? 'Edit' : 'Add'}</button>
    </form>
  )
}

export default BookForm

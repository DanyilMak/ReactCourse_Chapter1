import React, { useState } from 'react'
import BookForm from './BookForm'
import BookTable from './BookTable'
import Search from './BookSearch'

const BookContainer = () => {
  const [contacts, setContacts] = useState([])
  const [editId, setEditId] = useState(null)
  const [search, setSearch] = useState('')

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact])
  }

  const handleUpdateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    )
    setEditId(null)
  }

  const handleEdit = (id) => {
    setEditId(id)
  }

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName} ${contact.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'white',
      }}
    >
      <h1>Address Book</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '80%',
          gap: '50px',
        }}
      >
        <div
          style={{
            width: '400px',
            padding: '20px',
            backgroundColor: '#333',
            borderRadius: '8px',
          }}
        >
          <Search search={search} setSearch={setSearch} />
          <BookForm
            onAdd={handleAddContact}
            onUpdate={handleUpdateContact}
            editId={editId}
            contacts={contacts}
          />
        </div>
        <div
          style={{
            flexGrow: 1,
            padding: '20px',
            backgroundColor: '#333',
            borderRadius: '8px',
          }}
        >
          <BookTable
            contacts={filteredContacts}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default BookContainer

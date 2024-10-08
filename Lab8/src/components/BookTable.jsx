import React from 'react'

const BookTable = ({ contacts, onEdit, onDelete }) => {
  return contacts.length === 0 ? (
    <p>No data to display.</p>
  ) : (
    <table
      style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}
      border="1"
    >
      <thead>
        <tr>
          <th style={{ padding: '10px' }}>ID</th>
          <th style={{ padding: '10px' }}>First Name</th>
          <th style={{ padding: '10px' }}>Last Name</th>
          <th style={{ padding: '10px' }}>Phone</th>
          <th style={{ padding: '10px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td style={{ padding: '10px' }}>{contact.id}</td>
            <td style={{ padding: '10px' }}>{contact.firstName}</td>
            <td style={{ padding: '10px' }}>{contact.lastName}</td>
            <td style={{ padding: '10px' }}>{contact.phone}</td>
            <td style={{ padding: '10px' }}>
              <button onClick={() => onEdit(contact.id)}>Edit</button>
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BookTable

import React, { useState, useEffect } from 'react';
import { Col, Container, ListGroup, Row, Table } from 'react-bootstrap';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <Container>
      <h2 className="mt-3 mb-4 text-center">Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><img src={user.avatar} alt={user.name} style={{ width: '60px', height: '60px', borderRadius: '10%' }} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    
  );
}

export default UserList;

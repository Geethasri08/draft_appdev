import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './StaffDetails.css';

function StaffDetails({ staffData, setStaffData }) {
  const navigate = useNavigate();
  const location = useLocation();
  const editingStaff = location.state ? location.state.editingStaff : null;

  const [form, setForm] = useState({
    id: '',
    name: '',
    age: '',
    gender: 'Male',
    phoneNo: '',
    address: '',
    shift: 'Day',
    dob: '',
    email: '',
    completionStatus: 'Not Started'
  });

  useEffect(() => {
    if (editingStaff) {
      setForm({
        id: editingStaff.id,
        name: editingStaff.name,
        age: editingStaff.age,
        gender: editingStaff.gender,
        phoneNo: editingStaff.phoneNo,
        address: editingStaff.address,
        shift: editingStaff.shift,
        dob: editingStaff.dob,
        email: editingStaff.email,
        completionStatus: editingStaff.completionStatus
      });
    }
  }, [editingStaff]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      setStaffData(staffData.map(staff => staff.id === form.id ? form : staff));
    } else {
      setStaffData([...staffData, { ...form, id: Date.now() }]);
    }
    setForm({
      id: '',
      name: '',
      age: '',
      gender: 'Male',
      phoneNo: '',
      address: '',
      shift: 'Day',
      dob: '',
      email: '',
      completionStatus: 'Not Started'
    });
    navigate('/staff-table');
  };

  return (
    <div>
      <h2>Staff Details</h2>
      <div className="add-edit-form">
        <h3>{form.id ? 'Edit Staff' : 'Add New Staff'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={form.phoneNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="shift">Shift</label>
            <select
              id="shift"
              name="shift"
              value={form.shift}
              onChange={handleChange}
              required
            >
              <option value="Day">Day</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Night">Night</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit">{form.id ? 'Update Staff' : 'Add Staff'}</button>
            <button type="button" onClick={() => navigate('/staff-table')}>View Staff Details</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StaffDetails;

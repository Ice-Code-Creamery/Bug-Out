import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const LandingPage = ({ user }) => {
  const [isAdmin, setAdmin] = useState(false)
  const [isMember, setMember] = useState(false)
  const [name, setName] = useState('Guest')

  useEffect(() => {
    if (user.role === 'admin') {
      setAdmin(true)
    } else {
      setAdmin(false)
    }
  }, [user]);

  useEffect(() => {
    if (user.role === 'member') {
      setMember(true)
    } else {
      setMember(false)
    }
  }, [user]);


  return (
    <div>
      <div>
      <h1>Bug Out!</h1>
      <p>Explanations</p>
      </div>
      <div>
        <label className="label">
          Name:
      <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <button
          onClick={() => null}
        >
          Join Game
          </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
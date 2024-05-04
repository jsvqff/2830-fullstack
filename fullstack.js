import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events')
            .then(res => {
                setEvents(res.data);
            })
            .catch(err => {
                console.error('Error fetching events:', err);
            });
    }, []);

    return (
        <div>
            <h1>Event List</h1>
            <ul>
                {events.map(event => (
                    <li key={event._id}>{event.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;



const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());



const assert = require('chai').assert;
const request = require('supertest');
const app = require('../app');

describe('GET /api/events', function() {
    it('responds with JSON', function(done) {
        request(app)
            .get('/api/events')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

import React from 'react';
import axios from 'axios';

const instance = axios.create({
baseURL: 'https://bibliotekatrenera-default-rtdb.firebaseio.com'
})
export default instance;
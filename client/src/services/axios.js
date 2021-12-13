import axios from 'axios';
import {ENDPOINT} from '../config/api';

const baseURL = ENDPOINT + '/api/v1';

export default axios.create({baseURL});
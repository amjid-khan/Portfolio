import app from '../index.js';

export default async function handler(req, res) {
    await app(req, res); // Express app handles the request
}

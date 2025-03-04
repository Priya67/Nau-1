import Meetup from './model';
var request = require('request');

export const createMeetup = async (req, res) => {
  const { title, description } = req.body;
  const newMeetup = new Meetup({ title, description});

  try {
    return res.status(201).json({ meetup: await newMeetup.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Meetup' });
  }
};

export const getAllMeetups = async (req, res) => {
  try {
    return res.status(200).json({ meetups: await Meetup.find({} )});
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Meetup'});
  }
}

export const getAllInventories = async (req, res) => {
  try {
      request('https://api.goodzer.com/products/v0.1/search_locations/?query=v-neck+sweater&lat=40.714353&lng=-74.005973&radius=5.0&priceRange=30:120&apiKey=69e56b7af76741f7414285047d3c1cc2', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          return res.status(200).json({ store: JSON.parse(body)});
        }
      });


  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with Meetup'});
  }

}

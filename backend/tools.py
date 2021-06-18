import requests, os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

API_KEY = os.environ.get("API_KEY")


def get_intensity(values: []):
    intensity = []
    for val in values:
        intensity.append(scale(val, values, [0,1]))
    return intensity


def scale(val, src, dst):
    return ((val - min(src)) / (max(src) - min(src))) * (dst[1]-dst[0]) + dst[0]


def get_nearby_places(location = '48.782,9.184', q_type = 'school'):
    URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
    params = {
        'key': API_KEY,
        'location': location,
        'rankby': 'distance',
        'type': q_type
    }
    r = requests.get(URL, params) 
    response = r.json() 
    return response








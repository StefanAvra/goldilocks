import requests
import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

API_KEY = os.environ.get("API_KEY")


def get_intensity(values: []):
    intensity = []
    for val in values:
        intensity.append(scale(val, values, [0, 1]))
    return intensity


def scale(val, src, dst):
    return ((val - min(src)) / (max(src) - min(src))) * (dst[1]-dst[0]) + dst[0]


def get_nearby_places(location='', q_type='', keyword=None):
    URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
    params = {
        'key': API_KEY,
        'location': location,
        'rankby': 'distance',
        'type': q_type,
    }
    if keyword:
        params['keyword'] = keyword
    r = requests.get(URL, params)
    print(f'requested: \n{params}')
    response = r.json()
    return response


def scrape_places_near_airports(q_type, keyword=None):
    from data import airports
    places = []
    for airport in airports.airports:
        response = get_nearby_places(
            location=f'{airport["coordinates"][0]},{airport["coordinates"][1]}', q_type=q_type, keyword=keyword)
        for result in response['results']:
            # print(result)
            places.append(result['geometry']['location'])
    return places


def change_lat_long(locations, rad):
    result = []
    for l in locations:
        l = {'coordinates': [l['lat'], l['lng']], 'rad': rad}
        result.append(l)
    return result


def fixed_rad_airports(locations, rad):
    result = []
    for l in locations:
        l = {'coordinates': l['coordinates'], 'rad': rad}
        result.append(l)
    return result

from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/airport-noise/")
def get_airport_noise():
    airports = {
        0: {
            'coordinates': [50.033333, 8.570556],
            'intensity': 1.0,
            'IATA': 'FRA',
            'airport_name': 'Frankfurt'
            },
        1: {
            'coordinates': [48.353889, 11.786111],
            'intensity': 0.5914943760648744,
            'IATA': 'MUC',
            'airport_name': 'Munich'
            },
        2: {
            'coordinates': [51.289444, 6.766667],
            'intensity': 0.34949198975362067,
            'IATA': 'DUS',
            'airport_name': 'Düsseldorf'
            },
        3: {
            'coordinates': [50.033333, 8.570556],
            'intensity': 0.31178675655415206,
            'IATA': 'TXL',
            'airport_name': 'Berlin Tegel'
            },
        # 0: {
        #     'coordinates': [50.033333, 8.570556],
        #     'intensity': 1.0,
        #     'IATA': 'FRA',
        #     'airport_name': 'Frankfurt'
        #     },
        # 0: {
        #     'coordinates': [50.033333, 8.570556],
        #     'intensity': 1.0,
        #     'IATA': 'FRA',
        #     'airport_name': 'Frankfurt'
        #     },
        # 0: {
        #     'coordinates': [50.033333, 8.570556],
        #     'intensity': 1.0,
        #     'IATA': 'FRA',
        #     'airport_name': 'Frankfurt'
        #     },
        # 0: {
        #     'coordinates': [50.033333, 8.570556],
        #     'intensity': 1.0,
        #     'IATA': 'FRA',
        #     'airport_name': 'Frankfurt'
        #     },
        
    }
    return airports

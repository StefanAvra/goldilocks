from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/airport-noise/")
def get_airport_noise():
    airports = [
        0: {
            'coordinates': [50.033333, 8.570556],
            'intensity': 1.0,
            'IATA': 'FRA',
            'airport_name': 'Frankfurt'
            },
        1: {
            'coordinates': [48.353889, 11.786111],
            'intensity': 0.6652719717061923,
            'IATA': 'MUC',
            'airport_name': 'Munich'
            },
        2: {
            'coordinates': [51.289444, 6.766667],
            'intensity': 0.34906732056375234,
            'IATA': 'DUS',
            'airport_name': 'Düsseldorf'
            },
        3: {
            'coordinates': [50.033333, 8.570556],
            'intensity': 0.31620085144580834,
            'IATA': 'TXL',
            'airport_name': 'Berlin Tegel'
            },
        4: {
            'coordinates': [53.630278, 9.991111],
            'intensity': 0.2476019200615505,
            'IATA': 'HAM',
            'airport_name': 'Hamburg'
            },
        5: {
            'coordinates': [50.865833, 7.142778 ],
            'intensity': 0.18605257735221623,
            'IATA': 'CGN',
            'airport_name': 'Cologne/Bonn'
            },
        6: {
            'coordinates': [52.378611, 13.520556],
            'intensity': 0.18271501882339486,
            'IATA': 'SXF',
            'airport_name': 'Berlin Schönefeld'
            },
        7: {
            'coordinates': [48.69, 9.221944],
            'intensity': 0.1696848659709547,
            'IATA': 'STR',
            'airport_name': 'Stuttgart'
            },
        8: {
            'coordinates': [52.460833, 9.685],
            'intensity': 0.09058240728081748,
            'IATA': 'HAJ',
            'airport_name': 'Hanover'
            },
        9: {
            'coordinates': [49.498611, 11.078056],
            'intensity': 0.06384391329834954,
            'IATA': 'NUE',
            'airport_name': 'Nuremberg'
            },
        10: {
            'coordinates': [51.423889, 12.236389],
            'intensity': 0.03650796019892621,
            'IATA': 'LEJ',
            'airport_name': 'Leipzig/Halle'
            },
        11: {
            'coordinates': [53.0475, 8.786667],
            'intensity': 0.03642091260336488,
            'IATA': 'BRE',
            'airport_name': 'Bremen'
            },
        12: {
            'coordinates': [51.518333, 7.612222],
            'intensity': 0.032428942686484254,
            'IATA': 'DTM',
            'airport_name': 'Dortmund'
            },
        13: {
            'coordinates': [49.948333, 7.264167],
            'intensity': 0.029675486765246437,
            'IATA': 'HHN',
            'airport_name': 'Hahn'
            },
        14: {
            'coordinates': [51.134444, 13.768056],
            'intensity': 0.024868942490166593,
            'IATA': 'DRS',
            'airport_name': 'Dresden'
            },
        15: {
            'coordinates': [51.6025, 6.142222],
            'intensity': 0.023581694506664877,
            'IATA': 'NRN',
            'airport_name': 'Weeze'
            },
        16: {
            'coordinates': [47.9925, 10.243611],
            'intensity': 0.02103527887348091,
            'IATA': 'FMM',
            'airport_name': 'Memmingen'
            },
        17: {
            'coordinates': [48.779444, 8.080556],
            'intensity': 0.01750063986747349,
            'IATA': 'FKB',
            'airport_name': 'Karlsruhe/Baden-Baden'
            },
        18: {
            'coordinates': [52.136111, 7.685833],
            'intensity': 0.014238269275029828,
            'IATA': 'FMO',
            'airport_name': 'Münster/Osnabrück'
            },
        19: {
            'coordinates': [],
            'intensity': 0.010148644276157864,
            'IATA': 'PAD',
            'airport_name': 'Paderborn'
            },
        20: {
            'coordinates': [],
            'intensity': 0.0073366384840960605,
            'IATA': 'FDH',
            'airport_name': 'Friedrichshafen'
            },
        21: {
            'coordinates': [],
            'intensity': 0.00471838843466762,
            'IATA': 'SCN',
            'airport_name': 'Saarbrücken'
            },
        22: {
            'coordinates': [],
            'intensity': 0.003813931101223616,
            'IATA': 'RLG',
            'airport_name': 'Rostock'
            },
        23: {
            'coordinates': [],
            'intensity': 0.0033318158055030862,
            'IATA': 'ERF',
            'airport_name': 'Erfurt/Weimar'
            },
        24: {
            'coordinates': [],
            'intensity': 0.0014504910107597478,
            'IATA': 'KSF',
            'airport_name': 'Kassel'
            },
        25: {
            'coordinates': [],
            'intensity': 0.001352375359479727,
            'IATA': 'GWT',
            'airport_name': 'Sylt'
            },
        26: {
            'coordinates': [],
            'intensity': 0.0,
            'IATA': 'HDF',
            'airport_name': 'Heringsdorf'
            },
    ]
    return airports

from typing import Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from data import airports, schools, restaurants

from tools import change_lat_long

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hi"}


@app.get("/airport-noise/")
def get_airport_noise():
    return airports.airports


@app.get("/aqi/")
def get_aqi():
    aqi = []
    return aqi


@app.get("/schools/")
def get_airport_noise():
    return change_lat_long(schools.schools, 1)
    


@app.get("/retaurants/")
def get_airport_noise():
    return change_lat_long(restaurants.restaurants, 0.3)


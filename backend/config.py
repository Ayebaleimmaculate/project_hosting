import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    # SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://mvnuaofrvxbmjkai:immaculate@102.134.147.233:32764/bakeryapi'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://mvnuaofrvxbmjkai:immaculate@102.134.147.233:32764/ywobruzspddayordfttvcomn'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = 'bakery'

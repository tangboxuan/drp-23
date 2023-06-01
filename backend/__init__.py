from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.secret_key = os.urandom(32)
CORS(app, supports_credentials=True)

db = SQLAlchemy()
db.init_app(app)

from . import database
from . import server
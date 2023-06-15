from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO
import os

app = Flask(__name__, static_folder='../dist', static_url_path='/')
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.secret_key = os.urandom(32)
CORS(app, supports_credentials=True)

db = SQLAlchemy()
db.init_app(app)

socketio = SocketIO(app, cors_allowed_origins="*")

from . import database
from . import server
from . import socket
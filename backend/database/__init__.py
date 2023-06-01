from .. import app
from .. import db
from . import ingredients

from sqlalchemy import inspect

with app.app_context():
    insp = inspect(db.engine)
    ingredient_init = not insp.has_table("ingredient")
    db.create_all()
    if ingredient_init:
        ingredients.init()
    print("Database initialised")
from ..database import ingredients
from ..socket import updateClientFridge

from datetime import datetime, date, timedelta

def json(i: ingredients.Ingredient) -> dict:
    return {
        "id": i.id,
        "name": i.name,
        "quantity": i.quantity,
        "image": i.image,
        "expiry": (i.expiry - date.today()).days + 1,
        "category": i.category,
    }

@updateClientFridge
def add(data):
    expiry = datetime.fromisoformat(data["expiry"]).date()
    if expiry >= date.today() - timedelta(days=1):
        ingredients.add(data["name"].capitalize(), data["quantity"],
                        data["image"], data["category"], 
                        expiry)


def getAll():
    return list(map(json, ingredients.getAll()))


def test():
    return json(ingredients.get(1))

@updateClientFridge
def delete(data):
    print(data)
    ingredients.delete(data["id"])

@updateClientFridge
def modify(data):
    ingredients.modify(data["id"], data["quantity"], date.today() + timedelta(days=data["expiry"]-1))

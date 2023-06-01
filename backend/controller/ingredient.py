from ..database import ingredients

def test():
    i = ingredients.get(1)
    return {
        "name": i.name,
        "quantity": i.quantity
    }
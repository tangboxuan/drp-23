from . import socketio

@socketio.on('connect')
def socketConnect():
    print('Client connected')

@socketio.on('disconnect')
def socketDisconnect():
    print('Client disconnected')

def updateClientFridge(f):
    def w(*args, **kwargs):
        print("Updating clients")
        socketio.emit('update-fridge')
        return f(*args, **kwargs)
    return w

print('SocketIO initialized')
#BEFORE RUNING:
#activate virtual environment venv:  source env/bin/activate,  to leave env: deactivate
# freeze > requirements.txt to save requirements while in venv
# to run: $ export FLASK_APP=app
#$ flask run
from flask import Flask, render_template
from flask_socketio import SocketIO
# socket is needed to establish path through which one computer can interact with the other
# Flask-SocketIO gives flask applications access to bi-directional communications between the clients and the server.

app = Flask(__name__)
#app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
#to enable encryption, we’re declaring a SECRET_KEY.

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)
#SocketIO is being applied to ‘app’ and is later being stored in
# socketio variable which enables us to use socketio instead of app in running the application


@app.route('/')
def sessions():
    return render_template('chat.html')

def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')


#To receive WebSocket messages from the client,
#the application defines event handlers using the socketio.on decorator
#it can send reply messages to the connected client using the send() and emit() functions
@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    socketio.emit('my response', {}, callback=messageReceived)

if __name__ == '__main__':
    socketio.run(app, debug=True)
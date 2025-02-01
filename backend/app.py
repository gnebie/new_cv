from flask import Flask, request, jsonify, render_template
import json

app = Flask(__name__)

# Fichier de stockage des messages (sans base de données)
MESSAGE_FILE = "messages.json"

# Initialiser le fichier messages.json
def init_message_file():
    try:
        with open(MESSAGE_FILE, 'x') as f:
            json.dump([], f)
    except FileExistsError:
        pass

@app.route('/')
def index():
    return 

@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.get_json()
    username = data.get('username', 'Anonymous')
    message = data.get('message', '')

    # Charger les messages existants
    with open(MESSAGE_FILE, 'r') as f:
        messages = json.load(f)

    # Ajouter le nouveau message
    messages.append({'username': username, 'message': message})

    # Sauvegarder les messages
    with open(MESSAGE_FILE, 'w') as f:
        json.dump(messages, f)

    return jsonify({'status': 'success', 'message': 'Message envoyé avec succès !'})

@app.route('/get_messages', methods=['GET'])
def get_messages():
    with open(MESSAGE_FILE, 'r') as f:
        messages = json.load(f)
    return jsonify(messages)

if __name__ == '__main__':
    init_message_file()
    app.run(debug=True)
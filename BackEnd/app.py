from flask import Flask
from flask import request
from flask import jsonify
# from clerk_backend_api import Clerk
from os import getenv
# from dotenv import load_dotenv
from flask_cors import CORS
from server_state import server

# python -m flask run

app = Flask(__name__)
CORS(app)
 # load_dotenv()
# AUTHENTICATION_KEY = getenv("CLERK_SECRET_KEY")

@app.route('/test', methods = ['GET'])
def connection_test():
    server.increase()
    return jsonify({'counter/test': server.test_counter})
    return jsonify({'message': 'all good, have fun'})

@app.route("/")
def home():
    server.increase()
    return jsonify({'counter': server.test_counter})
    return jsonify({'message': 'all good, have fun'})


@app.route("/user-data", methods = ['POST'])
def user_initiate():
    request_data = request.get_json()
    print(request_data)
    return jsonify({'message': 'initialized'})

# auth = Clerk(
    # bearer_auth = AUTHENTICATION_KEY,
# )

# res = auth.sessions.get(session_id="sess_2o1ZHAr9bs8VwkqGU60h6OUEsoe")
# res2 = auth.clients.get(client_id = "client_2lz6lnoltIOZ6T3u4UqfUoAyRzT")
# print(res3)


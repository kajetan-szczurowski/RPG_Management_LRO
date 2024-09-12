from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/test', methods = ['GET'])
def connection_test():
    return 'all good, have fun'

@app.route("/")
def home():
    return "Hello, Flasky!"
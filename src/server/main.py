from flask import Flask
from flask_cors import CORS
from utils.Route_Handler import setup_routes

app = Flask(__name__)
app.config.from_pyfile('settings.py')
setup_routes(app)
CORS(app)

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask
from flask_cors import CORS
from utils.Route_Handler import setup_routes

app = Flask(__name__)
app.config.from_pyfile('settings.py')
CORS(app, resources={r"*": {"origins": ["http://localhost:4200"]}})
setup_routes(app)

if __name__ == '__main__':
    app.run(debug=True)

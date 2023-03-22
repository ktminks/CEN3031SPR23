from flask import Flask
from flask_cors import CORS
from utils.Route_Handler import setup_routes
from utils.DB_Connect import connect_to_db

app = Flask(__name__)
app.config.from_pyfile('settings.py')
CORS(app, resources={r"*": {"origins": ["http://localhost:4200"]}})
mongo = connect_to_db(app)
setup_routes(app)

if __name__ == '__main__':
    app.run(debug=True)

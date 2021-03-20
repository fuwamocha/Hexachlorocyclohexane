import os
from flask import *
app = Flask(__name__)
@app.route('/start')
def just_call():
    return 'connected'

@app.route('/', methods=['GET', 'POST'])
def Main():
    if request.method == 'GET':
        return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')

@app.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == 'GET':
        return render_template('user.html')

@app.route('/user-settings', methods=['GET', 'POST'])
def user_settings():
    if request.method == 'GET':
        return render_template('user-settings.html')

if __name__ == '__main__':
    app.run()
    port = int(os.getenv('PORT', 5000))
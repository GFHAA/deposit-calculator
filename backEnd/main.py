from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/digits', methods=['POST'])
def get_digits():
    data = request.json
    summ = data['summ']
    time = data['time']
    rate = data['rate']
    capitalise = data['capitalise']

    capitalise_probably = [1, 365, 365/7, 12]
    capitalise = capitalise_probably[capitalise]
    rate = rate/100
    time = time/365

    total = summ * (1 + rate/capitalise)**(capitalise*time)
    rate_effective = (1 + rate/capitalise)**capitalise - 1

    response = {
        "income": round(total, 4),
        "rate_effective": round(rate_effective, 4),
        "profit": round( round(total, 2)/summ - 1, 4)
    }
    return response


if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, request, jsonify

app = Flask(__name__)

todos = []

@app.route('/digits', methods=['POST'])
def get_digits():
    data = request.json
    summ = data.summ
    time = data.time
    rate = data.rate
    capitalise = data.capitalise

    capitalise_probably = [1, 365, 365/7, 12]
    capitalise = capitalise_probably[capitalise]
    rate = rate/100
    time = time/365

    total = summ * (1 + rate/capitalise)**(capitalise*time)
    return total


if __name__ == '__main__':
    app.run(debug=True)
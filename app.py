from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB configuration
mongo_config = {
    "host": "mongodb://localhost:27017/",
    "database": "candidate_db",
    "collection": "candidates",
}


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/register", methods=["POST"])
def register():
    # Get form data from request
    data = request.get_json()
    name = data["name"]
    father_name = data["father_name"]
    dob = data["dob"]
    email = data["email"]
    phone = data["phone"]

    # Connect to MongoDB
    client = MongoClient(mongo_config["host"])
    db = client[mongo_config["database"]]
    collection = db[mongo_config["collection"]]

    # Insert candidate data into the collection
    candidate = {
        "name": name,
        "email": email,
        "phone": phone,
        "father_name": father_name,
        "dob": dob,
    }
    try:
        collection.insert_one(candidate)
        return jsonify({"status": "success"})
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"status": "error"})

    # Close MongoDB connection
    client.close()


if __name__ == "__main__":
    app.run()

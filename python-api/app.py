from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import json
from io import BytesIO
from flask_cors import CORS
from keras.utils import load_img, img_to_array

app = Flask(__name__)
CORS(app) 

model = tf.keras.models.load_model("./model-files/plant_disease_model_final_86.keras")
with open("./model-files/class_names_final.json") as f:
    class_names = json.load(f)

# cleaner names to display
display_names = {
    "Apple___Apple_scab": "Scab",
    "Apple___Black_rot": "Black Rot",
    "Apple___Cedar_apple_rust": "Cedar Apple Rust",
    "Apple___healthy": "Healthy",
    "Blueberry___healthy": "Healthy",
    "Cherry_(including_sour)___Powdery_mildew": "Powdery Mildew",
    "Cherry_(including_sour)___healthy": "Healthy",
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "Cercospora Leaf Spot",
    "Corn_(maize)___Common_rust_": "Common Rust",
    "Corn_(maize)___Northern_Leaf_Blight": "Northern Leaf Blight",
    "Corn_(maize)___healthy": "Healthy",
    "Grape___Black_rot": "Black Rot",
    "Grape___Esca_(Black_Measles)": "Esca (Black Measles)",
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "Leaf Blight",
    "Grape___healthy": "Healthy",
    "Orange___Haunglongbing_(Citrus_greening)": "Citrus Greening",
    "Peach___Bacterial_spot": "Bacterial Spot",
    "Peach___healthy": "Healthy",
    "Pepper,_bell___Bacterial_spot": "Bacterial Spot",
    "Pepper,_bell___healthy": "Healthy"
}

# pesticide mapping based on clean disease name
pesticide_suggestions = {
    "Scab": "Fungicide A",
    "Black Rot": "Fungicide A",
    "Rust": "Fungicide A",
    "Powdery Mildew": "Fungicide B",
    "Leaf Spot": "Fungicide A",
    "Leaf Blight": "Fungicide A",
    "Black Measles": "Fungicide B",
    "Citrus Greening": "Bactericide C",
    "Bacterial Spot": "Bactericide C",
    "Early Blight": "Fungicide B",
    "Late Blight": "Fungicide B",
    "Leaf Scorch": "Bactericide C",
    "Leaf Mold": "Fungicide A",
    "Leaf Curl Virus": "No pesticide, remove infected leaves",
    "Mosaic Virus": "No pesticide, remove infected leaves",
    "Healthy": "Preventive: Fungicide A / B alternately"
}

@app.route('/predict', methods=['POST'])
def predict():

    #checking if file exist
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    #fetching the file
    file = request.files['file']

    # Convert to BytesIO
    img = load_img(BytesIO(file.read()), target_size=(128, 128))

    #required preprocessing
    img_array = img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    #predict
    predictions = model.predict(img_array)
    predicted_index = np.argmax(predictions[0])
    predicted_class = class_names[predicted_index]
    confidence = float(predictions[0][predicted_index])

    disease = display_names.get(predicted_class, predicted_class)

    pesticide = pesticide_suggestions.get(disease, "No pesticide suggestion available")
    print(f"Disease: {disease}, Confidence: {confidence}, Pesticide: {pesticide}")

    return jsonify({
        'predicted_class': disease,
        'confidence': confidence,
        'pestSuggest': pesticide
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)

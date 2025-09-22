# Intelligent Pesticide Sprinkling System

This project introduces an intelligent pesticide sprinkling system
designed for precision agriculture. It aims to optimize pesticide use by
sprinkling only when and where needed, based on real-time plant health
data. This approach minimizes environmental impact, reduces costs, and
promotes healthier crop yields.

## Technical Details

This project utilizes a CNN model for plant disease detection,
triggering a Node.js and Express.js backend to activate sprinklers via
Arduino. It incorporates TensorFlow for AI processing, MongoDB for data
storage, and Tailwind CSS for the frontend. This system offers a smart,
efficient solution for targeted pesticide application.

## Beneficiaries

This system benefits farmers by reducing costs and increasing yields,
agricultural extension officers through improved resource management,
and environmental agencies by minimizing the environmental impact of
pesticide use.

## Technologies Used

-   **Frontend:** Tailwind CSS, React.js
-   **Backend:** Node.js, Express.js, MongoDB
-   **Hardware:** Arduino
-   **AI:** TensorFlow, Flask

## Commands

-   **Frontend:** Navigate to the frontend directory and run
    `npm install`, followed by `npm run dev`.
-   **Backend:** Navigate to the backend directory and run
    `npm install`, followed by `npm run dev`.
-   **Python API:** Navigate to the python-api directory, install
    requirements with `pip install -r requirements.txt`, and run the
    Flask app with `flask run --host 0.0.0.0 --port 5001`.

## Feasibility and Viability

This system offers a cost-effective solution utilizing readily available
IoT hardware. The CNN model, built with TensorFlow, ensures accurate
plant disease detection. Its modular design allows for easy integration
into existing agricultural setups, making it suitable for both small
farms and large agricultural fields.

## How Does This Overcome Challenges?

The system addresses the challenges of pesticide overuse and
environmental harm through precise, need-based application. Its
user-friendly interface, complete with local language support, ensures
ease of use for farmers. Continuous retraining of the AI model with
real-world data enhances its accuracy and reliability.

## Conclusion

This project addresses the critical issue of pesticide overuse by
providing a smart, efficient solution that benefits farmers, the
environment, and consumers. By optimizing pesticide application,
reducing waste, and promoting sustainable practices, this system
contributes to a healthier and more productive agricultural future.

import { useState } from 'react';
import { motion } from 'framer-motion';
import Star from '../public/images/Star.png';
import ThankYou from '../public/images/Online payment_Two Color(1) 2.png';
import "./app.css";

const App = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSelected, setSelected] = useState(false);

  const handleSelectedRating = (rating) => {
    setSelectedRating(rating);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (selectedRating) {
      setSelected(true);
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  return (
    <>
      {isSelected ? (
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 1 }}
          className="thank-you"
        >
          <img src={ThankYou} alt="Thank You" />
          <span className="rating">
            You selected {selectedRating} out of 5
          </span>
          <h2>Thank You</h2>
          <p>
            Thank you! We appreciate you taking the time to give a rating. If
            you ever need support, don't hesitate to get in touch!
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          onSubmit={submitForm}
          className="rating-container"
        >
          <div className="star">
            <img src={Star} alt="Star" />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="rating-number">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleSelectedRating(rating)}
                className={`rating-btn ${selectedRating === rating ? 'selected' : ''}`}
                type="button"
              >
                {rating}
              </button>
            ))}
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </motion.form>
      )}
    </>
  );
};

export default App;

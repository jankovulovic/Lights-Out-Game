import React, { useState } from "react";

function LightsOutGuide() {
  const [showModal, setShowModal] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleToggleHint = () => setShowHint(!showHint);

  return (
    <>
      <button className="button" onClick={handleOpenModal}>
        Open guide
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Lights Out game guide</h2>
            <p>
              The objective of the game is to turn off all the lights on the
              game board. Clicking on a square will toggle its state and the
              state of the adjacent squares. The game is won when all the
              squares are turned off.
            </p>
            <button onClick={handleToggleHint}>
              {showHint ? "Hide hint" : "Show hint"}
            </button>
            {showHint && (
              <>
                <h2>Strategy: Row Chasing</h2>
                <p>
                  One approach to solving the game is called Row Chasing. The
                  idea is to start at the top row and try to turn off all the
                  lights in the last row by making a series of clicks. Here are
                  some patterns to look for and the corresponding clicks to
                  make:
                </p>
                <ul>
                  <li>
                    If the first, second, and third lights are on, click the
                    second cell on the first row.
                  </li>
                  <li>
                    If the first, second, fourth, and fifth lights are on, click
                    the third cell on the first row.
                  </li>
                  <li>
                    If the first, third, and fourth lights are on, click the
                    fifth cell on the first row.
                  </li>
                  <li>
                    If the first and fifth lights are on, click the first and
                    second cells on the first row.
                  </li>
                  <li>
                    If the second, third, and fifth lights are on, click the
                    first cell on the first row.
                  </li>
                  <li>
                    If the second and fourth lights are on, click the first and
                    fourth cells on the first row.
                  </li>
                  <li>
                    If the third, fourth, and fifth lights are on, click the
                    fourth cell on the first row.
                  </li>
                </ul>
                <p>
                  {" "}
                  By following these patterns, you can eliminate all the lights
                  in the last row and work your way up the board until all the
                  lights are turned off. Good luck!
                </p>
              </>
            )}
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default LightsOutGuide;

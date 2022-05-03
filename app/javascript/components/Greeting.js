import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchgreeting } from './../redux/greetings/greetings';
import PropTypes from "prop-types";

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchgreeting());
  }, []);

  const message = useSelector((state) => state.greetingsReducer);
    return (
      <React.Fragment>
        Greeting: {message.text}
      </React.Fragment>
    );
}

Greeting.propTypes = {
  greeting: PropTypes.string
};

export default Greeting

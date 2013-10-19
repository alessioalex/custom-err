"use strict";

/**
 * Creates a error object extended with custom properties
 *
 * @param {String} message - the error message
 * @param {Object} properties - custom properties to assign to the error
 * @returns {Object} err
 */
function Err(message, properties) {
  var err;

  if (!message) {
    throw new Error('message argument missing');
  }

  err = new Error(message);

  Object.keys(properties).forEach(function(name) {
    err[name] = properties[name];
  });

  return err;
}

module.exports = Err;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  switch (true) {
    case days >= 7:
      return 40 * days - 50;
    case days >= 3:
      return 40 * days - 20;
    default:
      return 40 * days;
  }
}

module.exports = calculateRentalCost;

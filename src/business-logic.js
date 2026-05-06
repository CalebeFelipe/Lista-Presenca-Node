function calculateMinutes(checkIn, checkOut) {
    const [checkInHours, checkInMinutes] = checkIn.split(':').map(Number);
    const [checkOutHours, checkOutMinutes] = checkOut.split(':').map(Number);

    const totalCheckInMinutes = checkInHours * 60 + checkInMinutes;
    const totalCheckOutMinutes = checkOutHours * 60 + checkOutMinutes;

    return totalCheckOutMinutes - totalCheckInMinutes;
}

module.exports = { calculateMinutes };
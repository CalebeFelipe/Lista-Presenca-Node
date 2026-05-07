function calculateMinutes(checkIn, checkOut) {
    const [checkInHours, checkInMinutes] = checkIn.split(':').map(Number);
    const [checkOutHours, checkOutMinutes] = checkOut.split(':').map(Number);

    const totalCheckInMinutes = checkInHours * 60 + checkInMinutes;
    const totalCheckOutMinutes = checkOutHours * 60 + checkOutMinutes;

    return totalCheckOutMinutes - totalCheckInMinutes;
}

function validateCheckInOut(checkIn, checkOut) {
    const [checkInHours, checkInMinutes] = checkIn.split(':').map(Number);
    const [checkOutHours, checkOutMinutes] = checkOut.split(':').map(Number);

    const totalCheckInMinutes = checkInHours * 60 + checkInMinutes;
    const totalCheckOutMinutes = checkOutHours * 60 + checkOutMinutes;

    if (totalCheckOutMinutes <= totalCheckInMinutes) {
        throw new Error('O horário de check-out deve ser posterior ao horário de check-in.');
    }
}

module.exports = { calculateMinutes, validateCheckInOut };
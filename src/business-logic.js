function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function calculateMinutes(checkIn, checkOut) {
    const totalCheckInMinutes = timeToMinutes(checkIn);
    const totalCheckOutMinutes = timeToMinutes(checkOut);

    return totalCheckOutMinutes - totalCheckInMinutes;
}

function validateCheckInOut(checkIn, checkOut) {
    const totalCheckInMinutes = timeToMinutes(checkIn);
    const totalCheckOutMinutes = timeToMinutes(checkOut);

    if (totalCheckOutMinutes <= totalCheckInMinutes) {
        throw new Error('O horário de check-out deve ser posterior ao horário de check-in.');
    }
}

module.exports = { calculateMinutes, validateCheckInOut };
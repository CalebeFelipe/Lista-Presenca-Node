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

function validateActiveCheckIn(activeCheckIn) {
    if (!activeCheckIn) {
        throw new Error('Nenhum check-in ativo encontrado.');
    }
}

module.exports = { calculateMinutes, validateCheckInOut, validateActiveCheckIn };
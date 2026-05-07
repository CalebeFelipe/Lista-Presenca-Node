const { calculateMinutes, validateCheckInOut } = require('../src/business-logic');

describe('calculateMinutes', () => {

    it('deve calcular a duração em minutos para um turno com horas exatas', () => {
        // Arrange (Preparar)
        const checkIn = '08:00';
        const checkOut = '12:00';
        const expectedMinutes = 240; 

        // Act (Agir)
        const result = calculateMinutes(checkIn, checkOut);

        // Assert (Verificar)
        expect(result).toBe(expectedMinutes);
    });

    it('deve calcular a duração corretamente quando os horários possuem minutos quebrados', () => {
        
        const checkIn = '09:30';
        const checkOut = '17:45';
        const expectedMinutes = 495;

        const result = calculateMinutes(checkIn, checkOut);

        
        expect(result).toBe(expectedMinutes);
    });

});

describe('validateCheckInOut', () => {
    it('deve informar erro se o horário de check-out for anterior ao horário de check-in', () => {
        const checkIn = '14:00';
        const checkOut = '13:00';

        expect(() => validateCheckInOut(checkIn, checkOut)).toThrow('O horário de check-out deve ser posterior ao horário de check-in.');
    });
});
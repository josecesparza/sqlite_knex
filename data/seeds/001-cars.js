
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          vin: '3FSD3AS65ADSA6SA5S2',
          make: '1949 Oldsmobile',
          model: '5',
          mileage: 5762,
          transmissionType: 'manual',
          titleStatus: 'clean'
        }, 
        {
          id: 2,
          vin: '8D8DS5F54V51SD656SD6',
          make: '1979 Ferrari',
          model: 'f40',
          mileage: 5296,
          transmissionType: 'automatic',
          titleStatus: 'clean'
        },
        {
          id: 3,
          vin: '5SD8S8V2ES9D6V66SDFD6',
          make: '1971 Ford',
          model: 'Torino',
          mileage: 9719,
          transmissionType: 'automatic',
          titleStatus: 'clean'
        }
      ]);
    });
};

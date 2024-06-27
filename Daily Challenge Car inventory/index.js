// Part 1: 

const inventory = [
    
  ];
  
  function getCarHonda(carInventory) {
    const foundHonda = carInventory.find(car => car.car_make === 'Honda');
    if (foundHonda) {
      return `This is a ${foundHonda.car_make} ${foundHonda.car_model} from ${foundHonda.car_year}.`;
    } else {
      return 'No Honda found in the inventory.';
    }
  }
  
  const hondaInfo = getCarHonda(inventory);
  console.log(hondaInfo); 

  
//   Part 2:

function sortCarInventoryByYear(carInventory) {
    return carInventory.slice().sort((carA, carB) => carA.car_year - carB.car_year);
  }
  
  const sortedInventory = sortCarInventoryByYear(inventory);
  console.log(sortedInventory); 
  
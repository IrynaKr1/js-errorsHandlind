// 1

function pow(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError('Base or exponent should be a nubers');
  }

  if (!Number.isInteger(exponent)) {
    throw new Error('Exponent sould be while number');
  }

  if (exponent === 0) {
    return 1;
  }

  if (exponent < 0) {
    return 1 / pow(base, -exponent);
  }

  return base * pow(base, exponent - 1);
}

try {
    console.log(pow("2", 3));  
} catch (error) {
    console.error("Error:", error.message);
}

try {
    console.log(pow(2, 3.5));  
} catch (error) {
    console.log(error);
}

console.log(pow(2, 3)); 
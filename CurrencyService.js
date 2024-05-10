// CurrencyService.js

// Simulación de una función que obtiene la tasa de cambio de una API
export async function getExchangeRate(fromCurrency, toCurrency) {
    // Aquí puedes usar una API real para obtener tasas de cambio
    // Por ahora, vamos a simular algunas tasas de cambio
    const rates = {
      USD: {
        EUR: 0.82,
        GBP: 0.72,
        JPY: 109.25,
      },
      EUR: {
        USD: 1.22,
        GBP: 0.88,
        JPY: 132.71,
      },
      GBP: {
        USD: 1.38,
        EUR: 1.14,
        JPY: 151.64,
      },
      JPY: {
        USD: 0.0091,
        EUR: 0.0075,
        GBP: 0.0066,
      },
    };
  
    return rates[fromCurrency][toCurrency];
  }
  
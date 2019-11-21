const express = require("express");

// middlewares
const bodyParser = require("body-parser");
const cors = require("cors");
const bodyParserMiddleWare = bodyParser.json();
const corsMiddleWare = cors();

// Routers
const cardRouter = require('./card/router')

// Models & DB
const Card = require('./card/model')
const db = require("./db")

// Init
const app = express();
const port = process.env.PORT || 4000;

app
  .use(corsMiddleWare)
  .use(bodyParserMiddleWare)
  .use(cardRouter)
  .listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });

db.sync({ force: true })
  .then(() => {
    console.log('Database schema updated')

    const cards = [
      { country: "Afghanistan", currency: "Afghan afghani", iso_code: "AFN" },
      { country: "Albania", currency: "Albanian lek", iso_code: "ALL" },
      { country: "Algeria", currency: "Algerian dinar", iso_code: "DZD" },
      { country: "Andorra", currency: "Euro", iso_code: "EUR" },
      { country: "Angola", currency: "Angolan kwanza", iso_code: "AOA" },
      { country: "Argentina", currency: "Argentine peso", iso_code: "ARS" },
      { country: "Armenia", currency: "Armenian dram", iso_code: "AMD" },
      { country: "Australia", currency: "Australian dollar", iso_code: "AUD" },
      { country: "Austria", currency: "Euro", iso_code: "EUR" },
      { country: "Azerbaijan", currency: "Azerbaijani manat", iso_code: "AZN" },

      { country: "Bahamas", currency: "Bahamian dollar", iso_code: "BSD" },
      { country: "Bahrain", currency: "	Bahraini dinar", iso_code: "BHD" },
      { country: "Bangladesh", currency: "Bangladeshi taka", iso_code: "BDT" },
      { country: "Barbados", currency: "Barbadian dollar", iso_code: "BBD" },
      { country: "Belarus", currency: "Belarusian ruble", iso_code: "BYN" },
      { country: "Belgium", currency: "Euro", iso_code: "EUR" },
      { country: "Belize", currency: "Belize dollar", iso_code: "BZD" },
      { country: "Benin	", currency: "West African CFA franc", iso_code: "XOF" },
      { country: "Bhutan", currency: "Bhutanese ngultrum", iso_code: "BTN" },
      { country: "Bolivia", currency: "Bolivian boliviano", iso_code: "BOB" },
      { country: "Botswana", currency: "Botswana pula", iso_code: "BWP" },
      { country: "Brazil", currency: "Brazilian real", iso_code: "BRL" },
      { country: "Brunei", currency: "Brunei dollar", iso_code: "BND" },
      { country: "Bulgaria", currency: "Bulgarian lev", iso_code: "BGN" },
      { country: "Burkina Faso", currency: "West African CFA franc", iso_code: "XOF" },
      { country: "Burundi", currency: "Burundian franc", iso_code: "BIF" },

      { country: "Cambodia", currency: "Cambodian riel", iso_code: "KHR" },
      { country: "Cameroon", currency: "Central African CFA franc", iso_code: "XAF" },
      { country: "Canada", currency: "	Canadian dollar", iso_code: "CAD" },
      { country: "Cape Verde", currency: "Cape Verdean escudo", iso_code: "CVE" },
      { country: "Central African Republic", currency: "Central African CFA franc", iso_code: "XAF" },
      { country: "Chad", currency: "Central African CFA franc", iso_code: "XAF" },
      { country: "Chile", currency: "Chilean peso", iso_code: "CLP" },
      { country: "China", currency: "Chinese yuan", iso_code: "CNY" },
      { country: "Colombia	", currency: "Colombian peso", iso_code: "COP" },
      { country: "Comoros	", currency: "Comorian franc", iso_code: "KMF" },
      { country: "Costa Rica", currency: "Costa Rican colón", iso_code: "CRC" },
      { country: "Croatia", currency: "Croatian kuna", iso_code: "HRK" },
      { country: "Cuba", currency: "Cuban peso", iso_code: "CUP" },
      { country: "Cyprus", currency: "Euro", iso_code: "EUR" },
      { country: "Czech Republic", currency: "Czech koruna", iso_code: "CZK" },

      { country: "Democratic Republic of Congo", currency: "Congolese franc", iso_code: "CDF" },
      { country: "Denmark", currency: "Danish krone", iso_code: "DKK" },
      { country: "Djibouti", currency: "Djiboutian franc", iso_code: "DJF" },
      { country: "Dominica", currency: "East Caribbean dollar", iso_code: "XCD" },
      { country: "Dominican Republic", currency: "Dominican peso", iso_code: "DOP" },

      { country: "East Timor", currency: "United States dollar", iso_code: "USD" },
      { country: "Ecuador", currency: "United States dollar", iso_code: "USD" },
      { country: "Egypt", currency: "Egyptian pound", iso_code: "EGP" },
      { country: "El Salvador", currency: "United States dollar", iso_code: "USD" },
      { country: "Equatorial Guinea", currency: "Central African CFA franc", iso_code: "XAF" },
      { country: "Eritrea", currency: "Eritrean nakfa", iso_code: "ERN" },
      { country: "Estonia	", currency: "Euro", iso_code: "EUR" },

      { country: "Ethiopia", currency: "Ethiopian birr", iso_code: "ETB" },
      { country: "Fiji", currency: "Fijian dollar", iso_code: "FJD" },
      { country: "Finland", currency: "Euro", iso_code: "EUR" },
      { country: "France", currency: "Euro", iso_code: "EUR" },

      { country: "Gabon", currency: "Central African CFA franc", iso_code: "XAF" },
      { country: "Gambia", currency: "Gambian dalasi", iso_code: "GMD" },
      { country: "Georgia", currency: "Georgian lari", iso_code: "GEL" },
      { country: "Germany", currency: "Euro", iso_code: "EUR" },
      { country: "Ghana", currency: "Ghanaian cedi", iso_code: "GHS" },
      { country: "Greece", currency: "Euro", iso_code: "EUR" },
      { country: "Grenada", currency: "East Caribbean dollar", iso_code: "XCD" },
      { country: "Guatemala	", currency: "Guatemalan quetzal", iso_code: "GTQ" },
      { country: "Guinea", currency: "Guinean franc", iso_code: "GNF" },
      { country: "Guyana", currency: "Guyanese dollar", iso_code: "GYD" },

      { country: "Haiti", currency: "Haitian gourde", iso_code: "HTG" },
      { country: "Honduras", currency: "Honduran lempira", iso_code: "HNL" },
      { country: "Hungary", currency: "Hungarian forint", iso_code: "HUF" },

      { country: "Iceland", currency: "Icelandic króna", iso_code: "ISK" },
      { country: "India	", currency: "Indian rupee", iso_code: "INR" },

      { country: "Indonesia", currency: "Indonesian rupiah", iso_code: "IDR" },
      { country: "Iran", currency: "Iranian rial", iso_code: "IRR" },
      { country: "Ireland", currency: "Euro", iso_code: "EUR" },
      { country: "Italy", currency: "Euro", iso_code: "EUR" },
      { country: "Israel", currency: "Israeli new shekel", iso_code: "ILS" },

      { country: "Japan", currency: "Japanese yen", iso_code: "JPY" },
      { country: "Jordan", currency: "Jordanian dinar", iso_code: "JOD" },

      { country: "Kazakhstan	", currency: "Kazakhstani tenge", iso_code: "KZT" },
      { country: "Kenya", currency: "Kenyan shilling", iso_code: "KES" },
      { country: "Korea, North", currency: "North Korean won", iso_code: "KPW" },
      { country: "Korea, South", currency: "South Korean won", iso_code: "KRW" },

      { country: "Laos", currency: "Lao kip", iso_code: "LAK" },
      { country: "Lebanon", currency: "Lebanese pound", iso_code: "LBP" },
      { country: "Libya", currency: "Libyan dinar", iso_code: "LYD" },
      { country: "Luxembourg", currency: "Euro", iso_code: "EUR" },

      { country: "Malawi	", currency: "Malawian kwacha", iso_code: "MWK" },
      { country: "Malaysia", currency: "Malaysian ringgit", iso_code: "MYR" },
      { country: "Maldives", currency: "Maldivian rufiyaa", iso_code: "MVR" },
      { country: "Mexico", currency: "Mexican peso", iso_code: "MXN" },
      { country: "Morocco", currency: "Moroccan dirham", iso_code: "MAD" },
      { country: "Myanmar", currency: "Burmese kyat", iso_code: "MMK" },

      { country: "Nepal", currency: "Nepalese rupee", iso_code: "NPR" },
      { country: "Netherlands", currency: "Euro", iso_code: "EUR" },
      { country: "New Zealand", currency: "New Zealand dollar", iso_code: "NZD" },
      { country: "Norway", currency: "Norwegian krone", iso_code: "NOK" },

      { country: "Pakistan", currency: "Pakistani rupee", iso_code: "PKR" },
      { country: "Panama", currency: "Panamanian balboa", iso_code: "PAB" },
      { country: "Papua New Guinea", currency: "Papua New Guinean kina", iso_code: "PGK" },
      { country: "Paraguay", currency: "Paraguayan guaraní", iso_code: "PYG" },
      { country: "Peru", currency: "Peruvian sol", iso_code: "PEN" },
      { country: "Philippines", currency: "Philippine peso", iso_code: "PHP" },
      { country: "Poland", currency: "Polish zloty", iso_code: "PLN" },
      { country: "Portugal", currency: "Euro", iso_code: "EUR" },
      { country: "Qatar", currency: "Qatari riyal", iso_code: "QAR" },

      { country: "Romania", currency: "Romanian leu", iso_code: "RON" },
      { country: "Russia", currency: "Russian ruble", iso_code: "RUB" },
      { country: "Samoa", currency: "Samoan tala", iso_code: "WST" },
      { country: "Serbia", currency: "Serbian dinar", iso_code: "RSD" },
      { country: "Slovakia", currency: "Euro", iso_code: "EUR" },
      { country: "Singapore", currency: "Singapore dollar", iso_code: "SGD" },
      { country: "Somalia", currency: "Somali shilling", iso_code: "SOS" },
    ];

    const cardPromises = cards.map(card => Card.create(card));
    return Promise.all(cardPromises);

  })
  .catch(console.error)

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const db = require("./db")

const Card = require('./card/model')

app.listen(port, () => {
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
      { country: "Antigua and Barbuda", currency: "East Caribbean dollar", iso_code: "XCD" },
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
      { country: "Bosnia and Herzegovina", currency: "Bosnia and Herzegovina convertible mark", iso_code: "BAM" },
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
    ];

    const cardPromises = cards.map(card => Card.create(card));
    return Promise.all(cardPromises);

  })
  .catch(console.error)

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      companyName: '',
      email: '',
      zipCode: '',
      cityAndState: '',
      street: '',
      number: '',
      invoiceNumber: '',
      apipeopleCompanyName: '',
      apipeopleAddress: '',
      hourlyRate : 0,
      chargableHours : 0,
    }
  },
});

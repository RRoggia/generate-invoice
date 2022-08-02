const { 
	companyName,		
	email,			
	zipCode,
	cityAndState,
	street,
	number,
	invoiceNumber,
	apipeopleCompanyName,
	apipeopleAddress,
	hourlyRate,
	chargableHours
} = Cypress.env()

it('generate invoice', () => {
	cy.visit('https://invoice.remessaonline.com.br/')
	cy.get('.tab-link-tab-2').click()

	cy.get('input[placeholder="Razão social completa"]')
		.last()
		.type(companyName)

	cy.get('input[placeholder="Contact email"]')
		.last()
		.type(email)

	cy.get('input[placeholder="00000-000"]')
		.last()
		.type(zipCode)

	cy.get('input[placeholder="Belo Horizonte, MG"]')
		.last()
		.type(cityAndState)

	cy.get('input[placeholder="Rua, avenida"]')
		.eq(2)
		.type(street)

	cy.get('input[placeholder="Nº, bloco, andar"]')
		.last()
		.type(number)

	cy.get('input[placeholder="Empresa pagadora"]')
		.last()
		.type(apipeopleCompanyName)

	cy.get('input[placeholder="Rua, avenida"]')
		.last()
		.type(apipeopleAddress)

	cy.get('input[placeholder="1234"]')
		.last()
		.type(invoiceNumber)

	cy.get('input:visible[placeholder="01/01/2020"]')
		.each(element => {
			const addZeroBeforeDate = (date) => ('00' + date).substring(date.toString().length)
			const now = new Date()
			const day = addZeroBeforeDate(now.getDay())
			const month = addZeroBeforeDate((now.getMonth() + 1))
			cy.wrap(element).type(`${day}/${month}/${now.getFullYear()}`)
		})

	cy.get('textarea[placeholder="Forneça uma descrição detalhada em inglês dos serviços prestados"]')
		.last()
		.type('Writing Java software solution for Portx integration project.')

	cy.get('select')
		.last()
		.select('American dollar')
	
	cy.get('input[placeholder="1.500,00"]')
		.last()
		.type(new Intl.NumberFormat('pt-br', { style:"currency", currency:"USD"} ).format(hourlyRate*chargableHours))

	cy.get('input[value="Gerar invoice"]')
		.last()
		.click()

})
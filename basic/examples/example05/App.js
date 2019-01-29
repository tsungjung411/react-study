const company_list = ['Google', 'Facebook', 'Microsoft'];

class App extends React.Component {
	render() {
		return (
			React.createElement(
				'ul',
				null,
				// lambda expression: company => <li>company</li>
				company_list.map(
					(company) => 
					{
						return React.createElement('li', null, company);
					}
				)
			)
		);
	}
}

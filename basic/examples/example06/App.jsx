const company_list = ['Google', 'Facebook', 'Microsoft'];

class App extends React.Component {
	render() {
		return (
			<ul>{
				// lambda expression: company => <li>company</li>
				company_list.map(
					(company) => 
					{
						return <li>{company}</li>;
					}
				)
			}</ul>
		);
	}
}

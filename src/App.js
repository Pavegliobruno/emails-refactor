import React, {useState} from 'react';
import './App.css';
import {Input, Popover, Button, Typography} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const {TextArea} = Input;
const {Paragraph} = Typography;

function App() {
	const [state, setState] = useState('');

	const onChange = (e) => {
		setState(e.target.value.replace(/(\r\n|\n|\r)/gm, ', '));
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<TextArea
					rows={10}
					placeholder='Pegá los emails aquí uno debajo del otro.'
					onChange={onChange}
				/>

				<Popover
					content={<Paragraph copyable>{state}</Paragraph>}
					title='Emails acomodados:'
					trigger='click'
				>
					<Button>Acomodar!</Button>
				</Popover>
			</header>
		</div>
	);
}

export default App;

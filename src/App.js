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
					placement='bottom'
					content={
						<Paragraph copyable>
							{state.includes('@') ? state : 'No hay ningun e-mail'}
						</Paragraph>
					}
					title='Emails acomodados:'
					trigger='click'
				>
					{state.length > 0 ? <Button>¡Acomodar!</Button> : null}
				</Popover>
			</header>
			<h6 className='footer'>Hecho con mucho 💖 por Bruno para Alejo.</h6>
		</div>
	);
}

export default App;

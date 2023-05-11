import { Table, Row, Col } from 'react-bootstrap';
import times from './times.json';
import './OpeningTimes.css';

const OpeningTimes = () => {
	
	const displayTimes = () => {
		return(
			<Table striped bordered hover responsive className='opening-times' variant='light' style={{border: '1px solid dark-grey'}}>
				<thead>
					<tr>
					<th style={{width:"200px"}}></th>
					<th style={{width:"200px"}}>Opens</th>
					<th style={{width:"200px"}}>Closes</th>
					</tr>
				</thead>
				<tbody>
					{
						times.map(d => 
							<tr key={d.day} >
								<td>{d.day}</td>
								<td>{d.opens}</td>
								<td>{d.closes}</td>
							</tr>
						)
					}
				</tbody>
			</Table>
		);
	};

	return (
	  <>
		<div className='opening-times-content opening-times'>
		<Row>
			<Col>
				<h1>Opening Times</h1>
				{displayTimes()}
			</Col>
		</Row>
	  </div>
	  </>
	);
  };

  export default OpeningTimes;
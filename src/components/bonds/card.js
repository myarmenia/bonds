import React from "react";
import { connect } from "react-redux";
import {LineChart, XAxis,YAxis, Tooltip, CartesianGrid , Line } from 'recharts'

import { bondSelector, bondByYear, bondByMonth, bondByWeek, preparedBond } from '../../store/selectors/bonds'
import {setPeriod} from '../../store/actions/bonds'
import './card.css';

const BondCard = ({ bond, onSetPeriod }) => {

  const handleClick = (e) => {
    const clicked = e.target.className || 'year'
    onSetPeriod(clicked)
  }
  // console.log(bond)
return <div className="bond-cart">
  <div>
    <button onClick={handleClick} className="week">Week</button>
    <button onClick={handleClick} className="month">Month</button>
    <button onClick={handleClick} className="quarter">Quarter</button>
    <button onClick={handleClick} className="year">Year</button>
    <button onClick={handleClick} className="max">Max</button>
  </div>

<LineChart
  width={800}
  height={400}
  data={bond}
  margin={{ top: 15, right: 20, left: 20, bottom: 10 }}
>
  <XAxis dataKey="name" />
  <YAxis dataKey="income" />
  
  <Tooltip />
  <CartesianGrid stroke="#d0d0d0" strokeDasharray="5 5" />
  <Line type="monotone" dataKey="income" stroke="#ff7300" yAxisId={0} />
</LineChart>
</div>;
};

const mapStateToProps = state => ({
  bond: preparedBond(state)
})

const mapDispatchToProps = dispatch => ({
  onSetPeriod: (period)=> dispatch(setPeriod(period))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BondCard);

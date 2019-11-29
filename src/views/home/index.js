import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../actions/counter';
import "./module.css";
import pic from 'images/a.png';

class Home extends PureComponent {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="home">
                    <div>当前计数为{this.props.count}</div>
                    <button onClick={() => this.props.increment()}>自增
                </button>
                    <button onClick={() => this.props.decrement()}>自减
                </button>
                    <button onClick={() => this.props.reset()}>重置
                </button>

                </div>
                <div>
                    <img src={pic} />
                </div>
            </div>

        )
    }
}
export default connect((state) => state, dispatch => ({
    increment: () => {
        dispatch(increment())
    },
    decrement: () => {
        dispatch(decrement())
    },
    reset: () => {
        dispatch(reset())
    }
}))(Home);
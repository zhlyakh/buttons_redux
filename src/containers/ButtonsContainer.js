import {connect} from 'react-redux';
import {actionSetDefault, actionSetGreen, actionSetBlue, actionSetRed} from '../actions/setColor';
import Buttons from '../components/buttons';

const mapStateToProps = (state) =>({
    colorMode: state.color
})

const mapDispatchToProps = {
    actionSetDefault: actionSetDefault,
    actionSetGreen: actionSetGreen,
    actionSetBlue: actionSetBlue,
    actionSetRed: actionSetRed
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
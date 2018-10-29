import { connect } from 'react-redux';
import Link from '../components/Link';
import { startSetVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
    active: state.filter === ownProps.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => (dispatch(startSetVisibilityFilter(ownProps.visibilityFilter)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link);
